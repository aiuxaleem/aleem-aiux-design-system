Show between the visitor's message and the reply, so the pause reads as "thinking", never as "broken".

```jsx
{msgs.map((m) => <ChatBubble key={m.id} from={m.from} status={m.status} onRetry={() => resend(m)}>{m.text}</ChatBubble>)}
{typing && <TypingIndicator avatar="assistant" label="Assistant is typing" />}
```

`avatar` matches whoever is writing: `assistant`, `aiux` (Aleem) or `cory` (the default, for the admissions kits). Set `label` to the same name, because the label is what screen readers announce. Show the indicator as soon as the visitor sends, and hide it when the reply lands. If a reply takes over 8 seconds, replace the indicator with a `ChatBubble from="system"` ("Still working on it…"). After a failure, use `status="failed"` on the visitor's bubble with Retry. Reduced motion freezes the dots at full opacity, and the hidden label still announces.
