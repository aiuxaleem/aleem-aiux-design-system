Shows where a page sits, and lets people step back up. Use it on pages two or more levels deep (a case study, a component page), not on top-level pages.

```jsx
<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Case studies', href: '/case-studies' }, { label: 'One library, five brands' }]} />
```

The last item is the current page: plain text with `aria-current="page"`, never a link. Trails longer than `maxItems` (default 4) collapse the middle behind a "…" button that shows the full path. Chevrons flip in right-to-left. It complements the page title; it does not replace it.
