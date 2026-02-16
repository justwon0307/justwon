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
  const crypto = globalThis.window.crypto;
  const inputId =
    props.id ||
    `text-input-${crypto.getRandomValues(new Uint32Array(1))[0].toString(36)}`;

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
