import { axiosExternal } from "@/config/axios";
import { User } from "@/types/user";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        type: "credentials",
        credentials: {
          username: { type: "email" },
          password: { type: "password" },
          //   otp: { type: "password" },
          userType: { type: "text" },
        },

        async authorize(credentials) {
          const url =
            credentials?.userType === "admin"
              ? "/admin/auth/login"
              : "/auth/login";

          try {
            const response = await axiosExternal({ req, res }).post(url, {
              username: credentials?.username,
              password: credentials?.password,
              //   otp: credentials?.otp,
            });

            const cookies = response.headers["set-cookie"] ?? [];
            res.setHeader("set-cookie", cookies);

            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const message = error?.response?.data?.message ?? error?.message;

            if (message) {
              throw new Error(message);
            }
            return null;
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
      maxAge: 60 * 60 * 24,
    },

    pages: {
      signIn: "/auth/login",
      signOut: "/",
      newUser: "/",
      error: "/",
    },
    callbacks: {
      async jwt({ token, user, session, trigger }) {
        let t = token;
        const u = user as User;

        if (user) {
          t = { ...token, ...u };
        }
        if (trigger === "update") {
          t = { ...token, ...session };
        }

        return t;
      },
      async session({ session, token }) {
        const s = session;

        if (token && session.user) {
          s.user = { ...session.user, ...token };
        }

        return s;
      },
    },

    secret: process.env.NEXTAUTH_SECRET,
  });
}
