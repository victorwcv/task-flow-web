import { z } from "zod";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function get<S extends z.ZodType>(
  endpoint: string,
  schema: S,
): Promise<z.infer<S>> {
  const url = `http://localhost:3000${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new ApiError(
      `HTTP error! status: ${response.status}`,
      response.status,
    );
  }
  const data: unknown = await response.json();
  return schema.parse(data);
}
