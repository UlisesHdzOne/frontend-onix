import { IonInput, IonText, InputCustomEvent } from "@ionic/react";
import { useState } from "react";
import "./AppleInput.css";

interface Props {
  label: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  name?: string;
  disabled?: boolean;
}

export const AppleInput = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  name,
  disabled,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const inputId = name || label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className={`apple-field ${value ? "has-value" : ""} ${focused ? "is-focused" : ""}`}
    >
      <div className={`apple-surface ${error ? "apple-error" : ""}`}>
        <label htmlFor={inputId} className="apple-floating-label">
          {label}
        </label>

        <IonInput
          id={inputId}
          type={type}
          value={value}
          className="apple-native-input"
          onIonInput={(e: InputCustomEvent) => onChange(e.detail.value ?? "")}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
          name={name}
          disabled={disabled}
        />
      </div>

      {error && (
        <IonText color="danger">
          <small>{error}</small>
        </IonText>
      )}
    </div>
  );
};
