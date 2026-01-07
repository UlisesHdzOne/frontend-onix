export const loginValidators = {
  email: (v: string) =>
    v && !/\S+@\S+\.\S+/.test(v) ? "Email no válido" : undefined,

  password: (v: string) =>
    !v || v.trim().length === 0 ? "La contraseña es obligatoria" : undefined,
};