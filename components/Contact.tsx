"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  event: string;
  date: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mail logic here (e.g., integrate with email service)
    console.log("Form submitted:", formData);
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-white/50 border rounded-xl px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all duration-300
    ${
      focusedField === fieldName
        ? "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] ring-1 ring-blue-500/50"
        : "border-gray-300 hover:border-gray-400"
    }
  `;

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: Animation - Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-blue-500 font-medium tracking-wider mb-2 uppercase text-sm">
                Contact Us
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Let's Create <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Masterpieces
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-md">
                तुमचे "Special Moments" आमच्या लेन्स मधून चिरकाल टिकवण्यासाठी
                आजच बुकिंग करा.
              </p>
            </div>

            {/* Contact Cards Staggered */}
            <div className="space-y-4 mt-8">
              {[
                {
                  icon: <Phone size={20} />,
                  title: "Call Us",
                  value: "+91 98765 43210",
                },
                {
                  icon: <Mail size={20} />,
                  title: "Email Us",
                  value: "hello@chhaava.com",
                },
                {
                  icon: <MapPin size={20} />,
                  title: "Visit Us",
                  value: "FC Road, Pune, Maharashtra",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-gray-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-gray-900 font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Animation - Slide from Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 transform rotate-1"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 p-8 md:p-10 rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className={`${inputClasses("name")} pl-12`}
                        value={formData.name}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className={`${inputClasses("email")} pl-12`}
                        value={formData.email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="tel"
                        placeholder="+91..."
                        className={`${inputClasses("phone")} pl-12`}
                        value={formData.phone}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Event Type
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <select
                        className={`${inputClasses("event")} pl-12`}
                        value={formData.event}
                        onFocus={() => setFocusedField("event")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) =>
                          setFormData({ ...formData, event: e.target.value })
                        }
                        required
                      >
                        <option value="">Select Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="date"
                      className={`${inputClasses("date")} pl-12`}
                      value={formData.date}
                      onFocus={() => setFocusedField("date")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your vision..."
                    className={`${inputClasses(
                      "message"
                    )} pl-5 pt-5 h-32 resize-none`}
                    value={formData.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:shadow-blue-500/40 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
