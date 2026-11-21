Experience or milestones, newest first: period, title, organisation, place, a summary and optional highlights. The current role gets the signal dot and a "Now" label.

```jsx
<Timeline items={[
  { period: 'Jan 2025 to now', title: 'Lead AI Product Designer', org: 'Colaberry', place: 'Hyderabad', current: true,
    summary: 'Designing AI agents and the design system they are built with.', highlights: ['…'] },
  { period: '2022 to 2024', title: 'Senior Product Designer', org: 'NTT DATA' },
]} />
```

Periods stay left-to-right (they are dates) and align in their own column; below 560px the period moves above the title, so titles keep the full width down to 320px. Keep summaries to one sentence and highlights to outcomes. `headingLevel` sets the item heading (default 3). Use it on About pages and CV-style sections, not for agent progress (that is `AgentSteps`).
