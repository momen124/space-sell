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
import { useAuth } from "@/hooks/useAuth";
import { useForms } from "@/hooks/useForms/useForms";
import { loginSchema } from "@/schema/loginSchema";
import Link from "next/link";

export function LoginForm() {

  const { signIn, isSigningIn } = useAuth()

  const form = useForms({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
      userType: "user",
    },
    onSubmit: signIn
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email or phone number" {...field} />
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
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700" loading={isSigningIn}>
          Sign In
        </Button>
        <div className="text-center text-sm mt-4">
          {`Don't have an account? `}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}