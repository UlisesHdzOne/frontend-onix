import { useState, useCallback } from "react";
import api from "../services/api/axiosConfig";

interface UseApiReturn {
  get: <T>(url: string, params?: Record<string, unknown>) => Promise<T>;
  post: <T>(url: string, data?: unknown) => Promise<T>;
  put: <T>(url: string, data?: unknown) => Promise<T>;
  patch: <T>(url: string, data?: unknown) => Promise<T>;
  delete: (url: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

export function useApi(): UseApiReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const request = useCallback(
    async <T>(
      method: "get" | "post" | "put" | "patch" | "delete",
      url: string,
      data?: unknown,
      params?: Record<string, unknown>
    ): Promise<T> => {
      setLoading(true);
      clearError();

      try {
        const response = await api.request<T>({
          method,
          url,
          data,
          params,
        });
        return response.data;
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Error de conexión con el servidor";
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [clearError]
  );

  const get = useCallback(
    <T>(url: string, params?: Record<string, unknown>) => request<T>("get", url, undefined, params),
    [request]
  );

  const post = useCallback(
    <T>(url: string, data?: unknown) => request<T>("post", url, data),
    [request]
  );

  const put = useCallback(
    <T>(url: string, data?: unknown) => request<T>("put", url, data),
    [request]
  );

  const patch = useCallback(
    <T>(url: string, data?: unknown) => request<T>("patch", url, data),
    [request]
  );

  const deleteReq = useCallback((url: string) => request<void>("delete", url), [request]);

  return {
    get,
    post,
    put,
    patch,
    delete: deleteReq,
    loading,
    error,
    clearError,
  };
}
