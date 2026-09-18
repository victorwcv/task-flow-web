import type { Task } from "../domain/task/types";
import { TASK_STATUS_LABELS } from "../domain/task/constants";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Pencil, Trash2 } from "lucide-react";
import { useDraggable } from "@dnd-kit/react";
import "./TaskCard.css";
import { formatTaskDate } from "../utils/date";

type TaskCardProps = {
  task: Task;
  isMutating: boolean;
  dragCard?: boolean;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

export const TaskCard = ({
  task,
  dragCard,
  onDelete,
  onEdit,
}: TaskCardProps) => {
  const statusVariant = {
    todo: "neutral",
    "in-progress": "accent",
    done: "success",
  } as const;

  const { ref, isDragging } = useDraggable({
    id: task.id,
  });

  return (
    <div className={isDragging && !dragCard ? "task-card-dragging" : undefined}>
      <Card ref={ref}>
        <article className="task-card">
          <div className="task-card-header">
            <Badge variant={statusVariant[task.status]} size="sm">
              {TASK_STATUS_LABELS[task.status].label}
            </Badge>
            <div className="task-card-actions">
              <Button
                variant="secondary"
                appearance="icon"
                size="sm"
                aria-label={`Editar ${task.title}`}
                title="Editar"
                onClick={() => onEdit(task)}
              >
                <Pencil size={16} />
              </Button>

              <Button
                variant="danger"
                appearance="icon"
                size="sm"
                aria-label={`Eliminar ${task.title}`}
                title="Eliminar"
                onClick={() => onDelete(task.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>

          <div className="task-card-content">
            <h2 className="task-card-title">{task.title}</h2>

            <p className="task-card-description">
              {task.description || "Sin descripción"}
            </p>
          </div>
          <div className="task-card-footer">
            <span>Actualizada · {formatTaskDate(task.updatedAt)}</span>
          </div>
        </article>
      </Card>
    </div>
  );
};
