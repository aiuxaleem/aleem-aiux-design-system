Wrap any region that loads. It applies the timing rules so loading never flickers, and tells screen readers what is happening.

```jsx
<LoadingRegion loading={isLoading} label="Loading case studies" doneLabel="Case studies loaded"
  skeleton={<SkeletonPreset kind="project-card" count={3} />}>
  <CaseStudyGrid items={items} />
</LoadingRegion>
```

| Time | What people see |
|---|---|
| 0 to 300 ms | Nothing changes. Most loads finish here and feel instant. |
| After 300 ms | The skeleton. |
| Once shown | The skeleton stays at least 600 ms, so it never flashes. |
| Content arrives | It fades in over 200 ms (no motion under reduced motion). |
| Refetch | The current content stays, dimmed, with an "Updating" hint on the top edge. Nothing is blanked. |

- `aria-busy` is set while it waits; `label` is announced when loading starts and `doneLabel` when it ends (`role="status"`).
- `delay` and `minDuration` can be tuned, but keep both: they are what makes loading feel calm.
- `keepPrevious={false}` shows the skeleton on every load (use it when the new data replaces the old completely, such as a different search).
- For more than about 10 seconds, also say what is happening and how long it might take, or show a `ProgressBar` if you can measure it.
- For empty and error results, use `StateView`, which wraps this component.
