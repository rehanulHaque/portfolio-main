"use client"
import { FaPhoneAlt, FaGlobe   } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";

// Constants for personal information
const PERSONAL_INFO = {
  name: "Md Rehanul Haque",
  title: "Web Developer & Designer",
  email: "rehanulhaque00@gmail.com",
  phone: "+91 7044902241",
  location: "Kolkata, India",
  portfolio: "https://mdrehanulhaque.vercel.app/",
  about: "I'm a passionate web developer and designer with over 3 years of experience creating beautiful, functional websites and applications. Based in Kolkata, I work with clients worldwide to bring their digital visions to life."
};

export default function Footer() {
  return (
    <div className="mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <IoMdMail className="h-5 w-5 text-black mr-3" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="h-5 w-5 text-black mr-3" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="h-5 w-5 text-black mr-3" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="h-5 w-5 text-black mr-3" />
                <span>{PERSONAL_INFO.portfolio}</span>
              </div>
            </div>
          </motion.div>
        </div>
  )
}
