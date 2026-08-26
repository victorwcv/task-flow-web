import { taskResponseListSchema } from "../schemas/task";
import { get } from "./client";

export const getTasks = () => get("/tasks", taskResponseListSchema);
