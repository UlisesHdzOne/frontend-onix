import { useState } from "react";

type ValidatorFn = (value: string) => string | undefined;

interface FieldConfig {
  initialValue?: string;
  validator?: ValidatorFn;
}

type FieldsConfig<T extends string> = Record<T, FieldConfig>;

export const useForm = <T extends string>(fieldsConfig: FieldsConfig<T>) => {
  const initialValues = {} as Record<T, string>;
  const initialErrors = {} as Record<T, string | undefined>;
  const initialTouched = {} as Record<T, boolean>;

  (Object.keys(fieldsConfig) as T[]).forEach((key) => {
    initialValues[key] = fieldsConfig[key].initialValue ?? "";
    initialErrors[key] = fieldsConfig[key].validator
      ? fieldsConfig[key].validator!(initialValues[key])
      : undefined;
    initialTouched[key] = false;
  });

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState(initialTouched);

  const handleChange = (field: T, value: string) => {
    setValues((p) => ({ ...p, [field]: value }));
    const v = fieldsConfig[field].validator;
    if (v) setErrors((p) => ({ ...p, [field]: v(value) }));
  };

  const handleBlur = (field: T) => {
    setTouched((p) => ({ ...p, [field]: true }));
    const v = fieldsConfig[field].validator;
    if (v) setErrors((p) => ({ ...p, [field]: v(values[field]) }));
  };

  const isValid =
    Object.values(errors).every((e) => !e) &&
    Object.values(values).every((v) => (v as string).trim() !== "");

  return { values, errors, touched, isValid, handleChange, handleBlur };
};
