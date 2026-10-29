import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Sparkles, KeyRound, Play, ArrowDown } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';
import LdrConnectionBanner from './LdrConnectionBanner';

export default function WelcomeHero({ onOpenSurprise, onStartQuiz, onDiscoverSecret, onScrollDown }) {
  const [heartPumps, setHeartPumps] = useState(0);

  const handleHeartClick = () => {
    romanticAudio.playSparkle();
    setHeartPumps((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blush-600/20 via-plum-600/25 to-lavender-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle greeting pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-500/15 border border-blush-500/30 text-blush-300 dark:text-blush-300 light:text-plum-900 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-romance-gold animate-spin" style={{ animationDuration: '8s' }} />
          <span>Only Us • A Little Sanctuary for Amanda</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight leading-tight text-white dark:text-white light:text-plum-950 mb-6 drop-shadow-md"
        >
          For Amanda, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blush-400 via-blush-200 to-lavender-300 bg-clip-text text-transparent">
            My Favorite Person
          </span>{' '}
          in This Whole World 🌎❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl font-serif italic text-lavender-200 dark:text-lavender-200 light:text-plum-800 max-w-2xl mb-4 font-normal"
        >
          “A little quiz about us, a little love, and a surprise made just for you.”
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-700 max-w-xl mb-10 leading-relaxed font-light"
        >
          Hey, my love. I made a little corner of the internet just for you. Ready to discover our little world?
        </motion.p>

        {/* Large Animated Heart with Particles */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative my-4 flex items-center justify-center cursor-pointer group"
          onClick={handleHeartClick}
          title="Click to send love to Amanda! ❤️"
        >
          {/* Outer glowing ripple ring */}
          <div className="absolute w-44 h-44 rounded-full bg-blush-500/20 blur-2xl group-hover:bg-blush-500/35 transition-all duration-500" />
          <div className="absolute w-36 h-36 rounded-full border border-blush-400/30 animate-ping opacity-30" style={{ animationDuration: '3s' }} />

          {/* Central Heart */}
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blush-600 via-blush-500 to-plum-600 p-1 flex items-center justify-center shadow-romantic-glow group-hover:shadow-romantic-glow-lg transition-all"
          >
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-white animate-heart-pulse drop-shadow-md" />
            <span className="absolute bottom-2 text-[10px] font-mono uppercase tracking-wider text-white/90 bg-midnight-950/40 px-2 py-0.5 rounded-full">
              {heartPumps > 0 ? `${heartPumps} Love Bursts 💕` : 'Tap Me ❤️'}
            </span>
          </motion.div>
        </motion.div>

        {/* 3 Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-xl"
        >
          {/* Button 1: Open Your Surprise 💌 */}
          <button
            onClick={onOpenSurprise}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-white text-white dark:text-white light:text-plum-900 border border-blush-400/30 shadow-md hover:border-blush-400 hover:shadow-romantic-glow transition-all duration-300 group hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 text-blush-400 group-hover:scale-110 transition-transform" />
            <span className="font-serif font-bold text-base">Open Your Surprise 💌</span>
          </button>

          {/* Button 2: Start Our Love Quiz ❤️ (Primary highlight) */}
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blush-500 via-blush-600 to-plum-600 text-white shadow-romantic-glow hover:shadow-romantic-glow-lg transition-all duration-300 font-serif font-bold text-base hover:-translate-y-1 active:scale-95 ring-2 ring-blush-400/40"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start Our Love Quiz ❤️</span>
          </button>

          {/* Button 3: Discover a Secret 💗 */}
          <button
            onClick={onDiscoverSecret}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-white text-white dark:text-white light:text-plum-900 border border-lavender-400/30 shadow-md hover:border-lavender-400 hover:shadow-romantic-glow transition-all duration-300 group hover:-translate-y-1"
          >
            <KeyRound className="w-5 h-5 text-lavender-400 group-hover:scale-110 transition-transform" />
            <span className="font-serif font-bold text-base">Discover a Secret 💗</span>
          </button>
        </motion.div>

        {/* Subtle Animated Connection India 🇮🇳 <-> Indonesia 🇮🇩 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full"
        >
          <LdrConnectionBanner />
        </motion.div>

        {/* Scroll helper */}
        <button
          onClick={onScrollDown}
          className="mt-6 flex flex-col items-center text-xs text-lavender-400 hover:text-blush-300 transition-colors gap-1 group"
        >
          <span>Scroll down to begin our quiz</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-blush-400" />
        </button>
      </div>
    </section>
  );
}

