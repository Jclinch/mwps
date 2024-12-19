"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { MissionVision } from "@/components/sections/mission-vision";
import { SuccessStats } from "@/components/sections/success-stats";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export default function Home() {
   // Initialize AOS
   useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden text-white ">
         {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 animate-expand"
        style={{
          backgroundImage: "url('/images/law3.jpeg')", // Replace with your image path
        }}
        data-aos="fade-zoom-in" // AOS animation for the background
      ></div>

      {/* Overlay for dark effect */}
      <div
        className="absolute inset-0 bg-opacity-50"
        data-aos="fade-in"
        data-aos-delay="200"
      ></div>

        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-delay="400"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
           data-aos="zoom-in">
            Milkyway & Prime Solicitors
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
           data-aos="fade-up"
           data-aos-delay="600">
            Excellence in Legal Services Since 2018
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Success Stats Section */}
      <SuccessStats />

      {/* Practice Areas Section */}
      <PracticeAreas />

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              content="Milkyway & Prime provided exceptional guidance during our company's merger. Their expertise was invaluable."
              author="Sarah Johnson"
              role="CEO, Tech Innovations Inc."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            />
            <TestimonialCard
              content="The team's dedication to our real estate portfolio management has been outstanding. They consistently deliver results."
              author="Michael Chen"
              role="Real Estate Developer"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            />
            <TestimonialCard
              content="Their commercial litigation expertise helped us navigate a complex dispute with confidence and success."
              author="David Thompson"
              role="Director, Global Enterprises"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Contact Us Today
            </h2>
            <a href="tel:+2347037962636">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Phone className="w-6 h-6 text-amber-600" />
              <span className="text-xl">+234 703 796 2636</span>
              </div>
              </a>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
             <a href="/contact">
              Get in Touch
             </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}