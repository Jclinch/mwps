'use client';

import { useEffect } from 'react';
import { ScrollText, Star, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function MissionVision() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing of the animation
      once: true, // Whether to trigger animation only once
    });
  }, []);

  return (
    <section className="py-24 px-8 w-full bg-gradient-to-b from-slate-50 to-white text-sm">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {/* Mission Card */}
          <Card
            className="p-8 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-50 p-3 rounded-lg">
                <ScrollText className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver exceptional legal services with unwavering integrity,
              combining centuries of collective expertise with innovative
              solutions that protect and advance our clients&apos; interests.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Excellence in every legal matter</li>
              <li>Client-centered approach</li>
              <li>Ethical practice standards</li>
            </ul>
          </Card>

          {/* Vision Card */}
          <Card
            className="p-8 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-50 p-3 rounded-lg">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be the most trusted and respected legal partner, recognized
              globally for our commitment to excellence, innovation, and
              positive impact on the legal landscape.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Global legal leadership</li>
              <li>Innovative legal solutions</li>
              <li>Lasting client relationships</li>
            </ul>
          </Card>

          {/* Values Card */}
          <Card
            className="p-8 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-50 p-3 rounded-lg">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Values</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are driven by principles of integrity, innovation, excellence,
              and an unwavering commitment to our clients&apos; success.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Empowering clients with forward-thinking legal strategies</li>
              <li>Fostering trust through transparency and ethical practices</li>
              <li>Building enduring partnerships that drive mutual success</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
