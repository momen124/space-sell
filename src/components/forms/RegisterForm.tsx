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
import { registerSchema, RegisterSchemaType } from "@/schema/registerSchema";
import { authService } from "@/service/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: register, isPending: isPendingRegister } = useMutation({
    mutationFn: authService.register,
  });
  const { mutate: verify, isPending: isPendingVerify } = useMutation({
    mutationFn: authService.verify,
    onSuccess: (payload) => {
      register(payload);
    },
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (values) => {
    console.log(values)
    verify(values);
  };
  const watchedValues = form.watch(); // This will watch all the fields

  useEffect(() => {
    console.log(watchedValues); // Log the values whenever they change
  }, [watchedValues]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(authService.verify)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} onChange={(e) => {console.log(e.target.value); field.onChange(e)}} />
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
