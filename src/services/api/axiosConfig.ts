import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    // Solo mostrar en desarrollo (deshabilitado para cumplir ESLint no-console)
    if (import.meta.env.DEV) {
      // logging intencionalmente omitido
    }

    const errorMessage =
      error.response?.data?.message || `Error ${error.response?.status || "desconocido"}`;

    return Promise.reject(new Error(errorMessage));
  }
);

export default api;
