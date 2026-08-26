import { TASK_STATUSES } from "../constans/constants";
import type { TaskResponse } from "../schemas/task";

export type TaskStatus = (typeof TASK_STATUSES)[number];

export type TaskFormValues = {
  title: string;
  description: string;
};

export type Task = Omit<TaskResponse, "createdAt" | "updatedAt"> & {
  createdAt: Date;
  updatedAt: Date;
};
