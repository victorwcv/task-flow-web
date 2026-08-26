# TaskFlow Web — Progress

> Living project state used to resume development across sessions.
>
> Update this file when a milestone, decision or current focus changes.

---

## Current State

**Stage:** 2 — API Integration
**Milestone:** Type-safe API client
**Status:** 🟢 Completed
**Next:** React + Advanced TypeScript

---

## Roadmap

### Stage 1 — TypeScript Foundations

- [x] React + TypeScript project setup
- [x] Component props
- [x] Union types
- [x] Domain type composition
- [x] API response vs frontend model
- [x] `Omit` utility type
- [x] Data mapping (`TaskResponse` → `Task`)
- [x] Initial frontend structure

### Stage 2 — API Integration

- [x] Typed `fetch` client
- [x] Generic API methods
- [x] Task API integration
- [x] API error modeling
- [x] Runtime response validation

### Stage 3 — React + Advanced TypeScript

- [ ] Typed forms
- [ ] Event typing
- [ ] Reusable components
- [ ] Type guards
- [ ] Advanced generics
- [ ] Derived types

### Stage 4 — Frontend Architecture

- [ ] Server state management
- [ ] Shared API contracts
- [ ] Generated types
- [ ] Architectural review

---

## Current Technical State

The frontend currently has:

- React 19 + TypeScript
- Vite
- `TaskStatus`
- `TaskResponse`
- `Task`
- `TaskFormValues`
- `mapTask()`
- Initial `TaskCard` component

The next major goal is connecting the frontend to **TaskFlow API** through a type-safe API client.

---

## Technical Decisions

### Stage 1 — Key Decisions

- Domain models are kept separate from API response models.
- `TaskResponse` represents the external API contract, while `Task` represents the frontend domain model.
- `Omit` is used to compose `Task` from `TaskResponse` while replacing date fields with `Date`.
- API date strings are converted into `Date` objects through a dedicated `mapTask()` function.
- `TaskStatus` uses a union type to restrict valid task states.
- The initial frontend structure remains minimal, adding folders only when a responsibility requires them.

### Stage 2 — Key Decisions

- API responses are validated at runtime with Zod.
- Zod schemas are the source of truth for external response types.
- Generic `get()` infers its return type from the provided schema.
- API models (`TaskResponse`) are mapped into frontend models (`Task`).
- HTTP errors are represented by `ApiError`.
