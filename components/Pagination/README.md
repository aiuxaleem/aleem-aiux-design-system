Moves through pages of a list or table.

```jsx
<Pagination page={page} count={12} onChange={setPage} label="Case studies pages" />
<Pagination page={page} count={9} onChange={setPage} compact />          // "Page 2 of 9", for phones and toolbars
<Pagination page={3} count={12} hrefFor={(p) => `/posts?page=${p}`} />   // real links, good for search engines
```

Previous and Next carry words as well as arrows, the current page has `aria-current="page"` and a filled tile, and every target is at least 44px. `siblings` sets how many numbers show on each side of the current page. Use it when people need to jump or share a position; for a feed people only scroll, a "Load more" `Button` is simpler. Give each one a distinct `label` when a page has more than one.
