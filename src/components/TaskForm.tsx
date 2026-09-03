import type { SubmitEvent } from "react";
import { useState } from "react";
import type { TaskFormValues } from "../domain/task/types";

type TaskFormProps = {
  initialValues?: TaskFormValues;
  onSubmit: (data: TaskFormValues) => void;
  onCancel?: () => void;
};

export const TaskForm = ({
  onSubmit,
  initialValues,
  onCancel,
}: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormValues>(
    initialValues ?? {
      title: "",
      description: "",
    },
  );

  const isEditing = initialValues !== undefined;

  const handleChange = <K extends keyof TaskFormValues>(
    key: K,
    value: TaskFormValues[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>{isEditing ? "Editar tarea" : "Nueva tarea"}</h1>
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
        <button type="submit">
          {isEditing ? "Guardar cambios" : "Crear tarea"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};
