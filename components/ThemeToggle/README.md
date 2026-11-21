Light and dark theme switch. Put one in the header. It flips `data-theme` on `<html>`, which re-maps every semantic colour, shadow and gradient token.

```jsx
<ThemeToggle />
<ThemeToggle variant="ghost" size="sm" />
<ThemeToggle variant="onInk" />   // inside .cory-ink or a navy footer
```

The button shows a sun in light theme and a moon in dark theme, crossfading between them (instantly under reduced motion). It is a `role="switch"` named "Dark theme", so screen readers announce the state rather than an icon. It defaults to the OS preference and remembers the choice in `localStorage` under `storageKey` (default `cory-theme`). Give previews and demos their own key so they do not change the visitor's site setting.
