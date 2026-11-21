The bottom of a site: who it is, where everything is, and the legal line. Use one per page, after `main`.

```jsx
<SiteFooter
  tagline="I design AI products people can trust, and the design systems behind them."
  columns={[{ title: 'Work', links: [{ label: 'Case studies', href: '/case-studies' }] }, { title: 'About', links: [{ label: 'Contact', href: '/contact' }] }]}
  social={[{ label: 'LinkedIn', href: 'https://…' }]}
  legal="© 2026 Mohammad Abdul Aleem"
/>
```

The brand defaults to the AIUX mark and "Aleem". Each column is its own `nav` named by its title, so screen-reader users can jump between them. Keep to three or four columns of up to five links; social links are written as words ("LinkedIn"), not bare icons. Columns wrap to two, then one, on narrow screens. `children` adds something under the tagline, such as a `Button` or a newsletter `Input`.
