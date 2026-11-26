<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/Logo/aleem-ds-logo-dark.svg">
    <img src="assets/Logo/aleem-ds-logo.svg" alt="Aleem AIUX Design System" height="56">
  </picture>
</p>

<p align="center"><strong>AI is fast. Trust is slow. I design the gap.</strong></p>

<p align="center">
  <a href="https://aiuxaleem.github.io/aleem-aiux-design-system/">Live showcase</a> ·
  <a href="#components">Components</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="https://aiuxaleem-portfolio-app.vercel.app">Portfolio built with it</a> ·
  <a href="GUIDE.md">Full guide</a>
</p>

---

The design system of **Mohammad Abdul Aleem**, Lead AI Product Designer, published as **Aleem | AIUX**. It holds the tokens, components, templates and rules I use to design AI products people can trust: AI that **shows its sources**, **says how sure it is** and **asks before it acts**.

| | |
|---|---|
| **58 React components** | One script, `components/bundle.js`, typed in `components/index.d.ts` |
| **7 AI trust patterns** | AIResponse, Citation, SourceList, ConfidenceMeter, AgentSteps, ApprovalCard, PromptInput |
| **Tokens** | `tokens.css` and `tokens.json`: colour, type, spacing, radius, shadow, motion, targets, inline-logo colours |
| **Two themes, two directions** | Light and dark; English left to right and Arabic right to left |
| **Accessibility** | WCAG 2.1 AA colour pairs, 24 px minimum targets (44 px on touch), visible focus everywhere |
| **25 templates, 14 posts** | Landing page, pitch deck, one-pager, email and LinkedIn layouts, built only from the system |

## Quick start

No build step. Link one stylesheet and one script:

```html
<link rel="stylesheet" href="https://aiuxaleem.github.io/aleem-aiux-design-system/styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://aiuxaleem.github.io/aleem-aiux-design-system/components/bundle.js"></script>

<div id="root"></div>
<script>
  const { AIResponse, Citation } = window.AleemDesignSystem_3de1ed;
  const h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(AIResponse, {
      confidenceLevel: 'high',
      sources: [{ title: 'WCAG 2.2', domain: 'w3.org', url: 'https://www.w3.org/TR/WCAG22/' }]
    }, 'Every control needs a visible focus indicator', h(Citation, { n: 1 }), '.')
  );
</script>
```

Then:

1. **Use semantic tokens only** in your own CSS: `--text-*`, `--surface-*`, `--border-*`, `--action-*`. The raw scales (`--navy-800`, `--blue-500`) belong to `tokens.css`.
2. **Pick a theme and a direction:** `<html data-theme="dark">`, `<html dir="rtl" lang="ar">`, or drop in `ThemeToggle` and `DirectionToggle`.
3. **Answer the six states:** default, loading, empty, error, partial and success. For a region that fetches data, `StateView` renders all of them from one `status` prop.
4. **Read a component's API page before you use it.** Props, parts and examples are in [`api/components/`](api/components/).

To copy the files instead, clone the repo and link `styles.css` and `components/bundle.js` relatively.

## Designing AI features

Every AI surface answers five questions before anyone has to ask. Each answer is a component.

| Question | Answer | Component |
|---|---|---|
| Is this AI? | Label it, every time. An AI never writes as if it were a person. | `AIResponse`, `Avatar kind="assistant"` |
| Where did it come from? | Every stated fact carries a citation. No sources, no facts. | `Citation`, `SourceList` |
| How sure is it? | Say it in words and pips, never colour alone. Never invent a number. | `ConfidenceMeter` |
| What is it doing? | Name every status: Working, Needs you, Failed. | `AgentSteps`, `LoadingRegion` |
| Can I stop or undo it? | Streaming has Stop. Anything that sends, spends or deletes waits for approval and says whether it can be undone. | `ApprovalCard`, `PromptInput` |

See them running in the [live showcase](https://aiuxaleem.github.io/aleem-aiux-design-system/#trust).

## Components

58 components in 12 groups, plus a full page example. Every one has a live preview (light, dark and right to left) and an API page.

**AI patterns**

| Component | Use it for | |
|---|---|---|
| `ConfidenceMeter` | How sure an AI result is: five pips plus words ("High confidence"), so it never relies on colour alone. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ConfidenceMeter/preview.html) · [API](api/components/ConfidenceMeter.md) |
| `Citation` | Inline numbered marker that ties a claim to its source; links to it when there is a URL. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Citation/preview.html) · [API](api/components/Citation.md) |
| `SourceList` | Numbered source tiles, used by AIResponse and available for custom layouts. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/SourceList/preview.html) · [API](api/components/SourceList.md) |
| `AIResponse` | One AI answer, designed to earn trust: it says it is AI, shows how sure it is, cites its sources inline and lists… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/AIResponse/preview.html) · [API](api/components/AIResponse.md) |
| `AgentSteps` | A live log of what an agent is doing, step by step, so people can follow the work and step in when it needs them. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/AgentSteps/preview.html) · [API](api/components/AgentSteps.md) |
| `ApprovalCard` | Human in the loop: an agent proposes an action and waits. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ApprovalCard/preview.html) · [API](api/components/ApprovalCard.md) |
| `PromptInput` | The composer for talking to an AI: grows with the text, sends on Enter (Shift + Enter for a new line), offers… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/PromptInput/preview.html) · [API](api/components/PromptInput.md) |

