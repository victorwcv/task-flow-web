# TaskFlow Web — Progreso

> Estado vivo del proyecto utilizado para retomar el desarrollo entre sesiones.

> Actualiza este archivo cuando cambie un hito, una decisión arquitectónica o el enfoque actual.

---

## Estado Actual

**Etapa:** 6 — Lanzamiento v1.0

**Hito:** TaskFlow Web v1.0.0

**Estado:** 🟢 Completado

**Enfoque actual:** Lanzamiento completado. El trabajo futuro debe estar impulsado por necesidades reales del producto en lugar de añadir funcionalidades por el simple hecho de aumentar la complejidad.

---

## Hoja de Ruta

### Etapa 1 — Fundamentos de TypeScript ✅

- [x] Configuración del proyecto React + TypeScript
- [x] Props de componentes
- [x] Tipos unión
- [x] Composición de tipos de dominio
- [x] Respuesta de API vs modelo de frontend
- [x] Tipo de utilidad `Omit`
- [x] Mapeo de datos (`TaskResponse` → `Task`)
- [x] Estructura inicial del frontend

---

### Etapa 2 — Integración con la API ✅

- [x] Cliente `fetch` tipado
- [x] Métodos de API genéricos
- [x] Integración GET / POST
- [x] Integración PATCH / DELETE
- [x] Modelado de errores de API
- [x] Validación de respuestas en tiempo de ejecución con Zod
- [x] Manejo de errores
- [x] Mapeo API → Dominio
- [x] Separación Dominio / API
- [x] Configuración de CORS
- [x] Pruebas de integración de la API
- [x] Validación del build de producción

---

### Etapa 3 — Frontend Funcional ✅

**Objetivo:** Completar TaskFlow Web como un frontend funcional conectado a la API.

#### Gestión de Tareas

- [x] Listar tareas
- [x] Crear tarea
- [x] Eliminar tarea
- [x] Editar tarea
- [x] Cambiar el estado de una tarea
- [x] Refrescar / sincronizar la lista de tareas
- [x] Persistir cambios de estado a través de la API

#### Estados de UI

- [x] Estado de carga
- [x] Estado de error
- [x] Estado vacío
- [x] Validación de formularios
- [x] Estado de mutación
- [x] Reintento tras errores de carga

#### React + TypeScript

- [x] Formularios tipados
- [x] Tipado de eventos
- [x] Type guards
- [x] Tipos derivados
- [x] Genéricos
- [x] Composición de props de componentes
- [x] Estado de UI derivado
- [x] Gestión de estado de UI tipada

---

### Etapa 4 — Arquitectura del Frontend ✅

**Objetivo:** Establecer responsabilidades claras entre la UI, el estado del dominio y la comunicación con la API sin introducir abstracciones innecesarias.

- [x] Revisar las responsabilidades de los componentes
- [x] Separar componentes de UI de la comunicación con la API
- [x] Introducir `useTasks` para el estado de la colección de tareas y las mutaciones
- [x] Centralizar las operaciones de la API de tareas
- [x] Mantener los modelos de API separados de los modelos de dominio
- [x] Mantener aislado el mapeo de la API
- [x] Centralizar el manejo de errores de la API
- [x] Cliente de API genérico y tipado
- [x] Validación en tiempo de ejecución en el límite de la API
- [x] Revisar los contratos de la API
- [x] Estructura del frontend orientada a producción
- [x] Revisión arquitectónica final para v1

> Bibliotecas de estado del servidor como TanStack Query se omitieron intencionalmente porque la aplicación actual no tiene la complejidad suficiente para justificarlas.

> Las abstracciones se introdujeron solo cuando apareció un problema real durante el desarrollo.

---

### Etapa 5 — UI / Desarrollo de Producto ✅

**Objetivo:** Evolucionar el frontend funcional hacia una experiencia de producto coherente.

#### Sistema de Diseño Stellan

- [x] Definir la identidad visual de Stellan
- [x] Tokens de diseño
- [x] Tokens de color
- [x] Tokens de espaciado
- [x] Tokens de tipografía
- [x] Tokens de radio
- [x] Tokens de sombras
- [x] Tokens de transiciones
- [x] Componente Button
- [x] Componente Input
- [x] Componente Textarea
- [x] Componente Select
- [x] Componente Badge
- [x] Componente Card
- [x] Componente Dialog
- [x] Estados de foco
- [x] Estados de interacción consistentes

#### UI de TaskFlow

