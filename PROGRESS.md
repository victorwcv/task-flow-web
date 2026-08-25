# TaskFlow Web — Progress

> Living project state used to resume development across sessions.
>
> Update this file when a milestone, decision or current focus changes.

---

## Current State

**Stage:** 1 — TypeScript Foundations  
**Milestone:** Initial React + TypeScript setup  
**Status:** 🟢 In progress  
**Next:** Type-safe API client

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

- [ ] Typed `fetch` client
- [ ] Generic API methods
- [ ] Task API integration
- [ ] API error modeling
- [ ] Runtime response validation

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

## Learning Rule

Prefer understanding and solving TypeScript problems before introducing libraries or abstractions.

**Learn → Apply → Challenge → Refactor**