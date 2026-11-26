The design system of **Aleem** (Mohammad Abdul Aleem), Lead AI Product Designer, published as **Aleem | AIUX**. It holds his brand, his portfolio and the patterns he uses to design AI products people can trust: AI that shows its sources, says how sure it is, and asks before it acts.

It also documents one product in full as a case study: the AI admissions assistant built at **Colaberry** (its mascot is Cory). That product's website and ROI calculator kits live in `ui_kits/`, and its own voice rules are under "Case study voice" below.

> The thesis: AI is fast. Trust is slow. I design the gap.

## Quick start
1. `<link rel="stylesheet" href="styles.css">`: tokens, fonts, both themes, grid + motion helpers.
2. `<script src="components/bundle.js"></script>` → `const { Button } = window.AleemDesignSystem_3de1ed`.
3. Optional: `<html data-theme="dark">` or drop in `<ThemeToggle />`.
4. Lay out with `.cory-container` / `.cory-grid` / `.cory-cards` / `.cory-bento`; never a fixed `repeat(n,1fr)`.
5. Only semantic tokens in components (`--text-*`, `--surface-*`, `--border-*`, `--action-*`); raw scales are for tokens.css only.

## Motion in practice
- **Reveal engine** (`tokens/reveal.js`, loaded by every `ds-base.js`): put `data-stagger="90"` on a parent to cascade its children, or `data-reveal="up|fade|scale|blur|clip|left"` on one element; `data-delay` adds ms. Content is visible by default and only animates once the script runs, so nothing can stay hidden.
- **Counters:** `data-count="94" data-suffix="%"` on any number animates it when revealed. Numbers always use `.cory-metric` so they stay LTR.
- **Helpers:** `.cory-float` (idle bob for launchers), `.cory-ring` (pulse ring on a status dot), `.cory-sweep` (gradient sweep across `.cory-gradient-text` on entry), `.cory-draw` (line grows in), `.cory-glow-drift` (slow glow wander), `.cory-lift` (card hover).
- **Hover language:** cards lift `--lift-hover` on `--duration-slow`; buttons lift 2px and spring back (`--ease-spring`); icon tiles fill with `--gradient-brand-deep`; nav links grow a gradient underline from inline-start. Never animate colour alone.
- **Press:** `--press-scale` 0.97 on `--duration-fast`.
- One signature per screen: a hero gets the sweep, a quote gets the clip, a CTA panel gets the scale. Don't stack them.

