Ready-made skeletons with the same geometry as the real components, so the swap from loading to loaded never moves anything.

```jsx
<SkeletonPreset kind="project-card" count={2} featured />   // first card spans two columns, like the real bento
<SkeletonPreset kind="ai-answer" />                           // AIResponse: header, answer, sources, actions
<SkeletonPreset kind="chat" count={4} />                      // alternating ChatBubbles with an avatar
<SkeletonPreset kind="table" count={6} columns={4} />         // header row + 5 rows
```

| kind | Mirrors |
|---|---|
| `project-card` | `ProjectCard` (16:9 cover, or 21:9 when `featured`) |
| `feature-card` | `FeatureCard` |
| `stat` | `StatCard` |
| `ai-answer` | `AIResponse` |
| `chat` | a `ChatBubble` thread |
| `list` | avatar, two lines and a badge per row |
| `timeline` | `Timeline` |
| `table` | a data table (first row is the header) |
| `form` | `Input` / `Select` fields with labels |
| `article` | a case-study or blog page |

`count` defaults to a sensible number per kind. `animation` and `onInk` work as on `Skeleton`. Pass it as `skeleton` to `LoadingRegion`, or by name to `StateView` (`skeleton="project-card"`). If you build a new component, add its preset here rather than hand-drawing bones in every page.
