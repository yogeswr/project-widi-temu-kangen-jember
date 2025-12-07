"use client";
import React, { ReactNode } from "react";
import { FaTshirt, FaCalendarAlt, FaUsers, FaImage, FaEnvelope } from "react-icons/fa";

interface LinkItem {
  name: string;
  url: string;
  icon: ReactNode;
}

export default function Home() {
  const links: LinkItem[] = [
    { name: "Merchandise", url: "https://forms.gle/ULNB8kwCxhzqWx9AA", icon: <FaTshirt /> },
  ];

  return (
    <main className="min-h-screen w-full text-white flex flex-col items-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #1a0a00 0%, #331a00 50%, #1a0a00 100%)'
          }}>
      
      {/* Retro scanline effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
           }} />

      {/* Retro corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-500 opacity-40" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-500 opacity-40" />

      {/* Poster with retro frame */}
      <div className="w-full max-w-2xl px-6 mt-8 relative">
        <div className="relative p-3 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg" />
          <img 
            src="/temu-kangen.jpeg" 
            alt="Poster" 
            className="w-full h-auto object-contain rounded relative z-10"
            style={{
              filter: 'sepia(0.15) contrast(1.1)'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl px-6 mt-8 flex flex-col items-center pb-12">

        {/* Retro title with glow */}
        <div className="relative mb-4">
          <h1 className="text-3xl font-bold text-center tracking-wider relative z-10"
              style={{
                fontFamily: '"Courier New", monospace',
                textShadow: '0 0 20px rgba(255, 200, 0, 0.8), 0 0 40px rgba(255, 200, 0, 0.4)',
                color: '#ffdb58'
              }}>
            TEMU KANGEN
          </h1>
          <div className="absolute inset-0 blur-xl bg-amber-500 opacity-30" />
        </div>

        <p className="text-center text-amber-200 mb-2"
           style={{
             fontFamily: '"Courier New", monospace',
             letterSpacing: '0.1em',
             fontSize: '0.9rem'
           }}>
          Alumni KPMHD Vyasta Dharma
        </p>
        
        <p className="text-center text-amber-300 mb-8"
           style={{
             fontFamily: '"Courier New", monospace',
             letterSpacing: '0.15em',
             fontSize: '0.85rem'
           }}>
          ━━━ JEMBER ━━━
        </p>

        {/* Retro links */}
        <div className="mt-4 w-full space-y-4">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between gap-3
                         relative overflow-hidden
                         text-base font-bold py-4 px-6
                         rounded border-2 border-amber-600
                         transition-all duration-300"
              style={{
                fontFamily: '"Courier New", monospace',
                background: 'linear-gradient(135deg, rgba(51, 26, 0, 0.9) 0%, rgba(26, 10, 0, 0.9) 100%)',
                boxShadow: '0 4px 0 #664400, 0 8px 20px rgba(0,0,0,0.5)',
                transform: 'translateY(0)',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 0 #664400, 0 12px 25px rgba(255,200,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 0 #664400, 0 8px 20px rgba(0,0,0,0.5)';
              }}
            >
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,219,88,0.3) 1px, rgba(255,219,88,0.3) 2px)'
                   }} />
              
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-2xl text-amber-400 group-hover:text-amber-300 transition-colors">
                  {link.icon}
                </span>
                <span className="text-amber-100 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>

              <span className="text-amber-500 text-xl relative z-10">›</span>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400 opacity-60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400 opacity-60" />
            </a>
          ))}
        </div>

        {/* Retro footer */}
        <div className="mt-12 text-center text-amber-600"
             style={{
               fontFamily: '"Courier New", monospace',
               fontSize: '0.75rem',
               letterSpacing: '0.2em'
             }}>
          ▲ EST. 2025 ▲
        </div>
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-500 opacity-40" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-500 opacity-40" />
    </main>
  );
}