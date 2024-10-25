import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForms } from "@/hooks/useForms/useForms";
import { useMutation } from "@/hooks/useMutation";
import { modals } from "@/packages/modals";
import { registerSchema } from "@/schema/registerSchema";
import { authService } from "@/service/authService";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";

export function RegisterForm() {
  const router = useRouter()

  const { mutate: register, isPending: isPendingRegister } = useMutation({
    mutationFn: authService.register,
    onSuccess: async () => {
      modals.open({
        id: "",
        title: "Registration Successful",
        subTitle: "Please check your email to verify your account",
        primaryButtonAction() {
          router.push(`/auth/login`);
        },
      })
    }
  });
  const { mutateAsync: verify, isPending: isPendingVerify } = useMutation({
    mutationFn: authService.verify,
    onSuccess: async (payload) => {
       register(payload);
    },
  });

  const form = useForms({
    onSubmit: verify,
    validationSchema: registerSchema,
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: new Date().toISOString(),
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} onChange={(e) => {field.onChange(e)}} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPendingRegister || isPendingVerify}
          className="text-white w-full bg-red-600 hover:bg-red-700"
        >
          {isPendingVerify
            ? "Verifying..."
            : isPendingRegister
            ? "Registering..."
            : "Create Account"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center space-x-2"
        >
          <FaGoogle className="h-5 w-5 text-red-500" />
          <span>Sign up with Google</span>
        </Button>
        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </Form>
  );
}
