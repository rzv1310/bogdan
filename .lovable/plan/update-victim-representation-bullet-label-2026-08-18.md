# Update victim representation bullet label

## Goal
Change the visible bullet label from **"Road accident compensation"** to **"Car Accident Lawyer"** in both:
- the sub-service list under the bio-block on `/en/services/victim-representation-in-criminal-cases/`
- the corresponding card on the `/servicii` (Services) hub

## Where the text lives
Both bullets are rendered from `src/lib/serviceGroups.ts`, in the EN `victims` group, card `Victims and compensation`, first `subServices` item (currently line 467).

## Change to make
```ts
// before
{ label: "Road accident compensation", to: "/en/services/road-accident-compensation" },

// after
{ label: "Car Accident Lawyer", to: "/en/services/road-accident-compensation" },
```

The link target stays unchanged.

## Verification
- Run the build to confirm no type errors.
- Spot-check `/en/services/victim-representation-in-criminal-cases/` and `/en/services` to see the new label.
