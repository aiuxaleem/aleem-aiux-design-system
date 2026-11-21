How sure an AI result is: five pips plus words ("High confidence"), so it never relies on colour alone.

```jsx
<ConfidenceMeter level="high" />
<ConfidenceMeter value={0.72} showValue />
<ConfidenceMeter level="low" size="sm" />
<ConfidenceMeter level="high" onInk />
```

Pass `level` (`high | medium | low`), or a `value` from 0 to 1 (0.8 and up is high, 0.5 and up is medium). `showValue` adds the percentage; `label` replaces the words; `size="sm"` for headers; `onInk` on navy panels. High uses the success tone, medium the info tone, low the warning tone: low confidence is a caution, not an error. Use it next to AI answers, extracted data and suggestions. Don't invent a score: if the model gives none, leave the meter out.
