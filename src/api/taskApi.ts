import { taskResponseListSchema, taskResponseSchema } from "./schemas/task";
import { get, post } from "./client";
import type { TaskFormValues } from "../domain/task/types";
import { mapTask } from "./mappers/task";

export const getTasks = async () => {
  const response = await get("/tasks", taskResponseListSchema);
  return response.map(mapTask);
};
export const createTask = async (data: TaskFormValues) => {
  const response = await post("/tasks", data, taskResponseSchema);
  return mapTask(response);
};
