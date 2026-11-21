Rounded-tile avatar for people, the AI assistant, Aleem himself, and the admissions case-study mascot.

```jsx
<Avatar kind="aiux" name="Aleem AIUX" size={48} />
<Avatar kind="assistant" name="AI assistant" status="online" statusLabel="Assistant is online" />
<Avatar kind="image" src="/people/sara.jpg" name="Sara Al-Harbi" />
<Avatar kind="initials" name="Mohammad Aleem" ring />
<Avatar kind="cory" />
```

`kind`:
- `aiux`: the AIUX logo tile. Use it where Aleem himself speaks or signs off.
- `assistant`: a neutral four-point spark on the brand gradient. Use it for any AI that is not a person.
- `image` and `initials`: people. A photo that fails to load falls back to initials from `name`, so always pass `name`.
- `cory` and `cory-light`: the mascot of the admissions assistant case study. Use them only in that product's kits.

`size` is in px, and `ring` adds a separating outline. `status` adds a presence dot (online, away, busy or offline); pass `statusLabel` so the dot has words. The tile radius is `radius-tile` (22.7%), the same ratio as the logo. Never mix an AI avatar with a real person's photo in one avatar: people should always know whether they are talking to a person or to an AI.
