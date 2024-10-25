import { User } from "@/types/user";
import { useSession } from "next-auth/react";

type UseUser = {
  user?: User;
  status: "loading" | "unauthenticated" | "authenticated";
  update?: ReturnType<typeof useSession>["update"];
};

function useUser(): UseUser {
  const { data, status, update } = useSession();
  const user = data?.user;

  if (status === "loading") {
    return {
      user: undefined,
      status,
    };
  }

  if (status === "unauthenticated" || !user) {
    return {
      user: undefined,
      status,
    };
  }

  return {
    user: {
      ...user,
    },

    status,
    update,
  };
}

export default useUser;
