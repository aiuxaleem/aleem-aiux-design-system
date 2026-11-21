# Creative quality bar

Anything generated with Aleem must reach 8 out of 10 before anyone sees it. That covers pages, components, posts, decks, emails and illustrations. Score it on the eight lines below. The overall score is the lowest line, not the average: one weak line makes a weak piece.

If any line is under 8, fix that line first and score again. When you hand the work over, give the score and name the weakest line.

## The scorecard

1. **Unmistakably Aleem.**
   - Cover the logo: the brand should still be obvious.
   - At least three signatures are present: navy ink, one blue to cyan signal moment, the `SignalPattern` pill rows, the AIUX mark (or `CoryMark` inside the admissions case study), a lead metric, soft corners (`radius-xl`, `radius-pill`), and off-edge glows.
   - 10 means nobody could mistake it for another brand.
2. **One idea, one focal point.**
   - A reader gets what it is, why it matters and what to do next within five seconds.
   - There is one `h1`, one primary action and one gradient moment.
   - 10 means the eye lands where you meant it to, first time.
3. **Composition with intent.**
   - The layout is chosen, not defaulted. Use a bento with one hero tile, a split, an ink spotlight panel, or an asymmetric stack. Avoid a centred column of identical boxes.
   - Include at least one strong scale contrast, for example a 56px or larger metric against a 13px label.
   - 10 means the layout itself tells the story.
4. **Real, specific content.**
   - Use true numbers, Aleem's first-person voice, and the reader's world: hiring managers and teams shipping AI products (agents, trust, design systems). In the admissions case study, the reader's world is inquiries, counsellors and enrollment.
   - AI surfaces answer the five trust questions in the brand book: is this AI, where did it come from, how sure is it, what is it doing, can I stop or undo it.
   - No lorem ipsum, no invented statistics, no filler adjectives.
   - 10 means every word earns its place, and the headline states an outcome, not a feature.
5. **Craft and system fidelity.**
   - Use semantic tokens only, the type scale, and the spacing rhythm (`space-*`, `--section-y`).
   - Use at most three radii and three elevations on a page. Align edges and give cards in a row equal heights.
   - Icons come from the owned set, and no value is hard-coded.
   - 10 means a designer would change nothing.
6. **Responsive and mobile.** It passes `guidelines/responsive-and-mobile.md` at every listed width, in both themes and in RTL. 10 means the 360px version feels designed, not squeezed.
7. **Accessible and complete.**
   - It meets WCAG 2.2 AA, and contrast passes in both themes.
   - The default, loading, empty, error, partial and success states are designed.
   - Focus is visible, and nothing is signalled by colour alone.
   - 10 means the error and empty states are as considered as the happy path.
8. **Motion and delight, restrained.**
   - There is one signature motion, under 700ms, that ends in the natural layout and respects reduced motion.
   - There is one moment of delight, such as an Aleem line, a counter, the mascot in an illustration, or a glow drifting off-edge.
   - 10 means it feels alive without anything shouting.

**What the numbers mean**
- **6:** correct but generic. Tokens are right, but the layout is a default and the copy is placeholder-grade.
- **8:** clearly Aleem, focused, real copy, works on a phone.
- **10:** all of the above, plus one idea that is specific to this message and could not be reused anywhere else unchanged.

## Moves that take a piece from 8 to 10

All of these already live in the system or its templates.

- **Make the number the hero.** Set an oversized metric (`text-metric-xl`) with `--gradient-brand-text` on it alone, or count it up with `data-count`.
- **Use one ink spotlight.** Put a navy `--gradient-ink` panel with a cyan glow bleeding off its corner (`.cory-ink`) among light cards.
- **Tell the story as a bento.** Use a 12-column bento with one 2×2 hero tile and smaller proof tiles, as in `templates/ai-books-bento/`.
- **Use the chat thread as the layout.** Let the argument unfold as `ChatBubble`s: Aleem asks, the reader answers, and a system note marks the handoff.
- **Draw the data.** Turn a ratio into a picture rather than a sentence, such as the crowd of dots in `templates/before-after-ai-bento/`.
- **Stage the headline.** Break it into a staircase, a gradient band and an ink arrow, as in `posts/linkedin-profile-cover/`.
- **Prove it in the hero.** Put a live component in `Hero art` so the page demonstrates its headline, as the `PortfolioHome` example does with a streaming `AIResponse`.
- **Show the trust.** Make the AI pattern the hero: an `AIResponse` with real citations, an `AgentSteps` log, or an `ApprovalCard` at the moment of decision.
- **Compose with the mascot.** In the admissions case study, build Cory into the scene with `Illustration` or `CoryMark` instead of placing a logo in a corner.
- **Gradient one word.** Put the gradient on one word of the headline with `.cory-gradient-text`, and nothing else on the screen.
- **Keep two strong ideas only.** Combine at most two of these moves on one screen.

## What drops a score to 5 or below

- **Generic AI looks:** blue to purple gradients (the brand gradient is blue to cyan), emoji used as icons, rounded cards with a coloured left border, stock-photo heroes, and everything centred.
- **Too much at once:** more than one gradient moment, several competing animations, or glows over text or actions.
- **Off-system work:** hard-coded colours, off-scale type, a new component where one exists, or an icon from another family.
- **Fragile layouts:** text clipped to fit, fixed heights, hover-only actions, or a layout that only works at 1440.
- **Placeholder content:** "Lorem", "Feature one", "John Doe", or round numbers nobody measured.

## How to get there

1. Read the principles (`guidelines/laws-of-ux.md`) and the decision guide in the brand book.
2. Write three directions in one line each, for example metric-led, chat-led and bento story. Pick the one most specific to this message.
3. Build with the components and tokens. Start from the closest template in `templates/` or `posts/`, or from the `PortfolioHome` page example, when one fits.
4. Look at it at 360, 768 and 1440 wide, in light and dark.
5. Score all eight lines. Revise the lowest, then score again. Ship at 8 or above on every line. Hand over the score and the weakest line.
