export interface listUsersInterface {
  fullName?: string;
  email?: string;
  isDeleted?: boolean;
  sortBy?: "fullName" | "createdAt" | "deletedAt";
  sortOrder: "asc";
  page?: number;
  perPage?: number;
  Role: "ADMIN";
}
