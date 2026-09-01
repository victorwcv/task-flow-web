import { z } from "zod";

const API_URL = "http://localhost:3000";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiGet<S extends z.ZodType>(
  endpoint: string,
  schema: S,
): Promise<z.infer<S>> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new ApiError(
      `HTTP error! status: ${response.status}`,
      response.status,
    );
  }

  const data: unknown = await response.json();

  return schema.parse(data);
}

export async function apiPost<TBody, S extends z.ZodType>(
  endpoint: string,
  body: TBody,
  schema: S,
): Promise<z.infer<S>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new ApiError(
      `HTTP error! status: ${response.status}`,
      response.status,
    );
  }

  const data: unknown = await response.json();

  return schema.parse(data);
}

export async function apiDelete(endpoint: string): Promise<void> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new ApiError(
      `HTTP error! status: ${response.status}`,
      response.status,
    );
  }
}
