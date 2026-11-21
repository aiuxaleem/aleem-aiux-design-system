The top bar of a site: brand, primary links and one action. Use one per page.

```jsx
<SiteHeader
  links={[{ label: 'Work', href: '/work', current: true }, { label: 'Case studies', href: '/case-studies' }, { label: 'About', href: '/about' }]}
  tools={<ThemeToggle />}
  action={<Button size="sm" href="/contact">Let's talk</Button>}
/>
<main id="main">…</main>
```

- **Brand** defaults to the AIUX mark and "Aleem"; pass `brand` to replace it.
- **Current page:** set `current` on one link. It gets `aria-current="page"`, bold text and an underline, so it never relies on colour alone.
- **Phones:** below 760px the links and the action fold into a Menu button (a disclosure with `aria-expanded`; Escape closes it and returns focus). `tools` (theme or language switches) stay visible.
- **Skip link:** "Skip to content" appears on the first Tab and jumps to `skipTo` (default `#main`), so give your main element that id.
- Keep to five links or fewer (Hick's law) and one action. `sticky` (default) pins it to the top with a blurred surface.
