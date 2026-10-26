(function () {
  const $ = (s) => document.querySelector(s);
  const S = window.SITE || {}, ALL = (window.SPEECHES || []).filter((s) => s.published !== false);
  const PAGE = 12; let shown = PAGE, current = [];
  function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }

  // ---------- header, logo, text ----------
  document.title = S.name + " | Speeches for every occasion";
  const brand = $("#brand");
  const mark = el("span", "brand-mark", (S.name || "A").charAt(0));
  if (S.logo) {
    const img = new Image(); img.className = "brand-logo"; img.alt = "logo";
    img.onload = () => { mark.replaceWith(img); };       // logo found -> show it
    img.src = S.logo;                                     // not found -> keeps letter circle
  }
  brand.append(mark, document.createTextNode(S.name));
  $("#tagline").textContent = S.tagline;
  $("#lead").textContent = "Search " + ALL.length + "+ ready speeches by topic, occasion or language — or ask for one written just for you.";
  $("#fname").textContent = S.name; $("#yr").textContent = new Date().getFullYear();

  // ---------- contact ----------
  const cl = $("#contactList");
  function li(label, node, icon) { const l = el("li"); const ic = el("span", "c-ic", icon); const box = el("div"); box.append(el("small", "", label), node); l.append(ic, box); cl.append(l); }
  function link(href, text, blank) { const a = el("a", "", text); a.href = href; if (blank) { a.target = "_blank"; a.rel = "noopener"; } return a; }
  li("WhatsApp / Phone", link("tel:+" + S.whatsapp, S.phoneDisplay), "☎");
  if (S.email) li("Email", link("mailto:" + S.email, S.email), "✉");
  if (S.location) li("Location", el("span", "", S.location), "⌖");
  [["Instagram", S.instagram], ["LinkedIn", S.linkedin], ["YouTube", S.youtube]].forEach(([n, u]) => { if (u) $("#socials").append(link(u, n, true)); });
  if (!S.email) $("#sendMail").hidden = true;

  // ---------- achievements ----------
  (window.ACHIEVEMENTS || []).forEach((a) => {
    const c = el("article", "card ach");
    if (a.image) { const im = new Image(); im.src = a.image; im.alt = a.title; im.className = "ach-img"; im.loading = "lazy"; im.onerror = () => im.remove(); c.append(im); }
    if (a.year) c.append(el("span", "year", a.year));
    c.append(el("h3", "", a.title), el("p", "", a.description || ""));
    if (a.certificate) { const l = el("a", "cert-link", "View certificate"); l.href = a.certificate; l.target = "_blank"; l.rel = "noopener"; c.append(l); }
    $("#achList").append(c);
  });

  // ---------- filters ----------
  const uniq = (k) => [...new Set(ALL.map((s) => s[k]).filter(Boolean))].sort();
  uniq("language").forEach((l) => { const o = el("option", "", l); $("#lang").append(o); });
  let cat = "";
  function chip(label, val, active) { const b = el("button", "chip" + (active ? " active" : ""), label); b.dataset.cat = val; $("#chips").append(b); }
  chip("All", "", true); uniq("category").forEach((c) => chip(c, c));

  const excerpt = (t, n = 170) => { const f = t.split(/\s+/).join(" "); return f.length <= n ? f : f.slice(0, n).replace(/\s+\S*$/, "") + "..."; };

  function render() {
    const words = $("#q").value.toLowerCase().split(/\s+/).filter(Boolean), lang = $("#lang").value;
    const res = ALL.filter((s) => {
      if (cat && s.category !== cat) return false;
      if (lang && s.language !== lang) return false;
      const hay = [s.title, s.category, s.tags, s.content, s.language].join(" ").toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    current = res; shown = PAGE; draw();
  }
  function draw() {
    const res = current, box = $("#results"); box.innerHTML = "";
    res.slice(0, shown).forEach((s) => {
      const card = el("article", "card speech"), meta = el("div", "meta");
      meta.append(el("span", "tag", s.category), el("span", "tag light", s.language), el("span", "dur", s.duration + " min"));
      const b = el("button", "btn btn-ghost btn-sm", "Read speech"); b.onclick = () => open(s);
      card.append(meta, el("h3", "", s.title), el("p", "", excerpt(s.content)), b); box.append(card);
    });
    $("#empty").hidden = res.length > 0;
    $("#count").textContent = res.length ? res.length + " speech" + (res.length > 1 ? "es" : "") + " found" : "";
    $("#moreBtn").hidden = shown >= res.length;
    $("#moreBtn").textContent = "Show more speeches (" + (res.length - shown) + " more)";
  }
  $("#q").addEventListener("input", render);
  $("#lang").addEventListener("change", render);
  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    b.classList.add("active"); cat = b.dataset.cat; render();
  });

  // ---------- reader ----------
  const dlg = $("#reader");
  function open(s) {
    $("#rTitle").textContent = s.title;
    $("#rMeta").textContent = s.category + " · " + s.language + " · about " + s.duration + " min";
    $("#rBody").textContent = s.content; dlg.showModal();
  }
  $("#rClose").onclick = () => dlg.close(); $("#rCustom").onclick = () => dlg.close();
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  $("#rCopy").onclick = async () => {
    const b = $("#rCopy");
    try { await navigator.clipboard.writeText($("#rBody").textContent); b.textContent = "Copied!"; } catch (e) { b.textContent = "Select and copy manually"; }
    setTimeout(() => (b.textContent = "Copy speech"), 1800);
  };

  // ---------- order form ----------
  const form = $("#orderForm"), msg = $("#formMsg");
  function text() {
    const o = {}; new FormData(form).forEach((v, k) => (o[k] = String(v).trim()));
    if (!o.name) return null;
    return { o, t: ["Hello " + S.name + "! I would like a customized speech.", "",
      "Name: " + o.name, "Phone: " + (o.phone || "-"), "Email: " + (o.email || "-"),
      "Occasion: " + o.occasion, "Language: " + o.language, "Topic: " + (o.topic || "-"),
      "Duration: " + o.duration, "Tone: " + o.tone, "Audience: " + (o.audience || "-"),
      "Needed by: " + (o.deadline || "-"), "", "Details: " + (o.details || "-")].join("\n") };
  }
  function send(via) {
    const r = text();
    if (!r) { msg.textContent = "Please enter your name first."; form.elements.name.focus(); return; }
    const url = via === "wa"
      ? "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(r.t)
      : "mailto:" + S.email + "?subject=" + encodeURIComponent("Customized speech request - " + r.o.name) + "&body=" + encodeURIComponent(r.t);
    msg.textContent = via === "wa" ? "Opening WhatsApp with your details..." : "Opening your email app...";
    if (via === "wa") { if (!window.open(url, "_blank")) location.href = url; } else location.href = url;
  }
  $("#sendWa").onclick = () => send("wa"); $("#sendMail").onclick = () => send("mail");

  $("#moreBtn").onclick = () => { shown += PAGE; draw(); };
  render();
})();
