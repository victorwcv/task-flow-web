import { useId, type ComponentProps } from "react";
import "./Select.css";

type SelectProps = ComponentProps<"select"> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Select = ({
  id,
  label,
  error,
  helperText,
  children,
  ...props
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  const feedbackId = `${selectId}-feedback`;

  return (
    <div className="stellan-select-container">
      {label && (
        <label className="stellan-select-label" htmlFor={selectId}>
          {label}
        </label>
      )}

      <select
        id={selectId}
        className={`stellan-select ${error ? "stellan-select-danger" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helperText ? feedbackId : undefined}
        {...props}
      >
        {children}
      </select>

      {(error || helperText) && (
        <div
          id={feedbackId}
          className={
            error ? "stellan-select-error" : "stellan-select-helper-text"
          }
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
};
