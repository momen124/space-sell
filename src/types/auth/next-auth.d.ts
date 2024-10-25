/* eslint-disable @typescript-eslint/no-empty-object-type */
import { User as UserModel } from "../user";

declare module "next-auth" {
  interface Session {
    user?: User;
  }
  interface User extends UserModel {}
  interface DefaultUser extends User {}
}

declare module "next-auth/jwt" {
  interface DefaultJWT {}
  type JWT = UserModel;
}
