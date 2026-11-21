One AI answer, designed to earn trust: it says it is AI, shows how sure it is, cites its sources inline and lists them, and lets people copy, rate or regenerate it.

```jsx
<AIResponse confidence={0.86} sources={sources} model="Portfolio assistant" onFeedback={log} onRegenerate={retry}>
  The Colaberry Design System has 20 typed React components<Citation n={1} /> and five brands with WCAG 2.1 AA colour pairs<Citation n={2} />.
</AIResponse>
<AIResponse status="streaming" onStop={stop}>Comparing the two flows…</AIResponse>
<AIResponse status="error" onRetry={retry} />
```

The consumer provides the answer as `children` (text with `<Citation n href title />` markers), `sources` (`[{ title, url, domain }]`, numbered in the order the citations use), and either `confidence` (0 to 1) or `confidenceLevel` (`high | medium | low`). `status`: `streaming` shows a caret and a Stop button and hides the sources until done; `error` replaces the answer with a first-person message and Try again. `feedback` / `onFeedback` (`'up' | 'down' | null`) for the Helpful and Not helpful toggles; `onCopy`, `onRegenerate`.

Do: show sources whenever the answer states a fact; keep the disclaimer on public surfaces; let the meter say "Low confidence" rather than hiding a weak answer. Don't: put an AIResponse inside a ChatBubble (it is the assistant turn itself), or show a confidence number the model did not actually produce. `Citation` and `SourceList` are exported for custom layouts.