**Core**

| Component | Use it for | |
|---|---|---|
| `CoryMark` | The Cory mascot mark, kept for the admissions assistant case study. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/CoryMark/preview.html) · [API](api/components/CoryMark.md) |
| `Avatar` | Rounded-tile avatar for people, the AI assistant, Aleem himself, and the admissions case-study mascot. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Avatar/preview.html) · [API](api/components/Avatar.md) |
| `Badge` | Pill label for statuses and inline metrics, the chips that pepper Aleem's marketing and dashboards. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Badge/preview.html) · [API](api/components/Badge.md) |
| `Button` | Pill-shaped CTA button, use for any primary or secondary action; one primary (brand gradient) per view. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Button/preview.html) · [API](api/components/Button.md) |
| `Chip` | Selectable pill for filter bars, tag pickers, and toggles, the interactive counterpart to Badge. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Chip/preview.html) · [API](api/components/Chip.md) |
| `IconButton` | Round icon-only button, close, menu, play, mute, theme toggle. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/IconButton/preview.html) · [API](api/components/IconButton.md) |

**Forms**

| Component | Use it for | |
|---|---|---|
| `Checkbox` | Labelled checkbox for consent, multi-select lists, and bulk selection. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Checkbox/preview.html) · [API](api/components/Checkbox.md) |
| `Input` | Labelled text field with soft rounding and a blue focus ring. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Input/preview.html) · [API](api/components/Input.md) |
| `Select` | Dropdown for 5+ mutually exclusive options (institution type, role, time zone). | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Select/preview.html) · [API](api/components/Select.md) |
| `Toggle` | Switch for settings that take effect immediately (notifications, autoplay, dark theme in a settings page). | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Toggle/preview.html) · [API](api/components/Toggle.md) |
| `RadioGroup` | One choice from a short list (2 to 5 options), all visible at once. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/RadioGroup/preview.html) · [API](api/components/RadioGroup.md) |
| `Textarea` | Multi-line text for messages, briefs and feedback. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Textarea/preview.html) · [API](api/components/Textarea.md) |
| `DateField` | A date, or a date and time. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/DateField/preview.html) · [API](api/components/DateField.md) |

**Feedback**

| Component | Use it for | |
|---|---|---|
| `FeedbackIcon` | The shared tone glyph used by Alert, Toast and Dialog. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/FeedbackIcon/preview.html) · [API](api/components/FeedbackIcon.md) |
| `Alert` | Inline feedback banner for page- or section-level messages that stay until resolved (a Toast is for brief… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Alert/preview.html) · [API](api/components/Alert.md) |
| `Dialog` | Modal for a focused task (short form, confirmation) that must finish before the page continues. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Dialog/preview.html) · [API](api/components/Dialog.md) |
| `EmptyState` | Use this wherever a list, panel or search result has nothing to show. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/EmptyState/preview.html) · [API](api/components/EmptyState.md) |
| `Toast` | Brief confirmation after an action ("Saved", "Call booked", "Message sent"), gone in 6 seconds. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Toast/preview.html) · [API](api/components/Toast.md) |
| `ToastRegion` | Hosts toasts in one live region so screen readers announce them. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ToastRegion/preview.html) · [API](api/components/ToastRegion.md) |
| `Tooltip` | Names an icon-only control or clarifies a short label on hover and keyboard focus. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Tooltip/preview.html) · [API](api/components/Tooltip.md) |
| `ErrorState` | A whole region that failed. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ErrorState/preview.html) · [API](api/components/ErrorState.md) |
| `StateView` | One region, every state, one prop. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/StateView/preview.html) · [API](api/components/StateView.md) |

**Status**

| Component | Use it for | |
|---|---|---|
| `ProgressBar` | Progress when it can be measured (uploads, imports, multi-step onboarding) or an indeterminate sweep for a… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ProgressBar/preview.html) · [API](api/components/ProgressBar.md) |
| `Skeleton` | The bones of a loading layout. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Skeleton/preview.html) · [API](api/components/Skeleton.md) |
| `Spinner` | Activity indicator for one action or a small area where the layout is not known yet. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Spinner/preview.html) · [API](api/components/Spinner.md) |
| `SkeletonPreset` | Ready-made skeletons with the same geometry as the real components, so the swap from loading to loaded never moves… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/SkeletonPreset/preview.html) · [API](api/components/SkeletonPreset.md) |
| `LoadingRegion` | Wrap any region that loads. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/LoadingRegion/preview.html) · [API](api/components/LoadingRegion.md) |

