import type { Task, TaskResponse } from "../types/task";

export function mapTask(response: TaskResponse): Task {
  return {
    ...response,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt),
  };
}
