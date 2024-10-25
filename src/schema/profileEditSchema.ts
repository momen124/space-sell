import * as z from "zod";

export const profileEditSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    address: z.string().min(1, {
      message: "Address is required.",
    }),
    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .optional(),
    confirmNewPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });