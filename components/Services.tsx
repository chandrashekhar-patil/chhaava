"use client";

import React from "react";
import {
  Camera,
  Users,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Saga",
    desc: "तुमच्या आयुष्यातील सर्वात मोठ्या दिवसाची प्रत्येक आठवण आम्ही जपून ठेवू.",
    price: "₹30,000+",
    icon: <Camera className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&fit=crop",
    features: [
      "Candid Photography",
      "Cinematic Video",
      "Drone Shots",
      "Premium Album",
    ],
  },
  {
    id: 2,
    title: "Pre-Wedding",
    desc: "रोमँटिक लोकेशन्स आणि फिल्मी स्टाईल शूट, लग्नाआधीची एक सुंदर स्टोरी.",
    price: "₹15,000+",
    icon: <Users className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&fit=crop",
    features: [
      "2 Locations",
      "Costume Guidance",
      "Reels Creation",
      "Save the Date",
    ],
  },
  {
    id: 3,
    title: "Fashion & Portraits",
    desc: "मॉडेलिंग पोर्टफोलिओ आणि हाय-एंड फॅशन फोटोग्राफी.",
    price: "₹8,000+",
    icon: <Star className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&fit=crop",
    features: [
      "Studio Lighting",
      "Makeup Artist",
      "High-End Retouching",
      "Digital Copies",
    ],
  },
  {
    id: 4,
    title: "Events & Parties",
    desc: "वाढदिवस, कॉरपोरेट इव्हेंट्स आणि सणासुदीचे क्षण कॅमेरामध्ये कैद करा.",
    price: "₹10,000+",
    icon: <Award className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&fit=crop",
    features: [
      "Unlimited Photos",
      "Raw Video",
      "Instant Delivery",
      "Event Highlights",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden ">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium <span className="text-blue-400">Services</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आम्ही फक्त फोटो काढत नाही, तर त्या क्षणांना जिवंत ठेवतो. खालील
            पॅकेजेस मधून तुमचे आवडते पॅकेज निवडा.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Suruwat khali
              whileInView={{ opacity: 1, y: 0 }} // Var yeil scroll kelyavar
              viewport={{ once: true, margin: "-50px" }} // Once true means parat parat animation nahi honar
              transition={{ delay: idx * 0.1, duration: 0.5 }} // Staggered Effect
              key={service.id}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500/50 transition-colors shadow-lg"
            >
              {/* Image & Gradient */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 bg-white backdrop-blur-md p-3 rounded-full text-[#000] border border-gray-200 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-black text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {service.desc}
                </p>

                {/* Features (Hidden initially) */}
                <div className="space-y-2 mb-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-75">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-black"
                    >
                      <CheckCircle2 className="w-3 h-3 text-black" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-2">
                  <div className="flex items-center gap-2 text-gray-700 text-sm font-medium group-hover:text-black transition-colors">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
