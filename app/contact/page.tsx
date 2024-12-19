// app/contact/page.tsx

const Contact = () => (
    <div>
      {/* Page Identifier Banner */}
      <div className="bg-gradient-to-r from-[#171731] to-[#02000a] text-white py-48">
      <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg px-2">Reach out for inquiries or legal consultation.</p>
        </div>
      </div>
  
      {/* Contact Section */}
      <section className="container mx-auto py-16 px-6 md:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">We’re Here to Help</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? Contact us today and one of our experts will get back to you promptly.
        </p>
  
        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#19328e] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#232526] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
  
  export default Contact;
  