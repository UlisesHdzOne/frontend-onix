import { useState } from "react";
import { useForm } from "../../hook/useForm";
import { loginValidators } from "./validators";
import { AppleInputForm } from "./AppleInputForm";
import { AppleButton } from "../ui/AppleButton";
import "./LoginForm.css";

export const LoginForm = () => {
  const { values, errors, touched, handleChange, handleBlur, isValid } =
    useForm({
      email: { validator: loginValidators.email },
      password: { validator: loginValidators.password },
    });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!isValid || loading) return;

    setLoading(true);
    try {
      // await login(values)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Bienvenido</h2>

      <AppleInputForm
        name="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChange={(v) => handleChange("email", v)}
        onBlur={() => handleBlur("email")}
      />

      <AppleInputForm
        name="password"
        label="Contraseña"
        type="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChange={(v) => handleChange("password", v)}
        onBlur={() => handleBlur("password")}
      />

      <AppleButton
        expand="block"
        disabled={!isValid}
        loading={loading}
        onClick={handleSubmit}
      >
        Acceder
      </AppleButton>
    </div>
  );
};
