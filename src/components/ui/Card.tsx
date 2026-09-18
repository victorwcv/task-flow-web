import type { ComponentProps } from "react";
import "./Card.css";

type CardProps = ComponentProps<"div">;

export const Card = ({ ref, ...props }: CardProps) => {
  return <div ref={ref} className="stellan-card" {...props} />;
};
