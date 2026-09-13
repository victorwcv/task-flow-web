import type { TaskStatus } from "../domain/task/constants";
import type { Task } from "../domain/task/types";
import { TASK_STATUSES, TASK_STATUS_LABELS } from "../domain/task/constants";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Select } from "./ui/Select";
import "./TaskCard.css";

type TaskCardProps = {
  task: Task;
  isMutating: boolean;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export const TaskCard = ({
  task,
  isMutating,
  onDelete,
  onEdit,
  onStatusChange,
}: TaskCardProps) => {
  const statusVariant = {
    todo: "neutral",
    "in-progress": "accent",
    done: "success",
  } as const;

  return (
    <Card>
      <article className="task-card">
        <div className="task-card-header">
          <Badge variant={statusVariant[task.status]}>
            {TASK_STATUS_LABELS[task.status].label}
          </Badge>
        </div>

        <div className="task-card-content">
          <h2 className="task-card-title">{task.title}</h2>

          <p className="task-card-description">
            {task.description || "Sin descripción"}
          </p>
        </div>

        <div className="task-card-status">
          <Select
            disabled={isMutating}
            aria-label={`Estado de ${task.title}`}
            value={task.status}
            onChange={(e) =>
              onStatusChange(task.id, e.target.value as TaskStatus)
            }
          >
            {TASK_STATUSES.map((status) => (
              <option key={status} value={status}>
                {TASK_STATUS_LABELS[status].label}
              </option>
            ))}
          </Select>
        </div>

        <div className="task-card-actions">
          <Button
            variant="secondary"
            onClick={() => onEdit(task)}
            disabled={isMutating}
          >
            Editar
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(task.id)}
            disabled={isMutating}
          >
            Eliminar
          </Button>
        </div>
      </article>
    </Card>
  );
};
