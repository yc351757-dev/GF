import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Feather } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';
import { romanticAudio } from '../utils/romanticAudio';

export default function SurpriseEnvelopeModal({ isOpen, onClose, onGoToQuiz }) {
  const [isOpened, setIsOpened] = useState(false);
  const letter = relationshipData.surpriseLetter;

  const handleOpenEnvelope = () => {
    romanticAudio.playSparkle();
    setIsOpened(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setIsOpened(false);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl my-8"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute -top-12 right-0 p-2 text-lavender-300 hover:text-white transition-colors bg-midnight-900/80 rounded-full border border-blush-400/30"
            title="Close letter"
          >
            <X className="w-5 h-5" />
          </button>

          {!isOpened ? (
            /* SEALED ENVELOPE STATE */
            <div className="flex flex-col items-center">
              <p className="text-sm font-serif italic text-blush-200 mb-4 animate-pulse">
                Tap the wax seal to open Amanda's letter 💌
              </p>

              <div
                onClick={handleOpenEnvelope}
                className="relative w-full max-w-md h-72 sm:h-80 bg-gradient-to-br from-[#2a0e36] via-[#3d124c] to-[#1c0827] rounded-3xl border-2 border-blush-400/40 shadow-romantic-glow-lg cursor-pointer group flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Envelope Fold Pattern */}
                <div className="absolute inset-0 border-t-[140px] sm:border-t-[160px] border-t-plum-800/60 border-l-[170px] sm:border-l-[220px] border-l-transparent border-r-[170px] sm:border-r-[220px] border-r-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-plum-950/90 to-transparent pointer-events-none" />

                {/* Stamped Wax Seal */}
                <div className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-rose-700 via-rose-500 to-blush-400 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(244,63,113,0.7)] group-hover:scale-110 transition-transform duration-300 border-2 border-amber-300/40">
                  <Heart className="w-10 h-10 text-white fill-white drop-shadow" />
                  <span className="text-[10px] font-serif font-bold text-amber-100 tracking-wider">
                    AMANDA
                  </span>
                </div>

                {/* Subtitle instructions */}
                <div className="absolute bottom-6 z-20 text-center">
                  <span className="text-xs font-serif text-blush-200/90 tracking-wide uppercase px-4 py-1.5 rounded-full bg-midnight-950/70 border border-blush-400/20">
                    Click to unseal with love 🌹
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* OPENED LETTER STATE */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-b from-[#fffafb] via-[#fff5f8] to-[#fcecee] text-plum-950 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-blush-200 font-serif"
            >
              {/* Decorative top ribbon */}
              <div className="flex items-center justify-between border-b border-blush-200/80 pb-4 mb-6">
                <div className="flex items-center gap-2 text-rose-600">
                  <Feather className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-mono tracking-wider uppercase text-rose-700 font-semibold">
                    A handwritten letter for you
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-serif text-rose-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>India ✈️ Indonesia</span>
                </div>
              </div>

              {/* Greeting */}
              <h2 className="text-2xl sm:text-3xl font-bold text-plum-950 mb-6 font-serif">
                {letter.greeting}
              </h2>

              {/* Letter Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-800 font-serif font-normal">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-blush-200/80 text-right">
                <p className="text-xs font-mono uppercase tracking-widest text-rose-600 mb-1">
                  {letter.signOff}
                </p>
                <p className="text-xl sm:text-2xl font-script text-rose-700 font-bold">
                  {letter.signature}
                </p>
              </div>

              {/* Bottom buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-end">
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-rose-300 text-rose-800 font-medium text-xs hover:bg-rose-50 transition-colors"
                >
                  Keep in My Heart 🤍
                </button>
                <button
                  onClick={() => {
                    handleResetAndClose();
                    if (onGoToQuiz) onGoToQuiz();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-blush-500 text-white font-medium text-xs shadow-md hover:shadow-lg transition-transform hover:scale-105"
                >
                  Let's Take Our Quiz ❤️
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

