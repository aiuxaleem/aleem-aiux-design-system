# Laws of UX and design principles

How Aleem applies the 30 Laws of UX collected by Jon Yablonski at lawsofux.com. Each law gets a one-line meaning and the rule it becomes here, naming the components and tokens that carry it. Read the principles first: when a law and a principle pull apart, the principle wins.

## Design principles

1. **Lead with the number.** The biggest thing on most screens is a metric (`StatCard`, `.cory-metric`, `text-metric-*`). Copy explains the number, it never competes with it.
2. **Aleem speaks first, and kindly.** Conversational surfaces use Aleem's first-person voice ("I couldn't save that"). Admin surfaces stay neutral ("Sync failed"). Nothing blames the user.
3. **One signal per view.** One `primary` button, one gradient moment (`--gradient-brand-text` or `--gradient-brand-deep`), one signature motion. Everything else is navy, slate and white.
4. **Every surface answers six states.** Default, loading, empty, error, partial and success, each with the component the decision guide names.
5. **Nothing hides, nothing overflows.** Content is visible before any script runs, text wraps instead of clipping, and every page passes `_audit/Audit.html` with `type: 0` and `clip: 0`.
6. **Accessible in both themes and both directions.** WCAG 2.2 AA in light and dark, LTR and RTL, with semantic tokens only.
7. **Soft, calm and cool.** Generous radii (`radius-xl`, `radius-pill`), low navy-tinted shadows (`shadow-sm` to `shadow-lg`), restrained motion (`--duration-base`, `--press-scale`).

## Perception: how people group what they see

- **Law of Proximity.** Things placed close together read as one group. **In Aleem:** tight gaps inside a group (`space-2` inside buttons and pills, `space-3` between small controls) and wider gaps between groups (`space-6` card padding, `space-8` between card groups). A field's label, hint and error sit directly on the field.
- **Law of Common Region.** Things inside a shared boundary read as a group. **In Aleem:** one idea per `Card` or bento tile; feedback lives in a tinted panel (`surface-info` with `border-info`, and the same pairing for success, warning and danger).
- **Law of Similarity.** Things that look alike read as related, even apart. **In Aleem:** a tone always means the same thing across `Badge`, `Alert`, `Toast` and `ProgressBar`; every action is pill-shaped (`radius-pill`); every link is `text-link`. Never reuse a tone colour for decoration.
- **Law of Uniform Connectedness.** Visually connected things read as more related than separate ones. **In Aleem:** segmented `Tabs` share one track, a chat thread sits in one column, `ToastRegion` stacks its toasts, and process steps are joined with `.cory-draw` lines.
- **Law of Prägnanz.** People read complex shapes in their simplest form. **In Aleem:** the mascot is one rounded tile (`radius-tile`), `Icon` glyphs sit on a 24px grid with a 1.75 stroke, and a screen carries at most one `Illustration`.

## Decisions and memory: how people choose and remember

- **Hick's Law.** More options, and harder ones, mean slower decisions. **In Aleem:** one `primary` per view, a second action as `secondary`, and the decision guide in this book for everything else.
- **Choice Overload.** Too many options overwhelm. **In Aleem:** 2 to 4 exclusive views use `Tabs variant="segmented"`; 5 or more options move into `Select`; filter rows of `Chip` stay short enough to scan in one line.
- **Miller's Law.** Working memory holds about seven items, give or take two. Use it to chunk, not as a hard cap. **In Aleem:** metric rows hold three or four `StatCard`s, as the hero and ROI sections do.
- **Chunking.** Grouping small pieces into meaningful wholes makes them easier to take in. **In Aleem:** numbers carry separators ("2,100"), phone fields show the shape they expect ("(555) 000-0000"), and long copy sits in `.cory-prose` (`measure-body` 68ch).
- **Working Memory.** People hold information briefly while they work. **In Aleem:** keep context on screen. The chat log stays visible while Aleem replies, a `Select` shows its choice, and a `Dialog` title restates the action and the count ("Delete 3 inquiries?").
- **Serial Position Effect.** People remember the first and last items in a series best. **In Aleem:** put the action a screen exists for first or last, never buried in the middle; the site header ends on its primary call to action, "Try Aleem Now".
- **Von Restorff Effect.** The one item that differs is the one remembered. **In Aleem:** reserve the gradient for the hero metric (`StatCard gradient`) or the primary call to action. Difference never relies on colour alone: every tone carries a glyph and words.
- **Selective Attention.** People notice what serves their goal and filter the rest. **In Aleem:** glows (`--glow-cyan`, `--glow-blue`) stay behind content, never on it; an `Alert` sits at the top of the region it is about; nothing styled to look like an ad.
- **Mental Model.** People act on what they believe a system does. **In Aleem:** Aleem is an assistant who hands off to people, so the handoff is shown (`ChatBubble from="system"`: "Aleem handed you to Maria"). A `Toggle` applies at once; a `Checkbox` waits for submit.
- **Jakob's Law.** People expect your product to work like the ones they already use. **In Aleem:** the chat follows messaging norms: user bubbles at the inline end, typing dots (`TypingIndicator`), delivery ticks and Retry. Forms use native semantics (`role="switch"`, real labels).
- **Cognitive Bias.** Systematic thinking errors shape judgment. **In Aleem:** present numbers honestly. Label assumptions ("Estimates, not guarantees") and never use fake urgency or countdowns.

