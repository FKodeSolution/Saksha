import React from "react";

const Application = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-light selection:bg-[#B09A63] selection:text-white pb-20 overflow-x-hidden">
      
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 z-10 animate-fadeIn">
            <div className="flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[#B09A63]"></span>
              <span className="text-[#B09A63] tracking-[0.6em] uppercase text-[9px] font-bold">Inquiries</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter">
              The Art of <br /> <span className="text-[#B09A63]">Conversation.</span>
            </h1>
            <p className="text-gray-500 font-serif italic text-lg max-w-md leading-relaxed">
              We don't just take bookings; we build relationships. Every legacy starts with a single, intentional word.
            </p>
            
            {/* QUICK CONTACT MINI-GRID */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Direct Mail</p>
                <p className="text-sm font-medium hover:text-[#B09A63] transition-colors cursor-pointer">hello@sakshastories.com</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Studio Location</p>
                <p className="text-sm font-medium">Available Globally</p>
              </div>
            </div>
          </div>

          {/* ASYMMETRIC IMAGE COMPOSITION */}
          <div className="relative group">
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-7 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf" 
                  alt="Aesthetic Detail" 
                  className="w-full h-[450px] object-cover transition-all duration-[2000ms] group-hover:scale-110"
                />
              </div>
              <div className="col-span-5 overflow-hidden shadow-xl mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098" 
                  alt="Atmosphere" 
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
            {/* FLOATING DESIGN ELEMENT */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#B09A63]/30 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. THE FORM & STATUS BADGE SECTION */}
      <section className="px-6 md:px-20 py-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: STATUS & PHILOSOPHY */}
          <div className="lg:w-1/3 space-y-10">
            <div className="bg-[#1F2F2A] p-10 text-[#F4F1EA] space-y-6 shadow-2xl relative overflow-hidden">
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#B09A63]/10 transform translate-x-6 -translate-y-6 rotate-45"></div>
              
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-[#B09A63] rounded-full animate-pulse"></div>
                <h3 className="text-xl font-serif italic">Commission Status</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed tracking-wide">
                We are currently accepting a limited number of sessions for the **Autumn/Winter 2026** season.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#B09A63]">Response Time</p>
                <p className="text-sm italic font-serif mt-1">Within 48-72 Hours</p>
              </div>
            </div>
            
            <div className="hidden lg:block space-y-6 px-4">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">Our Mantra</p>
              <p className="text-sm font-serif italic text-gray-600 leading-loose">
                "Digital fast, Physical slow. We believe in the weight of a printed photograph and the silence of a captured moment."
              </p>
              <div className="w-12 h-[1px] bg-[#B09A63]"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE APPLICATION FORM */}
          <div className="lg:w-2/3 bg-white border border-gray-100 p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.02)]">
            <form className="space-y-16">
              
              {/* 01. IDENTITY */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-2">
                  <span className="text-[32px] font-serif italic text-gray-100 block leading-none">01</span>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B09A63]">Identity</h3>
                  <p className="text-xs text-gray-400 font-serif italic">The people behind the story.</p>
                </div>
                <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <input type="text" required className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#B09A63] transition-all text-base font-serif italic placeholder:text-gray-300" placeholder="Full Names" />
                  </div>
                  <div className="group relative">
                    <input type="email" required className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#B09A63] transition-all text-base font-serif italic placeholder:text-gray-300" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              {/* 02. NARRATIVE */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-2">
                  <span className="text-[32px] font-serif italic text-gray-100 block leading-none">02</span>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B09A63]">Narrative</h3>
                  <p className="text-xs text-gray-400 font-serif italic">The soul of the session.</p>
                </div>
                <div className="md:col-span-8 space-y-10">
                  <div className="flex flex-wrap gap-3">
                    {["Wedding", "Legacy", "Couple", "Bespoke"].map((item) => (
                      <button key={item} type="button" className="px-6 py-2 border border-gray-100 text-[9px] uppercase tracking-widest font-bold hover:bg-[#B09A63] hover:text-white hover:border-[#B09A63] transition-all duration-300">
                        {item}
                      </button>
                    ))}
                  </div>
                  <textarea rows="3" placeholder="Describe the connection you want to document..." className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#B09A63] transition-all text-base font-serif italic resize-none placeholder:text-gray-300"></textarea>
                </div>
              </div>

              {/* IMAGE BREAK */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                 <div className="md:col-start-5 md:col-span-8 h-40 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07" 
                      className="w-full h-full object-cover  transition-transform duration-[3000ms] group-hover:scale-110" 
                      alt="Atmospheric" 
                    />
                 </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-8 flex flex-col items-center">
                <button type="submit" className="group relative px-20 py-6 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.6em] font-bold transition-all duration-500 hover:bg-[#B09A63] hover:shadow-[0_20px_40px_rgba(176,154,99,0.2)]">
                  Submit For Review
                </button>
                <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-gray-400 italic">
                  Refining your application... Please wait 72 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL FOOTER */}
      <section className="pt-20 pb-10 text-center">
        <div className="flex justify-center gap-12 text-[9px] uppercase tracking-[0.4em] text-gray-400">
          <a href="#" className="hover:text-[#B09A63] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#B09A63] transition-colors">Pinterest</a>
          <a href="#" className="hover:text-[#B09A63] transition-colors">Journal</a>
        </div>
      </section>

    </div>
  );
};

export default Application;