import type { TaskResponse } from "../schemas/task";
import type { Task } from "../types/task";

export function mapTask(response: TaskResponse): Task {
  return {
    ...response,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt),
  };
}
