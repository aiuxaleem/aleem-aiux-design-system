Use this wherever a list, panel or search result has nothing to show. Every empty state says what belongs here and offers the one action that fills it. It is never a bare "No data".

```jsx
// AI surfaces: the assistant speaks in first person
<EmptyState voice="assistant" title="No saved answers yet" action={<Button size="sm">Ask a question</Button>}>
  Save an answer and it will wait here for you.
</EmptyState>

// Data and admin surfaces: neutral product voice
<EmptyState voice="neutral" icon={<Icon name="search" />} size="sm" title="No case studies match"
  action={<Button variant="secondary" size="sm">Clear filters</Button>}>Try fewer topics or a different year.</EmptyState>

// Inside an ink panel, with a spot illustration
<EmptyState onInk variant="plain" scene="launch" title="Nothing published yet">Your first case study will appear here.</EmptyState>
```

`voice`:
- `assistant`: AI spark tile, first-person copy.
- `aleem`: the AIUX tile, for Aleem's own voice.
- `neutral`: your `icon` in a tinted tile.
- `cory`: the admissions mascot. The default, kept for those kits.

`scene` swaps the tile for a spot illustration.

Empty states come in three kinds, all from this one component:
- **First run:** teach what goes here, and give the primary action.
- **No results:** explain the filter, and offer to clear it.
- **Cleared:** celebrate briefly, with no action needed.

Avoid blame ("You haven't…") and avoid "Oops". The action is the only primary button on the view.
