import React from "react";

const Services = () => {
  const services = [
    {
      title: "Luxury Wedding",
      accent: "Photography",
      subtitle: "The Union",
      description: "We document weddings as intersections of history. No poses, just the quiet honesty of a family's most significant day.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      meta: ["Full Day Documentation", "Film & Digital", "Legacy Heirloom Box"]
    },
    {
      title: "Connection",
      accent: "Portraits",
      subtitle: "The Electricity",
      description: "Not a performance. A session designed to document the quiet tension and comfort between two people who chose each other.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
      meta: ["3 Hour Session", "Location Scouting", "Private Online Gallery"]
    },
    {
      title: "Family",
      accent: "Legacy",
      subtitle: "The Heritage",
      description: "For those who value time. These are the records that become more valuable as the decades pass. For the future versions of you.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      meta: ["Home or Studio", "Generational Storytelling", "Museum Quality Prints"]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#B09A63] selection:text-white overflow-hidden">
     {/* 1. HERO HEADER: Architectural & Dynamic Style */}
<section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#FAF9F6] overflow-hidden selection:bg-[#B09A63] selection:text-white">
  
  {/* BACKGROUND LAYER: Floating Vertical Text - Adds Massive Scale */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
    <p className="text-[15vh] font-serif italic text-black/[0.03] whitespace-nowrap -rotate-90 origin-center animate-fadeIn [animation-delay:1.2s]">
      The Collections — 2026
    </p>
  </div>

  {/* CENTERED CONTENT BOX: Architectural Composition */}
  <div className="relative z-10 w-full max-w-7xl animate-fadeIn">
    <div className="grid lg:grid-cols-12 gap-12 items-end">
      
      {/* LEFT: 'Small' Detail Dashboard (Asymmetric Info) */}
      <div className="lg:col-span-3 hidden lg:block pb-10">
        <div className="space-y-12 animate-fadeInLeft [animation-delay:0.8s]">
          <div className="space-y-2">
            <p className="text-[#B09A63] text-[9px] uppercase tracking-[0.5em] font-bold">Location</p>
            <p className="text-sm font-serif italic text-gray-500">Available Globally</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#B09A63] text-[9px] uppercase tracking-[0.5em] font-bold">Philosophy</p>
            <p className="text-sm font-serif italic text-gray-500">Selective Heritage</p>
          </div>
          <div className="h-32 w-[1px] bg-gradient-to-b from-[#B09A63] to-transparent animate-growLine"></div>
        </div>
      </div>

      {/* CENTER/RIGHT: The Massive Mask Reveal Heading */}
      <div className="lg:col-span-9 relative">
        <div className="space-y-6">
          <div className="flex items-center gap-4 animate-slideInRight">
            <span className="h-[1px] w-12 bg-[#B09A63] origin-left animate-growLine"></span>
            <span className="text-[#B09A63] tracking-[0.8em] uppercase text-[10px] font-bold">
              Our Curated Offerings
            </span>
          </div>

          <h1 className="text-[14vw] md:text-[11vw] font-serif leading-[0.85] tracking-tighter text-[#1A1A1A]">
            {/* Line 1: Reveal Up Mask */}
            <div className="overflow-hidden">
              <span className="block animate-revealUp">Stories</span>
            </div>
            {/* Line 2: Revealed Up Mask with Stagger and Color Accent */}
            <div className="overflow-hidden flex items-baseline gap-4 md:gap-8">
              <span className="italic font-extralight text-[#B09A63] animate-revealUp [animation-delay:200ms]">We</span>
{/* Oru parent div-kku padding sethukonga, athan text full-ah reveal aaga space tharum */}
<div className="overflow-hidden py-2"> 
  <span className="block animate-revealUp [animation-delay:400ms] leading-tight">
    Keep.
  </span>
</div>            </div>
          </h1>

          {/* ASYMMETRIC BOTTOM BAR (Details & Tags) */}
          <div className="pt-16 flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-black/5 animate-fadeInUp [animation-delay:1s]">
             <div className="max-w-xs">
                <p className="text-sm text-gray-400 leading-relaxed uppercase tracking-tighter font-medium">
                  Documenting the quiet intersections of time, memory, and human connection.
                </p>
             </div>
             
             <div className="flex gap-4">
                {["Limited Commissions", "Bespoke Curation"].map((tag, i) => (
                  <div key={i} className="px-6 py-3 border border-black/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-gray-400 hover:border-[#B09A63] hover:text-[#B09A63] transition-all duration-500 cursor-default">
                    {tag}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* FLOATING IMAGE ELEMENT: Adds Layered Depth */}
        <div className="absolute -top-20 -right-10 w-40 h-56 md:w-64 md:h-80 -z-10 opacity-20  pointer-events-none animate-floatSlow">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" 
            alt="Artistic background showing connection" 
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>

  {/* SCROLL INDICATOR (Subtle Bounce) */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-slow [animation-delay:1.5s]">
    <span className="text-[8px] uppercase tracking-[0.5em] text-gray-300 rotate-90 mb-4">Scroll</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-[#B09A63] to-transparent"></div>
  </div>
</section>

      {/* 2. THE SERVICES: STAGGERED EDITORIAL LAYOUT */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="space-y-64">
          {services.map((service, idx) => (
            <div key={idx} className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              
              {/* LARGE NUMBER BACKGROUND */}
              <span className={`absolute -top-32 ${idx % 2 === 0 ? 'right-0' : 'left-0'} text-[18rem] md:text-[25rem] font-serif italic text-black/[0.02] select-none pointer-events-none`}>
                0{idx + 1}
              </span>

              {/* IMAGE SECTION */}
              <div className="w-full md:w-[55%] relative group">
                <div className="relative overflow-hidden aspect-[3/4] md:aspect-square bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  {/* Floating Tag */}
                  <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm px-6 py-4 shadow-2xl">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#B09A63] mb-1">Commission Type</p>
                    <p className="font-serif italic text-xl">{service.subtitle}</p>
                  </div>
                </div>
                {/* Asymmetric border accent */}
                <div className={`absolute -bottom-8 ${idx % 2 === 0 ? '-right-8' : '-left-8'} w-full h-full border border-[#B09A63]/20 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2`}></div>
              </div>

              {/* TEXT SECTION */}
              <div className="w-full md:w-[45%] space-y-10 z-10">
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tight">
                    {service.title} <br />
                    <span className="italic text-[#B09A63]">{service.accent}</span>
                  </h2>
                </div>

                <p className="text-gray-600 text-lg md:text-xl font-serif italic leading-relaxed">
                  "{service.description}"
                </p>

                <ul className="space-y-4 pt-6">
                  {service.meta.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                      <span className="w-6 h-[1px] bg-[#B09A63]"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-10">
                  <button className="group relative overflow-hidden bg-[#1A1A1A] text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl transition-all hover:bg-[#B09A63]">
                    <span className="relative z-10">Inquire For Details</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE PHILOSOPHY: THE OVERLAY SECTION */}
      <section className="bg-[#1F2F2A] py-32 px-6 overflow-hidden relative">
        {/* Subtle Background Grain/Texture Overlay could be added here */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif italic text-[#F4F1EA] leading-tight">
              The Art of <br /> <span className="text-[#B09A63]">Observation</span>
            </h2>
            <div className="space-y-8 text-gray-400 font-light leading-loose tracking-wide">
              <p>
                We accept only 12 commissions annually. This is not about volume; it is about depth. 
                By limiting our projects, we ensure that every story receives the mental and artistic 
                space it deserves.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-[#B09A63] text-2xl font-serif italic">100%</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2">Presence Guaranteed</p>
                </div>
                <div>
                  <p className="text-[#B09A63] text-2xl font-serif italic">No</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2">Time Limits</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07" 
               className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
               alt="Observation"
             />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#B09A63] flex items-center justify-center p-8 text-center text-white text-[10px] uppercase font-bold tracking-tighter leading-tight">
                Quality Above Everything
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE CALL TO ACTION */}
      <section className="py-40 text-center bg-white">
        <div className="max-w-2xl mx-auto space-y-12">
           <h3 className="text-2xl md:text-4xl font-serif italic tracking-tight">Ready to begin your narrative?</h3>
           <p className="text-gray-500 text-sm tracking-widest uppercase">Currently reviewing 2026 session applications</p>
           <button className="border border-black px-16 py-6 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-black hover:text-white transition-all duration-700">
              Fill Out Application →
           </button>
        </div>
      </section>

    </div>
  );
};

export default Services;