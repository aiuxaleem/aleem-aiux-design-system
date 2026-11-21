One choice from a short list (2 to 5 options), all visible at once. Native radios inside a fieldset, so arrow keys and screen readers work without extra code.

```jsx
<RadioGroup label="Best time to talk" orientation="horizontal" required options={[{ value: 'am', label: 'Morning' }, { value: 'pm', label: 'Afternoon' }]} />
<RadioGroup label="What do you need?" variant="card" defaultValue="full" options={[
  { value: 'full', label: 'Full-time role', hint: 'Lead or principal level', meta: 'Open' },
  { value: 'contract', label: 'Contract project', hint: '3 to 6 months' },
]} onChange={setNeed} />
```

Options: `{ value, label, hint?, meta?, disabled? }`. Controlled (`value`) or uncontrolled (`defaultValue`). `variant="card"` for choices that need a sentence of explanation; `orientation="horizontal"` for two or three short labels. `error` and `hint` sit under the group. Use `Select` for six or more options, `Checkbox` when several can be chosen, `Toggle` for on/off settings.
