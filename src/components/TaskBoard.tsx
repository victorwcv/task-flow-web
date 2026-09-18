import type { TaskStatus } from "../domain/task/constants";
import { TASK_STATUSES, TASK_STATUS_LABELS } from "../domain/task/constants";
import type { Task } from "../domain/task/types";
import { TaskCard } from "./TaskCard";
import "./TaskBoard.css";

type TaskBoardProps = {
  tasks: Task[];
  isMutating: boolean;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
};

export const TaskBoard = ({
  tasks,
  isMutating,
  onDelete,
  onEdit,
  onStatusChange,
}: TaskBoardProps) => {
  return (
    <div className="task-board">
      {TASK_STATUSES.map((status) => {
        const columnTasks = tasks.filter((task) => task.status === status);

        return (
          <section className="task-column" key={status}>
            <header className="task-column-header">
              <div>
                <p className="task-column-eyebrow">
                  {TASK_STATUS_LABELS[status].label}
                </p>

                <h3 className="task-column-title">
                  {TASK_STATUS_LABELS[status].description}
                </h3>
              </div>

              <span className="task-column-count">{columnTasks.length}</span>
            </header>

            <div className="task-column-content">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  isMutating={isMutating}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onStatusChange={onStatusChange}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
