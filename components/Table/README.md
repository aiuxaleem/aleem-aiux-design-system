A data table with real table semantics. Use it when people compare values across rows; for a simple list of items, use a list.

```jsx
<Table
  caption="Projects"
  columns={[
    { key: 'name', label: 'Project', sortable: true },
    { key: 'year', label: 'Year', numeric: true, sortable: true },
    { key: 'status', label: 'Status', render: (row) => <Badge tone="success" size="sm">{row.status}</Badge> },
  ]}
  rows={rows} rowKey={(r) => r.id}
  sort={sort} onSort={setSort}
  loading={isLoading} error={failed && "The projects didn't load. Try again."} empty="No projects match this filter."
/>
```

- **Columns:** `numeric` end-aligns and uses tabular figures so digits line up. `render(row)` draws a custom cell. The first column is the row header.
- **Sorting** is controlled: `sort` is `{ key, dir }`, and `onSort` receives the next value. The header shows an arrow and sets `aria-sort`; you sort the rows.
- **States:** `loading` draws bones in the same grid, `empty` is the message for no rows, and `error` replaces the rows with an alert. For a full region with Try again, wrap the table in `StateView`.
- **Phones:** the table scrolls sideways inside a focusable, labelled region instead of breaking the page. Keep the first column short.
- Always give a `caption` (hide it with `captionHidden` if a heading already names the table). `dense` for compact rows, `striped` for wide tables, `stickyHeader` inside a fixed-height scroller.
