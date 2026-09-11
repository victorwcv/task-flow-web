import type { ComponentProps } from "react";
import "./Badge.css";

type BadgeProps = ComponentProps<"span"> & {
  variant?: "neutral" | "success" | "warning" | "danger" | "accent";
  size?: "sm" | "md";
};

export const Badge = ({
  variant = "neutral",
  size = "md",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={`stellan-badge stellan-badge-${variant} stellan-badge-${size}`}
      {...props}
    />
  );
};
