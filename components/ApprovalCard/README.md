Human in the loop: an agent proposes an action and waits. The card says who is asking, what will happen, to what, how risky it is, whether it can be undone, and offers three clear choices.

```jsx
<ApprovalCard agent="Scheduling agent" risk="medium" reversible title="Move 4 design reviews to Thursday"
  details={[{ label: 'Affects', value: '4 meetings, 9 people' }, { label: 'New time', value: 'Thu, 3:00 to 5:00 PM' }]}
  onApprove={approve} onEdit={edit} onReject={reject}>
  Everyone gets an update with the new time and the reason.
</ApprovalCard>
<ApprovalCard status="approved" decidedBy="Aleem" title="Book a 30-minute intro call" />
```

`risk`: `low | medium | high` (shown as an icon and words). `reversible`: `true` says it can be undone, `false` says it cannot. `status`: `pending | approved | rejected`. Labels default to Approve, Edit and "Don't do it"; rename them to the action ("Send 3 emails"). Use one ApprovalCard per decision and ask before anything that sends, spends, publishes or deletes. Never pre-select Approve or auto-approve on a timer.
