A live log of what an agent is doing, step by step, so people can follow the work and step in when it needs them.

```jsx
<AgentSteps title="Research agent" summary="Preparing a brief." steps={[
  { title: 'Read 12 competitor flows', status: 'done', time: '0:42' },
  { title: 'Drafting the brief', status: 'running', detail: 'Writing the comparison table.' },
  { title: 'Send the emails', status: 'waiting', detail: 'I need your OK.', action: <Button size="sm" variant="ink">Review and send</Button> },
  { title: 'Update the CRM', status: 'error', detail: 'The CRM did not answer. I will try again in 5 minutes.' },
  { title: 'Share with the team', status: 'pending' },
]} />
```

Each step: `title`, `status` (`done | running | waiting | error | pending`), optional `detail`, `time` and an `action` node. Status shows as an icon and a word ("Done", "Working", "Needs you", "Failed", "Up next"). The list is an `aria-live` region and the running step carries `aria-current="step"`. Write step titles as plain actions in past tense when done ("Wrote 3 emails") and present when running. Put a `waiting` step's decision in an `ApprovalCard` when it changes something outside the product. `compact` tightens spacing for side panels.