**Surfaces**

| Component | Use it for | |
|---|---|---|
| `Card` | Blank surface tile. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Card/preview.html) · [API](api/components/Card.md) |
| `DirectionToggle` | Reading-direction switch. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/DirectionToggle/preview.html) · [API](api/components/DirectionToggle.md) |
| `MediaFrame` | Image / video in a rounded, aspect-locked tile. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/MediaFrame/preview.html) · [API](api/components/MediaFrame.md) |
| `Tabs` | Tabs, segmented control, or filter bar, one component, animated indicator. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Tabs/preview.html) · [API](api/components/Tabs.md) |
| `ThemeToggle` | Light and dark theme switch. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ThemeToggle/preview.html) · [API](api/components/ThemeToggle.md) |
| `Accordion` | Questions and answers, process details or long specs that most readers skip. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Accordion/preview.html) · [API](api/components/Accordion.md) |

**Content**

| Component | Use it for | |
|---|---|---|
| `ChatBubble` | One message in a chat: the AI assistant or Aleem at inline-start, the visitor at inline-end, and quiet system notes… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ChatBubble/preview.html) · [API](api/components/ChatBubble.md) |
| `FeatureCard` | Benefit/feature card: icon tile, heading, copy, and capability tags. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/FeatureCard/preview.html) · [API](api/components/FeatureCard.md) |
| `StatCard` | Headline metric: Aleem leads with big numbers everywhere. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/StatCard/preview.html) · [API](api/components/StatCard.md) |
| `Testimonial` | Customer testimonial card: leads with a gradient result metric, then quote and attribution. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Testimonial/preview.html) · [API](api/components/Testimonial.md) |
| `TypingIndicator` | Show between the visitor's message and the reply, so the pause reads as "thinking", never as "broken". | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/TypingIndicator/preview.html) · [API](api/components/TypingIndicator.md) |
| `ProjectCard` | A case study in the portfolio grid: cover, context line (client, role, year), title, one-line outcome, the proof… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/ProjectCard/preview.html) · [API](api/components/ProjectCard.md) |
| `Timeline` | Experience or milestones, newest first: period, title, organisation, place, a summary and optional highlights. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Timeline/preview.html) · [API](api/components/Timeline.md) |

**Navigation**

| Component | Use it for | |
|---|---|---|
| `SiteHeader` | The top bar of a site: brand, primary links and one action. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/SiteHeader/preview.html) · [API](api/components/SiteHeader.md) |
| `Breadcrumb` | Shows where a page sits, and lets people step back up. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Breadcrumb/preview.html) · [API](api/components/Breadcrumb.md) |
| `Pagination` | Moves through pages of a list or table. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Pagination/preview.html) · [API](api/components/Pagination.md) |
| `SiteFooter` | The bottom of a site: who it is, where everything is, and the legal line. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/SiteFooter/preview.html) · [API](api/components/SiteFooter.md) |
| `Menu` | A dropdown of actions on one thing: the "More" on a card or table row. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Menu/preview.html) · [API](api/components/Menu.md) |
| `Stepper` | Shows progress through a short, ordered flow of 2 to 6 steps: an enquiry form, onboarding, a booking. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Stepper/preview.html) · [API](api/components/Stepper.md) |

**Data**

| Component | Use it for | |
|---|---|---|
| `Table` | A data table with real table semantics. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Table/preview.html) · [API](api/components/Table.md) |

**Brand**

| Component | Use it for | |
|---|---|---|
| `SignalPattern` | The brand's signature graphic: rows of pills, like tokens in a design system or words in an AI answer. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/SignalPattern/preview.html) · [API](api/components/SignalPattern.md) |
| `Hero` | The opening of a page: one idea, one gradient phrase, one primary action. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Hero/preview.html) · [API](api/components/Hero.md) |

**Icons**

| Component | Use it for | |
|---|---|---|
| `Icon` | Owned Aleem icon set: 24px grid, 1.75 stroke, round caps, 20% currentColor duotone tint. | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Icon/preview.html) · [API](api/components/Icon.md) |

**Illustrations**

| Component | Use it for | |
|---|---|---|
| `Illustration` | Aleem spot illustrations: the solid mascot tile is the subject, props around it are duotone shapes from the icon… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/Illustration/preview.html) · [API](api/components/Illustration.md) |

**Page examples**

