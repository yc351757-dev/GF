import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Moon, Sun, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';

export default function Navbar({ onNavigate, activeSection }) {
  const [isDark, setIsDark] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Read theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('only_us_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('only_us_theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('only_us_theme', 'dark');
      setIsDark(true);
    }
  };

  const handleToggleMusic = () => {
    romanticAudio.toggleMusic((playing) => {
      setIsPlayingMusic(playing);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-midnight-950/80 dark:bg-midnight-950/80 light:bg-white/80 backdrop-blur-md shadow-lg border-b border-blush-500/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blush-500 to-lavender-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-white fill-white group-hover:animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-serif font-bold tracking-tight bg-gradient-to-r from-white via-blush-200 to-lavender-200 dark:from-white dark:via-blush-200 dark:to-lavender-200 light:from-plum-900 light:via-blush-600 light:to-plum-700 bg-clip-text text-transparent">
              Only Us <span className="text-blush-500">❤️</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-blush-500/20 text-blush-300 border border-blush-500/30">
              For Amanda
            </span>
          </div>
        </button>

        {/* Navigation links & controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden md:flex items-center gap-1 bg-midnight-900/40 dark:bg-midnight-900/40 light:bg-blush-50/70 backdrop-blur-md p-1 rounded-full border border-blush-500/20 text-sm">
            <button
              onClick={() => onNavigate('hero')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeSection === 'hero'
                  ? 'bg-blush-500 text-white font-medium shadow-sm'
                  : 'text-lavender-200/80 hover:text-white dark:text-lavender-200/80 light:text-plum-900 hover:bg-blush-500/10'
              }`}
            >
              Our World
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeSection === 'quiz'
                  ? 'bg-blush-500 text-white font-medium shadow-sm'
                  : 'text-lavender-200/80 hover:text-white dark:text-lavender-200/80 light:text-plum-900 hover:bg-blush-500/10'
              }`}
            >
              Love Quiz
            </button>
            <button
              onClick={() => onNavigate('surprises')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeSection === 'surprises'
                  ? 'bg-blush-500 text-white font-medium shadow-sm'
                  : 'text-lavender-200/80 hover:text-white dark:text-lavender-200/80 light:text-plum-900 hover:bg-blush-500/10'
              }`}
            >
              Surprises 💌
            </button>
            <button
              onClick={() => onNavigate('results')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeSection === 'results'
                  ? 'bg-blush-500 text-white font-medium shadow-sm'
                  : 'text-lavender-200/80 hover:text-white dark:text-lavender-200/80 light:text-plum-900 hover:bg-blush-500/10'
              }`}
            >
              Certificate 📜
            </button>
          </nav>

          {/* Romantic Music Toggle */}
          <button
            onClick={handleToggleMusic}
            title={isPlayingMusic ? 'Mute soothing melody' : 'Play romantic melody'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-medium ${
              isPlayingMusic
                ? 'bg-blush-500/25 border-blush-500 text-blush-200 shadow-[0_0_15px_rgba(244,63,113,0.3)]'
                : 'bg-midnight-900/50 border-blush-500/20 text-lavender-300 hover:border-blush-500/50'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-blush-400 animate-pulse" />
                <span className="hidden sm:inline">Melody On</span>
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 h-2 bg-blush-400 animate-pulse" />
                  <span className="w-0.5 h-3 bg-blush-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 h-1.5 bg-blush-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-lavender-400" />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? 'Switch to Rosé Dream (Light)' : 'Switch to Midnight Romance (Dark)'}
            className="p-2 rounded-full bg-midnight-900/50 dark:bg-midnight-900/50 light:bg-blush-100/80 border border-blush-500/20 text-lavender-300 hover:text-blush-300 hover:border-blush-500/40 transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-romance-gold" />
            ) : (
              <Moon className="w-4 h-4 text-plum-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

