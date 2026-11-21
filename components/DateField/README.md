A date, or a date and time. It wraps the browser's own date input, so people get the picker they already know on their device, it works with the keyboard and screen readers, and it follows their locale.

```jsx
<DateField label="Intro call date" value={date} onChange={setDate} min={today} hint="Weekdays, India time." />
<DateField label="Start" type="datetime-local" required />
<DateField label="Deadline" value={d} error="Pick a date after today." />
```

Matches `Input`: `label`, `hint`, `error`, `success`, `required`, `disabled`. Values are ISO strings (`"2026-11-21"`, or `"2026-12-01T10:00"` for `datetime-local`); `min` and `max` limit the range. `type` can also be `time` or `month`. For a date people know by heart (a birthday), three plain fields are easier than a picker; for a range, use two DateFields labelled "From" and "To" and set each one's `min` / `max` from the other.
