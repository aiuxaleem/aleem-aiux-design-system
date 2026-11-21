A dropdown of actions on one thing: the "More" on a card or table row.

```jsx
<Menu label="Project actions" align="end" onSelect={(item) => track(item.label)} items={[
  { label: 'Edit', icon: 'pencil', onSelect: edit },
  { label: 'Duplicate', icon: 'copy', hint: 'Ctrl D', onSelect: duplicate },
  { separator: true },
  { label: 'Delete project', icon: 'trash', danger: true, onSelect: askToDelete },
]} />
```

- **Keyboard:** Enter, Space or Down opens it and focuses the first item; Up and Down move; Home and End jump; typing a letter jumps to a match; Escape or clicking outside closes it and returns focus to the button.
- **Destructive items** go last, after a separator, with `danger`. They open a `Dialog tone="danger"` to confirm; the menu item never deletes directly.
- `disabled` items stay visible so people learn what exists. `align="end"` for menus at the inline end of a row; `placement="top"` near the bottom of the screen. `trigger` replaces the button content (keep visible words, or give `aria-label`).
- **Not for** navigation (use links or `SiteHeader`), or choosing a value (use `Select` or `RadioGroup`). Keep to seven items or fewer.
