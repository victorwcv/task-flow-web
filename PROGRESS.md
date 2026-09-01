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

### Stage 1 — TypeScript Foundations ✅

- [x] React + TypeScript project setup
- [x] Component props
- [x] Union types
- [x] Domain type composition
- [x] API response vs frontend model
- [x] `Omit` utility type
- [x] Data mapping (`TaskResponse` → `Task`)
- [x] Initial frontend structure

---

### Stage 2 — API Integration ✅

- [x] Typed `fetch` client
- [x] Generic API methods
- [x] GET / POST integration
- [x] API error modeling
- [x] Runtime response validation with Zod
- [x] Error handling
- [x] API → Domain mapping
- [x] Domain / API separation
- [x] CORS configuration
- [x] API integration tests
- [x] Production build validation

---

### Stage 3 — Functional Frontend 🚧

**Objective:** Complete TaskFlow Web as a functional frontend connected to the API.

### Task Management

- [x] List tasks
- [x] Create task
- [ ] Delete task
- [ ] Edit task
- [ ] Change task status
- [ ] Refresh / synchronize task list

### UI States

- [ ] Loading state
- [ ] Error state
- [ ] Empty state
- [ ] Form validation
- [ ] Success feedback
- [ ] Action feedback

### React + TypeScript

Apply advanced TypeScript concepts only when they solve real problems during implementation.

- [x] Typed forms
- [x] Event typing
- [x] Type guards
- [x] Derived types
- [x] Generics
- [ ] Advanced component props where useful
- [ ] Derived UI state
- [ ] Typed UI state management

---

## Stage 4 — Frontend Architecture

**Objective:** Refactor and improve the architecture based on real problems discovered while building the application.

- [ ] Review component responsibilities
- [ ] Review domain / API boundaries
- [ ] Extract reusable hooks where justified
- [ ] Server state management
- [ ] Cache / refetch strategy
- [ ] Evaluate TanStack Query or another solution if justified
- [ ] Improve API client where necessary
- [ ] Review API contracts
- [ ] Shared API contracts
- [ ] Generated types
- [ ] Final architectural review

> Do not introduce abstractions, libraries, or architectural patterns before there is a real problem that justifies them.

---

## Stage 5 — Production Polish

**Objective:** Prepare TaskFlow Web for real-world usage and deployment.

### UX / UI

- [ ] UI polish
- [ ] Responsive design
- [ ] Accessibility
- [ ] Confirmation dialogs
- [ ] Improved loading states
- [ ] Improved error handling
- [ ] Notifications / feedback

### Testing

- [ ] Component tests
- [ ] Integration tests
- [ ] End-to-end tests

### Production

- [ ] Environment variables
- [ ] Production configuration
- [ ] Production build
- [ ] Docker
- [ ] Deployment
- [ ] Final README

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
