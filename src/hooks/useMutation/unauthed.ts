import type { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { signOut } from "next-auth/react";

const EXCEPTION = ["UNAUTHORIZED_EXCEPTION", "TOKEN_EXPIRED"];

const unAuthorizedHandler = async (error: any) => {
  if (typeof window === "undefined") return;

  const axiosError = error as AxiosError<any>;

  const isAuthPage = window.location.pathname.includes("/auth");
  const isAdminPage = window.location.pathname.includes("/admin");
  const currentUrl = window.location.href;
  setCookie("callbackUrl", currentUrl, {
    maxAge: 60 * 3, // 3 minutes
    path: "/",
  });

  if (
    EXCEPTION.includes(axiosError?.response?.data.exception ?? "") &&
    !isAuthPage
  ) {
    await signOut({
      redirect: false,
    });
    window.location.href = isAdminPage ? `/admin/auth/login` : `/auth/login`;
  }
};

export default unAuthorizedHandler;
