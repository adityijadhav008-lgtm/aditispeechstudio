/* ===== MORE SPEECHES - easiest way to add a speech: copy one add(...) block, paste below, change the text.
   add( "Title", "Category", "Language", minutes, "search tags, separated by commas", `speech text` );
   Keep the quotes, commas and backticks exactly. To remove a speech, delete its whole add(...); block. */
(function () {
  window.SPEECHES = window.SPEECHES || [];
  const add = (title, category, language, duration, tags, content) =>
    window.SPEECHES.push({ title, category, language, duration, tags, content, published: true });

add("Speech on Republic Day", "Republic Day", "English", 3, "republic day, 26 january, constitution, india, patriotism",
`Respected principal, teachers and my dear friends,

On the 26th of January 1950, India became a republic and the Constitution of India came into force. That day gave every citizen equality, liberty and justice.

The Constitution is not just a book. It is a promise that no person is small and no voice is unimportant.

Rights come with duties. Let us follow rules, respect each other and work honestly for our country.

Let us pledge today to keep the spirit of the Constitution alive in everything we do.

Jai Hind! Jai Bharat!`);

add("Speech on Gandhi Jayanti", "Gandhi Jayanti", "English", 3, "gandhi jayanti, 2 october, mahatma gandhi, non-violence, truth",
`Respected teachers and dear friends,

Today we remember Mahatma Gandhi, who taught the world that the strongest weapons are truth and non-violence.

With simple clothes and a stick in his hand, he moved an entire nation. He believed that we must be the change we wish to see in the world.

Let us follow even one of his lessons today: be honest, be kind, keep our surroundings clean and respect every person.

That is the best tribute we can give him.

Thank you.`);

add("Speech on Children's Day", "Children's Day", "English", 2, "children's day, 14 november, nehru, kids, childhood",
`Good morning everyone.

Children's Day is celebrated on the birthday of Pandit Jawaharlal Nehru, who loved children and called them the future of the nation.

Childhood is a beautiful time of dreams, questions and laughter. Every child deserves love, education and the freedom to grow.

To my friends: study hard, play fair and be kind. To our elders: thank you for believing in us.

Happy Children's Day to all!`);

add("Speech on Sports Day", "Sports Day", "English", 2, "sports day, sports, games, teamwork, winning, fitness",
`Respected chief guest, principal, teachers and dear players,

Sports teach us what no classroom can: discipline, teamwork, patience and how to rise after a fall.

In sports, winning is wonderful, but taking part with honesty and spirit is even greater. Every player here is already a winner for stepping onto the field.

Play fair, cheer for others and give your best. Let the games begin!

Thank you.`);

add("Speech on International Women's Day", "Women's Day", "English", 3, "women's day, 8 march, women empowerment, equality, girls",
`Good morning respected guests and friends,

Behind every great nation stand strong women, as mothers, teachers, scientists, farmers and leaders.

Women's Day is not only a celebration. It is a reminder that every girl deserves education, safety and the freedom to dream without limits.

When a woman is empowered, a whole family and a whole society rise with her.

Let us respect women, support their ambitions and build a world that is equal for everyone.

Thank you.`);

add("Vote of Thanks", "Vote of Thanks", "English", 1, "vote of thanks, thanks, gratitude, function, closing",
`On behalf of everyone present, I would like to express my heartfelt gratitude.

I thank our respected chief guest for gracing the occasion with their valuable presence, our principal and teachers for their guidance, the performers for their hard work, and the organizing team who worked behind the scenes.

Most of all, thank you to the audience for your warm support and encouragement.

This event is complete because of all of you.

Thank you, and good night.`);

add("Welcome Speech for a Seminar", "Welcome", "English", 1, "welcome, seminar, workshop, guest, introduction",
`A warm welcome to our respected guests, teachers and dear participants.

Today we have gathered to learn, share ideas and grow together. A seminar is not only about listening, it is about asking questions and discovering new ways of thinking.

We hope this session inspires you and brings new knowledge and new friendships.

Once again, welcome to all. Thank you.`);

add("Farewell Speech by a Senior Student", "Farewell", "English", 3, "farewell, seniors, juniors, school, college, memories",
`Respected teachers, dear juniors and my batchmates,

It is difficult to say goodbye to the place that gave us so many memories. From first-day nerves to last-day tears, this school has been our second home.

To our teachers, thank you for pushing us when we wanted to give up. To our juniors, keep the traditions alive and make this place even better.

We may be leaving these gates, but we are not leaving these memories.

Thank you. We will miss you all.`);

add("Farewell Speech for a Colleague", "Farewell", "English", 2, "farewell, colleague, retirement, office, work, goodbye",
`Dear friends and colleagues,

Today we say goodbye to someone who has been a guide, a friend and an example for all of us.

Your dedication and kindness made our workplace a better place. You taught us that success is not only about results, but about how you treat people on the way.

Wherever you go, our best wishes go with you. Please do not forget us.

Thank you for everything.`);

add("The Importance of Time Management", "Education", "English", 3, "time management, time, discipline, students, planning",
`Good morning everyone.

Time is the one gift given equally to every person. A rich man and a poor man both get twenty-four hours each day. The difference lies in how we use them.

Make a plan, set priorities and avoid delaying work for tomorrow. Small habits like waking up early and finishing tasks on time build great success.

Remember, lost money can be earned again, but lost time never returns.

Let us value every minute. Thank you.`);

add("The Importance of Discipline", "Education", "English", 2, "discipline, students, habits, success, school",
`Respected teachers and friends,

Discipline is the bridge between goals and achievement. Every successful person, from a sportsman to a scientist, follows a routine with dedication.

Discipline does not mean being strict for no reason. It means doing the right thing even when no one is watching.

Be punctual, respect elders, work honestly and stay focused. These small habits build a great character.

Thank you.`);

add("Value of Education", "Education", "English", 3, "education, learning, school, knowledge, students",
`Good morning everyone.

Education is the most powerful weapon we can use to change the world. It lights the mind, builds character and opens doors that nothing else can.

A person with education can think for themselves, serve society and face any challenge. Yet millions of children still cannot go to school.

Let us value what we have, learn sincerely and help someone else to learn too.

Thank you.`);

add("My Mother, My First Teacher", "Family", "English", 2, "mother, mom, mother's day, family, love",
`Respected guests and friends,

The first word we speak, the first step we take and the first lesson we learn are all thanks to our mother.

She forgets her own tiredness, hides her own worries and still smiles for us. Her love asks for nothing in return.

We can never repay her, but we can respect her, help her and make her proud every day.

To every mother here: thank you for being the heart of our home.`);

add("My Father, My Hero", "Family", "English", 2, "father, dad, father's day, family, hero",
`Respected friends,

Fathers rarely say how much they love us, but they show it in every sacrifice. They work long hours, give up their own wishes and keep us safe.

My father taught me honesty, patience and courage through his actions, not his words.

Dad, thank you for being my strength. I promise to make you proud.`);

add("True Friendship", "Friendship", "English", 2, "friendship, friends, friendship day, bond, trust",
`Good morning everyone.

A true friend is someone who laughs with you in happiness and stays with you in sorrow. Friends do not need many words to understand each other.

They tell us the truth gently, support our dreams and remind us who we are when we forget.

If you have even one such friend, you are rich. Let us cherish our friends and be a good friend ourselves.

Thank you.`);

add("Say No to Plastic", "Environment", "English", 2, "plastic, pollution, environment, recycle, save earth",
`Respected teachers and friends,

Plastic is cheap and convenient, but it stays on our earth for hundreds of years. It chokes rivers, harms animals and enters our food.

We can begin today. Carry a cloth bag, use a steel bottle, say no to single-use plastic and recycle what we can.

Change begins with one person, and that person can be you.

Thank you.`);

add("Save Water, Save Life", "Environment", "English", 2, "water, save water, conservation, environment, drought",
`Good morning everyone.

Water is life, yet we waste it every day. Only a tiny part of earth's water is fit for drinking, and many villages walk miles to get it.

Close the tap while brushing, fix leaking pipes, reuse water for plants and harvest rainwater.

If we save water today, our children will have it tomorrow.

Thank you.`);

add("Importance of Yoga and Health", "Health", "English", 2, "yoga, health, fitness, exercise, wellness, yoga day",
`Respected friends,

Health is our greatest wealth. A healthy body and calm mind are the base of a happy life.

Yoga, exercise, good food and enough sleep keep us strong in body and spirit. Even twenty minutes a day can change how we feel.

Let us make fitness a habit and not a New Year promise.

Thank you.`);

add("Technology: Boon or Bane?", "Competition", "English", 3, "technology, debate, elocution, mobile, internet, ai",
`Respected judges and friends,

Technology has made our lives faster, easier and more connected. A student in a village can now learn from the best teachers in the world.

But the same screens can steal our time, our sleep and our real conversations. Technology is like a knife: in wise hands it builds, in careless hands it hurts.

The answer is not to reject it, but to use it with balance and responsibility.

Thank you.`);

add("Impact of Social Media on Youth", "Competition", "English", 3, "social media, youth, instagram, elocution, internet, students",
`Respected judges, teachers and friends,

Social media connects us with the world in a second. It gives young people a platform for talent, learning and voice.

Yet it also brings comparison, anxiety and wasted hours. A like can make us happy and a missing like can make us doubt ourselves.

Let us remember: real life is not lived on a screen. Use social media; do not let it use you.

Thank you.`);

add("Be the Change", "Motivational", "English", 2, "motivation, change, leadership, youth, inspiration",
`Good morning everyone.

We often wait for someone else to fix the world. But every big change in history started with one person who decided to act.

You do not need a title or a stage. Be honest in your work, kind to strangers and brave enough to do the right thing.

The world changes when we change.

Thank you.`);

add("Failure Is the First Step to Success", "Motivational", "English", 2, "failure, success, motivation, exam, students, resilience",
`Respected teachers and friends,

Every successful person has failed many times. A scientist fails hundreds of experiments before one works.

Failure is not the opposite of success; it is a part of it. It teaches us what no victory can.

So if you fall, get up. If you fail, try again with more wisdom.

The only real failure is to stop trying. Thank you.`);

add("Believe in Yourself", "Motivational", "English", 2, "confidence, self belief, motivation, students, courage",
`Good morning everyone.

Nobody can make you feel small without your permission. The biggest battle we fight is the one inside our own mind.

Believe in your abilities, even when the road is difficult. Your dreams are valid and your effort matters.

Take one brave step today, and then another. Confidence will follow.

Thank you.`);

add("Speech for Competition: My Dream", "Competition", "English", 2, "my dream, ambition, elocution, competition, future",
`Respected judges and friends,

Everyone has a dream. Mine is to make a difference in the lives of others.

I know the road will not be easy. There will be hard exams, long nights and moments of doubt. But I believe that hard work and honesty can turn any dream into reality.

I do not only want to succeed, I want to help others succeed too.

Thank you.`);

add("Teachers: The Architects of Society", "Teachers' Day", "English", 3, "teachers day, teachers, guru, architect, respect",
`Respected teachers and dear friends,

Doctors, engineers, scientists and leaders all began their journey in front of a teacher.

A teacher shapes our thoughts as a sculptor shapes stone. They give us knowledge, values and courage to dream.

Today let us promise to respect our teachers, not only today but every day.

Happy Teachers' Day, and thank you from the bottom of our hearts.`);

add("Speech on Diwali", "Festival", "English", 2, "diwali, festival, lights, deepavali, celebration",
`Good morning everyone.

Diwali is the festival of lights, the victory of good over evil and light over darkness.

Let us light diyas, share sweets and bring joy to those who have less. Let us avoid noisy crackers that harm animals, the elderly and our environment.

May the light of Diwali brighten every home and heart.

Happy Diwali!`);

add("Speech on Holi", "Festival", "English", 2, "holi, festival, colours, celebration, unity",
`Good morning everyone.

Holi is the festival of colours, joy and forgiveness. It reminds us that love is stronger than hatred.

On this day, we forget old quarrels, hug our friends and celebrate together. Let us play safely with natural colours and respect everyone's wishes.

Wishing you a colourful and happy Holi!`);

add("Speech on Christmas", "Festival", "English", 2, "christmas, festival, december, giving, kindness",
`Good morning everyone.

Christmas teaches us the joy of giving. It is not about expensive gifts, but about love, kindness and sharing.

Let us think of those who are alone, hungry or sad, and bring a little happiness into their lives.

Merry Christmas and a happy new year to all!`);

add("Speech on New Year", "Festival", "English", 2, "new year, resolution, january, celebration, welcome",
`Good morning everyone.

A new year is like a blank page. We can write something beautiful on it.

Let us leave behind our regrets, learn from our mistakes and make resolutions we can truly keep: to study sincerely, to be kind and to help others.

Happy New Year to everyone!`);

add("Nursery Rhyme Style Speech for Kids: My School", "Kids", "English", 1, "kids, small, my school, nursery, primary, easy",
`Good morning, teachers and friends.

My name is ___ and I study in class ___.

I love my school. My teachers are kind and my friends are fun. We read, we play and we learn every day.

I want to grow up to be a good person. Thank you!`);

add("Speech on My Favourite Book", "Kids", "English", 2, "book, reading, favourite, library, students",
`Good morning everyone.

Books are our best friends. They never get tired, never complain and always teach us something new.

My favourite book takes me to new worlds and shows me how to be brave and kind. A book can make us travel the world without leaving our room.

I request everyone to read a little every day.

Thank you.`);

add("राष्ट्रीय एकता पर भाषण", "Independence Day", "Hindi", 3, "independence day, ekta, desh, hindi, 15 august, patriotism",
`आदरणीय गुरुजनों और मेरे प्यारे साथियों,

हमारा भारत अनेक भाषाओं, धर्मों और संस्कृतियों का देश है, फिर भी हम सब एक हैं। यही हमारी सबसे बड़ी ताक़त है।

आज़ादी हमें बलिदानों से मिली है। हमारा कर्तव्य है कि हम मिलकर देश को आगे बढ़ाएँ।

आइए प्रण लें कि हम ईमानदारी से काम करेंगे और देश का मान बढ़ाएँगे।

जय हिंद! जय भारत!`);

add("गणतंत्र दिवस पर भाषण", "Republic Day", "Hindi", 3, "republic day, 26 january, ganatantra, hindi, constitution",
`आदरणीय प्रधानाचार्य जी, गुरुजनों और मेरे साथियों,

26 जनवरी 1950 को हमारा संविधान लागू हुआ और भारत एक गणतंत्र बना। यह दिन हमें समानता, स्वतंत्रता और न्याय का अधिकार देता है।

अधिकारों के साथ हमारे कर्तव्य भी हैं। हमें नियमों का पालन और सबका सम्मान करना चाहिए।

आइए संविधान की भावना को अपने जीवन में अपनाएँ।

जय हिंद!`);

add("शिक्षक दिवस पर भाषण", "Teachers' Day", "Hindi", 2, "teachers day, shikshak diwas, guru, hindi, 5 september",
`आदरणीय गुरुजनों और प्रिय मित्रों,

गुरु वह दीपक है जो ख़ुद जलकर हमारा जीवन रोशन करता है। डॉक्टर, इंजीनियर, वैज्ञानिक, हर महान इंसान के पीछे एक शिक्षक होता है।

आज के दिन हम अपने सभी शिक्षकों को हृदय से धन्यवाद देते हैं।

आपका आशीर्वाद हमारे साथ रहे।

धन्यवाद।`);

add("समय का महत्व", "Education", "Hindi", 2, "time management, samay, hindi, students, discipline",
`आदरणीय गुरुजनों और मेरे प्यारे साथियों,

समय सबसे क़ीमती धन है। बीता हुआ धन वापस आ सकता है, पर बीता हुआ समय कभी वापस नहीं आता।

जो समय का सम्मान करता है, सफलता उसके क़दम चूमती है। इसलिए हर काम समय पर कीजिए और आज का काम कल पर मत छोड़िए।

धन्यवाद।`);

add("पर्यावरण बचाओ", "Environment", "Hindi", 2, "environment, paryavaran, plastic, trees, hindi, save earth",
`आदरणीय गुरुजनों और साथियों,

हवा, पानी और धरती, यह सब हमें प्रकृति ने उपहार में दिया है, पर हम इसे बिगाड़ रहे हैं।

पेड़ लगाइए, प्लास्टिक का उपयोग कम कीजिए और पानी बचाइए। छोटे प्रयास मिलकर बड़ा बदलाव लाते हैं।

आइए अपनी धरती माँ को बचाएँ।

धन्यवाद।`);

add("विदाई समारोह भाषण", "Farewell", "Hindi", 3, "farewell, vidai, school, college, hindi, goodbye",
`आदरणीय गुरुजनों और मेरे प्यारे साथियों,

आज हम इस विद्यालय को अलविदा कह रहे हैं जहाँ हमने हँसना, सीखना और आगे बढ़ना सीखा।

हम अपने शिक्षकों के आभारी हैं जिन्होंने हमें सही राह दिखाई, और अपने दोस्तों के जिन्होंने हर पल को यादगार बनाया।

हम यहाँ से जा रहे हैं, पर यादें हमारे साथ हमेशा रहेंगी।

धन्यवाद।`);

add("माँ पर भाषण", "Family", "Hindi", 2, "mother, maa, hindi, family, mother's day",
`आदरणीय गुरुजनों और मित्रों,

माँ वह है जो ख़ुद भूखी रहकर हमें खिलाती है और अपनी नींद छोड़कर हमें सुलाती है। उसका प्यार निस्वार्थ होता है।

ईश्वर हर जगह नहीं हो सकता, इसीलिए उसने माँ को बनाया।

आइए हम अपनी माँ का सम्मान करें और उन्हें हमेशा ख़ुश रखें।

धन्यवाद।`);

add("स्वतंत्रता दिवस भाषण", "Independence Day", "Marathi", 3, "independence day, swatantrya din, 15 august, marathi, desh",
`आदरणीय गुरुजन आणि माझ्या प्रिय मित्रांनो,

आज आपण आपला स्वातंत्र्य दिन साजरा करत आहोत. असंख्य वीरांनी आपल्या प्राणांची आहुती देऊन आपल्याला स्वातंत्र्य मिळवून दिले.

या स्वातंत्र्याचे रक्षण करणे आणि देशाचा विकास करणे हे आपले कर्तव्य आहे.

चला, प्रामाणिकपणे काम करू आणि भारताचा गौरव वाढवू.

जय हिंद! जय महाराष्ट्र!`);

add("प्रजासत्ताक दिन भाषण", "Republic Day", "Marathi", 3, "republic day, prajasattak din, 26 january, marathi, constitution",
`आदरणीय गुरुजन आणि प्रिय मित्रांनो,

२६ जानेवारी १९५० रोजी आपले संविधान लागू झाले आणि भारत प्रजासत्ताक झाला. संविधानाने आपल्याला समानता, स्वातंत्र्य आणि न्याय दिला.

हक्कांबरोबर आपली कर्तव्येही आपण पाळली पाहिजेत.

चला, संविधानाचा आदर करू आणि एकतेने राहू.

जय हिंद!`);

add("निरोप समारंभ भाषण", "Farewell", "Marathi", 3, "farewell, nirop samarambh, school, college, marathi, goodbye",
`आदरणीय गुरुजन आणि माझ्या प्रिय मित्रांनो,

आज आपण या शाळेचा निरोप घेत आहोत, जिथे आपण शिकलो, हसलो आणि घडलो.

आमच्या शिक्षकांनी आम्हाला योग्य मार्ग दाखवला आणि मित्रांनी प्रत्येक क्षण खास केला. या आठवणी आम्ही कधीही विसरणार नाही.

सर्वांचे मनापासून आभार.

धन्यवाद!`);

add("आई", "Family", "Marathi", 2, "mother, aai, marathi, family, mother's day",
`आदरणीय गुरुजन आणि मित्रांनो,

आई म्हणजे प्रेमाचा सागर. ती स्वतः उपाशी राहून आपल्याला खाऊ घालते आणि आपल्या सुखासाठी सर्व काही सोसते.

तिच्या ऋणातून आपण कधीच मुक्त होऊ शकत नाही, पण तिचा आदर करून तिला आनंदी ठेवू शकतो.

सर्व मातांना माझा प्रणाम.

धन्यवाद!`);

add("पर्यावरण वाचवा", "Environment", "Marathi", 2, "environment, paryavaran, trees, plastic, marathi, save earth",
`आदरणीय गुरुजन आणि प्रिय मित्रांनो,

हवा, पाणी आणि जमीन हे निसर्गाचे अमूल्य वरदान आहे. पण आपण त्याचा गैरवापर करत आहोत.

झाडे लावा, प्लास्टिक टाळा आणि पाणी वाचवा. आपल्या लहान प्रयत्नांतूनच मोठा बदल घडतो.

चला, आपली पृथ्वी वाचवूया.

धन्यवाद!`);

add("वेळेचे महत्त्व", "Education", "Marathi", 2, "time management, vel, marathi, students, discipline",
`आदरणीय गुरुजन आणि माझ्या प्रिय मित्रांनो,

वेळ हा सर्वात मौल्यवान खजिना आहे. गेलेला पैसा परत मिळवता येतो, पण गेलेली वेळ कधीही परत येत नाही.

म्हणून प्रत्येक काम वेळेवर करा आणि आजचे काम उद्यावर ढकलू नका.

धन्यवाद!`);

})();
