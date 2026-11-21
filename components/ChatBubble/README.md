One message in a chat: the AI assistant or Aleem at inline-start, the visitor at inline-end, and quiet system notes centred.

```jsx
<ChatBubble from="assistant" time="9:41 AM">Hi, I'm the assistant on Aleem's portfolio. Ask me about his work.</ChatBubble>
<ChatBubble from="user" status="sending">Has he built a design system that agents can use?</ChatBubble>
<ChatBubble from="user" status="failed" onRetry={resend}>Can I book a call this week?</ChatBubble>
<ChatBubble from="aleem">Thanks for reaching out. Thursday works for me.</ChatBubble>
<ChatBubble from="system">Aleem joined the chat</ChatBubble>
```

`from`:
- `assistant`: the AI, with a spark avatar.
- `aleem`: Aleem himself, with the AIUX tile.
- `user`: a gradient bubble at inline-end (right in LTR, left in RTL).
- `system`: a centred pill for handoffs, delays ("Still working on it") and dates.
- `cory`: the admissions case-study mascot. The default, kept so existing kits do not change.

Always mark the switch from AI to a person with a `system` note ("Aleem joined the chat"). Never let the assistant write as if it were Aleem.

`status` on user messages:
- `sending`: reads "Sending…". The bubble is never dimmed.
- `sent`: adds a check.
- `failed`: draws a red edge, "Not sent" and a Retry link. Pass `onRetry`.

`time` adds a timestamp, and `showAvatar={false}` collapses the gutter for consecutive messages. For long, sourced answers use `AIResponse` instead of a bubble. Pair the chat with `TypingIndicator` while a reply is being written.
