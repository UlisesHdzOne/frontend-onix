export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MIN_PAGE: 1,
  MIN_LIMIT: 1,
  MAX_LIMIT: 100,
};

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  INSTRUCTOR: {
    LIST: "/instructor",
    CREATE: "/instructor/new",
    DETAIL: (id: number) => `/instructor/${id}`,
    EDIT: (id: number) => `/instructor/${id}/edit`,
  },
  COURSE: {
    LIST: "/course",
    CREATE: "/course/new",
    DETAIL: (id: number) => `/course/${id}`,
  },
  DRIVEN: {
    LIST: "/driven",
    CREATE: "/driven/new",
    DETAIL: (id: number) => `/driven/${id}`,
  },
  VEHICLE: {
    LIST: "/vehicle",
    CREATE: "/vehicle/new",
    DETAIL: (id: number) => `/vehicle/${id}`,
  },
};

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  THEME: "theme",
};
