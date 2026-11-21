The opening of a page: one idea, one gradient phrase, one primary action.

```jsx
<Hero
  eyebrow="Lead AI Product Designer"
  title="AI is fast. Trust is slow. I design the gap." highlight="I design the gap."
  actions={<><Button href="/work">View my work</Button><Button variant="secondary" href="/contact">Let's talk</Button></>}
  proof={[{ value: '13+', label: 'years in product design' }, { value: '5', label: 'brands on one library' }]}
  art={<AIResponse confidence={0.86} sources={sources}>…</AIResponse>}
>
  I design AI products people can check, question and stop.
</Hero>
```

- `highlight` is the one phrase of the title that takes the brand gradient. It stays together on one line where it fits, and it is the only gradient text on the screen.
- `art` fills the second column. The default is the `SignalPattern` on an ink panel; the stronger move is a live component that proves the headline (see the "PortfolioHome" page example, where the art is an AI answer that streams, then shows its confidence and sources).
- `proof` takes up to three real, measured numbers. `layout="center"` drops the art for short pages.
- On phones it stacks: text, actions, proof, then art. The title scales with the screen; keep it under about 45 characters. One Hero per page; it renders the page's `h1` (change with `headingLevel`).
