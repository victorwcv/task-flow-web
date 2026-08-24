type TaskStatus = "todo" | "in-progress" | "done";

type TaskResponse = {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
};

type TaskFormValues = {
  title: string;
  description: string;
};

type Task = Omit<TaskResponse, "createdAt" | "updatedAt"> & {
  createdAt: Date;
  updatedAt: Date;
};

export type { TaskStatus, TaskResponse, TaskFormValues, Task };