- [x] Tablero de tareas
- [x] Diseño Kanban de tres columnas
- [x] Tarjetas de tareas
- [x] Formulario de tarea
- [x] Diálogo de tarea
- [x] UI de carga / error / vacío
- [x] Diseño responsive
- [x] Acciones de tarea basadas en iconos
- [x] Metadatos de tarea
- [x] Pulido de jerarquía visual y espaciado

---

### Etapa 6 — Drag & Drop ✅

**Objetivo:** Proporcionar una forma intuitiva de cambiar el estado de las tareas mediante manipulación directa.

- [x] Evaluar Drag & Drop nativo de HTML5
- [x] Evaluar opciones de librerías modernas de DnD
- [x] Integrar `@dnd-kit/react`
- [x] Hacer arrastrables las tarjetas de tareas
- [x] Hacer soltables las columnas de tareas
- [x] Detectar origen y destino
- [x] Persistir cambios de estado a través de la API existente
- [x] Evitar llamadas innecesarias a la API al soltar en la misma columna
- [x] Añadir `DragOverlay`
- [x] Mantener la tarjeta original como marcador visual durante el arrastre
- [x] Mantener la tarjeta del overlay visualmente distinta
- [x] Manejar operaciones de arrastre canceladas
- [x] Verificar la persistencia tras recargar la página

> La reordenación de tareas dentro de la misma columna se dejó intencionalmente fuera de v1. Requeriría un modelo de ordenación y una estrategia de persistencia separados.

---

## Etapa 7 — Producción / Futuro 🚧

El trabajo futuro debe estar impulsado por necesidades reales del producto descubiertas tras usar TaskFlow, en lugar de añadir funcionalidades únicamente para aumentar la complejidad técnica.

### UX / UI

- [ ] Más pulido de UI basado en el uso real
- [ ] Auditoría de accesibilidad
- [ ] Mejor feedback / notificaciones
- [ ] Comportamiento responsive avanzado si es necesario
- [ ] Modo oscuro si está justificado

### Funcionalidades de Producto

- [ ] Ordenación de tareas dentro de las columnas
- [ ] Búsqueda
- [ ] Filtrado
- [ ] Detalles de tarea
- [ ] Autenticación
- [ ] Tareas específicas por usuario
- [ ] Metadatos adicionales de tarea

### Testing

- [ ] Ampliar las pruebas de componentes donde sea útil
- [ ] Ampliar la cobertura de pruebas de integración
- [ ] Pruebas end-to-end

### Producción

- [ ] Configuración específica por entorno
- [ ] Despliegue en producción
- [ ] Monitorización / logging
- [ ] Revisión de rendimiento

> Estos elementos intencionalmente no forman parte de v1.0.0.

---

## Estado Técnico Actual

El frontend utiliza actualmente:

- React 19
- TypeScript
- Vite
- pnpm
- Zod
- Lucide React
- `@dnd-kit/react`
- Vitest

### Dominio

- `TaskStatus`
- `Task`
- `TaskFormValues`
- Constantes y etiquetas de estado de tarea

### API

- Cliente de API tipado
- Métodos genéricos GET / POST / PATCH / DELETE
- Esquemas de respuesta Zod
- Modelado de errores de API
- Módulo de API de tareas
- Mappers API → Dominio

### Estado

`useTasks` gestiona:

- Colección de tareas
- Estado de carga
- Estado de error
- Estado de mutación
- Refetch
- Crear
- Actualizar
- Eliminar
- Cambios de estado

### UI

La aplicación incluye actualmente:

- TaskBoard
- TaskColumn
- TaskCard
- TaskForm
- TaskDialog
- Primitivas UI de Stellan

---

## Decisiones Técnicas

### Etapa 1 — Fundamentos de TypeScript

- Los modelos de dominio se mantienen separados de los modelos de respuesta de la API.
- `TaskResponse` representa el contrato externo de la API, mientras que `Task` representa el modelo de dominio del frontend.
- Se utiliza `Omit` para componer `Task` a partir de `TaskResponse`, reemplazando los campos de fecha por `Date`.
- Las cadenas de fecha de la API se convierten en objetos `Date` a través de una función dedicada `mapTask()`.
- `TaskStatus` utiliza un tipo unión para restringir los estados válidos de una tarea.
- La estructura inicial del frontend se mantiene mínima, añadiendo carpetas solo cuando una responsabilidad lo requiere.

### Etapa 2 — Integración con la API

