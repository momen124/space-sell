import { AdminLoginForm } from "@/components/forms/AdminLoginForm";

export default function SignUpPage() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Admin Sign In</h2>
            <AdminLoginForm />
          </div>
        </div>
      </div>
  );
}
