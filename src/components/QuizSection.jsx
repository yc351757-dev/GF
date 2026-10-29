import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Award,
  Layers,
  HeartHandshake,
  Infinity as InfinityIcon,
} from 'lucide-react';
import { quizRounds, quizQuestions } from '../data/quizData';
import { romanticAudio } from '../utils/romanticAudio';

export default function QuizSection({ onCompleteQuiz }) {
  // LocalStorage persistence for answers and current question
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem('only_us_quiz_index');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    const saved = localStorage.getItem('only_us_quiz_answers');
    return saved ? JSON.parse(saved) : {};
  });

  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    localStorage.setItem('only_us_quiz_index', currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem('only_us_quiz_answers', JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  const currentQuestion = quizQuestions[currentIndex];
  const currentRound = quizRounds.find((r) => r.id === currentQuestion.roundId);
  const totalQuestions = quizQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const selectedOptionId = selectedAnswers[currentQuestion.id];
  const isAnswered = selectedOptionId !== undefined;

  const handleSelectOption = (optionId) => {
    romanticAudio.playChime(659.25, 0.8);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    romanticAudio.playSparkle();
    setShowFeedback(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Quiz complete!
      if (onCompleteQuiz) {
        onCompleteQuiz(selectedAnswers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setShowFeedback(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm('Would you like to restart our quiz from the beginning, Amanda?')) {
      setSelectedAnswers({});
      setCurrentIndex(0);
      setShowFeedback(false);
      localStorage.removeItem('only_us_quiz_answers');
      localStorage.removeItem('only_us_quiz_index');
    }
  };

  // Switch round indicator icon
  const getRoundIcon = (roundId) => {
    switch (roundId) {
      case 1:
        return <HeartHandshake className="w-4 h-4" />;
      case 2:
        return <Sparkles className="w-4 h-4" />;
      case 3:
        return <InfinityIcon className="w-4 h-4" />;
      default:
        return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <section id="love-quiz" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Round Tracker Header */}
      <div className="mb-8 flex flex-col items-center">
        {/* Round selection / pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {quizRounds.map((round) => {
            const isActive = round.id === currentRound.id;
            const isCompleted = currentQuestion.roundId > round.id;

            return (
              <div
                key={round.id}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blush-500 to-plum-600 text-white shadow-md ring-2 ring-blush-400/40'
                    : isCompleted
                    ? 'bg-midnight-900/80 text-blush-300 border border-blush-500/30'
                    : 'bg-midnight-950/40 text-lavender-400/60 border border-transparent'
                }`}
              >
                {getRoundIcon(round.id)}
                <span>Round {round.id}</span>
                {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-blush-400" />}
              </div>
            );
          })}
        </div>

        {/* Current Round Title */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-white dark:text-white light:text-plum-950 mb-1">
          {currentRound.title}
        </h2>
        <p className="text-xs sm:text-sm text-center text-lavender-200/80 dark:text-lavender-200/80 light:text-plum-800 max-w-md font-serif italic mb-6">
          {currentRound.subtitle}
        </p>

        {/* Progress Bar with Heart Slider */}
        <div className="w-full max-w-md flex items-center gap-3">
          <span className="text-xs font-mono text-blush-300">
            {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="relative flex-1 h-2 bg-midnight-900 rounded-full overflow-hidden border border-blush-500/20 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blush-500 via-blush-400 to-lavender-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xs font-mono text-blush-300">{progressPercent}%</span>
        </div>
      </div>

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-blush-400/30 shadow-romantic-glow-lg relative overflow-hidden"
        >
          {/* Subtle Question watermark */}
          <div className="absolute top-4 right-6 text-7xl font-serif font-extrabold text-blush-500/5 select-none pointer-events-none">
            #{currentQuestion.id}
          </div>

          {/* Question Header */}
          <div className="mb-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-500/15 border border-blush-500/30 text-blush-300 text-xs font-mono mb-3">
              <span>Question {currentQuestion.id} of {totalQuestions}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white dark:text-white light:text-plum-950 leading-snug">
              {currentQuestion.question}
            </h3>
            {currentQuestion.description && (
              <p className="text-xs sm:text-sm text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-700 mt-2 font-serif italic">
                {currentQuestion.description}
              </p>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 relative z-10">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left font-serif transition-all duration-200 border flex items-start gap-3.5 group relative ${
                    isSelected
                      ? 'bg-gradient-to-r from-blush-500/25 to-plum-600/30 border-blush-400 shadow-[0_0_20px_rgba(244,63,113,0.35)] scale-[1.01]'
                      : 'bg-midnight-950/40 dark:bg-midnight-950/40 light:bg-white/80 border-blush-500/20 hover:border-blush-400/50 hover:bg-midnight-900/60'
                  }`}
                >
                  {/* Selection indicator bubble */}
                  <div
                    className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-blush-500 border-blush-300 text-white'
                        : 'border-blush-500/30 group-hover:border-blush-400'
                    }`}
                  >
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 fill-white text-blush-500" />
                    ) : (
                      <span className="text-[11px] font-mono uppercase text-lavender-300 group-hover:text-blush-300">
                        {option.id}
                      </span>
                    )}
                  </div>

                  {/* Option Text */}
                  <span
                    className={`text-sm sm:text-base leading-relaxed ${
                      isSelected
                        ? 'text-white dark:text-white light:text-plum-950 font-semibold'
                        : 'text-lavender-100/90 dark:text-lavender-100/90 light:text-plum-900 group-hover:text-white'
                    }`}
                  >
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Sweet Feedback / Reaction Card */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blush-500/15 via-plum-600/20 to-lavender-500/10 border border-blush-400/30 shadow-inner">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-blush-400 fill-blush-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-blush-300 font-bold">
                      A sweet thought for Amanda
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-lavender-100 dark:text-lavender-100 light:text-plum-900 font-serif italic mb-1.5">
                    “{currentQuestion.sweetNote}”
                  </p>
                  <p className="text-xs text-lavender-300/80 dark:text-lavender-300/80 light:text-plum-800">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blush-500/20 relative z-10">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-serif text-lavender-300 hover:text-white hover:bg-blush-500/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              )}
              <button
                onClick={handleReset}
                title="Restart Quiz"
                className="p-2 rounded-xl text-lavender-400 hover:text-blush-300 hover:bg-blush-500/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-2xl font-serif font-bold text-sm transition-all duration-300 ${
                isAnswered
                  ? 'bg-gradient-to-r from-blush-500 via-blush-600 to-plum-600 text-white shadow-romantic-glow hover:shadow-romantic-glow-lg hover:scale-105 active:scale-95'
                  : 'bg-midnight-900/50 text-lavender-400/40 border border-blush-500/10 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Reveal Our Love Certificate 📜' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

