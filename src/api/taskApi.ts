import { taskResponseListSchema, taskResponseSchema } from "./schemas/task";
import { apiDelete, apiGet, apiPost } from "./client";
import type { TaskFormValues } from "../domain/task/types";
import { mapTask } from "./mappers/task";

export const getTasks = async () => {
  const response = await apiGet("/tasks", taskResponseListSchema);
  return response.map(mapTask);
};
export const createTask = async (data: TaskFormValues) => {
  const response = await apiPost("/tasks", data, taskResponseSchema);
  return mapTask(response);
};

export const deleteTask = async (taskId: string) => {
  await apiDelete(`/tasks/${taskId}`);
};
