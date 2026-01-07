import { AppleInput } from "../ui/AppleInput";

interface Props {
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  name?: string;
}

export const AppleInputForm = ({
  name,
  label,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
}: Props) => {
  return (
    <AppleInput
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched ? error : undefined}
    />
  );
};
