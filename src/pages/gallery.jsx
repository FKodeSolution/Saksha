import React, { useState, useEffect, useRef } from "react";
import { services } from "./galleryData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedService, setSelectedService] = useState(null);
  const mainRef = useRef(null);
  const lenisRef = useRef(null); // Lenis-ah control panna ref

  // 1. SCROLL TO TOP LOGIC
  useEffect(() => {
    // Service-ah click panna instant-ah mela poga
    window.scrollTo(0, 0);
    
    // Lenis scroll position-ahum zero-kku reset panna
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [selectedService]);

  useEffect(() => {
    // 2. Lenis Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. GSAP Animations
    const ctx = gsap.context(() => {
      // Image reveal animation
      const boxes = gsap.utils.toArray(".reveal-box");
      boxes.forEach((box) => {
        gsap.fromTo(box, 
          { y: 100, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 92%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, [selectedService]);
  

  return (
    <div ref={mainRef} className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {!selectedService ? (
          /* --- MAIN ARCHIVES VIEW --- */
          <div className="animate-view">
            <header className="mb-16">
              <span className="text-[#B09A63] tracking-[0.6em] uppercase text-[10px] font-bold block mb-3 italic">Curated Stories</span>
              <h1 className="text-6xl md:text-9xl font-serif italic leading-none lowercase">Archives.</h1>
            </header>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="reveal-box group cursor-pointer"
                  onClick={() => setSelectedService(service)} // CLICK TO OPEN
                >
                  <div className="overflow-hidden aspect-[4/5] bg-gray-200 mb-6 relative">
                    <img 
                      src={service.img} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                      alt={service.title} 
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-3xl font-light">→</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-serif italic">{service.title}</h3>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* --- SELECTED SERVICE VIEW --- */
          <div className="animate-view">
            <button 
              onClick={() => setSelectedService(null)} // CLICK TO GO BACK
              className="group mb-12 text-[10px] uppercase tracking-[0.5em] font-bold flex items-center gap-2"
            >
              <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Archives
            </button>

            <div className="max-w-3xl mb-24">
                <h1 className="text-5xl md:text-8xl font-serif italic mb-8 lowercase leading-tight">{selectedService.title}</h1>
                <p className="text-gray-400 font-serif italic text-xl border-l-2 border-[#B09A63] pl-8 leading-relaxed">{selectedService.description}</p>
            </div>

            <div className="space-y-32">
              {selectedService.gallery.map((imgUrl, index) => (
                <div key={index} className="reveal-box max-w-5xl mx-auto">
                  <div className="overflow-hidden bg-white">
                    <img 
                      src={imgUrl} 
                      className="w-full h-auto max-h-[90vh] object-contain mx-auto transition-transform duration-[2s] hover:scale-105" 
                      alt="Gallery" 
                    />
                  </div>
                  <div className="mt-8 text-[9px] uppercase tracking-[0.4em] text-gray-400 flex justify-between items-center px-4">
                    <span className="text-[#B09A63]">Moment 0{index + 1}</span>
                    <span className="italic">Saksha Stories</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-40 text-center border-t border-gray-100 pt-24">
               <button 
                onClick={() => setSelectedService(null)}
                className="px-20 py-6 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.6em] hover:bg-[#B09A63] transition-all"
               >
                 Close & Return
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;