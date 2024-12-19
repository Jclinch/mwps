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
    description: "Strategic legal counsel for businesses, including mergers, acquisitions, and corporate governance.",
    icon: Scale,
    lawyerName: "Jonathan Mitchell",
    lawyerTitle: "Senior Partner, Corporate Law",
    lawyerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    title: "Real Estate Law",
    description: "Comprehensive legal services for property transactions, development, and disputes.",
    icon: Building2,
    lawyerName: "Emily Richardson",
    lawyerTitle: "Head of Real Estate Practice",
    lawyerImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
  },
  {
    title: "Commercial Litigation",
    description: "Expert representation in complex business disputes and conflict resolution.",
    icon: Briefcase,
    lawyerName: "Alexander Wong",
    lawyerTitle: "Lead Litigation Counsel",
    lawyerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    title: "Family Law",
    description: "Compassionate legal support for family matters, divorce, and child custody.",
    icon: HeartHandshake,
    lawyerName: "Sarah Martinez",
    lawyerTitle: "Family Law Specialist",
    lawyerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    title: "Constitutional Law",
    description: "Expertise in constitutional rights, civil liberties, and governmental relations.",
    icon: Landmark,
    lawyerName: "David Foster",
    lawyerTitle: "Constitutional Law Expert",
    lawyerImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  },
  {
    title: "Intellectual Property",
    description: "Protection and enforcement of patents, trademarks, and copyrights.",
    icon: ScrollText,
    lawyerName: "Lisa Chen",
    lawyerTitle: "IP Law Partner",
    lawyerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    title: "Employment Law",
    description: "Guidance on workplace regulations, contracts, and employment disputes.",
    icon: BadgeCheck,
    lawyerName: "Marcus Johnson",
    lawyerTitle: "Employment Law Specialist",
    lawyerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    title: "Education Law",
    description: "Legal services for educational institutions and student rights.",
    icon: GraduationCap,
    lawyerName: "Rachel Thompson",
    lawyerTitle: "Education Law Counsel",
    lawyerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  },
  {
    title: "International Law",
    description: "Cross-border legal expertise and international business transactions.",
    icon: Globe2,
    lawyerName: "James Wilson",
    lawyerTitle: "International Law Partner",
    lawyerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  }
];

export function PracticeAreaSection() {
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
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Expertise</h2>

        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore our diverse legal disciplines, from corporate law to family law. 
          At Milkyway & Prime Solicitors, we offer tailored advice to meet your legal 
          needs.
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
            <PracticeAreaCard
              key={area.title}
              {...area}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}