import type { Task } from "../../domain/task/types";
import type { TaskResponse } from "../schemas/task";

export function mapTask(response: TaskResponse): Task {
  return {
    ...response,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt),
  };
}
