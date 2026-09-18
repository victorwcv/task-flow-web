# TaskFlow Web

Una aplicación full-stack de gestión de tareas construida con **React, TypeScript, Fastify y PostgreSQL**, enfocada en arquitectura type-safe, validación en tiempo de ejecución, componentes UI reutilizables y desarrollo práctico de producto.

TaskFlow fue construido de forma incremental: la complejidad se introdujo cuando la aplicación tuvo una razón real para necesitarla, evitando abstracciones prematuras y manteniendo la arquitectura mantenible.

## ✨ Qué demuestra

- Arquitectura frontend type-safe con React y TypeScript
- Validación en tiempo de ejecución con Zod en el límite de la API
- Comunicación tipada entre frontend y backend
- Separación entre modelos de API, modelos de dominio y modelos de formulario
- API REST construida con Fastify
- Persistencia en PostgreSQL mediante Prisma
- Gestión de tareas estilo Kanban
- Transiciones de estado con Drag & Drop
- Componentes UI reutilizables mediante el sistema de diseño **Stellan**
- Estados de carga, error y vacío
- Manejo de estados de mutación
- Pruebas automatizadas con Vitest
- Entorno de desarrollo PostgreSQL dockerizado

## 📸 Producto

TaskFlow ofrece un flujo de trabajo enfocado estilo Kanban para gestionar tareas en tres estados:

- **Por hacer**
- **En progreso**
- **Completada**

Las tareas se pueden crear, editar, eliminar y mover entre columnas mediante Drag & Drop. Los cambios se persisten a través de la API del backend.

## 🏗️ Arquitectura

```text
┌─────────────────────────────┐
│        React + TypeScript   │
│                             │
│   TaskFlow UI + Stellan     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Typed API Client      │
│       + Zod Validation      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Fastify REST API      │
│          + Zod              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          Prisma             │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│         PostgreSQL          │
└─────────────────────────────┘
```

El frontend trata los datos externos de la API como entrada no confiable. Las respuestas se validan en tiempo de ejecución con Zod y se mapean a modelos de dominio antes de llegar a la UI.

El flujo principal del frontend es:

```text
React UI
   ↓
useTasks
   ↓
Task API
   ↓
Typed API Client
   ↓
Zod validation
   ↓
Fastify API
   ↓
Prisma
   ↓
PostgreSQL
```

## 🧩 Arquitectura del Frontend

El frontend está organizado en torno a responsabilidades claras:

```text
src/
├── domain/
│   └── task/
├── api/
│   ├── client.ts
│   ├── taskApi.ts
│   ├── mappers/
│   └── schemas/
├── components/
│   ├── ui/
│   ├── TaskBoard.tsx
│   ├── TaskColumn.tsx
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   └── TaskDialog.tsx
├── hooks/
│   └── useTasks.ts
├── utils/
└── styles/
```

Los componentes UI no se comunican directamente con la API. El estado de la colección de tareas y las mutaciones son manejados por `useTasks`, mientras que la comunicación con la API está aislada detrás de la task API y el cliente tipado.

## 🎨 Sistema de Diseño Stellan

Stellan es el sistema de diseño personalizado creado para TaskFlow.

Proporciona primitivas UI reutilizables como:

- Button
- Input
- Textarea
- Select
- Badge
- Card
- Dialog

Stellan utiliza tokens de diseño centralizados para:

- Colores
- Espaciado
- Tipografía
- Radio de borde
- Sombras
- Transiciones

El sistema de diseño se mantiene intencionalmente pequeño y orientado al producto. Los componentes y tokens se introducen cuando la aplicación tiene una necesidad real de ellos.

## 🎯 Características

- Crear tareas
- Editar tareas
- Eliminar tareas
- Cambiar el estado de una tarea
- Tablero Kanban de tres columnas
- Drag & Drop entre columnas
- DragOverlay para una vista previa dedicada del arrastre
- Estado de tareas persistente
- Validación de respuestas de API en tiempo de ejecución
- Cliente API tipado
- Estado de carga
- Estado de error con reintento
- Estado vacío
- Manejo de estados de mutación
- Validación de formularios
- Diseño responsive
- Primitivas UI reutilizables de Stellan
- Controles de formulario accesibles y estados de foco

