import React from "react";

function Contact() {
  return (
    <section className="bg-parchment py-20 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-serif text-forest mb-6">
            Begin a Conversation
          </h2>

          <p className="text-ash leading-relaxed mb-8">
            We take on a limited number of commissions each year to ensure
            every story receives the time and care it deserves.
            Share a few details about your wedding or portrait session,
            and we will respond personally.
          </p>

          <div className="space-y-4 text-forest">
            <p>Email : hello@sakshastories.com</p>
            <p>Phone : +91 98765 43210</p>
            <p>Location : Chennai, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-xl p-10 rounded-lg space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-ash p-3 rounded focus:outline-none focus:border-gold"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-ash p-3 rounded focus:outline-none focus:border-gold"
          />

          <input
            type="text"
            placeholder="Event Date"
            className="w-full border border-ash p-3 rounded focus:outline-none focus:border-gold"
          />

          <textarea
            placeholder="Tell us about your story..."
            rows="4"
            className="w-full border border-ash p-3 rounded focus:outline-none focus:border-gold"
          ></textarea>

          <button
            className="bg-forest text-parchment px-8 py-3 rounded hover:bg-gold hover:text-forest transition duration-300"
          >
            Send Inquiry
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;