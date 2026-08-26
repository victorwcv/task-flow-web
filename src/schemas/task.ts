import { z } from "zod";
import { TASK_STATUSES } from "../constans/constants";

export const taskResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.enum(TASK_STATUSES),
  createdAt: z.iso.date(),
  updatedAt: z.iso.date(),
});

export const taskResponseListSchema = z.array(taskResponseSchema);

export type TaskResponse = z.infer<typeof taskResponseSchema>;
export type TaskResponseList = z.infer<typeof taskResponseListSchema>;
