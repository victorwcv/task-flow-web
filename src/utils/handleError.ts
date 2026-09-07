import z from "zod";
import { ApiError } from "../api/client";

export function handleError(error: unknown) {
  if (error instanceof ApiError) {
    console.error(`HTTP error - ${error.status}: ${error.message}`);
  } else if (error instanceof z.ZodError) {
    console.error(`Validation error - ${error.message}`, error.issues);
  } else if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}
