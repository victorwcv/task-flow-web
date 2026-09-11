import { useId, type ComponentProps } from "react";
import "./Input.css";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Input = ({
  id,
  label,
  error,
  helperText,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const feedbackId = `${inputId}-feedback`;

  return (
    <div className="stellan-input-container">
      {label && (
        <label className="stellan-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`stellan-input ${error ? "stellan-input-danger" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helperText ? feedbackId : undefined}
        {...props}
      />

      {(error || helperText) && (
        <div
          id={feedbackId}
          className={
            error ? "stellan-input-error" : "stellan-input-helper-text"
          }
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
};
