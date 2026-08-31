export const TASK_STATUSES = ["todo", "in-progress", "done"] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];

export const TASK_STATUS_LABELS: Record<
  TaskStatus,
  {
    label: string;
    description: string;
  }
> = {
  todo: {
    label: "Por hacer",
    description: "Tarea pendiente",
  },
  "in-progress": {
    label: "En progreso",
    description: "Tarea en desarrollo",
  },
  done: {
    label: "Completada",
    description: "Tarea terminada",
  },
};
