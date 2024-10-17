import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full md:w-1/3 p-6 border border-blue-400 rounded-lg">
      {/* Call to Us */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-red-500 h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Call To Us</h3>
        </div>
        <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
        <p className="text-gray-600">Phone: +8801611112222</p>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Write to Us */}
      <div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-red-500 h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Write To Us</h3>
        </div>
        <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
        <p className="text-gray-600">Emails: customer@exclusive.com</p>
        <p className="text-gray-600">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
