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
    isValid,
    isSubmitting,  // ← Del hook
    submit,        // ← Del hook
    handleChange,
    handleBlur,
    reset,
  } = useForm({
    email: { validator: loginValidators.email },
    password: { validator: loginValidators.password },
  });

  const handleLogin = async () => {
    try {
      const success = await submit(async (formValues) => {
        // Tu API call aquí
        console.log("Enviando credenciales:", formValues);
        
        // Simular API call (reemplazar con fetch real)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Ejemplo real:
        // const response = await fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formValues)
        // });
        // 
        // if (!response.ok) throw new Error('Error en login');
        // return response.json();
      });
      
      if (success) {
        reset();
        console.log("¡Login exitoso!");
        // Navegar a dashboard, guardar token, etc.
      }
      
    } catch (error) {
      console.error("Error en login:", error);
      // Mostrar error al usuario
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
        disabled={!isValid || isSubmitting}  // ← Usa isSubmitting del hook
        loading={isSubmitting}               // ← Usa isSubmitting del hook
        onClick={handleLogin}
      >
        Acceder
      </AppleButton>
    </div>
  );
};