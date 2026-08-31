import type { TaskStatus } from "./constants";

export type Task = {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type TaskFormValues = {
  title: string;
  description: string;
};
