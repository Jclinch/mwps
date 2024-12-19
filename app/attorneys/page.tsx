// app/attorneys/page.tsx

import Image from "next/image";

const Attorneys = () => (
    <div>
      {/* Page Identifier Banner */}
      <div className="bg-gradient-to-r from-[#171731] to-[#02000a] text-white py-48">
      <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Attorneys</h1>
          <p className="text-lg">Meet our team of dedicated legal professionals.</p>
        </div>
      </div>
  
      {/* Attorneys Section */}
      <section className="container mx-auto py-16 px-6 md:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">Expert Legal Minds</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Our attorneys are renowned for their expertise in various legal disciplines. Discover how we can assist you in achieving your goals.
        </p>
  
        <div className="grid md:grid-cols-3 gap-12">
          {/* Example Attorney Profiles */}
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-4  ">
              <Image
              src='/images/nd-dp.jpeg'
              alt='Ndidiamaka Ogunfuyi'
              width={100}
              height={100}
              className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#232526] mb-2">Sylvia Ndidiamaka Ogunfuyi</h3>
            <p className="text-gray-600">Senior Partner at Milkyway and Prime Solicitors</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#232526] mb-2">Jane Smith</h3>
            <p className="text-gray-600">Family Law Expert</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#232526] mb-2">Michael Brown</h3>
            <p className="text-gray-600">Intellectual Property Lawyer</p>
          </div>
        </div>
      </section>
    </div>
  );
  
  export default Attorneys;
  