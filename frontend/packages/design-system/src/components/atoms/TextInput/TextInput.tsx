import { styles } from "./styles.css";

interface Props extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  type?: "text" | "password" | "email";
  label?: string;
  labelVariant?: "sm" | "md" | "lg";
}

export function TextInput({
  type = "text",
  label,
  labelVariant = "md",
  ...props
}: Readonly<Props>) {
  const inputId =
    props.id || `text-input-${Math.random().toString(36).slice(2, 11)}`;

  return (
    <div className={styles.container}>
      {label && (
        <label
          className={styles.label({ size: labelVariant })}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input id={inputId} type={type} className={styles.input} {...props} />
    </div>
  );
}
