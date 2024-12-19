// app/publications/page.tsx

const Publications = () => (
  <div>
    {/* Page Identifier Banner */}
    <div className="bg-gradient-to-r from-[#171731] to-[#02000a] text-white py-48">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Publications</h1>
        <p className="text-lg">
          Insights and articles on the latest legal trends.
        </p>
      </div>
    </div>

    {/* Publications Section */}
    <section className="container mx-auto py-16 px-6 md:px-16">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Stay Informed
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Explore our publications and gain valuable knowledge on diverse legal
        topics and recent case studies.
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Example Publication Cards */}
        <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-[#232526] mb-4">
            Corporate Governance 2024
          </h3>
          <p className="text-gray-600">
            An in-depth analysis of modern corporate governance practices.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-[#232526] mb-4">
            Navigating Family Law
          </h3>
          <p className="text-gray-600">
            A guide to understanding family law dynamics in today’s world.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-[#232526] mb-4">
            Trademark Protection Tips
          </h3>
          <p className="text-gray-600">
            Best practices for safeguarding your intellectual property.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Publications;
