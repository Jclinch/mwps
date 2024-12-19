// app/about-us/page.tsx

import { MissionVision } from "@/components/sections/mission-vision";
import Image from "next/image";

const AboutUs = () => (
  <div>
    {/* Page Identifier Banner */}
    <div className="bg-gradient-to-r from-[#171731] to-[#02000a] text-white py-48 px-2">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Get to know more about our mission, vision, and values.
        </p>
      </div>
    </div>

    {/* About Us Content */}
    <section className="container mx-auto py-16  ">
      <h2 className="text-4xl font-semibold text-center mb-12">Who We Are</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text */}
        <div className="px-6 md:px-16">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            At Milkyway & Prime Solicitors, we are dedicated to delivering
            exceptional legal services with integrity, innovation, and
            professionalism. Our firm is built on a foundation of trust,
            excellence, and a commitment to upholding justice for our clients.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in 2018, our team of experienced attorneys and legal
            professionals is well-equipped to handle complex legal challenges
            across various practice areas. We take pride in offering
            personalized solutions tailored to meet each client&apos;s unique
            needs.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="rounded-lg overflow-hidden shadow-lg max-sm:mx-4">
  <Image
    src="/images/law.jpg" // Replace with your image URL
    alt="About Us Image"
    width={600}
    height={400}
    className="w-full object-cover"
  />
</div>

      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Our Mission, Vision, and Values
        </h3>
        <MissionVision />
      </div>
    </section>
  </div>
);

export default AboutUs;
