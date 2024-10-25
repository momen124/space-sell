import { axiosInternal } from "@/config/axios";
import { LoginSchemaType } from "@/schema/loginSchema";
import { authService } from "@/service/authService";
import { User } from "@/types/user";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useMutation } from "./useMutation";

export const useAuth = () => {
  const router = useRouter();

  const { mutateAsync: signIn, isPending: isSigningIn } = useMutation({
    mutationFn: async (values: LoginSchemaType) => {
      await authService.login(values);
      const { data } = await axiosInternal.get<{ user: User }>("/auth/session");
      return data?.user;
    },
    onSuccess: (user: User) => {
      const callbackCookie = getCookie("callbackUrl");
      let cbUrl = user?.type === "admin" ? "/admin/dashboard" : `/`;
      if (callbackCookie) {
        try {
          cbUrl = decodeURIComponent(callbackCookie);
        } catch (_) {
          cbUrl = `/`;
        }
      }
      router.push(cbUrl);
      deleteCookie("callbackUrl");
    },
    onError(error) {
      router.replace({
        query: {},
      });

      return {
        id: "signin-error",
        subTitle: error?.message,
      };
    },
  });

  return { signIn, isSigningIn };
};
