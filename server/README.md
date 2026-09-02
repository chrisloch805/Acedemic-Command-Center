# Academic Command Center cloud API contract

Deploy a small authenticated backend implementing:

- `GET /api/state` → current user state
- `PUT /api/state` → validate and persist current user state
- `POST /api/canvas/connect` → start Canvas authorization
- `POST /api/canvas/sync` → fetch courses/assignments, normalize them, and return updated state

Store Canvas tokens server-side only. Do not expose tokens in browser JavaScript. The sync endpoint should deduplicate imported assignments using a stable Canvas assignment ID, preserve manually added work, and flag changed/deleted Canvas records rather than silently deleting user data.
