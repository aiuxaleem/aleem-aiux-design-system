The brand's signature graphic: rows of pills, like tokens in a design system or words in an AI answer. A signal travels through them, one pill lighting at a time, in the same blue to cyan as the I in the logo. Use it wherever the brand needs a picture and there is no real image: covers, hero art, closing panels, empty corners of ink cards.

```jsx
<div className="cory-ink" style={{ padding: 32, aspectRatio: '4 / 3' }}><SignalPattern tone="ink" seed={7} rows={6} /></div>
<SignalPattern tone="light" seed={3} />          // on white or page surfaces
<SignalPattern tone="brand" align="end" />       // on the brand gradient
```

`seed` gives a different, repeatable arrangement, so two tiles on one page never match. `rows` and `density` set how busy it is; `align="end"` hangs the rows from the inline end. It is decorative (`aria-hidden`) and still under reduced motion or with `animate={false}`.

**Rules:** one animated pattern per screen; never put text on top of it; give it at least 80px of height. It is the picture, so do not pair it with a stock photo or a second illustration in the same panel.
