import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2F2A] text-[#F4F1EA] pt-16 pb-10 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">

          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-serif italic tracking-tighter">
              Saksha Stories
            </h2>

            <p className="text-gray-400 font-light max-w-sm leading-relaxed text-sm">
              A boutique photography studio specializing in luxury weddings and intimate portraits.
              We document stories meant to be revisited, remembered, and passed on through the
              <span className="text-[#B09A63] italic"> Story Archive</span>.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B09A63]">
              Navigate
            </h4>

            <ul className="space-y-2 text-sm font-light">
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                The Philosophy
              </li>
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                Stories We Preserve
              </li>
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                The Application
              </li>
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                Journal
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B09A63]">
              Connect
            </h4>

            <ul className="space-y-2 text-sm font-light">
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                Pinterest
              </li>
              <li className="hover:text-[#B09A63] transition-colors cursor-pointer">
                Vimeo
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B09A63]">
              Inquiries
            </h4>

            <p className="text-sm font-light leading-relaxed text-gray-400">
              By Appointment Only <br />
              Chennai & Globally <br />
              <span className="text-[#F4F1EA]">
                hello@sakshastories.com
              </span>
            </p>
          </div>

        </div>

        {/* MANTRA */}
        <div className="border-y border-white/5 py-4 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-gray-500">
            Never Rush A Story
          </p>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-5 bg-[#B09A63]/30"></div>

            <p className="italic font-serif text-[#B09A63] text-sm tracking-wide">
              Every story deserves depth.
            </p>

            <div className="h-[1px] w-5 bg-[#B09A63]/30"></div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold">

          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>

            <span className="hover:text-gray-400 cursor-pointer transition-colors">
              Terms of Commission
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Saksha Stories. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;