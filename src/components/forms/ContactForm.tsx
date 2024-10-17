import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-1 md:col-span-3">
          <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>
        <div className="col-span-1 md:col-span-3">
          <label className="block text-gray-700 font-semibold mb-2">Your Email *</label>
          <Input
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
            placeholder="Your Email"
            className="w-full"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        <div className="col-span-1 md:col-span-3">
          <label className="block text-gray-700 font-semibold mb-2">Your Phone *</label>
          <Input
            {...register("phone", { required: "Phone is required" })}
            placeholder="Your Phone"
            className="w-full"
          />
          {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
        <Textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="w-full"
        />
        {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
      </div>
      <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
