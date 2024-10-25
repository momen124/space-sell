/* eslint-disable @typescript-eslint/no-explicit-any */

import { UserType } from "@/types/user";

type QueryUserType = UserType;

function Queryable(userType: QueryUserType, otherKeys: string | string[]) {
  return function (
    target: any,
    propertyKey: string,
    _descriptor: PropertyDescriptor
  ) {
    const qKeys = Array.isArray(otherKeys) ? otherKeys : [otherKeys];

    // store metadata on the method
    if (!target[propertyKey].__metadata) {
      target[propertyKey].__metadata = {
        userType,
        queryKey: qKeys,
      };
    }
  };
}

export { Queryable };
export type { QueryUserType };