## 🧠 Decisiones de Ingeniería

### TypeScript como herramienta de diseño

TypeScript se utiliza para modelar los límites de la aplicación y los conceptos del dominio, no simplemente para satisfacer al compilador.

### Modelos de API y de dominio separados

Las respuestas del backend no se tratan como el modelo de dominio de la aplicación. Los datos de la API se validan y mapean antes de ser consumidos por la UI.

```text
API Response
     ↓
Zod validation
     ↓
Mapper
     ↓
Domain Task
     ↓
React UI
```

### Validación en tiempo de ejecución en el límite

Los tipos de TypeScript desaparecen en tiempo de ejecución, por lo que las respuestas externas de la API se validan con Zod antes de entrar en la aplicación.

### Responsabilidades de UI y API separadas

Los componentes se centran en la presentación y la interacción del usuario. La comunicación con la API se maneja a través de módulos API dedicados y `useTasks`.

### Las abstracciones se introducen cuando se necesitan

El proyecto evita intencionalmente introducir abstracciones simplemente porque sean técnicamente posibles. Los componentes reutilizables, utilidades y primitivas del sistema de diseño se añaden cuando aparece una repetición real o un requisito de diseño.

### APIs nativas antes que dependencias adicionales

Cuando la plataforma ya proporciona una solución adecuada, TaskFlow prefiere las APIs nativas del navegador o de JavaScript antes de introducir otra dependencia.

## 🛠️ Stack Tecnológico

| Capa               | Tecnología              |
| ------------------ | ----------------------- |
| Frontend           | React 19                |
| Lenguaje           | TypeScript              |
| Build Tool         | Vite                    |
| Gestor de paquetes | pnpm                    |
| UI                 | Stellan Design System   |
| Iconos             | Lucide                  |
| Validación         | Zod                     |
| Drag & Drop        | @dnd-kit/react          |
| Backend            | Node.js + Fastify       |
| Base de datos      | PostgreSQL              |
| ORM                | Prisma                  |
| Testing            | Vitest                  |
| Desarrollo         | Docker / Docker Compose |

## 🚀 Desarrollo

Instalar dependencias:

```bash
pnpm install
```

Iniciar el servidor de desarrollo del frontend:

```bash
pnpm dev
```

Construir la aplicación:

```bash
pnpm build
```

Ejecutar linting:

```bash
pnpm lint
```

Ejecutar pruebas:

```bash
pnpm test
```

El backend y la base de datos PostgreSQL son necesarios para el flujo completo de la aplicación.

## 🐘 PostgreSQL

El proyecto utiliza PostgreSQL para la persistencia y Docker Compose para el desarrollo local de la base de datos.

```bash
docker compose up -d
```

La base de datos se gestiona a través de Prisma en el backend.

## 📌 Estado del Proyecto

**v1.0.0**

TaskFlow v1 incluye el flujo completo de gestión de tareas:

- ✅ Frontend React + TypeScript
- ✅ API REST con Fastify
- ✅ Persistencia en PostgreSQL
- ✅ Integración con Prisma
- ✅ Validación en tiempo de ejecución con Zod
- ✅ Cliente API tipado
- ✅ Operaciones CRUD
- ✅ Tablero Kanban
- ✅ Cambios de estado con Drag & Drop
- ✅ DragOverlay
- ✅ Estados de carga / error / vacío
- ✅ Validación de formularios
- ✅ Pruebas con Vitest
- ✅ Sistema UI Stellan
- ✅ Diseño responsive
- ✅ Arquitectura orientada a producción

## 📚 Evolución del Proyecto

El proyecto se desarrolló de forma incremental, utilizando commits de Git como puntos de control para decisiones arquitectónicas y de producto.

El objetivo de aprendizaje original era profundizar en TypeScript a través de una aplicación real. A medida que el proyecto evolucionó, el enfoque se amplió hacia la arquitectura frontend, el diseño de APIs, la validación en tiempo de ejecución, la persistencia, el testing, los sistemas de UI y el diseño de interacción.

Consulta `PROGRESS.md` para ver el historial de desarrollo y las etapas completadas.

## 📄 Licencia

Este proyecto está actualmente pensado como un proyecto personal de portafolio e ingeniería.
