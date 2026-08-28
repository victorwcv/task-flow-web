import { taskResponseListSchema, taskResponseSchema } from "../schemas/task";
import type { TaskFormValues } from "../types/task";
import { get, post } from "./client";

export const getTasks = () => get("/tasks", taskResponseListSchema);
export const createTask = (data: TaskFormValues) =>
  post("/tasks", data, taskResponseSchema);
