Shows progress through a short, ordered flow of 2 to 6 steps: an enquiry form, onboarding, a booking.

```jsx
<Stepper label="Project enquiry" current={step} onStepClick={setStep}
  steps={[{ label: 'Brief', description: 'What you need' }, { label: 'Details' }, { label: 'Review' }, { label: 'Send' }]} />
<Stepper compact steps={steps} current={step} />          // "Step 2 of 4: Details", for phones
<Stepper orientation="vertical" steps={steps} current={2} />
```

Each step shows a number or a tick plus its label, so status never relies on colour; screen readers also hear "completed", "current step" or "not started". With `onStepClick`, completed steps become buttons so people can go back; future steps are never clickable. Mark a step with `error: true` when it needs fixing. Use `compact` below about 480px. For an agent's own progress use `AgentSteps`; for a measured percentage use `ProgressBar`. Always pair it with Back and Continue buttons, and keep what people typed when they go back.
