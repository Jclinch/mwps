"use client";

import { PracticeAreaCard } from "@/components/ui/practice-area-card";
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  Scale,
  Building2,
  Briefcase,
  HeartHandshake,
  Landmark,
  ScrollText,
  BadgeCheck,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { useEffect } from "react";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Strategic legal counsel for businesses, including mergers, acquisitions, and corporate governance.",
    icon: Scale,
  },
  {
    title: "Real Estate Law",
    description:
      "Comprehensive legal services for property transactions, development, and disputes.",
    icon: Building2,
  },
  {
    title: "Commercial Litigation",
    description:
      "Expert representation in complex business disputes and conflict resolution.",
    icon: Briefcase,
  },
  {
    title: "Family Law",
    description:
      "Compassionate legal support for family matters, divorce, and child custody.",
    icon: HeartHandshake,
  },
  {
    title: "Constitutional Law",
    description:
      "Expertise in constitutional rights, civil liberties, and governmental relations.",
    icon: Landmark,
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and enforcement of patents, trademarks, and copyrights.",
    icon: ScrollText,
  },
  {
    title: "Employment Law",
    description:
      "Guidance on workplace regulations, contracts, and employment disputes.",
    icon: BadgeCheck,
  },
  {
    title: "Education Law",
    description:
      "Legal services for educational institutions and student rights.",
    icon: GraduationCap,
  },
  {
    title: "International Law",
    description:
      "Cross-border legal expertise and international business transactions.",
    icon: Globe2,
  },
];

export function PracticeAreas() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing of the animation
      once: true, // Whether to trigger animation only once
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Our Areas of Practice
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Established in 2018, our team of skilled attorneys brings extensive
            experience across diverse legal disciplines, delivering exceptional
            legal services tailored to meet your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              data-aos="flip-right" // Add AOS animation here
              data-aos-delay={index * 100} // Delay the animation slightly for each card
              className="flex justify-center"
            >
              <PracticeAreaCard {...area} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
