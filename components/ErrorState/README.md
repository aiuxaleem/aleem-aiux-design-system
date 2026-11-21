A whole region that failed. It says what happened, that nothing was lost, and the one action that fixes it. For a single field, use the field's `error` prop; for a banner above content that still works, use `Alert`.

```jsx
<ErrorState onRetry={refetch} retrying={isRefetching} details={`${error.status} ${error.message}`} />
<ErrorState kind="offline" onRetry={refetch} />
<ErrorState kind="not-found" action={<Button variant="ink" href="/">Go to the home page</Button>} />
<ErrorState kind="permission" action={<Button variant="secondary">Ask for access</Button>} />
```

| kind | Default title | Tone |
|---|---|---|
| `error` | This didn't load | danger |
| `offline` | You're offline | warning |
| `timeout` | This is taking too long | warning |
| `not-found` | This page doesn't exist | info |
| `permission` | You don't have access to this | info |
| `server` | The service is having trouble | danger |

Each kind has default copy that says what happened, reassures, and names the fix; override it with `title` and children. `onRetry` adds Try again, and `retrying` turns it into "Trying again…". `details` (an error code or request ID) sits in a collapsed "Technical details", so support can help without alarming everyone else.

**Rules:** never blame the person ("It's not something you did"); say what is kept ("Nothing you entered was lost"); offer Try again only when retrying can help (not for `not-found` or `permission`). It is `role="alert"`, so it is announced once. `size="sm"` for panels, `variant="plain"` inside a frame that already has a border, `onInk` for navy panels.
