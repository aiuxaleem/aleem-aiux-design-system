Questions and answers, process details or long specs that most readers skip. Each header is a real button with `aria-expanded`; Up, Down, Home and End move between headers.

```jsx
<Accordion defaultOpen={['roles']} items={[
  { id: 'roles', title: 'What roles are you open to?', content: 'Lead or principal product design roles on AI products.' },
  { id: 'build', title: 'Do you design and build?', content: '…', meta: '2 min read' },
]} />
<Accordion variant="list" multiple items={items} />
```

`items`: `{ id, title, content, meta?, disabled? }`. One panel open at a time unless `multiple`. `variant`: `card` (separate tiles) or `list` (hairline dividers, for dense pages). `headingLevel` wraps each header in the right heading (default 3). Don't hide information people need to decide (prices, requirements) inside a closed panel.
