import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import pic1 from '../assets/Images/contact.jpg'
export default function Contact() {
    return (
        <div className="bg-indigo-50 text-white min-h-screen">
            {/* Hero Section */}
            <div className="text-center pt-6 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900">
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                    Have questions or need support? Our team is here to help you anytime.
                </p>
            </div>

            {/* Contact Content */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 py-10 items-stretch">
                {/* Contact Form */}
                <div className="bg-white/95 text-gray-900 p-8 rounded-sm  h-full flex flex-col">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-900">Send us a Message</h2>
                    <form className="space-y-5 flex-grow">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full border border-gray-300 py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-indigo-900 text-black font-semibold py-3 rounded-md hover:bg-indigo-300 transition text-white"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="h-full">
                    <img
                        src={pic1}
                        alt="Contact illustration"
                        className="rounded-sm  w-full h-full object-cover"
                    />
                </div>

                
            </div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full pb-8 px-20">
  {/* Phone */}
  <div className="flex items-center space-x-3">
    <FaPhoneAlt className="text-indigo-900 text-xl" />
    <p className="text-gray-500 hover:text-yellow-400 transition cursor-pointer">
      +91 98765 43210
    </p>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-3">
    <FaEnvelope className="text-indigo-900 text-xl" />
    <p className="text-gray-500 hover:text-yellow-400 transition cursor-pointer">
      support@eshop.com
    </p>
  </div>

  {/* Location */}
  <div className="flex items-center space-x-3">
    <FaMapMarkerAlt className="text-indigo-900 text-xl" />
    <p className="text-gray-500 hover:text-yellow-400 transition cursor-pointer">
      Hyderabad, India
    </p>
  </div>
</div>



        </div>
    );
}
