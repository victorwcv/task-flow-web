# TaskFlow Web

Frontend for **TaskFlow**, an evolving fullstack project focused on learning and applying TypeScript in real-world frontend scenarios.

The project is intentionally developed incrementally: complexity is introduced when the application has a reason to need it.

## Goals

- Learn TypeScript deeply through React.
- Model frontend data with strong types.
- Understand the difference between API, domain and form models.
- Build type-safe API communication.
- Apply runtime validation where appropriate.
- Evolve toward maintainable frontend architecture without premature abstractions.

## Stack

- React 19
- TypeScript
- Vite
- pnpm
- Vitest — planned
- Zod — planned
- TaskFlow API — backend

## Architecture Direction

```text
API response
    ↓
Runtime validation
    ↓
TaskResponse
    ↓
Mapping
    ↓
Task
    ↓
React UI
```

Frontend types are not assumed to be identical to backend or database models.

## Learning Focus

TypeScript concepts will be introduced as real problems appear:

- Union types
- Type composition
- Utility types
- Generics
- Type guards
- API contracts
- Runtime validation
- Type-safe API clients
- Reusable typed components

The goal is not to use advanced TypeScript everywhere, but to understand **when it provides real value**.

## Development

```bash
pnpm install
pnpm dev
```

Build and lint:

```bash
pnpm build
pnpm lint
```

## Project Status

See [`PROGRESS.md`](./PROGRESS.md) for the current state and next steps.

---

**Focus:** React · TypeScript · Frontend Engineering