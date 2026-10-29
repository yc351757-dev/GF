import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Award,
  Heart,
  Sparkles,
  Download,
  Copy,
  Check,
  RefreshCw,
  Share2,
  BookmarkCheck,
  MessageCircleHeart,
  Compass,
} from 'lucide-react';
import { relationshipData } from '../data/relationshipData';
import { quizQuestions } from '../data/quizData';
import { romanticAudio } from '../utils/romanticAudio';

export default function ResultsSection({ answers = {}, onRetakeQuiz }) {
  const [copied, setCopied] = useState(false);
  const [activeReasonIndex, setActiveReasonIndex] = useState(0);
  const [randomNote, setRandomNote] = useState('');
  const [isPullingNote, setIsPullingNote] = useState(false);
  const certificateRef = useRef(null);

  // Trigger celebration confetti on mount
  useEffect(() => {
    fireRomanticConfetti();
  }, []);

  const fireRomanticConfetti = () => {
    romanticAudio.playSparkle();

    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#fb7193', '#f43f71', '#c084fc', '#fcd34d', '#ffffff'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleCopyVow = () => {
    const vowText = `Official Romantic Certificate for Amanda ❤️\nAwarded to: Amanda, My Favorite Person in This Whole World 🌎\nCompatibility: 100% Soulmate Match\nDistance: 4,480 km (India 🇮🇳 to Indonesia 🇮🇩)\nPromise: "I will choose you today, tomorrow, and forever."`;
    navigator.clipboard.writeText(vowText);
    setCopied(true);
    romanticAudio.playChime(784, 0.5);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const loveJarNotes = [
    "You are the first thing on my mind when I wake up in India ☀️",
    "Sending you a warm, tight hug across 4,480 kilometers right now 🫂",
    "Thank you for being the sweetest, most patient girlfriend in the world 🌸",
    "Every song I listen to reminds me of you and our future 🎶",
    "I can't wait for the day we don't have to look at each other through a phone screen 🥹",
    "Your smile is my favorite piece of art in the entire universe 🎨",
    "Amanda, you are my home, no matter how many miles separate us 🏡❤️",
    "You make my heart beat faster and my soul feel calmer all at once ✨"
  ];

  const handlePullNote = () => {
    romanticAudio.playSparkle();
    setIsPullingNote(true);
    setTimeout(() => {
      const random = loveJarNotes[Math.floor(Math.random() * loveJarNotes.length)];
      setRandomNote(random);
      setIsPullingNote(false);
    }, 400);
  };

  return (
    <section id="results" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Celebration Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-blush-500 to-plum-600 flex items-center justify-center shadow-romantic-glow mb-4"
        >
          <Award className="w-10 h-10 text-white" />
        </motion.div>

        <span className="text-xs font-mono uppercase tracking-widest text-blush-400 font-semibold px-3 py-1 rounded-full bg-blush-500/15 border border-blush-500/30">
          Our Love Story Milestone
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white dark:text-white light:text-plum-950 mt-3 mb-2">
          100% Soulmate Match ❤️
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-lavender-200/90 dark:text-lavender-200/90 light:text-plum-800 max-w-md mx-auto">
          No quiz could measure what we already know in our hearts: Amanda is my one and only.
        </p>

        {/* Celebration Confetti Button */}
        <button
          onClick={fireRomanticConfetti}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-midnight-900/60 border border-blush-400/40 text-blush-300 text-xs font-serif hover:bg-blush-500/20 hover:scale-105 transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-romance-gold" />
          <span>Shower with Starlight & Confetti 🎊</span>
        </button>
      </div>

      {/* OFFICIAL ROMANTIC CERTIFICATE */}
      <motion.div
        ref={certificateRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-b from-[#fffafb] via-[#fff5f8] to-[#fcecee] text-plum-950 rounded-3xl p-6 sm:p-12 shadow-2xl border-8 border-double border-blush-300/80 my-8 overflow-hidden font-serif"
      >
        {/* Subtle decorative corners */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-400" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-400" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-rose-400" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-rose-400" />

        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-rose-600 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-[11px] font-mono tracking-widest uppercase font-bold">
              Official Eternal Love Certificate
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-plum-950 mb-2">
            Certificate of Absolute Adoration
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-serif italic mb-6">
            This token certifies that under any sky, across any distance, one truth remains absolute:
          </p>

          {/* Recipient Amanda Highlight */}
          <div className="my-6 py-4 border-y-2 border-dashed border-rose-300/80 max-w-lg mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-500 block mb-1">
              PROUDLY PRESENTED TO
            </span>
            <span className="text-3xl sm:text-5xl font-script font-bold text-rose-600 block my-1">
              Amanda 🌺
            </span>
            <span className="text-xs sm:text-sm font-serif text-slate-700 italic">
              “The Most Beautiful Girl in the Entire Universe & Keeper of My Heart”
            </span>
          </div>

          <div className="max-w-xl mx-auto space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700 my-6">
            <p>
              Awarded for her boundless kindness, the warmth of her laughter, her patient heart, and the effortless way she brings light to every single day from Indonesia to India.
            </p>
            <p className="font-semibold text-rose-800">
              Verified: 100% Soulmate Connection • 0 Miles Between Our Souls
            </p>
          </div>

          {/* Seals and Signatures */}
          <div className="mt-8 pt-6 border-t border-rose-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                ORIGIN & DESTINATION
              </span>
              <span className="text-sm font-serif font-bold text-slate-800">
                India 🇮🇳 ✈️ 🇮🇩 Indonesia
              </span>
            </div>

            {/* Wax Seal Badge */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 to-blush-500 flex flex-col items-center justify-center text-white shadow-md border-2 border-amber-300/40">
                <Heart className="w-6 h-6 fill-white" />
                <span className="text-[8px] font-mono tracking-widest uppercase font-bold">ONLY US</span>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                SIGNED WITH LOVE
              </span>
              <span className="text-base font-script font-bold text-rose-700">
                Her Boyfriend Forever ❤️
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificate Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 my-6">
        <button
          onClick={handleCopyVow}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-white text-lavender-200 dark:text-lavender-200 light:text-plum-900 border border-blush-400/30 text-xs font-serif hover:border-blush-400 hover:text-white transition-all shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blush-400" />}
          <span>{copied ? 'Vow Copied to Clipboard!' : 'Copy Certificate Vow'}</span>
        </button>

        <button
          onClick={handlePrintCertificate}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-white text-lavender-200 dark:text-lavender-200 light:text-plum-900 border border-lavender-400/30 text-xs font-serif hover:border-lavender-400 hover:text-white transition-all shadow-sm"
        >
          <Download className="w-4 h-4 text-lavender-400" />
          <span>Save / Print Certificate</span>
        </button>

        <button
          onClick={onRetakeQuiz}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blush-500 to-plum-600 text-white text-xs font-serif font-semibold shadow-romantic-glow hover:scale-105 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retake Quiz With Amanda</span>
        </button>
      </div>

      {/* REASONS WHY I LOVE AMANDA CARD DECK */}
      <div className="mt-16">
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-blush-400 font-semibold">
            Keepsake Deck
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white dark:text-white light:text-plum-950 mt-1">
            Reasons Why I Love You, Amanda 💕
          </h3>
          <p className="text-xs sm:text-sm text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-800 font-serif italic mt-1">
            Just a few of the thousands of reasons you own my entire heart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relationshipData.reasonsWhy.map((reason) => (
            <motion.div
              key={reason.id}
              whileHover={{ y: -5 }}
              className="glass-panel p-5 rounded-2xl border border-blush-500/20 relative group hover:border-blush-400/40 transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blush-500/20 text-blush-300 flex items-center justify-center text-xs font-bold font-mono mb-3 group-hover:bg-blush-500 group-hover:text-white transition-colors">
                #{reason.id}
              </div>
              <h4 className="font-serif font-bold text-base text-white dark:text-white light:text-plum-900 mb-1.5">
                {reason.title}
              </h4>
              <p className="text-xs text-lavender-200/80 dark:text-lavender-200/80 light:text-plum-700 leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE LOVE NOTES JAR */}
      <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 border border-blush-400/30 text-center max-w-xl mx-auto shadow-romantic-glow">
        <div className="w-12 h-12 rounded-full bg-blush-500/20 flex items-center justify-center mx-auto mb-3 text-blush-400">
          <MessageCircleHeart className="w-6 h-6 animate-pulse" />
        </div>
        <h4 className="font-serif font-bold text-xl text-white dark:text-white light:text-plum-950 mb-1">
          Amanda's Little Love Notes Jar 🍯💌
        </h4>
        <p className="text-xs text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-800 mb-6 font-serif italic">
          Whenever you miss me across the distance, pull a little note from my heart.
        </p>

        <button
          onClick={handlePullNote}
          disabled={isPullingNote}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blush-500 to-plum-600 text-white font-serif font-semibold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          {isPullingNote ? 'Opening a note...' : 'Pull a Note for Today 💌'}
        </button>

        <AnimatePresence>
          {randomNote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-2xl bg-midnight-950/70 border border-blush-400/30 text-blush-100 font-serif italic text-sm shadow-inner"
            >
              “{randomNote}”
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

