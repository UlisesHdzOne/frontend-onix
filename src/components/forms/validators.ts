export const loginValidators = {
  email: (v: string) => {
    if (!v || v.trim().length === 0) return "Email es requerido"; // ← Aquí
    if (!/\S+@\S+\.\S+/.test(v)) return "Email no válido";
    return undefined;
  },

  password: (v: string) => {
    if (!v || v.trim().length === 0) return "La contraseña es obligatoria";
    if (v.length < 6) return "Mínimo 6 caracteres"; // ← Podrías agregar esto
    return undefined;
  },
};