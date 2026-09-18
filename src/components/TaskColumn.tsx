import type { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/react";

import type { TaskStatus } from "../domain/task/constants";

type TaskColumnProps = {
  status: TaskStatus;
  children: ReactNode;
};

export const TaskColumn = ({ status, children }: TaskColumnProps) => {
  const { ref } = useDroppable({
    id: status,
  });

  return (
    <section ref={ref} className="task-column">
      {children}
    </section>
  );
};
