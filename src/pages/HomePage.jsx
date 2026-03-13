import React, { useState } from "react";
import { services } from "./galleryData";
const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#B09A63] selection:text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7) 20%, transparent 80%), url(https://images.unsplash.com/photo-1520854221256-17451cc331bf)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-8 md:px-20 z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#B09A63] tracking-[0.3em] uppercase text-sm font-medium animate-fade-in">
              Boutique Photography Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-white font-serif italic">
              Stories, Preserved <br /> Through Photography
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-xl leading-relaxed">
              Luxury Wedding & Portrait Photography, told as stories. We believe photographs should outlive trends.
            </p>
            <div className="pt-4">
              <button className="group relative overflow-hidden border border-[#B09A63] bg-[#B09A63] px-10 py-4 text-white transition-all duration-300 hover:bg-transparent hover:text-[#B09A63]">
                <span className="relative z-10 tracking-widest uppercase text-xs font-bold">Begin a Conversation</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="py-24 md:py-32 px-6 bg-[#F4F1EA]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-xs tracking-[0.4em] uppercase text-[#B09A63] font-bold">Brand Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-light leading-snug">
            "In a world driven by speed and volume, <br /> we choose <span className="italic">patience and precision</span>."
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16 text-gray-700 leading-relaxed font-light">
            <p>
              We work quietly and unobtrusively, allowing real moments to unfold naturally. We work with families who value meaning over numbers and who see photography as a legacy, not a deliverable.
            </p>
            <p>
              Saksha Stories accepts a limited number of commissions each year to ensure every photograph is created with care, emotion, and intent. Every image delivered earns its place.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH / HOW WE WORK */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif mb-4 italic">Our Approach</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs">How we craft your legacy</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: "Observation First", desc: "Understanding people and relationships before capturing them." },
              { title: "Light & Composition", desc: "Using natural light and thoughtful framing for timeless imagery." },
              { title: "Presence", desc: "Photographing moments as they happen—honest and unforced." },
              { title: "Curated Delivery", desc: "Quality over quantity. Only the most meaningful frames remain." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 group">
                <span className="text-[#B09A63] font-serif italic text-2xl">0{idx + 1}</span>
                <h4 className="text-xl font-medium tracking-tight uppercase">{item.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC SERVICES SECTION */}
      <section className="py-24 bg-[#1F2F2A] text-[#F4F1EA]">
        <div className="container mx-auto px-6 md:px-20">
          {/* Header logic */}
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Services Preview</h2>
             <p className="text-gray-400">Captured with depth and intent.</p>
          </div>

          <div className="bg-[#FAF9F6] p-8 md:p-12 text-[#1A1A1A] rounded-sm">
            {!selectedService ? (
              <div className="animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-10">
                  {services.map((service) => (
                    <div 
                      key={service.id} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                        <img 
                          src={service.img} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                          alt={service.title}
                        />
                      </div>
                      <h3 className="text-xl font-serif italic border-b border-[#B09A63]/30 pb-4 flex justify-between">
                        {service.title} <span>→</span>
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="mb-12 uppercase tracking-widest text-[10px] font-bold border-b border-black"
                >
                  ← Back to Gallery
                </button>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h1 className="text-4xl font-serif italic mb-6">{selectedService.title}</h1>
                    <p className="text-gray-500 italic">{selectedService.description}</p>
                  </div>
                  <img src={selectedService.img} className="h-64 w-full object-cover" alt="Main" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedService.gallery.map((imgUrl, index) => (
                    <div key={index} className="h-64 overflow-hidden">
                      <img src={imgUrl} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gallery" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL QUOTE / CALL TO ACTION */}
      <section className="py-32 px-6 text-center bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-10">
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-gray-800">
            "Not every story needs Saksha Stories. But some stories deserve to be told slowly, honestly, and with depth."
          </p>
          <div className="h-20 w-[1px] bg-[#B09A63] mx-auto"></div>
          <p className="uppercase tracking-[0.5em] text-sm font-bold text-[#B09A63]">Book a Discovery Call</p>
        </div>
        
        {/* Ghost text background */}
        <span className="absolute bottom-0 left-0 right-0 text-[15vw] font-serif italic text-gray-50 -z-0 select-none whitespace-nowrap overflow-hidden">
          Saksha Stories
        </span>
      </section>

      {/* FOOTER MINI */}
      <footer className="py-10 border-t border-gray-100 bg-white text-center">
        <p className="text-xs tracking-widest text-gray-400 uppercase">
          © {new Date().getFullYear()} Saksha Stories — All Commissions Custom Designed
        </p>
      </footer>
    </div>
  );
};

export default Home;