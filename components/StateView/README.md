One region, every state, one prop. Use it for any list, grid or panel that fetches data, so loading, empty, error and partial results all look and behave the same everywhere.

```jsx
<StateView
  status={status}                 // loading | refreshing | ready | empty | partial | error | offline | timeout | not-found | permission | server
  skeleton="project-card" skeletonCount={3}
  label="Loading case studies" doneLabel="Case studies loaded"
  empty={{ title: 'No case studies yet', children: 'Published case studies show up here.', action: <Button variant="ink">Write one</Button> }}
  error={{ details: requestId }}
  partial={{ title: 'Some items did not sync', children: 'Showing what loaded.', action: <Button size="sm" variant="secondary">Sync again</Button> }}
  onRetry={refetch}
  minHeight={320}
>
  <CaseStudyGrid items={items} />
</StateView>
```

| status | Renders |
|---|---|
| `loading` | The skeleton, with `LoadingRegion` timing (300 ms delay, 600 ms minimum, fade in) |
| `refreshing` | The current content, dimmed, with "Updating" |
| `ready` | Children |
| `empty` | `EmptyState` from `empty` |
| `partial` | Children under a warning `Alert` from `partial` |
| `error`, `offline`, `timeout`, `server` | `ErrorState` with Try again |
| `not-found`, `permission` | `ErrorState` without Try again (retrying cannot help) |

Empty and error render frameless, since the region usually has its own frame. Set `minHeight` to the usual height of the content, so switching states never jolts the page. Map your data layer onto `status` once (for example: `isLoading && !data → 'loading'`, `isFetching && data → 'refreshing'`, `data?.length === 0 → 'empty'`, `!navigator.onLine → 'offline'`).
