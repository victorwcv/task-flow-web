import {
  taskResponseListSchema,
  taskResponseSchema,
  type UpdateTaskInput,
} from "./schemas/task";
import { apiDelete, apiGet, apiPatch, apiPost } from "./client";
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

export const updateTask = async (id: string, data: UpdateTaskInput) => {
  const response = await apiPatch(`/tasks/${id}`, data, taskResponseSchema);

  return mapTask(response);
};
