import type { TaskStatus } from "../domain/task/constants";
import type { Task } from "../domain/task/types";
import { TASK_STATUSES, TASK_STATUS_LABELS } from "../domain/task/constants";
import { Button } from "./ui/Button";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export const TaskCard = ({
  task,
  onDelete,
  onEdit,
  onStatusChange,
}: TaskCardProps) => {
  return (
    <div className="card">
      <strong>{task.title}</strong>
      <p>{task.description || "-"}</p>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        {TASK_STATUSES.map((status) => (
          <option key={status} value={status}>
            {TASK_STATUS_LABELS[status].label}
          </option>
        ))}
      </select>
      <Button onClick={() => onDelete(task.id)}>Eliminar</Button>
      <Button onClick={() => onEdit(task)}>Editar</Button>
    </div>
  );
};