- Las respuestas de la API se validan en tiempo de ejecución con Zod.
- Los esquemas de Zod son la fuente de verdad para los tipos de respuesta externos.
- Los métodos genéricos de la API infieren su tipo de retorno a partir del esquema proporcionado.
- Los modelos de API (`TaskResponse`) se mapean a modelos de frontend (`Task`).
- Los errores HTTP se representan mediante `ApiError`.
- Los datos externos de la API se tratan como entrada no confiable en el límite de la aplicación.

### Etapa 3 — Frontend Funcional

- `useTasks` gestiona el estado de la colección de tareas y las mutaciones de tareas.
- Los componentes de UI no se comunican directamente con la API.
- `App` gestiona el estado de UI de alto nivel, como la tarea activa que se está editando y la visibilidad del diálogo.
- El estado del formulario permanece dentro de `TaskForm`.
- `TaskDialog` gestiona la presentación modal y utiliza composición mediante `children` en lugar de prop drilling.
- El estado de mutación se comparte con los elementos de UI relevantes para evitar acciones conflictivas.

### Etapa 4 — Arquitectura del Frontend

- La comunicación con la API está aislada de los componentes de presentación.
- La lógica de dominio está separada de los contratos de la API.
- Los mappers aíslan las transformaciones de datos externos.
- Las abstracciones reutilizables se introducen solo después de que aparece una necesidad concreta.
- Las bibliotecas de estado del servidor se evitaron intencionalmente en v1 porque los requisitos actuales de gestión de estado son lo suficientemente pequeños para los hooks de React.
- Se prefieren las APIs nativas del navegador y de JavaScript cuando resuelven el problema de forma adecuada.

### Etapa 5 — Sistema de Diseño Stellan

- Stellan es la identidad del sistema de diseño detrás de TaskFlow, mientras que TaskFlow sigue siendo la identidad del producto.
- Los tokens de diseño están centralizados bajo el namespace `--stellan-*`.
- El sistema de diseño se mantiene intencionalmente pequeño y orientado al producto.
- Los componentes se extraen cuando un patrón de UI se vuelve reutilizable o se beneficia de un contrato consistente.
- El pulido visual se maneja a través de tokens y estilos a nivel de componente, en lugar de valores arbitrarios puntuales, siempre que exista un patrón repetido.

### Etapa 6 — Drag & Drop

- Se seleccionó `@dnd-kit/react` en lugar de implementar la interacción manualmente.
- `TaskCard` utiliza `useDraggable`.
- `TaskColumn` utiliza `useDroppable`.
- `DragDropProvider` coordina la operación de arrastre.
- `DragOverlay` proporciona la representación visual durante el arrastre.
- Soltar una tarea en el mismo estado no dispara una petición PATCH innecesaria.
- La reordenación dentro de una columna se excluyó intencionalmente porque introduce una preocupación de persistencia separada (`position` / ordenación).

### React 19

- Se utiliza el comportamiento de `ref`-como-prop de React 19 donde aplica.
- Se evita `forwardRef` para componentes nuevos cuando una prop `ref` normal es suficiente.
- Los componentes se mantienen compatibles con las convenciones de React 19.

---

## Historial de Lanzamientos

### v1.0.0 — TaskFlow Web

**Estado:** 🟢 Lanzado

La primera versión completa de TaskFlow Web.

El lanzamiento incluye:

- CRUD completo de tareas
- Persistencia en PostgreSQL
- Integración con la API de Fastify
- Validación en tiempo de ejecución
- Cliente de API tipado
- Separación Dominio / API
- Gestión del estado de tareas
- Tablero Kanban
- Transiciones de estado con Drag & Drop
- DragOverlay
- Sistema de diseño Stellan
- Estados de carga / error / vacío
- Validación de formularios
- UI responsive
- Pruebas
- Desarrollo local de base de datos basado en Docker

Etiqueta de Git:

```text
v1.0.0
```

---

## Filosofía de Desarrollo

TaskFlow sigue un principio simple:

> **Introduce complejidad cuando el producto tenga una razón para necesitarla.**

El objetivo no es demostrar cada característica de TypeScript, patrón de React o librería disponible.

El objetivo es construir una aplicación real tomando decisiones de ingeniería deliberadas, entendiendo los trade-offs detrás de ellas e introduciendo abstracciones solo cuando resuelven un problema real.

---

## Próximo Hito

**TaskFlow v1.1 — Por definir**

Actualmente no hay ninguna funcionalidad comprometida para v1.1.

La próxima iteración debe basarse en el uso real y en las necesidades observadas del producto, en lugar de una lista predefinida de funcionalidades.
