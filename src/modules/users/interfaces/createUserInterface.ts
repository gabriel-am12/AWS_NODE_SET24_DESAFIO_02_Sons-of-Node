export interface CreateUserInterface {
  fullName: string;
  email: string;
  password: string;
  Role: "ADMIN" | "CLIENT";
}
