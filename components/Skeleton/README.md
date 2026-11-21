The bones of a loading layout. Use a skeleton when you know the shape of what is coming and the wait may pass about a second: lists, cards, dashboards, an AI answer. For components the system already has, use `SkeletonPreset` instead of drawing bones by hand.

```jsx
<LoadingRegion loading={isLoading} label="Loading case studies" skeleton={<SkeletonPreset kind="project-card" count={3} />}>
  {cards}
</LoadingRegion>

// Hand-made bones for a custom layout
<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
  <Skeleton variant="circle" width={40} />
  <Skeleton lines={2} lineWidths={['70%', '45%']} />
</div>
<Skeleton size="heading" width="80%" />
<Skeleton variant="pill" width={120} height={44} />
```

- **Variants:** `text` (ragged bars; the last one is shorter), `rect`, `circle`, `pill`. For text, `size` is `caption | body | title | heading | metric`, so a bar matches the type it stands in for.
- **Motion:** `animation="wave"` (default) is one shine that crosses the whole page in step, so a grid of cards shimmers as one surface rather than twelve separate flickers. Use `pulse` for dense tables and small areas, and `none` for still. Under reduced motion every bone is a still tint, whatever you set.
- **On dark:** `onInk` uses the on-ink tint inside navy panels.

**Rules**
- Bones are `aria-hidden`. The region carries `aria-busy` and a spoken label; `LoadingRegion` and `StateView` do both for you.
- Match the real layout: the same columns, the same card sizes and the same number of rows you expect, so nothing jumps when content lands.
- Show nothing for the first 300 ms, then keep the skeleton at least 600 ms. `LoadingRegion` enforces both.
- On a refetch, keep the current content and show "Updating"; never blank a page the person was reading.
- Skeleton for layout; `Spinner` or `Button loading` for one action; `ProgressBar` when progress can be measured; `TypingIndicator` in chat; `AIResponse status="streaming"` while an answer streams.
