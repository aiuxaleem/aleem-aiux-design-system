/* Showcase locale layer: when <html dir="rtl">, swap English copy for Arabic.
   Runs before showcase.js so headline splitting sees the final text. Strings not
   listed stay English; bidi isolation in the tokens keeps them readable. */
(() => {
  const html = document.documentElement;
  const btn = document.getElementById('dir-toggle');
  if (btn) {
    const rtl = html.getAttribute('dir') === 'rtl';
    btn.textContent = rtl ? 'English' : 'العربية';
    btn.setAttribute('aria-label', rtl ? 'Switch to English, left to right' : 'التبديل إلى العربية، من اليمين إلى اليسار');
    btn.setAttribute('lang', rtl ? 'en' : 'ar');
    btn.addEventListener('click', () => {
      try {
        localStorage.setItem('cory-dir', rtl ? 'ltr' : 'rtl');
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        sessionStorage.setItem('cory-dir-switch', String(scrollY / max));
      } catch (e) {}
      document.documentElement.style.transition = 'opacity 160ms ease';
      document.documentElement.style.opacity = '0';
      setTimeout(() => location.reload(), 160);
    });
  }
  if (html.getAttribute('dir') !== 'rtl') return;
  const AR = {
    "Skip to content": "انتقل إلى المحتوى",
    "Trust": "الثقة",
    "Components": "المكوّنات",
    "Foundations": "الأساسيات",
    "Portfolio": "الأعمال",
    "Start": "البداية",
    "Lead AI Product Designer": "مصمم منتجات ذكاء اصطناعي رئيسي",
    "Sources cited": "مصادر موثّقة",
    "✓ Asks before it acts": "✓ يستأذن قبل أن يتصرّف",
    "Aleem | AIUX Design System · v9": "نظام تصميم Aleem | AIUX · الإصدار 9",
    "AI is fast.": "الذكاء الاصطناعي سريع.",
    "Trust is": "أما الثقة",
    "slow.": "فبطيئة.",
    "I design the gap. This is the system I design it with: tokens, 58 React components and 25 templates for AI that shows its sources, says how sure it is and asks before it acts.": "أنا أصمّم ما بينهما. وهذا هو النظام الذي أصمّم به: رموز تصميم و58 مكوّناً بلغة React و25 قالباً لذكاء اصطناعي يُظهر مصادره، ويقول مدى ثقته، ويستأذن قبل أن يتصرّف.",
    "See the trust patterns": "استعرض أنماط الثقة",
    "Get started": "ابدأ الآن",
    "React components": "مكوّناً بلغة React",
    "AI trust patterns": "أنماط ثقة للذكاء الاصطناعي",
    "Templates": "القوالب",
    "Themes × directions": "سمتان × اتجاهان",
    "Five questions,": "خمسة أسئلة،",
    "answered up front.": "يُجاب عنها مسبقاً.",
    "Every AI surface answers them before anyone has to ask. Each answer is a component, and everything below is the shipping React code, not a picture of it.": "كل واجهة ذكاء اصطناعي تجيب عنها قبل أن يسأل أحد. لكل إجابة مكوّن، وكل ما تراه أدناه هو كود React الفعلي، لا صورة عنه.",
    "Is this AI?": "هل هذا ذكاء اصطناعي؟",
    "Label it, every time. An AI never writes as if it were a person.": "ضع له وسماً في كل مرة. الذكاء الاصطناعي لا يكتب أبداً كأنه إنسان.",
    "Where did it come from?": "من أين جاء؟",
    "Every stated fact carries a Citation. No sources, no facts.": "كل حقيقة تُذكر ترافقها إحالة. لا مصادر، لا حقائق.",
    "How sure is it?": "ما مدى ثقته؟",
    "ConfidenceMeter says it in words and pips, never colour alone.": "يعبّر ConfidenceMeter عنها بالكلمات والنقاط، لا باللون وحده.",
    "What is it doing?": "ماذا يفعل الآن؟",
    "AgentSteps names every status: Working, Needs you, Failed.": "يسمّي AgentSteps كل حالة: يعمل، يحتاجك، فشل.",
    "Can I stop or undo it?": "هل يمكنني إيقافه أو التراجع عنه؟",
    "Streaming has Stop. Anything that sends, spends or deletes waits for an ApprovalCard.": "للبث زر إيقاف، وكل ما يرسل أو ينفق أو يحذف ينتظر موافقة عبر ApprovalCard.",
    "ApprovalCard: try it": "ApprovalCard: جرّبه",
    "The library": "المكتبة",
    "58 components,": "58 مكوّناً،",
    "one bundle.": "في حزمة واحدة.",
    "Every component has a live preview with light, dark and right-to-left states, and an API page with its props, parts and examples. Open any name to see it run.": "لكل مكوّن معاينة حيّة بالوضعين الفاتح والداكن ومن اليمين إلى اليسار، وصفحة API بخصائصه وأجزائه وأمثلته. افتح أي اسم لتراه يعمل.",
    "Foundations · Color": "الأساسيات · الألوان",
    "Navy ink.": "حبر كحلي.",
    "Signal gradient.": "تدرّج الإشارة.",
    "Deep navy for the words that ground you, a blue to cyan sweep for the moments that move you, cool slate neutrals on an off-white surface. Every text pair passes WCAG 2.1 AA in both themes.": "كحلي عميق للكلمات التي تمنحك الثبات، وتدرّج من الأزرق إلى السماوي للّحظات التي تحرّكك، ودرجات رمادية باردة على سطح فاتح. كل زوج نصّي يجتاز معيار WCAG 2.1 AA في السمتين.",
    "Ink": "الحبر",
    "Signal start": "بداية الإشارة",
    "Signal end": "نهاية الإشارة",
    "The gradient": "التدرّج",
    "Positive": "إيجابي",
    "Neutral": "محايد",
    "Foundations · Typography": "الأساسيات · الخطوط",
    "Friendly, geometric,": "ودود، هندسي،",
    "extrabold.": "وعريض جداً.",
    "Plus Jakarta Sans across the brand, IBM Plex Sans Arabic for Arabic, JetBrains Mono for the numbers that carry the proof.": "خط Plus Jakarta Sans للعلامة كلها، وIBM Plex Sans Arabic للعربية، وJetBrains Mono للأرقام التي تحمل الدليل.",
    "Trust is slow.": "الثقة بطيئة.",
    "Every answer shows its sources": "كل إجابة تُظهر مصادرها",
    "Confidence is shown in words and pips, never in colour alone.": "تُعرض الثقة بالكلمات والنقاط، لا باللون وحده.",
    "Contrast · target · state": "التباين · الهدف · الحالة",
    "Built with this system": "مبني بهذا النظام",
    "My portfolio,": "معرض أعمالي،",
    "in production.": "على أرض الواقع.",
    "The proof that the parts work together. My portfolio runs on this system's tokens, type, logo and AI trust rules, rebuilt as Astro components for speed: dark by default, Arabic as a first-class language, case studies with their sources.": "الدليل على أن الأجزاء تعمل معاً. معرض أعمالي يعمل برموز هذا النظام وخطوطه وشعاره وقواعد الثقة فيه، مُعاد بناؤها كمكوّنات Astro من أجل السرعة: داكن افتراضياً، والعربية لغة أساسية، ودراسات حالة مع مصادرها.",
    "Case studies built on it": "دراسات حالة مبنية عليه",
    "Visit the portfolio": "زُر معرض الأعمال",
    "All case studies": "كل دراسات الحالة",
    "Four starting points,": "أربع نقاط انطلاق،",
    "ready to copy.": "جاهزة للنسخ.",
    "Four of the 25 templates, from the admissions assistant case study. Each one is built only from this system.": "أربعة من 25 قالباً، من دراسة حالة مساعد القبول. كل قالب مبني بالكامل من هذا النظام.",
    "Landing Page": "الصفحة الرئيسية",
    "Full marketing homepage, hero to footer": "صفحة تسويقية كاملة من الواجهة إلى التذييل",
    "Open": "افتح",
    "Pitch Deck": "عرض تقديمي",
    "6-slide 16:9 sales deck": "عرض مبيعات من 6 شرائح بمقاس 16:9",
    "One-Pager": "صفحة واحدة",
    "Printable Letter-size overview": "ملخص قابل للطباعة بمقاس Letter",
    "Outreach Email": "بريد التواصل",
    "600px marketing email": "بريد تسويقي بعرض 600 بكسل",
    "Voice": "الأسلوب",
    "Proof first,": "الدليل أولاً،",
    "never oversold.": "بلا مبالغة.",
    "Trust is the subject, so the words have to earn it. Calm, specific and generous, in short sentences and the active voice.": "الثقة هي الموضوع، لذا على الكلمات أن تكسبها. هادئة ودقيقة وكريمة، بجمل قصيرة وبصيغة المبني للمعلوم.",
    "Lead with what you can prove": "ابدأ بما يمكنك إثباته",
    "A number, a shipped product, a named result. Never an invented stat.": "رقم، أو منتج أُطلق، أو نتيجة مسمّاة. لا أرقام مختلقة أبداً.",
    "No hype words": "بلا كلمات مبالغة",
    "The AI says it is AI": "الذكاء الاصطناعي يعرّف بنفسه",
    "The assistant speaks for itself, and never as Aleem.": "المساعد يتحدث عن نفسه، ولا يتحدث أبداً باسم عليم.",
    "Hi, I'm the assistant on Aleem's portfolio. Ask me about his work.": "مرحباً، أنا المساعد في معرض أعمال عليم. اسألني عن أعماله.",
    "Has he designed for AI agents?": "هل صمّم لوكلاء الذكاء الاصطناعي؟",
    "Yes. Start with \"A design system that audits its own product\": an audit skill that fixed issues across 97 UAT screens.": "نعم. ابدأ بدراسة «نظام تصميم يدقّق منتجه بنفسه»: مهارة تدقيق أصلحت مشكلات في 97 شاشة اختبار قبول.",
    "I can make mistakes, so every answer links the case study it came from.": "قد أخطئ، لذا ترتبط كل إجابة بدراسة الحالة التي جاءت منها.",
    "Four lines,": "أربعة أسطر،",
    "then build.": "ثم ابنِ.",
    "One stylesheet carries every token, both themes and the base styles. One script carries every component. No build step.": "ملف أنماط واحد يحمل كل الرموز والسمتين والأنماط الأساسية، وسكربت واحد يحمل كل المكوّنات. بلا خطوة بناء.",
    "Use semantic tokens only.": "استخدم الرموز الدلالية فقط.",
    "Pick a theme and a direction.": "اختر سمة واتجاهاً.",
    "Answer the six states.": "أجب عن الحالات الست.",
    "Read the API page first.": "اقرأ صفحة API أولاً.",
    "Open on GitHub": "مفتوح على GitHub",
    "Build your next AI surface with it.": "ابنِ به واجهة الذكاء الاصطناعي القادمة.",
    "Tokens, 58 components, guidelines and 25 templates in one public repository, consistent by default.": "رموز التصميم و58 مكوّناً والإرشادات و25 قالباً في مستودع عام واحد، متّسقة افتراضياً.",
    "View on GitHub": "اعرضه على GitHub",
    "Browse the components": "تصفّح المكوّنات",
    "NotebookLM guide": "دليل NotebookLM",
    "Portfolio site": "موقع الأعمال",
    "Aleem | AIUX Design System · by Aleem": "نظام تصميم Aleem | AIUX · من Aleem",
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const hits = [];
  let n; while ((n = walker.nextNode())) {
    const p = n.parentElement; if (!p || p.closest('script,style,.marquee,code,.mono,small.no-i18n')) continue;
    const raw = n.textContent, key = raw.replace(/\s+/g, ' ').trim();
    if (AR[key]) hits.push([n, (raw.match(/^\s*/)[0]) + AR[key] + (raw.match(/\s*$/)[0])]);
  }
  hits.forEach(([node, text]) => { node.textContent = text; });
  document.title = 'نظام تصميم Aleem | AIUX';
})();
