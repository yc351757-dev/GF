import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ onScrollToTop }) {
  return (
    <footer className="relative z-10 border-t border-blush-500/20 py-12 px-4 sm:px-6 bg-midnight-950/90 dark:bg-midnight-950/90 light:bg-blush-50/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heart logo */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blush-500 to-plum-600 flex items-center justify-center mb-4 shadow-romantic-glow">
          <Heart className="w-5 h-5 text-white fill-white animate-heart-pulse" />
        </div>

        {/* Website Name */}
        <h4 className="text-xl font-serif font-bold text-white dark:text-white light:text-plum-950 mb-1">
          Only Us <span className="text-blush-400">❤️</span>
        </h4>

        {/* Personal dedication */}
        <p className="text-xs sm:text-sm text-lavender-200/80 dark:text-lavender-200/80 light:text-plum-800 font-serif italic mb-4">
          Dedicated to Amanda, my favorite person in this whole world.
        </p>

        {/* Exact required footer line */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blush-500/10 border border-blush-500/25 text-blush-300 dark:text-blush-300 light:text-plum-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm my-3">
          <span>Made with love, from India to Indonesia 🇮🇳❤️🇮🇩</span>
        </div>

        <p className="text-[11px] text-lavender-400/60 font-mono mt-3">
          Every second, every kilometer, every heartbeat belongs to you.
        </p>

        {/* Back to top button */}
        <button
          onClick={onScrollToTop}
          className="mt-6 flex items-center gap-1.5 text-xs text-lavender-400 hover:text-blush-300 transition-colors py-1 px-3 rounded-lg hover:bg-blush-500/10"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}

