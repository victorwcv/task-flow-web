import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <p>{task.title}</p>
      {task.description && <p>{task.description}</p>}
      <p>{task.status}</p>
    </div>
  );
};
