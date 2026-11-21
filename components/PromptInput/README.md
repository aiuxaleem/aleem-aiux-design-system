The composer for talking to an AI: grows with the text, sends on Enter (Shift + Enter for a new line), offers starter suggestions, counts characters near the limit, and turns into Stop while the AI answers.

```jsx
<PromptInput suggestions={['What did you ship last year?', 'How do you design for trust?']} onSubmit={ask} />
<PromptInput busy onStop={cancel} />
<PromptInput maxLength={500} />
```

Controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). `onSubmit(text)` gets the trimmed text and clears an uncontrolled field. `busy` swaps Send for Stop (`onStop`). The label is visually hidden but always present (`label`, default "Message"); give each instance a unique `id`. Suggestions show only while the field is empty and fill it rather than sending, so people can edit first. Put the composer at the bottom of the conversation, inside `.cory-safe-bottom` on phones.
