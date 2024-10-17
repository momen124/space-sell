/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
type QueryUserType = "user" | "admin";

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