| Component | Use it for | |
|---|---|---|
| `PortfolioHome` | A full portfolio home page built only from this system, to copy from and to prove the parts work together:… | [Preview](https://aiuxaleem.github.io/aleem-aiux-design-system/components/PortfolioHome/preview.html) · [API](api/components/PortfolioHome.md) |

## Foundations

- **Colour.** Navy ink for words, a blue to cyan signal gradient for the moments that matter, cool slate neutrals. Every text pair passes AA in both themes. Values: [`api/tokens.md`](api/tokens.md).
- **Type.** Plus Jakarta Sans for the brand, IBM Plex Sans Arabic for Arabic, JetBrains Mono for numbers. Display weights run heavy with tight tracking; headlines use fluid sizes and balanced wrapping.
- **Space and shape.** A 4 px spacing scale, soft radii, navy-tinted shadows, pill buttons.
- **Motion.** Short and purposeful: 140 ms press, 220 ms hover, 380 ms panels. Every animation respects `prefers-reduced-motion`.
- **Direction.** Layout is logical everywhere (`margin-inline-start`, never `margin-left`), so Arabic mirrors for free. Numbers, code and URLs stay left to right.
- **Solid call to action.** `--action-solid`, `--radius-button`, `--shadow-button` and `--highlight-inset` make the pill button with the travelling arrow; white text passes AA in both themes.
- **Glass, field and fluid display.** `--surface-glass`, `--field-dot`, `--field-line`, `--text-fluid-hero` and `--text-fluid-statement`, proven first on the portfolio. Details in [`GUIDE.md`](GUIDE.md#tokens-from-the-portfolio-v10).
- **Logo.** The AIUX tile and the Aleem name, as outlined SVGs. Rules and every file: [`assets/Logo/README.md`](assets/Logo/README.md).

## Rules every surface follows

- **Text never overflows.** No clipping, no fixed heights; shorten the copy or let it wrap. `_audit/Audit.html` checks every page.
- **Accessibility gate.** AA contrast, visible focus, 24 px targets (44 px on touch), labels on every control, motion that can be turned off.
- **One primary action per view.**
- **Writing.** Proof first, never oversold: no "revolutionary", no "seamless". No em dashes. Only real, measured numbers.

The complete rulebook, including motion recipes, RTL details, the decision guide for controls and the voice for each audience, is in [`GUIDE.md`](GUIDE.md). Deeper references are in [`guidelines/`](guidelines/): Laws of UX, heuristic audit, states audit, responsive and mobile, and the creative quality bar.

## Built with it

My portfolio, **[aiuxaleem-portfolio-app.vercel.app](https://aiuxaleem-portfolio-app.vercel.app)**, runs on this system's tokens, type, logo and AI trust rules, rebuilt as Astro components. It is dark by default, with Arabic as a first-class language. Case studies:

- [Colaberry Design System](https://aiuxaleem-portfolio-app.vercel.app/case-studies/colaberry-design-system): a new brand is a token file, not a rebuild.
- [One kit, five brands](https://aiuxaleem-portfolio-app.vercel.app/case-studies/multi-brand-component-system): five brands through one library, each look stored as token data.
- [A design system that audits its own product](https://aiuxaleem-portfolio-app.vercel.app/case-studies/design-system-audit-skill): an audit skill that fixed issues across 97 UAT screens.
- [Loan onboarding, built on the system](https://aiuxaleem-portfolio-app.vercel.app/case-studies/lending-onboarding-design-system): screens built strictly from the client's design system.

The system also documents one product in full as a case study: the AI admissions assistant built at Colaberry (its mascot is Cory). Its website and ROI calculator kits are in [`ui_kits/`](ui_kits/), and most of the templates come from it.

## What's in the repo

| Path | What it holds |
|---|---|
| `styles.css` | The one stylesheet to link: imports `tokens.css` and `components/bundle.css` |
| `tokens.css`, `tokens.json` | Every token as CSS variables and as data |
| `components/bundle.js`, `bundle.css`, `index.d.ts` | The component library, its styles and its TypeScript types |
| `components/<Name>/` | Each component's preview page, README and types |
| `components/src/` | The JSX source, by group |
| `api/` | Generated API pages: one per component, plus `tokens.md` |
| `guidelines/` | Guideline cards (`guidelines/cards/`) and long-form references |
| `templates/`, `posts/` | 25 templates and 14 LinkedIn posts built from the system |
| `ui_kits/` | Two full product kits from the admissions assistant case study |
| `assets/` | Logo, social images, template previews, mascot |
| `docs/` | The NotebookLM style guide |
| `_audit/` | The overflow and contrast probe every page must pass |
| `index.html` | The live showcase |

## How this repo is made

The system is designed in Claude (Claude Design) and published here. A few files are adjusted for the public site: component previews load React themselves so they run on GitHub Pages, and private source material is left out.

---

<p align="center">Aleem | AIUX Design System · by <a href="https://aiuxaleem-portfolio-app.vercel.app">Mohammad Abdul Aleem</a></p>
