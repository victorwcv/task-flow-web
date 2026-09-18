import type { TaskStatus } from "../domain/task/constants";
import { TASK_STATUSES, TASK_STATUS_LABELS } from "../domain/task/constants";
import { DragDropProvider, DragOverlay } from "@dnd-kit/react";
import type { Task } from "../domain/task/types";
import { TaskCard } from "./TaskCard";
import "./TaskBoard.css";
import { TaskColumn } from "./TaskColumn";

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
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const { source, target } = event.operation;

        if (!target) return;

        const taskId = String(source?.id);
        const newStatus = target.id as TaskStatus;
        const task = tasks.find((task) => task.id === taskId);

        if (!task || task.status === newStatus) return;

        onStatusChange(taskId, newStatus);
      }}
    >
      <div className="task-board">
        {TASK_STATUSES.map((status) => {
          const columnTasks = tasks.filter((task) => task.status === status);

          return (
            <TaskColumn status={status} key={status}>
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
            </TaskColumn>
          );
        })}
      </div>

      <DragOverlay>
        {(source) => {
          const task = tasks.find((task) => task.id === String(source.id));

          if (!task) return null;

          return (
            <TaskCard
              task={task}
              isMutating={isMutating}
              onDelete={onDelete}
              onEdit={onEdit}
              onStatusChange={onStatusChange}
            />
          );
        }}
      </DragOverlay>
    </DragDropProvider>
  );
};
