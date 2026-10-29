import React, { useState, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import WelcomeHero from './components/WelcomeHero';
import SurpriseEnvelopeModal from './components/SurpriseEnvelopeModal';
import SecretModal from './components/SecretModal';
import QuizSection from './components/QuizSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(() => {
    return localStorage.getItem('only_us_quiz_completed') === 'true';
  });
  const [quizAnswers, setQuizAnswers] = useState(() => {
    const saved = localStorage.getItem('only_us_quiz_answers');
    return saved ? JSON.parse(saved) : {};
  });

  const quizRef = useRef(null);
  const resultsRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToQuiz = () => {
    setActiveSection('quiz');
    const el = document.getElementById('love-quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    setActiveSection('results');
    const el = document.getElementById('results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setActiveSection('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
    if (section === 'hero') {
      scrollToTop();
    } else if (section === 'quiz') {
      scrollToQuiz();
    } else if (section === 'surprises') {
      setIsSurpriseOpen(true);
    } else if (section === 'results') {
      scrollToResults();
    }
  };

  const handleCompleteQuiz = (answers) => {
    setQuizAnswers(answers);
    setIsQuizCompleted(true);
    localStorage.setItem('only_us_quiz_completed', 'true');
    setTimeout(() => {
      scrollToResults();
    }, 200);
  };

  const handleRetakeQuiz = () => {
    setIsQuizCompleted(false);
    localStorage.removeItem('only_us_quiz_completed');
    localStorage.removeItem('only_us_quiz_answers');
    localStorage.removeItem('only_us_quiz_index');
    scrollToQuiz();
  };

  return (
    <div className="relative min-h-screen text-lavender-100 overflow-x-hidden">
      {/* Initial Animated Romantic Loading Screen */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Floating particles & background glow effects */}
      <FloatingParticles />

      {/* Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Welcome Page / Hero */}
        <div ref={heroRef}>
          <WelcomeHero
            onOpenSurprise={() => setIsSurpriseOpen(true)}
            onStartQuiz={scrollToQuiz}
            onDiscoverSecret={() => setIsSecretOpen(true)}
            onScrollDown={scrollToQuiz}
          />
        </div>

        {/* 12-Question Love Quiz across 3 Rounds */}
        <div ref={quizRef}>
          <QuizSection onCompleteQuiz={handleCompleteQuiz} />
        </div>

        {/* Celebration / Certificate / Keepsake Section */}
        <div ref={resultsRef}>
          <ResultsSection answers={quizAnswers} onRetakeQuiz={handleRetakeQuiz} />
        </div>
      </main>

      {/* Interactive Surprise Envelope Modal */}
      <SurpriseEnvelopeModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        onGoToQuiz={scrollToQuiz}
      />

      {/* Interactive Secret Vault Modal */}
      <SecretModal
        isOpen={isSecretOpen}
        onClose={() => setIsSecretOpen(false)}
      />

      {/* Footer */}
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}

