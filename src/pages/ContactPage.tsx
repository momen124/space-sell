import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/layout/footer/contact/ContactInfo";
import React from "react";


const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
