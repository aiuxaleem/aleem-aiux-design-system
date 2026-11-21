Multi-line text for messages, briefs and feedback. Matches `Input` (label, hint, error, success) and adds auto-grow and a character count that appears near the limit.

```jsx
<Textarea label="Tell me about the project" hint="Who it is for, and what a good result looks like." />
<Textarea label="Short intro" maxLength={280} />
<Textarea label="Message" required error="Add a sentence or two so I know how to help" />
```

Controlled (`value` + `onChange(value, event)`) or uncontrolled (`defaultValue`). `rows` sets the starting height and `maxRows` the cap before it scrolls; `autoResize={false}` restores the manual resize handle. The counter shows from 80% of `maxLength` (`showCount="always"` to keep it on); going over turns the field red and says "too long" instead of silently cutting text.
