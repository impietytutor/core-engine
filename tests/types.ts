// core-engine/types.ts

export type UUID = string;

export interface Entity {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Entity {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
}

export interface Project extends Entity {
  name: string;
  description?: string;
  ownerId: UUID; // User ID
}

export interface Task extends Entity {
  title: string;
  description?: string;
  projectId: UUID;
  assigneeId?: UUID; // User ID
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date;
}

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  DONE = "DONE",
}

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

// Utility type for making certain fields optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Utility type for making all fields required
export type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Example of using Optional
export type OptionalTaskDescription = Optional<Task, "description">;