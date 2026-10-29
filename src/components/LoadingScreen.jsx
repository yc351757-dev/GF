import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-950 text-lavender-100"
        >
          {/* Subtle background glow */}
          <div className="absolute w-80 h-80 bg-blush-600/25 rounded-full blur-3xl animate-pulse-glow" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
            {/* Pulsing heart container */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-blush-500/30 rounded-full blur-xl" />
              <Heart className="w-16 h-16 text-blush-500 fill-blush-500 filter drop-shadow-[0_0_15px_rgba(244,63,113,0.8)]" />
              <Sparkles className="w-6 h-6 text-romance-gold absolute -top-1 -right-1 animate-spin" style={{ animationDuration: '6s' }} />
            </motion.div>

            {/* Brand and romantic message */}
            <h2 className="text-3xl font-serif font-bold text-white tracking-wide mb-2">
              Only Us <span className="text-blush-400">❤️</span>
            </h2>
            <p className="text-sm font-light text-lavender-200/80 mb-6 font-serif italic">
              Preparing our little universe for Amanda...
            </p>

            {/* Progress bar */}
            <div className="w-56 h-1.5 bg-midnight-800 rounded-full overflow-hidden border border-blush-500/20 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blush-500 via-lavender-400 to-blush-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="mt-3 text-xs tracking-wider uppercase font-semibold text-blush-300/70">
              {progress < 40
                ? 'Gathering starlight ✨'
                : progress < 80
                ? 'Connecting India & Indonesia ✈️'
                : 'Welcome, my love 💖'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

