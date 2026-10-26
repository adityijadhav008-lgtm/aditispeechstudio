(function () {
  const $ = (s) => document.querySelector(s);
  const L = (window.LIB || []).slice().sort((a, b) => a.order - b.order);
  const OCC = window.OCCASIONS || [];
  const T = {
    en: { eyebrow: "Browse by topic", title: "Speech Library", sub: "Open a topic, pick a speech and read it on the right. Change the language and everything changes.",
      occ: "Browse by occasion", all: "All topics", pick: "Select a speech from the list to read it here.", copy: "Copy speech", copied: "Copied!",
      custom: "Want it customized?", back: "Back to topics", n: (n) => n + (n === 1 ? " speech" : " speeches"), none: "No speech found. Try another word or request a custom speech.",
      min: "about", mins: "min", found: (n) => n + " found", more: "More ready speeches are available in the section below.", grid: "More ready speeches", ph: "Search a topic: leadership, women, environment, farewell..." },
    hi: { eyebrow: "विषय के अनुसार खोजें", title: "भाषण पुस्तकालय", sub: "कोई विषय खोलें, भाषण चुनें और दाईं ओर पढ़ें। भाषा बदलते ही सब कुछ बदल जाता है।",
      occ: "अवसर के अनुसार खोजें", all: "सभी विषय", pick: "यहाँ पढ़ने के लिए सूची से कोई भाषण चुनें।", copy: "भाषण कॉपी करें", copied: "कॉपी हो गया!",
      custom: "अपने अनुसार भाषण चाहिए?", back: "विषयों पर वापस", n: (n) => n + " भाषण", none: "कोई भाषण नहीं मिला। दूसरा शब्द आज़माएँ या अपना भाषण लिखवाएँ।",
      min: "लगभग", mins: "मिनट", found: (n) => n + " मिले", more: "और तैयार भाषण नीचे के भाग में उपलब्ध हैं।", grid: "और तैयार भाषण", ph: "विषय खोजें: नेतृत्व, महिला, पर्यावरण, विदाई..." },
    mr: { eyebrow: "विषयानुसार शोधा", title: "भाषण ग्रंथालय", sub: "एखादा विषय उघडा, भाषण निवडा आणि उजवीकडे वाचा. भाषा बदलताच सर्व काही बदलते.",
      occ: "प्रसंगानुसार शोधा", all: "सर्व विषय", pick: "येथे वाचण्यासाठी यादीतून एखादे भाषण निवडा.", copy: "भाषण कॉपी करा", copied: "कॉपी झाले!",
      custom: "तुमच्या गरजेनुसार भाषण हवे?", back: "विषयांकडे परत", n: (n) => n + " भाषणे", none: "भाषण सापडले नाही. दुसरा शब्द वापरा किंवा स्वतःचे भाषण मागवा.",
      min: "सुमारे", mins: "मिनिटे", found: (n) => n + " सापडले", more: "आणखी तयार भाषणे खालील विभागात उपलब्ध आहेत.", grid: "आणखी तयार भाषणे", ph: "विषय शोधा: नेतृत्व, महिला, पर्यावरण, निरोप..." }
  };
  let lang = "en", sel = null /* {t,i} */, occ = null, openSet = new Set([L[0] && L[0].id]);
  const q = $("#q");
  const total = L.reduce((n, t) => n + t.items.length, 0);

  function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  const item = (tid, i) => { const t = L.find((x) => x.id === tid); return t ? { t, it: t.items[i], i } : null; };
  const allowed = () => occ ? new Set(occ.ids) : null;
  const words = () => (q ? q.value.toLowerCase().split(/\s+/).filter(Boolean) : []);
  function matches(t, it, i, ws, allow) {
    if (allow && !allow.has(t.id + "." + i)) return false;
    if (!ws.length) return true;
    const hay = [it.title.en, it.title.hi, it.title.mr, it.speech[lang], t.title.en, t.title[lang]].join(" ").toLowerCase();
    return ws.every((w) => hay.includes(w));
  }

  function renderStatic() {
    const s = T[lang];
    $("#libEyebrow").textContent = s.eyebrow; $("#libTitle").textContent = s.title; $("#libSub").textContent = s.sub;
    $("#occLabel").textContent = s.occ; $("#rdEmpty").textContent = s.pick;
    $("#rdCopy").textContent = s.copy; $("#rdCustom").textContent = s.custom; $("#rdBack").textContent = "↑ " + s.back;
    $("#libMore").textContent = s.more; const g = $("#gridTitle"); if (g) g.textContent = s.grid;
    if (q) q.placeholder = s.ph;
    document.documentElement.lang = lang;
    document.querySelectorAll("#langTabs button").forEach((b) => b.classList.toggle("on", b.dataset.l === lang));
    // occasion chips
    const box = $("#occChips"); box.innerHTML = "";
    const mk = (label, o) => { const b = el("button", "chip" + (occ === o ? " active" : ""), label); b.onclick = () => chooseOcc(o); box.append(b); };
    mk(s.all, null); OCC.forEach((o) => mk(o.name[lang], o));
    const line = $("#occLine");
    if (occ) { line.hidden = false; line.textContent = occ.name[lang] + " — " + occ.line[lang]; } else line.hidden = true;
    $("#libMore").hidden = !(occ && occ.more);
  }

  function renderList() {
    const s = T[lang], ws = words(), allow = allowed(), box = $("#libList"); box.innerHTML = "";
    let shown = 0;
    L.forEach((t) => {
      const rows = t.items.map((it, i) => ({ it, i })).filter((r) => matches(t, r.it, r.i, ws, allow));
      if (!rows.length) return;
      shown += rows.length;
      const d = el("details", "topic"); d.dataset.id = t.id;
      const filtering = ws.length || allow;
      d.open = filtering ? true : openSet.has(t.id) || (sel && sel.t === t.id);
      const sum = el("summary"), num = el("span", "t-num", String(t.order)), mid = el("span", "t-mid");
      mid.append(el("span", "t-title", t.title[lang]));
      if (t.note && t.note[lang]) mid.append(el("span", "t-note", t.note[lang]));
      sum.append(num, mid, el("span", "t-count", s.n(rows.length)));
      d.append(sum);
      d.addEventListener("toggle", () => { if (!filtering) { d.open ? openSet.add(t.id) : openSet.delete(t.id); } });
      const ul = el("ul", "t-items");
      rows.forEach(({ it, i }) => {
        const li = el("li"), b = el("button", "t-item" + (sel && sel.t === t.id && sel.i === i ? " on" : ""), it.title[lang]);
        b.onclick = () => choose(t.id, i, true); li.append(b); ul.append(li);
      });
      d.append(ul); box.append(d);
    });
    if (!shown) box.append(el("p", "empty", s.none));
  }

  function renderReader(scroll) {
    const s = T[lang], has = !!sel, r = sel && item(sel.t, sel.i);
    $("#rdEmpty").hidden = has && !!r; $("#rdBody").hidden = !(has && r);
    if (!r) return;
    const text = r.it.speech[lang];
    $("#rdTopic").textContent = r.t.title[lang];
    $("#rdTitle").textContent = r.it.title[lang];
    const m = Math.max(1, Math.round(text.trim().split(/\s+/).length / 130));
    $("#rdMeta").textContent = { en: "English", hi: "हिन्दी", mr: "मराठी" }[lang] + " · " + s.min + " " + m + " " + s.mins;
    $("#rdText").textContent = text;
    if (scroll && window.matchMedia("(max-width: 900px)").matches) $("#libReader").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function choose(tid, i, scroll) { sel = { t: tid, i }; openSet.add(tid); renderList(); renderReader(scroll); }
  function chooseOcc(o) {
    occ = o; if (o && o.lang) lang = o.lang;
    const first = o && o.ids[0] ? o.ids[0].split(".") : null;
    if (first) sel = { t: first[0], i: +first[1] };
    renderStatic(); renderList(); renderReader(false);
  }
  function setLang(l) { lang = l; renderStatic(); renderList(); renderReader(false); }

  $("#langTabs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setLang(b.dataset.l); });
  if (q) q.addEventListener("input", renderList);
  $("#rdCopy").onclick = async () => {
    const b = $("#rdCopy");
    try { await navigator.clipboard.writeText($("#rdTitle").textContent + "\n\n" + $("#rdText").textContent); b.textContent = T[lang].copied; } catch (e) {}
    setTimeout(() => (b.textContent = T[lang].copy), 1800);
  };

  const lead = $("#lead"); if (lead) lead.textContent = "Search " + (total + (window.SPEECHES || []).filter((s) => s.published !== false).length) + "+ ready speeches by topic, occasion or language — or ask for one written just for you.";
  renderStatic(); renderList(); renderReader(false);
})();
