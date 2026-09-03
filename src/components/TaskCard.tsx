import type { Task } from "../domain/task/types";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

export const TaskCard = ({ task, onDelete, onEdit }: TaskCardProps) => {
  return (
    <div className="card">
      <strong>{task.title}</strong>
      <p>{task.description || "-"}</p>
      <p>{task.status}</p>
      <button onClick={() => onDelete(task.id)}>❌</button>
      <button onClick={() => onEdit(task)}>✏️</button>
    </div>
  );
};
