import type { SubmitEvent } from "react";
import { useEffect, useRef, useState } from "react";
import type { Task, TaskFormValues } from "../domain/task/types";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import "./TaskForm.css";

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
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      titleInputRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, []);

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

    setFormData({
      title: "",
      description: "",
    });

    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Card>
      <div className="task-form-header">
        <div>
          <p className="task-form-eyebrow">
            {isEditing ? "Modificar" : "Crear"}
          </p>

          <h1 className="task-form-title">
            {isEditing ? "Editar tarea" : "Nueva tarea"}
          </h1>

          <p className="task-form-description">
            {isEditing
              ? "Actualiza la información de esta tarea."
              : "Crea una nueva tarea para mantener tu trabajo organizado."}
          </p>
        </div>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <Input
          ref={titleInputRef}
          disabled={isMutating}
          label="Título"
          helperText="Agrega el título de la tarea"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <Textarea
          disabled={isMutating}
          label="Descripción"
          helperText="Opcionalmente agrega una descripción"
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <div className="task-form-actions">
          <Button type="submit" disabled={isMutating}>
            {isMutating
              ? "Guardando..."
              : isEditing
                ? "Guardar cambios"
                : "Crear tarea"}
          </Button>

          {onCancel && (
            <Button
              type="button"
              variant="secondary"
              onClick={onCancel}
              disabled={isMutating}
            >
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};
