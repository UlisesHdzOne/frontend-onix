import { useState } from "react";
import { useForm } from "../../hook/useForm";
import { loginValidators } from "./validators";
import { AppleInputForm } from "./AppleInputForm";
import { AppleButton } from "../ui/AppleButton";
import "./LoginForm.css";

export const LoginForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    reset,
    validateAll,
  } = useForm({
    email: { validator: loginValidators.email },
    password: { validator: loginValidators.password },
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // 🔥 PRIMERO validar todos los campos
    const isFormValid = validateAll();

    // Si no es válido, no hacer nada
    if (!isFormValid || loading) return;

    setLoading(true);
    try {
      // Aquí iría tu llamada real a la API
      // await login(values)
      console.log("Enviando formulario:", values);

      // Simular llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Opcional: resetear el formulario después del éxito
      reset();
    } catch (error) {
      console.error("Error en login:", error);
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
        disabled={!isValid && Object.values(touched).some((t) => t)} // Mostrar disabled solo si hay errores Y se ha tocado algo
        loading={loading}
        onClick={handleSubmit}
      >
        Acceder
      </AppleButton>
    </div>
  );
};
