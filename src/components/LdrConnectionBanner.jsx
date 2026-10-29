import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, Send, Clock, Sparkles } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';
import { romanticAudio } from '../utils/romanticAudio';

export default function LdrConnectionBanner() {
  const [indiaTime, setIndiaTime] = useState('');
  const [indonesiaTime, setIndonesiaTime] = useState('');
  const [sentKisses, setSentKisses] = useState([]);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      // India (IST: UTC +5:30)
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      // Indonesia (WIB: UTC +7)
      const wibString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setIndiaTime(istString);
      setIndonesiaTime(wibString);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSendKiss = () => {
    romanticAudio.playSparkle();
    const id = Date.now();
    setSentKisses((prev) => [...prev, id]);
    setTimeout(() => {
      setSentKisses((prev) => prev.filter((k) => k !== id));
    }, 2500);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-4">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-blush-500/25 shadow-romantic-glow">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-plum-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blush-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-500/15 border border-blush-500/30 text-blush-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-romance-gold" />
            <span>Our Long-Distance Heartline</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-white dark:text-white light:text-plum-950 mb-2">
            Bridging India <span className="text-blush-400">🇮🇳</span> to Indonesia <span className="text-blush-400">🇮🇩</span>
          </h3>

          <p className="text-xs sm:text-sm text-lavender-200/80 dark:text-lavender-200/80 light:text-plum-800 text-center max-w-lg mb-8 font-light">
            ~4,480 kilometers across land and ocean, but Amanda has always lived right inside my heart.
          </p>

          {/* Dual Locations & Connection Graphic */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* India Side */}
            <div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center border-blush-500/20 relative group hover:border-blush-400/40 transition-colors">
              <span className="text-4xl mb-2 filter drop-shadow">🇮🇳</span>
              <h4 className="font-serif font-bold text-lg text-white dark:text-white light:text-plum-900">
                His World (India)
              </h4>
              <p className="text-xs text-lavender-300 dark:text-lavender-300 light:text-plum-700 mb-2">
                Where I'm counting down the days
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-midnight-950/60 text-xs font-mono text-blush-300 border border-blush-500/20">
                <Clock className="w-3.5 h-3.5 text-romance-gold" />
                <span>{indiaTime || 'Loading...'} IST</span>
              </div>
            </div>

            {/* Connecting Flight/Heart Path */}
            <div className="flex flex-col items-center justify-center py-2 relative">
              <div className="w-full relative flex items-center justify-center">
                <svg className="w-full h-16 overflow-visible" viewBox="0 0 200 60">
                  <path
                    d="M 10 30 Q 100 -5 190 30"
                    fill="transparent"
                    stroke="rgba(251, 113, 147, 0.35)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  {/* Glowing traveling heart along the arc */}
                  <motion.circle
                    r="4"
                    fill="#fb7193"
                    className="filter drop-shadow-[0_0_8px_#fb7193]"
                    animate={{
                      cx: [15, 100, 185, 100, 15],
                      cy: [28, 6, 28, 6, 28],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>

                {/* Center Heart Emblem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-midnight-900/90 border border-blush-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,113,147,0.5)]">
                    <Heart className="w-5 h-5 text-blush-400 fill-blush-400 animate-heart-pulse" />
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-mono tracking-wider uppercase text-blush-300/80 mt-1">
                4,480 KM • +1.5 HRS WIB
              </span>
            </div>

            {/* Indonesia Side */}
            <div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center border-blush-500/20 relative group hover:border-blush-400/40 transition-colors">
              <span className="text-4xl mb-2 filter drop-shadow">🇮🇩</span>
              <h4 className="font-serif font-bold text-lg text-white dark:text-white light:text-plum-900">
                Amanda's World (Indonesia)
              </h4>
              <p className="text-xs text-lavender-300 dark:text-lavender-300 light:text-plum-700 mb-2">
                Where my favorite person lives
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-midnight-950/60 text-xs font-mono text-blush-300 border border-blush-500/20">
                <Clock className="w-3.5 h-3.5 text-romance-gold" />
                <span>{indonesiaTime || 'Loading...'} WIB</span>
              </div>
            </div>
          </div>

          {/* Interactive Send Virtual Kiss Button */}
          <div className="mt-8 flex flex-col items-center relative">
            <button
              onClick={handleSendKiss}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blush-500 via-blush-600 to-plum-600 text-white font-medium text-sm shadow-romantic-glow hover:shadow-romantic-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Send a Virtual Kiss to Amanda 💋</span>
            </button>

            {/* Floating Kiss Emojis */}
            <AnimatePresence>
              {sentKisses.map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 1, 0], y: -80, scale: [0.5, 1.4, 1.2, 0.8] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  className="absolute pointer-events-none flex items-center gap-1 text-2xl"
                >
                  <span>💋</span>
                  <span className="text-xs font-serif font-bold text-blush-200 bg-midnight-950/80 px-2 py-0.5 rounded-full border border-blush-400">
                    Flying to Indonesia! ❤️
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

