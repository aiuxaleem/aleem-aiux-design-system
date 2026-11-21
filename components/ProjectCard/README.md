A case study in the portfolio grid: cover, context line (client, role, year), title, one-line outcome, the proof metric and topic tags. The whole card is one link.

```jsx
<div className="cory-bento">
  <ProjectCard featured href="/work/freight-ds" client="Freight platform" role="Lead designer" year="2025"
    title="One component library under five brands" summary="20 typed React components, 15 templates and 231 tokens."
    metric={{ value: '5', label: 'brands' }} tags={['Design systems', 'React']} image="/covers/freight.jpg" />
  <ProjectCard href="/work/agents" title="Trust patterns for agents" summary="…" tags={['AI agents']} />
</div>
```

Provide `title`, `href`, and ideally `image` + `imageAlt`; without an image the card draws the brand's pill pattern as a placeholder cover. `featured` spans two columns in `.cory-bento` with a wide 21:9 ink cover. `status` adds a label on the cover ("Design system", "Coming soon"). `metric` is one real, measured number: never invent one. Write the title as the outcome, not the project name. `headingLevel` keeps the outline correct (default 3).