## Direction: LTR and RTL
- **Switch:** `<html dir="rtl" lang="ar">`, or drop in `<DirectionToggle />` (sets both, persists to `cory-dir`, fires a `cory:direction` event). Works on any subtree too: `<section dir="rtl" lang="ar">`.
- **Layout is logical everywhere.** Use `margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `border-start-end-radius`, `text-align: start`. Never `left`/`right`/`margin-left` in components, kits or templates. Flex, grid and `gap` mirror for free.
- **Motion:** multiply horizontal values by `--dir` (1 in LTR, -1 in RTL): `translateX(calc(8px * var(--dir)))`. GSAP code reads `dir` once and multiplies `x`/`xPercent`.
- **Mirror what points, not what is:** wrap text arrows in `.cory-arrow`; Lucide arrows and chevrons flip automatically; add `.cory-flip-rtl` to custom directional icons. Logos, check marks, play, search and media never flip.
- **Always LTR:** numbers, metrics, code, token names, emails, phones and URLs. `.cory-metric`, `code`, `.cory-ltr` and email/tel/url/number inputs are isolated LTR so "<60s" never renders as ">60s".
- **Arabic type:** IBM Plex Sans Arabic is second in every font stack, so Arabic glyphs use it automatically. Under `lang="ar"` letter-spacing is forced to 0 (negative tracking breaks letter joining) and leading opens up (`--leading-*` +0.2 to 0.25).
- **Never split connected scripts into letters** for animation; split by words (Showcase does this automatically).
- **Gradient:** `--gradient-brand` runs 270deg in RTL so the signal still flows in reading direction.
- **Controls:** `iconStart` / `iconEnd` (Button, Input), `labelPosition="start|end"` (Toggle), `align="start"` (StatCard). Old left/right names remain as aliases.
- Preview: every component card has an RTL button; "Direction: LTR and RTL" in Start here shows English and Arabic side by side; Showcase has an العربية switch.

## Writing and text rules
- **No em dashes.** Use a comma, a colon, or a full stop. (Applies to UI copy, docs, code comments, and card titles.)
- **Text never overflows. This is a hard rule, checked by the probe.** Every page, card, kit and template must report `type: 0` and `clip: 0` in `_audit/Audit.html` (all sets) before it ships. `components/bundle.css` enforces `overflow-wrap`, `min-width: 0` on layout children, `white-space: normal` on every text element, and wrapping buttons under 400px. The probe fails a page for: `white-space: nowrap` on anything longer than 4 words, `text-overflow: ellipsis` or `line-clamp` on copy, text spilling past or below its own box (fixed heights), text leaving a clipping parent or the canvas, overlapping text, type under 11px, body leading under 1.15, body measure over about 90ch, em dashes, and letter-spacing on Arabic.
- **Allowed on one line:** numbers and metrics, codes, and labels of 1 to 4 words (buttons, pills, tags, nav links). Use `.cory-nowrap` for those so the intent is explicit; never pin a sentence with `&nbsp;`.
- **When a line is tight, shorten the copy or let it wrap.** Never shrink the box, never clip, never add a fixed height.
- Headlines use fluid sizes (`--text-fluid-*`) and `text-wrap: balance`; body uses `text-wrap: pretty`. Long-form copy sits in `.cory-prose` (68ch body, 56ch lead).
- Dark and brand surfaces carry `.cory-on-ink` (the `Card` ink and brand variants add it) so headings and links switch to on-ink tones; navy type must never sit on navy.

## Accessibility gate (every new page)
WCAG 2.2 AA is a release gate. The full rule lives in `assets/notes/CLAUDE.from-standalone.md` under "Accessibility and quality gate"; the short form:
- **Tokens only.** Text, surfaces and borders use semantic tokens (`--text-*`, `--surface-*`, `--border-*`, `--on-ink-*`), never a hex or a raw palette step, so both themes flip together.
- **Both themes or one pinned theme.** Fluid pages must pass in light and dark. Fixed artboards (posts, slides, one-pagers, emails, print pages, exports) carry `data-theme="light"` or `"dark"` beside `data-screen-label`.
- **Contrast.** 4.5:1 for text, 3:1 for large text, control boundaries and focus rings.
- **No overflow at 320 to 1440 wide or at 200% zoom.** No horizontal page scroll.
- **Structure.** `lang` set, one `h1`, no skipped heading levels, every control named and keyboard reachable with a visible focus ring, targets 24px (44px on touch), `alt` on images, reduced motion honoured.
- **Proof.** `python -m http.server 8765`, then `node _audit/run.mjs` runs every set in light and dark and exits 1 on any contrast, clip, name, type, heading, offscreen or overlap finding. `data-audit-ok="clip|contrast|overlap"` is for decoration the probe cannot judge, never for real text.
- **More rules, same file.** `assets/notes/CLAUDE.from-standalone.md` also holds the responsive rule, the state coverage rule, the design quality rule, the motion, hover and card rule, the pixel contrast rule and the performance and file rule. Their probes live in `_audit/`: `responsive.mjs` (ten widths), `contrast-pixels.mjs` (text against rendered pixels), `perf.mjs` (requests, bytes, LCP, CLS).
- **Generated files.** After editing any `ui_kits/*/*.jsx` run `node scripts/build-kits.mjs`; after changing a template shown on the Showcase run `node _audit/previews.mjs`.

## Which control? (decision guide)
- The one action a screen exists for → `Button variant="primary"` (one per view). Second action → `secondary` (on navy: `onInk`). Icon-only → `IconButton` with `label`.
- Filters / multi-select → `Chip`. Read-only status or metric → `Badge`.
- 2–4 exclusive views → `Tabs variant="segmented"`; section nav → `Tabs underline`; 5+ options → `Select`.
- Setting that applies immediately → `Toggle`; choice submitted with a form → `Checkbox`.
- Blank surface / bento tile / cover → `Card`; opinionated marketing blocks → `FeatureCard`, `StatCard`, `Testimonial`.
- Image or video with aspect lock → `MediaFrame`.
- An AI answer → `AIResponse` (confidence, inline `Citation`s, sources, feedback). How sure the AI is → `ConfidenceMeter`. An agent working through steps → `AgentSteps`. An agent about to send, spend, publish or delete → `ApprovalCard`. Typing to an AI → `PromptInput`.
- A case study in a grid → `ProjectCard` (in `.cory-bento`, one `featured`). Experience on an About page → `Timeline`. FAQs and long details → `Accordion`.
- One choice from 2 to 5 visible options → `RadioGroup` (`variant="card"` when each needs a sentence); 6+ → `Select`. Messages and briefs → `Textarea`.
- Site top bar → `SiteHeader` (five links or fewer, one action; folds to a menu on phones; has the skip link). Where a deep page sits → `Breadcrumb`. Pages of a list → `Pagination` (`compact` on phones); a feed people only scroll → a "Load more" `Button`. Comparing values across rows → `Table` (sortable, numeric columns, loading / empty / error rows).
- Opening a page → `Hero` (one idea, one gradient phrase, one action; put a live component in `art` when it can prove the headline). A picture where there is no image → `SignalPattern` (the signature pill rows; one animated per screen). A whole page to copy from → the `PortfolioHome` page example.
- Site bottom → `SiteFooter` (link columns, social as words, legal line). Actions on one thing ("More") → `Menu` (destructive items last, confirmed in a `Dialog`); never for navigation or choosing a value. A short ordered flow of 2 to 6 steps → `Stepper` (`compact` on phones). A date or time → `DateField` (the device's own picker).
- Any region that fetches data → `StateView` (loading, refreshing, ready, empty, partial and every error in one prop). A whole region failed → `ErrorState` (error, offline, timeout, not-found, permission, server). A problem above content that still works → `Alert` (danger / warning). Brief confirmation after an action → `Toast` (Undo if reversible). Nothing here yet → `EmptyState`. Waiting → `SkeletonPreset` in a `LoadingRegion` (layout known) / `Spinner` or `Button loading` (one action) / `ProgressBar` (measurable) / `TypingIndicator` (chat) / `AIResponse status="streaming"` (AI answers). Must-finish task or destructive confirm → `Dialog` (`tone="danger"`). Name an icon → `Tooltip`.

## States (every surface answers six)
Default · Loading · Empty · Error · Partial · Success. See the "States" and "Loading" cards in Start here and `guidelines/states-audit.md`. For a region that fetches data, `StateView` renders all six from one `status` prop, so they look and behave the same everywhere.
- **Loading timing.** Nothing for the first 300 ms; then the skeleton, held at least 600 ms; then a 200 ms fade. A refetch keeps the content (dimmed, "Updating"), never blanks it. Over 10 s, say what is happening or show `ProgressBar`. `LoadingRegion` applies all of this and announces start and finish.
- **Skeletons match reality.** Use `SkeletonPreset` (project-card, feature-card, stat, ai-answer, chat, list, timeline, table, form, article) so loaded content lands exactly where the bones were. One wave crosses the page in step; reduced motion gets still bones. `Card loading` and `MediaFrame` (image loading and failure) handle themselves.
- **Errors say three things:** what happened, that nothing was lost, and the one action that fixes it. Never blame the person. Offer Try again only when retrying can help (not for not-found or permission); put codes in "Technical details".
- **Explain, don't disable.** Keep submit enabled and show the field `error`; disable only when the reason is visible next to the control. `--text-disabled` is decorative, never informational.
- **Validate on blur, summarise on submit.** Never per keystroke. On submit focus the first invalid field; messages have `role="alert"`. Error copy says how to fix it ("Enter a 10-digit number"), not just that it is wrong.
- **Nothing silent.** Any wait over 300 ms shows a state; results, chat logs and toasts live in `aria-live` / `role="status"` regions. Skeletons sit in an `aria-busy` region.
- **Never motion or colour alone.** `Spinner`, `Button loading` and `IconButton loading` fall back to static dots plus a visible label under `prefers-reduced-motion`; every feedback tone carries a glyph and words.
- **Field states:** `hint` → `loading` (validating) → `warning` (valid but check) → `error` → `success` on Input; `loading` / `emptyMessage` / `error` / `success` on Select; `error` on Checkbox; `loading` / `error` on Toggle.
- **Chat states:** `TypingIndicator` while the assistant composes (`avatar="assistant"`); `ChatBubble status="sending|sent|failed"` with `onRetry`; `from="system"` for handoffs and delays; `Avatar status` for presence; offline → `Alert tone="warning"` in the log.
- **Destructive actions:** `Dialog tone="danger"`, a question as the title, and a `Button variant="danger"` (white on red-700, AA) that names the action and count ("Delete 3 inquiries"). The button that opens the dialog is `secondary` or `dangerGhost`, never red.
- **Voice:** errors and empty states are first-person Aleem on conversational surfaces ("I couldn't save that"), neutral on admin surfaces ("Sync failed"). Avoid "Oops" and blame.

## Component status
Stable: Button, Badge, Avatar, Input, StatCard, FeatureCard, Testimonial, ChatBubble.
v2: IconButton, Chip, Card, MediaFrame, Tabs, ThemeToggle, DirectionToggle, Select, Checkbox, Toggle.
v3 (states release): Alert, Toast + ToastRegion, Dialog, Tooltip, EmptyState, Skeleton, Spinner, ProgressBar, TypingIndicator; plus `loading` / `error` / `disabled` / status props across the existing set.
v4 (visual language): Icon (owned duotone set), Illustration (twelve Aleem scenes), CoryMark; EmptyState `scene`.
v9 (signature, November 2026): `SignalPattern` (the brand graphic), `Hero`, and the `PortfolioHome` page example built only from the system and checked at 360, 768 and 1280px. `Timeline` moves the period above the title on phones.
v8 (November 2026): `SiteFooter`, `Menu`, `Stepper`, `DateField`.
v7 (navigation and data, November 2026): `SiteHeader`, `Breadcrumb`, `Pagination`, `Table`. A fresh automated audit of all 55 previews found no contrast, tap-target, naming, RTL or 320px overflow failures.
v6 (states, November 2026): `StateView`, `LoadingRegion`, `ErrorState`, `SkeletonPreset` and a rebuilt `Skeleton` (sizes, pill, wave / pulse / still, on ink); `Button variant="danger" | "dangerGhost"`; `Card loading`; `MediaFrame` image loading and failure with Try again; "Loading" card in Start here.
v5 (AIUX, November 2026): AI patterns `AIResponse` (+ `Citation`, `SourceList`), `ConfidenceMeter`, `AgentSteps`, `ApprovalCard`, `PromptInput`; portfolio `ProjectCard`, `Timeline`; `Accordion`, `RadioGroup`, `Textarea`. `Avatar kind="aiux" | "assistant"`, `ChatBubble from="assistant" | "aleem"`, `TypingIndicator avatar`, `EmptyState voice="assistant"`, and a sun and moon `ThemeToggle`. `components/bundle.js` now carries components only (the template and kit scripts it used to bundle load from their own files).
Every component card in the Design System tab has a ◐ button to preview it in dark theme.

## Sources
- **GitHub:** https://github.com/aiuxaleem/aleem-aiux-design-system (branch `main`), this repository, published at https://aiuxaleem.github.io/aleem-aiux-design-system/
- **Live website:** https://agentcory.ai (content + structure extracted from the
  homepage; design language inferred from the site and brand assets).
- **Brand asset provided:** `assets/logo-agentcory.svg` (primary wordmark).
- No Figma file was provided. UI kits are recreations of surfaces
  that are publicly visible on the live site (marketing homepage, ROI
  calculator, chat widget). The internal admissions dashboard is **not** publicly
  shown and was intentionally **not** invented.

---

## DESIGNING AI FEATURES (TRUST PATTERNS)

Every AI surface in this system answers five questions before anyone has to ask. Each one has a component.

1. **Is this AI?** Label it, every time: `AIResponse` says "AI answer", AI avatars use `Avatar kind="assistant"`, and a handoff to a person is a `ChatBubble from="system"` note ("Aleem joined the chat"). An AI never writes as if it were Aleem.
2. **Where did it come from?** Any stated fact carries a `Citation`, and the answer lists its `sources`. No sources, no facts: say what the answer is based on instead.
3. **How sure is it?** Show `ConfidenceMeter` when the model gives a score or level, and say "Low confidence" out loud rather than hiding a weak answer. Never invent a number.
4. **What is it doing?** Long or multi-step work shows `AgentSteps` with a word for every status ("Working", "Needs you", "Failed"), and any wait over 300 ms shows a state.
5. **Can I stop or undo it?** Streaming answers have Stop (`AIResponse status="streaming"`, `PromptInput busy`). Anything that sends, spends, publishes or deletes waits for an `ApprovalCard` that names the risk and whether it can be undone. Never auto-approve on a timer.

Feedback is cheap and visible (`AIResponse` Helpful / Not helpful), errors are first person and fixable ("I couldn't finish this answer." + Try again), and the disclaimer stays on public surfaces.

---

## CONTENT FUNDAMENTALS

**Voice: Aleem, first person, proof first.** On the portfolio and in posts Aleem writes as himself ("I", "my team"). Lead with the claim you can prove, then the proof: a number, a shipped product, a named result. *"AI is fast. Trust is slow. I design the gap."* *"I built one component library under five brands, so a marketer, a developer and an AI agent all build from the same system."*

**Tone.** Calm, specific and generous. Trust is the subject, so never oversell: no "revolutionary", no "seamless", no "leverage". Short sentences, active voice.

**Audience.** Hiring managers, design and product leads, and engineers building AI products, in India and the Gulf. Respect their world: "agents", "design systems", "tokens", "evaluation", "handoff".

**Numbers.** Only real, measured ones (13+ years, 20 typed React components, five brands, 97 audited screens). Check each against the portfolio before it ships. Label estimates as estimates, and never invent a stat, a quote or a client.

**AI voice.** The portfolio assistant speaks in first person about itself and in third person about Aleem ("I'm the assistant on Aleem's portfolio. He built…"). It never claims to be him.

**Bilingual.** English first, Arabic as a first-class second language (`dir="rtl" lang="ar"`, IBM Plex Sans Arabic).

**Examples to emulate**
- Headline: *"AI is fast. Trust is slow. I design the gap."*
- Proof: *"One design system for people and coding agents."*
- CTA: *"Let's talk"*, *"View my work"*, *"Read the case study"*.
- Error: *"Your message didn't send. Nothing you typed was lost."*

### Case study voice: the admissions assistant

The rules below belong to the admissions product in `ui_kits/` and the four core templates. Use them only there.

**Voice, Aleem speaks in first person.** The defining trait. Aleem addresses the
reader directly as "I" and "me": *"Ready to see what I can do for your admissions
team?"*, *"Let me call you"*, *"Chat with me"*, *"I'm ready to help your team…"*.
Marketing chrome around Aleem uses third person ("How Aleem Works", "Why teams
choose Aleem"). When in doubt: section labels are about Aleem; CTAs and
conversational copy are *from* Aleem.

**Tone.** Confident, benefit-led, and warm, never stiff or jargon-heavy.
Outcome-first sentences: *"Strike while the iron is hot."*, *"Turn prospects into
enrolled students."* Short, punchy, active voice.

**Audience.** Higher-ed admissions & enrollment leaders (Directors of Admissions,
VPs of Enrollment). Copy respects their world: "inquiries", "yield", "Slate",
"Banner", "counselors", "show rate".

**Casing.** Headlines are sentence case or Title Case used consistently within a
section ("Boost Admissions with AI Precision"). Overlines/eyebrows are UPPERCASE
with wide tracking. Avoid ALL-CAPS body copy.

**Numbers do the talking.** Nearly every claim is quantified and leads with the
figure: `<60s`, `94%`, `10x`, `847%`, `$2.4M`, `2,100 hours`. Stats are the hero,
labels are the footnote. Use comparison framing ("from 40% to 94% overnight").

**"You / your", not "we".** Copy centers the customer's team and outcomes -
"*your* admissions team", "*your* counselors", "save *your* team time".

**Emoji & symbols.** Used *sparingly* as accents, never decoration: the waving
hand 👋 next to Aleem's greeting, and a ⚡ before speed claims ("⚡ < 60s Response
Time"). One emoji per moment, max. No emoji in headings or body paragraphs.

**Examples to emulate**
- Greeting: *"Hi, I'm Aleem 👋 Ready to see what I can do for your admissions team?"*
- Benefit: *"Meet prospects where they are with seamless coordination across voice, SMS, email, and chat."*
- Proof: *"We went from 40% contact rates to 94% overnight."*
- CTA: *"Book My Demo"*, *"Try Aleem Now"*, *"Get Called by Aleem"*.

---

## VISUAL FOUNDATIONS

**Themes.** Light is the default; **dark** is a first-class theme. Set
`<html data-theme="dark">` (`ThemeToggle`, or the one-line script noted in `components/bundle.css`, applies
the OS preference). Every semantic alias (`--text-*`, `--surface-*`, `--border-*`,
`--action-*`, `--shadow-*`, `--gradient-ink`) re-maps; raw scales never change.
Dark surfaces step `--navy-900` page → `--navy-850` card → `--navy-700` raised;
shadows switch to black and gain `--shadow-glow`. Text and borders placed on
`--surface-ink` / `--gradient-ink` use the theme-stable `--on-ink-*` tokens
(`--on-ink-strong/body/muted/link/border/fill`), never raw `rgba(255,255,255,…)`.
`ThemeToggle` writes the attribute and persists the choice.

**Color.** A two-part identity: deep **navy `#0B1F36`** (the Aleem mascot's ink -
used for primary text, dark sections, the mascot body) paired with a bright
**blue→cyan gradient `#258AFD → #29BEDD`** that is the brand's signature "signal."
Surfaces are a cool off-white **`#F4F5FA`**. Neutrals are cool-toned slate.
Semantic green `#1FB877` marks positive metrics. The gradient appears on primary
CTAs, headline stat numbers, key words in headlines (gradient text-clip), and as
soft radial glows behind hero/CTA art. Dark sections use a navy `--gradient-ink`.

**Contrast (WCAG 2.2 AA, verified by `_audit/Audit.html`).** `--text-strong/body/muted/subtle` and `--text-link`
all pass 4.5:1 on page and card (15.3 / 9.2 / 6.4 / 4.9 / 4.9); `--text-link-hover` is `--blue-800` (7.1:1), a hover
never drops below AA. `--text-success/warning/danger/info` are the AA text versions of the semantic hues; the 500s
(`--fill-*`) are fills, dots and borders only. Feedback surfaces are `--surface-info/success/warning/danger`
with `--border-*` hairlines of the same tone, re-themed in dark; over ink use `--on-ink-info/success/warning/danger`.
Loading placeholders use `--surface-skeleton` and `--surface-skeleton-shine`. Gradients come in three jobs:
`--gradient-brand` is decoration only (bars, glows, dots, swatches); `--gradient-brand-text` (#1B79EC → #1193B5,
every stop ≥ 3:1 on page and white) is what `.cory-gradient-text`, `StatCard gradient` and `Testimonial` clip
into type, and it is for large type (≥ 24px, or ≥ 18.66px bold) only; anything carrying a white label at any size,
primary buttons, pills, the brand `Card`, the chat launcher, uses `--gradient-brand-deep` / `--gradient-brand-deep-135`
(#1568D4 → #0E7F9E, ≥ 4.6:1). In the dark theme `--gradient-brand-text` resolves to the bright gradient, because on
navy both stops already pass. `--border-interactive` (4.2:1 on page, 4.6:1 on card) is the only border allowed to be
a sole affordance, and it is also the off-state track of `Toggle`; `--on-ink-border-strong` is 36% white (3.1:1)
so on-ink controls keep a visible boundary. `--text-disabled` is decorative only. Progress fills in success /
warning / danger use the 700 text tones so the bar reads ≥ 3:1 against its track. Glows: `--glow-cyan`,
`--glow-blue`, `--glow-cyan-strong`; scrim: `--surface-overlay`.

**Focus and targets.** Every focusable element shows the global `:focus-visible` ring from `components/bundle.css` (2px
`--border-focus` outline, 2px offset, plus `--shadow-focus`); components never set `outline: none` inline, so the
ring is never lost (ghost and on-ink buttons included). `components/bundle.css` gives every button, tab, switch, input and select
a 24px minimum box (WCAG 2.5.8); inline text actions such as ChatBubble's Retry and Chip's remove button pad up to 24px.

**Type scale.** Fixed steps for components (`--text-h1…h4`, `--text-md`, `--text-body-lg/sm`,
`--text-caption`, `--text-overline`, `--text-micro` 11px minimum); UI control text
`--text-ui-sm/ui/ui-lg` 14/15/17 + `--text-label` 13; metric steps
`--text-metric-xl/lg/md/sm`; fluid display `--text-fluid-display/title/h2/lead`
for marketing and portfolio pages; mono `--text-mono-sm/mono/mono-lg`. Measures
`--measure-body` 68ch, `-lead` 56ch, `-display` 18ch. `.cory-metric` renders the
hero number. Do not introduce off-scale sizes.

**Typography.** Friendly geometric humanist sans, **Plus Jakarta Sans**
(chosen brand typeface, see *Caveats*), across the whole brand, with **JetBrains Mono** for
data/code readouts. Display/headlines are Extrabold (800) with tight tracking
(`-0.03em`) and snug leading; body is 16–18px at 1.5–1.65 leading. Big stat
numbers are the largest type on most screens.

**Spacing & layout.** 8px base grid. Fluid rhythm tokens replace hard-coded
values: `--gutter` 16–28px, `--grid-gap` 16–24px, `--section-y` 56–96px.
Containers `--container-max` 1200 / `-wide` 1400 / `-narrow` 760 / `-prose` 68ch.
Sticky blurred header via `.cory-header` (`--surface-header`, `--blur-header`,
`--z-sticky`). Layer tokens `--z-*`, blur `--blur-*`, opacity `--opacity-*`,
aspect ratios `--aspect-video/photo/square/portrait/story/cover`.

**Responsive.** Mobile-first breakpoints `--bp-sm` 640 · `--bp-md` 768 ·
`--bp-lg` 1024 · `--bp-xl` 1280 · `--bp-2xl` 1536 (repeat literally in
`@media`). `--cols` is 4 → 6 → 12. Helpers in `components/bundle.css`:
`.cory-container`, `.cory-section`, `.cory-grid` (+ `--span`), `.cory-cards`
(auto-fit, `--card-min`), `.cory-bento` (1 → 2 → 4 cols; `.hero` 2×2, `.span-2`,
`.span-3`, `.tall`), `.cory-split` (stacks under 1024), `.cory-hide-mobile/desktop`.
Never write a fixed `grid-template-columns` in a kit or template.

**Corners.** Soft and generous everywhere, the brand signature. The mascot tile
rounds at ~22.7% of its size. Cards use 18–24px radius, buttons and chips are
fully pill-shaped (`999px`), inputs ~14px.

**Shadows.** Soft, cool, low-spread, navy-tinted (`rgba(11,31,54,…)`), never
harsh or black. Elevation is subtle; cards sit on `--shadow-sm` and lift to
`--shadow-lg` on hover. Primary buttons carry a colored `--shadow-brand` (blue
glow).

**Borders.** Hairline 1px in cool slate (`--border-subtle` / `--border-default`).
Cards = soft border + subtle shadow + white fill. No heavy outlines, no
colored-left-border accent cards.

**Backgrounds.** Mostly flat cool off-white or white. No photographic hero, no
repeating texture, no busy patterns. Visual interest comes from: the gradient,
radial gradient *glows* (low-opacity cyan/blue circles bleeding off-edge), and
dark navy "spotlight" panels for CTAs. The mascot tile is the recurring motif.

**Motion.** Two tiers. *UI*: `--ease-out`, 140–380ms, press `--press-scale`
0.97, hover lift `--lift-hover` −3px with `--shadow-sm → --shadow-lg`. *Cinematic*
(portfolio / hero reveals): `--ease-cinematic`, `--duration-enter` 600 ·
`-cinematic` 900 · `-epic` 1200ms, `--stagger` 70ms per item via `--i`,
`--reveal-distance` 24px. `--ease-spring` only for chips/toggles. Keyframe
library `cory-fade-up / fade-in / scale-in / blur-in / clip-up / marquee / pulse /
glow-drift / shimmer`; helpers `.cory-reveal(.is-visible)`, `.cory-reveal-auto`,
`.cory-reveal-scroll` + `.cory-parallax` (scroll-driven, progressive), `.cory-marquee`,
`.cory-lift`. `prefers-reduced-motion` zeroes distances and long durations and
stops loops, always use the tokens so this applies for free. Still: fades over
flashy movement; the only infinite loops are marquee and glow drift.

**Hover / press states.** Hover = lift + deeper shadow (cards), darker gradient/
fill (buttons), color shift (links to `--blue-600`). Press = brief `scale` down.
Inputs focus to a blue border + soft `--shadow-focus` ring. Every focusable
element shows a 2px `--border-focus` outline on `:focus-visible` (global rule in
`components/bundle.css`), never remove it.

**Transparency & blur.** Used deliberately: the sticky header is
`rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`; modal scrims are navy
at ~55% with a light blur. Otherwise surfaces are opaque.

**Imagery vibe.** Cool, clean, bright, product-forward (chat previews, dashboards,
stat cards) rather than stock photography. When people appear, they're avatars/
headshots in rounded tiles. No grain, no heavy filters.

---

## ICONOGRAPHY

- **Mascot first.** The strongest "icon" in the system is the **Aleem glyph**, a
  rounded-square tile (light `#F4F5FA`, dark navy, or transparent) holding a navy
  headset/agent silhouette under a blue→cyan brim. It serves as app icon,
  favicon, chat avatar, and assistant marker. Assets:
  `assets/cory-tile.svg`, `assets/cory-tile-dark.svg`, `assets/cory-icon.svg`.
  The `Avatar` component renders it inline (no asset path needed); `CoryMark` is the same
  art as an SVG `<g>` for composing inside larger drawings.
- **UI icons: the owned Aleem set (`Icon`).** `components/src/icons/Icon.jsx`, about 100 glyphs on a
  24px grid, 2px safe area, 1.75 stroke, round caps and joins, with a 20% currentColor **duotone
  tint** under the stroke (the brand's soft, friendly weight). Everything follows `currentColor`.
  Sizes are fixed steps: 16 inline (tint off, stroke 2), 20 in controls, 24 in feature tiles,
  32 in hero tiles. Directional glyphs (arrows, chevrons, send, log-in, trending-up) carry
  `.cory-flip-rtl` and mirror in RTL; search, check, close never do. Lucide names resolve through
  `ICON_ALIASES`, so older kit code keeps working, but new work uses Aleem names. No CDN.
- **Illustrations (`Illustration`).** `components/src/illustrations/Illustration.jsx`: twelve spot
  scenes in one language, the solid Aleem tile as subject, duotone props drawn from the icon set,
  a cyan glow behind. `empty` / `search` (EmptyState via its `scene` prop), `error` / `offline`,
  `success`, `connect` / `invite` / `launch` (onboarding), `not-found` (404), `hero`, `cover`
  (deck), `email` (header). Every colour is a token, so dark theme resolves by itself; `onInk`
  switches to the light tile and cyan lines for navy panels. One illustration per screen, always
  with a title and one action.
- **No emoji-as-icon** in UI. Emoji (👋, ⚡) are reserved for conversational/
  marketing accents only.
- Feature icons sit in a tinted tile (blue-100 bg, blue-600 glyph) or, on dark
  workflow rows, a navy gradient tile with a white glyph.

---

## VISUAL FORMATS / INDEX

Folder map (root holds only the entry points):

- `docs/index.html`: the default page of the design system, the Showcase (foundations, components, templates, voice). Open this first.
- `README.md`, `assets/notes/SKILL.from-standalone.md`, `assets/notes/CLAUDE.from-standalone.md`: guidelines, Agent-Skill manifest, project rules.
- `styles.css`: global entry point (import this one file). `@import`s `tokens.css`
  and `components/bundle.css`.
- `thumbnail.html`: homepage tile. `components/bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are compiler output, never hand-edited.
- `docs/`: human how-to pages. `NotebookLM Style Guide.html` (on-brand NotebookLM prompts).
- `scripts/`: page scripts, `showcase.js` + `showcase-i18n.js` (index.html motion and Arabic copy), `doc-page.js` (paged documents).
- `pages/`: standalone documents built on the system (the 90-day career plan).
- `exports/`: rendered LinkedIn posts. `archive/`: superseded versions, audit runs and old screenshots. `uploads/`: source material (kept private, not published here).
- `_audit/`: `Audit.html` + `audit.js`, the type / clip / contrast probe.
- `tokens.json` and `tokens.css`: every token (light + dark colours, on-ink, type,
  spacing, radius, shadow, z-index, blur, opacity, aspect, layout, breakpoints).
  `components/bundle.css`: fonts, gradients and glows, motion (easings, durations,
  stagger, keyframes, reduced-motion), direction (RTL values, Arabic metrics, LTR
  isolation, icon mirroring), container, grid and bento, and base styling (resets,
  focus-visible, helpers: `.cory-gradient-text`, `.cory-eyebrow-pill`, `.cory-overline`,
  `.cory-ink`, `.cory-header`, `.cory-scrim`, `.cory-metric`, `.cory-visually-hidden`).
  `tokens/reveal.js`: the reveal engine.
- `assets/Logo/`: the Aleem logo (mark, product logo, Design System lockups, mono,
  favicon and app icons) with its usage rules in `assets/Logo/README.md`.
- `assets/Social/`: avatar, link preview, LinkedIn banner and X header.
- `assets/`: the Cory mascot files `logo-agentcory.svg`, `logo-agentcory-darkmode.svg`,
  `cory-tile.svg`, `cory-tile-dark.svg`, `cory-icon.svg`.
- `guidelines/cards/`: "Start here" (adoption, decision guide, the six states), Colors incl. dark
  theme and contrast rules, Type incl. the "Text never overflows" rule card, Spacing incl. breakpoints/grid, Motion, Brand
  (logo, mascot, voice; the Illustrations card lives with its component in `components/Illustration/`).
- `guidelines/states-audit.md`: the state-coverage audit that drove the v3 release.
- `guidelines/heuristic-audit.md`: the October 2026 heuristic / WCAG audit (findings, fixes, how to re-run `_audit/Audit.html`), including the typography pass.

**Components** (`window.AleemDesignSystem_3de1ed.*`):
- `components/src/core/`: `Button` (hover, focus ring, loading with reduced-motion fallback, `href`), `IconButton` (disabled, loading),
  `Chip` (selectable, removable, disabled), `Badge`, `Avatar` (image fallback to initials, presence `status`) + `CoryMark`.
- `components/src/icons/`: `Icon` (the owned duotone set, `ICON_NAMES`, `ICON_ALIASES`).
- `components/src/illustrations/`: `Illustration` (twelve Aleem spot scenes, `ILLUSTRATION_SCENES`).
- `components/src/surfaces/`: `Card` (generic tile: default / sunken / outline / ink /
  brand), `MediaFrame` (image / video, aspect ratio, play + mute, overlay),
  `Tabs` (underline / segmented / pills, arrow keys, disabled items), `ThemeToggle`.
- `components/src/content/`: `StatCard`, `FeatureCard`, `Testimonial`, `ChatBubble` (cory / user / system, delivery status + Retry), `TypingIndicator`.
- `components/src/forms/`: `Input` (focus, loading, warning, error, success, disabled, icons), `Select` (loading, empty, error, success),
  `Checkbox` (indeterminate, error), `Toggle` (role=switch, loading, error).
- `components/src/feedback/`: `Alert`, `Toast` + `ToastRegion`, `Dialog` (focus trap, Escape, `tone="danger"`), `Tooltip`, `EmptyState` (cory / neutral voice, `scene` illustration, onInk).
- `components/src/status/`: `Skeleton` + `SkeletonPreset`, `LoadingRegion`, `Spinner`, `ProgressBar`.
- `components/src/feedback/` also holds `ErrorState` and `StateView`.
- `components/src/navigation/`: `SiteHeader`, `SiteFooter`, `Breadcrumb`, `Pagination`, `Menu`, `Stepper`. `forms/` also holds `DateField`. `components/src/brand/`: `SignalPattern`, `Hero`. `components/src/data/`: `Table`.
- `components/src/ai/`: `AIResponse` (+ `Citation`, `SourceList`), `ConfidenceMeter`, `AgentSteps`, `ApprovalCard`, `PromptInput`.
- `components/src/content/` also holds `ProjectCard` and `Timeline`; `surfaces/` holds `Accordion`; `forms/` holds `RadioGroup` and `Textarea`.

**UI kits:**
(Design System tab group "UI kits".)
- `ui_kits/website/`: marketing homepage (header, hero, workflows, features,
  testimonials, CTA, footer, live chat widget with typing / failed / offline states + demo Dialog with validation).
- `ui_kits/roi-calculator/`: the interactive ROI calculator tool (field errors, empty results state, live region).

**Templates** (`templates/`: copy-ready starting points for consuming projects):
- `landing-page/`: full marketing homepage (hero, how-it-works, features, proof, CTA, footer; chat launcher toggleable via Tweaks).
- `pitch-deck/`: 6-slide 16:9 sales deck.
- `one-pager/`: printable Letter-size product overview sheet.
- `outreach-email/`: 600px marketing email from Aleem.

- Plus 17 LinkedIn bento and carousel post templates (`*-bento/`, `*-carousel/`), `portfolio/`, `component-specs-cover/`.

---

## CAVEATS / SUBSTITUTIONS
- **Typeface decision (October 2026).** **Plus Jakarta Sans** is the chosen brand
  typeface (display, headings, body), with **JetBrains Mono** for data and **IBM Plex
  Sans Arabic** for Arabic. Loaded from Google Fonts at the top of `components/bundle.css`; to change
  it later, swap that one import and the type families in `tokens.json`.
- **Logo (November 2026).** The Aleem logo is in `assets/Logo/`. It is drawn as outlines from
  circles and pills, because the brand font could not be embedded. The Cory mascot files
  (`logo-agentcory*.svg`, `cory-*.svg`) remain the mascot's assets. The admissions UI kits and the
  four core templates keep that logo on purpose: they document that product as a case study.
- **Icon set is owned.** The Aleem `Icon` set replaced the Lucide CDN substitute; Lucide names still resolve via aliases.
  The LinkedIn bento templates still fetch a few `lucide-static` glyphs for their published artwork.
- **Dashboard omitted by design.** Only publicly-visible surfaces were recreated;
  the internal admissions dashboard was not invented.
- Brand colors, the mascot, and copy voice are taken **directly** from the live
  site and brand asset, and are accurate.

## Logo

The logo belongs to Mohammad Abdul Aleem, Lead AI Product Designer, and to this system. A navy tile holds **AIUX** on a two-by-two grid: AI on top, UX below. AIUX is the field, AI products people can trust. The **I** is the only letter in the gradient. It is the AI, and it is the "I" in "I design the gap". Beside the tile, **Aleem** says who does the work. The tile and the name are drawn in one set of letters as outlines, so they are never retyped in a font. In running text, write "Aleem" or "Aleem | AIUX".

- **Primary logo:** `assets/Logo/aleem-logo.svg`, or `aleem-logo-dark.svg` on dark backgrounds.
- **This system's own docs:** `aleem-ds-logo.svg`, or `aleem-ds-stacked.svg` where space is narrow.
- **Tile alone:** `aleem-mark.svg`. Use `aleem-favicon.svg` below 24px.
- **One colour:** the `-mono-` files.
- **Clear space:** a quarter of the tile on every side.
- **Minimum sizes:**
  - Mark: 24px. The favicon file works down to 16px.
  - Primary logo: 20px tall.
  - Design system lockups: 40px tall.
- **Never:**
  - recolour, stretch or outline the logo;
  - spread the gradient past the I;
  - place the navy tile on a navy background (use the `-dark` files).

Every file, its colours and the favicon tags are listed in `assets/Logo/README.md`. The Logo card under Brand shows them all. Ready-made social images are in `assets/Social/`: an avatar, a link preview, and LinkedIn and X headers.

The full brand book is the **Aleem AIUX Brand Guidelines** page (https://claude.ai/artifact/HoroUTfduTyKMRTwDojkWe). It covers:
- the logo idea, the logo versions and which background each is for;
- clear space and misuse;
- colour, with HEX, RGB and CMYK values;
- type and voice.

The guidelines page ships with the files as the Aleem AIUX Brand Kit.

## Principles, Laws of UX, mobile and the quality bar

- `guidelines/laws-of-ux.md`: the seven design principles and how each of the 30 Laws of UX applies here.
- `guidelines/responsive-and-mobile.md`: the viewport, breakpoints, touch, safe areas and the widths to test.
- `guidelines/creative-quality-bar.md`: the scorecard every generated page, post, deck or component must pass at 8 out of 10 or better on every line.

Check a new screen against all three alongside the accessibility gate.

## Building with this system (chats and Claude Code)

**One source.** `tokens.json` holds every token and `tokens.css` is compiled from it. `styles.css` imports `tokens.css` and `components/bundle.css` (fonts, gradients, glows, motion, direction, grid helpers, base styling), so previews, templates, posts, UI kits and the PNG exporter all read the same values. Change a token on this page and it reaches all of them. If you edit `tokens.json` as a file instead, regenerate `tokens.css` in the same layout (its first line marks it as generated).

**Read first, in this order:** this README, `tokens.json`, then for each component you use its `components/<Component>/README.md` and `components/<Component>/<Component>.d.ts` (all types: `components/index.d.ts`), then `guidelines/laws-of-ux.md`.

**In a chat (claude.ai).**
- A page you publish: put `tokens.css` and `components/bundle.css` in one `<style>`, load React and ReactDOM 18.3.1 (UMD builds from cdnjs), then inline `components/bundle.js` in a classic `<script>`. The bundle holds two literal `</script` strings inside comments: write each as `<\/script` in your copy. Mount components from `window.AleemDesignSystem_3de1ed` (`const { Button, StatCard } = window.AleemDesignSystem_3de1ed`).
- A deck, document or image that runs no scripts: take colours, type and spacing from `tokens.json`, and copy rules from Content fundamentals. Use the logo and mascot files under `assets/`; never redraw them.

**In Claude Code (a repository).**
- Copy `styles.css`, `tokens.css`, `components/bundle.css` and `components/bundle.js` keeping their relative paths, plus `tokens/reveal.js` and `scripts/png-export.js` when you use the templates. Link `styles.css`, load React 18 as globals, then `components/bundle.js`.
- To compile the components into an app instead, use `components/src/<group>/*.jsx`: they import only React and each other. Keep `styles.css` loaded.
- Templates and posts (`templates/<slug>/`, `posts/<slug>/`) load `../../styles.css` and `../../components/bundle.js` through their `ds-base.js`: keep the folder layout, or edit the one `base` line in `ds-base.js`.

**Every time.** Set `data-theme="light"` or `"dark"` on `<html>` (fixed artboards pin it beside `data-screen-label`), and `dir="rtl" lang="ar"` for Arabic. Use semantic tokens only, one `primary` per view, and the decision guide above to pick components. Start every HTML file from the viewport block in `guidelines/responsive-and-mobile.md`, check it at 360, 768 and 1440 wide, and score it on `guidelines/creative-quality-bar.md` before you show it: 8 or more on every line, or revise.

**Kept in the GitHub repo only.** This book also names files that were not imported here: `thumbnail.html`, `pages/`, `archive/`, `_adherence.oxlintrc.json`, `scripts/build-kits.mjs`, and the probes `_audit/run.mjs`, `responsive.mjs`, `contrast-pixels.mjs`, `perf.mjs` and `previews.mjs`. They are kept in the private source repository and are not published here.

**Assets.** The Aleem logo is in `assets/Logo/`. Use `aleem-logo.svg` or `-dark.svg` for products, `aleem-ds-logo.svg` or `-dark.svg` for this system, and `aleem-favicon.svg` in browser tabs. Copy the files; never redraw or retype them. The Cory mascot tiles and the older wordmark sit directly under `assets/`, where the bundle and the kits link them. `logo-agentcory.svg` (navy `#0B1F36` wordmark) goes on light grounds, `logo-agentcory-darkmode.svg` (white wordmark) on dark grounds; `cory-tile.svg` is the light `#F4F5FA` tile, `cory-tile-dark.svg` the navy tile, `cory-icon.svg` the glyph alone in navy. Each carries the blue→cyan brim; an `<img>` keeps these colours, it cannot recolour them.
