import { RegisterForm } from "@/components/forms/RegisterForm";

export default function SignUpPage() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Image Section */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}></div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create an account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
