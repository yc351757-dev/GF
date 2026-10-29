import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Unlock, Sparkles, Heart, Star } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';
import { romanticAudio } from '../utils/romanticAudio';

export default function SecretModal({ isOpen, onClose }) {
  const [unlockedSecrets, setUnlockedSecrets] = useState({});
  const secrets = relationshipData.secrets;

  const handleUnlockSecret = (id) => {
    romanticAudio.playSparkle();
    setUnlockedSecrets((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleUnlockAll = () => {
    romanticAudio.playSparkle();
    const all = {};
    secrets.forEach((s) => (all[s.id] = true));
    setUnlockedSecrets(all);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-midnight-900/95 dark:bg-midnight-900/95 light:bg-white text-lavender-100 dark:text-lavender-100 light:text-plum-950 rounded-3xl p-6 sm:p-8 border border-blush-400/30 shadow-romantic-glow my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-lavender-300 hover:text-white transition-colors bg-midnight-950/60 rounded-full border border-blush-500/20"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-blush-500/20 flex items-center justify-center text-blush-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-blush-400 font-semibold">
              Amanda's Secret Vault 🔐
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white dark:text-white light:text-plum-950 mb-2">
            Little Secrets I Whispered Across the Ocean 🌊💗
          </h2>
          <p className="text-xs sm:text-sm text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-800 mb-6 font-light">
            Tap each secret to unlock the intimate thoughts I hold dear about you every single day.
          </p>

          {/* Secrets list */}
          <div className="space-y-4">
            {secrets.map((secret, index) => {
              const isUnlocked = unlockedSecrets[secret.id];

              return (
                <div
                  key={secret.id}
                  onClick={() => !isUnlocked && handleUnlockSecret(secret.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isUnlocked
                      ? 'bg-midnight-950/70 border-blush-400/40 shadow-md'
                      : 'bg-midnight-950/40 border-blush-500/20 hover:border-blush-400/50 hover:bg-midnight-950/60 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif font-bold text-base text-blush-200 dark:text-blush-200 light:text-plum-900 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-blush-400 fill-blush-400" />
                      <span>{secret.title}</span>
                    </h4>
                    {isUnlocked ? (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <Unlock className="w-3 h-3" /> Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-500/30">
                        <Lock className="w-3 h-3" /> Tap to reveal
                      </span>
                    )}
                  </div>

                  {isUnlocked ? (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs sm:text-sm text-lavender-100 dark:text-lavender-100 light:text-slate-700 leading-relaxed font-serif italic"
                    >
                      “{secret.content}”
                    </motion.p>
                  ) : (
                    <p className="text-xs text-lavender-400/60 font-mono italic">
                      [Locked with love • Tap to unlock Amanda's secret]
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Modal bottom actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-blush-500/20">
            <button
              onClick={handleUnlockAll}
              className="text-xs text-blush-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Unlock all secrets at once ✨
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blush-500 to-plum-600 text-white font-serif font-semibold text-xs shadow-md hover:scale-105 transition-transform"
            >
              Close Vault & Continue
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

