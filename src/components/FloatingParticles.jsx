import React, { useMemo } from 'react';

export default function FloatingParticles() {
  // Generate random particles once
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 16 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
      type: i % 4 === 0 ? '❤️' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🌸' : '💖',
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none transition-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.type}
        </span>
      ))}
      {/* Background ambient radial glow spots */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blush-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-plum-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-lavender-500/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

