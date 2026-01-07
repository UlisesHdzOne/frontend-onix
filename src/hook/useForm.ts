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
    initialErrors[key] = undefined;
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

  const reset = () => {
    setValues(initialValues);
    setErrors(initialErrors);
    setTouched(initialTouched);
  };

  // 🔥 NUEVO MÉTODO IMPORTANTE
  const validateAll = (): boolean => {
    let allValid = true;
    const newErrors = { ...errors };
    const newTouched = { ...touched };

    (Object.keys(fieldsConfig) as T[]).forEach((key) => {
      newTouched[key] = true; // Marcar como touched
      const validator = fieldsConfig[key].validator;
      if (validator) {
        const error = validator(values[key]);
        newErrors[key] = error;
        if (error) allValid = false;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);
    return allValid;
  };

  const isValid = Object.values(errors).every((e) => !e);

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    reset,
    validateAll,
  };
};
