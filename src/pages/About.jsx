import React from "react";

const About = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-light selection:bg-[#B09A63] selection:text-white">
      
     {/* THE PHILOSOPHY: REFINED EDITORIAL SECTION */}
<section className="relative pt-32 pb-24 px-6 md:px-20 overflow-hidden bg-[#FAF9F6]">
  
  {/* DECORATIVE WATERMARK - Large, faint background text for depth */}
  <div className="absolute top-10 left-[-5%] text-[15vw] font-serif italic text-black/[0.02] select-none pointer-events-none leading-none">
    Our Essence
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
      
      {/* LEFT COLUMN: THE HOOK */}
      <div className="md:col-span-7 space-y-10">
        <div className="flex items-center gap-4 animate-fadeIn">
          <div className="h-[1px] w-8 bg-[#B09A63]"></div>
          <span className="text-[#B09A63] tracking-[0.5em] uppercase text-[10px] font-bold">
            The Philosophy
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter italic text-[#1A1A1A]">
          Every Photograph <br /> 
          <span className="pl-12 md:pl-24 block">Begins as a Story</span>
        </h1>

        <div className="max-w-lg pt-4 md:pt-8">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light italic font-serif">
            "A story of people, relationships, history, and emotion. 
            Preserving narratives not as trends, but as timeless records."
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: THE DETAIL & IMAGE COMPOSITION */}
      <div className="md:col-span-5 space-y-12 md:pt-32">
        
        {/* SMALL FLOATING IMAGE - Adds visual "Design" */}
        <div className="relative group">
          <div className="absolute -inset-2 border border-[#B09A63]/20 translate-x-4 translate-y-4 transition-transform  duration-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" 
            alt="Intimate moment" 
            className="relative z-10 w-full aspect-[4/3] object-cover  brightness-90 duration-1000 shadow-xl"
          />
        </div>

        <div className="space-y-6 text-sm md:text-base leading-loose text-gray-500 font-light tracking-wide pl-6 md:pl-0">
          <p>
            We believe the most powerful stories are often quiet. They unfold in glances, 
            pauses, and moments between moments.
          </p>
          <div className="pt-4">
             <p className="text-[#B09A63] italic text-xs uppercase tracking-[0.2em] font-bold border-l-2 border-[#B09A63] pl-6 py-2">
               "Our role is not to direct stories but to witness them with respect and intention."
             </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* BOTTOM ACCENT */}
  <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-[#B09A63]/40 to-transparent"></div>
</section>
      {/* VISUAL BREAK / IMAGE */}
      <section className="h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" 
          alt="Emotional moment" 
          className="w-full h-full object-cover  opacity-90"
        />
      </section>

      {/* OUR BELIEF - OVERLAPPING LAYOUT */}
      <section className="py-32 px-6 bg-[#F4F1EA] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-8 z-10">
            <h2 className="text-4xl md:text-6xl font-serif italic">Our Belief</h2>
            <div className="space-y-6 text-gray-700 leading-[1.8]">
              <p>We believe stories are not created. They already exist.</p>
              <ul className="space-y-4 font-serif italic text-lg">
                <li>— In the way a father looks at his daughter before letting go.</li>
                <li>— In the silence between two people who have shared a lifetime.</li>
                <li>— In moments that arrive unannounced and leave without permission.</li>
              </ul>
              <p className="font-medium pt-4">At Saksha Stories, we exist to witness these moments.</p>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" 
                  alt="Fine art photography" 
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Aesthetic decorative box */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-[#B09A63]/20 -z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* OUR DISCIPLINE - TYPOGRAPHY FOCUS */}
      <section className="py-32 px-6 bg-[#1F2F2A] text-[#F4F1EA]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#B09A63]">Our Discipline</h2>
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">
              Photography is not about <br /> pressing a shutter.
            </h3>
            <div className="flex justify-center space-x-8 text-[#B09A63] font-serif italic text-xl">
              <span>Presence.</span>
              <span>Patience.</span>
              <span>Respect.</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-gray-300">
            We do not chase perfection. We seek truth. The truth in <span className="text-white italic underline decoration-[#B09A63]">imperfect light</span>, unscripted emotion, and moments that cannot be recreated.
          </p>
        </div>
      </section>

      {/* OUR COMMITMENT - CLEAN LIST */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1459749411177-042180ce673b" 
                  alt="Selective focus photography" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-serif italic">Our Commitment</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Stories, to us, are not loud. They reveal themselves quietly to those willing to wait. 
                  That is why we work slowly and choose carefully.
                </p>
                <p className="text-[#1A1A1A] font-medium">
                  We accept only a limited number of stories—not because we cannot do more, 
                  but because every story deserves to be told with care.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-serif italic text-2xl text-[#B09A63]">
                    "We photograph not for today’s applause but for tomorrow’s remembrance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#F4F1EA] text-center">
        <h2 className="text-2xl font-serif mb-8 italic">Ready to tell your story?</h2>
        <button className="px-12 py-4 bg-[#1A1A1A] text-white uppercase tracking-widest text-xs hover:bg-[#B09A63] transition-colors duration-500">
          Inquire Now
        </button>
      </section>

    </div>
  );
};

export default About;