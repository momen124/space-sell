export type UserType = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  type: UserType;
}