## Speed and effort: how fast and how hard it feels

- **Doherty Threshold.** Work flows when the system answers within about 400ms. **In Aleem:** UI motion stays at or under `--duration-slow` (380ms); any wait over 300ms shows a state; `TypingIndicator` appears the moment the user sends; after 8 seconds a system note says Aleem is still working.
- **Fitts's Law.** Bigger, closer targets are faster to hit. **In Aleem:** every control is at least 24px (44px on touch); `.cory-btn` is 44px tall and `size="lg"` 52px; inline actions such as Retry pad up to 24px.
- **Cognitive Load.** Every element costs mental effort. **In Aleem:** semantic tokens only, labels above fields, one hint line instead of a paragraph, and plain words over jargon.
- **Postel's Law.** Accept input liberally, send output strictly. **In Aleem:** accept a phone number in any format, validate on blur, and say how to fix it ("Enter a 10-digit number"). Output is consistent: numbers and codes are isolated LTR.
- **Paradox of the Active User.** People start using software without reading the manual. **In Aleem:** teach in place. `hint` text on fields, `Tooltip` on every icon-only button, and an `EmptyState` with one clear action.
- **Tesler's Law.** Some complexity cannot be removed, only moved. **In Aleem:** Aleem carries it. The assistant qualifies, books and hands off; the screen shows the outcome and the next step, not the machinery.
- **Occam's Razor.** Among equal options, choose the simplest. **In Aleem:** use an existing component before inventing one, and cut any element that carries no meaning. No busy patterns, no decorative emoji.
- **Pareto Principle.** Roughly 80% of the effect comes from 20% of the causes. **In Aleem:** the stable set (`Button`, `Badge`, `Avatar`, `Input`, `StatCard`, `FeatureCard`, `Testimonial`, `ChatBubble`) carries most screens: polish and audit those first.
- **Parkinson's Law.** Work expands to fill the time it is given. **In Aleem:** the promise is a reply in under 60 seconds, so flows are short: ask only what the next step needs and prefill what is known.
- **Flow.** Deep, energised focus on a task. **In Aleem:** don't interrupt. Confirm with a `Toast`, not a `Dialog`; keep `Dialog` for must-finish or destructive steps; validate on blur, never per keystroke.

## Emotion and motivation: how it feels and what keeps people going

- **Aesthetic-Usability Effect.** Attractive designs are perceived as easier to use. **In Aleem:** the polish earns patience, not a pass. The accessibility gate and the audit probe still decide what ships.
- **Peak-End Rule.** People judge an experience by its peak and its end. **In Aleem:** make the end a good moment: a success `Toast` in Aleem's voice ("Call requested", "I'll ring you in under 60 seconds") and a clear next step. Errors never say "Oops" and never blame.
- **Goal-Gradient Effect.** Motivation grows as the goal gets closer. **In Aleem:** show distance left. `ProgressBar` with a label ("Step 4 of 4"), `showValue` on long imports, and the sent tick on a `ChatBubble`.
- **Zeigarnik Effect.** Unfinished tasks stay on people's minds. **In Aleem:** surface what is unfinished: "3 of 8 selected" on an indeterminate `Checkbox`, "Draft saved" with Undo, and a failed message that keeps its Retry.

Source: [Laws of UX](https://lawsofux.com/), Jon Yablonski. The meanings above are paraphrased.
