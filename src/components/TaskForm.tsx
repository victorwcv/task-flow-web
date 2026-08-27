import type { SubmitEvent } from "react";
import { useState } from "react";
import type { TaskFormValues } from "../types/task";

type TaskFormProps = {
  onSubmit: (data: TaskFormValues) => void;
};

export const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormValues>({
    title: "",
    description: "",
  });

  const handleChange = <K extends keyof TaskFormValues>(
    key: K,
    value: TaskFormValues[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h1>Task Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
