export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

// Instructor
export enum InstructorStatus {
  ACTIVE = "ACTIVE",
  ON_LEAVE = "ON_LEAVE",
  INACTIVE = "INACTIVE",
}

export interface Instructor {
  id: number;
  name: string;
  email: string;
  status: InstructorStatus;
  createdAt: string;
  updatedAt: string;
}

export interface InstructorParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: InstructorStatus;
}

// Course
export enum CourseStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export interface Course {
  id: number;
  name: string;
  isActive: boolean;
  createdAt?: string;
}

// Driven
export interface Driven {
  id: number;
  name: string;
}

// Vehicle
export interface Vehicle {
  id: number;
  name: string;
  drivenId?: number | null;
  driven?: {
    id: number;
    name: string;
  };
}

export interface VehicleParams {
  page?: number;
  limit?: number;
  search?: string;
  drivenId?: number | null | "null";
}
