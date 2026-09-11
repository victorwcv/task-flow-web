import type { SubmitEvent } from "react";
import { useState } from "react";
import type { Task, TaskFormValues } from "../domain/task/types";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

type TaskFormProps = {
  editingTask: Task | null;
  isMutating: boolean;
  onCreate: (data: TaskFormValues) => void;
  onEdit: (id: string, data: TaskFormValues) => void;
  onCancel?: () => void;
};

export const TaskForm = ({
  editingTask,
  isMutating,
  onCreate,
  onEdit,
  onCancel,
}: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormValues>({
    title: editingTask?.title ?? "",
    description: editingTask?.description ?? "",
  });

  const isEditing = editingTask !== null;

  const handleChange = <K extends keyof TaskFormValues>(
    key: K,
    value: TaskFormValues[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      return;
    }

    if (isEditing) {
      onEdit(editingTask.id, formData);
    } else {
      onCreate(formData);
    }
    setFormData({ title: "", description: "" });
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div>
      <h1>{isEditing ? "Editar tarea" : "Nueva tarea"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            disabled={isMutating}
            label="Titulo"
            helperText="Agrega el titulo de la tarea"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div>
          <Textarea
            label="Descripcion"
            helperText="Opcionalmente agrega una descripcion"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isMutating}>
          {isMutating
            ? "Guardando..."
            : isEditing
              ? "Guardar cambios"
              : "Crear tarea"}
        </Button>
        {onCancel && (
          <Button type="button" onClick={onCancel} disabled={isMutating}>
            Cancelar
          </Button>
        )}
      </form>
    </div>
  );
};
