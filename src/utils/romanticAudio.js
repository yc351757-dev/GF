/**
 * Romantic Ambient Audio Synthesizer using Web Audio API
 * Generates soft, peaceful, dreamy music box & piano chords for Amanda.
 * Zero external mp3 dependencies, 100% reliable, zero CORS issues.
 */

class RomanticAudioController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.volume = 0.25;
    this.timerId = null;
    this.masterGain = null;
    this.chordIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a single soft dreamy romantic chime (e.g. on answering quiz or opening envelope)
  playChime(freq = 523.25, duration = 1.2) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain || this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Play cute positive chime chord
  playSparkle() {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 1.4);
      }, idx * 120);
    });
  }

  // Toggle ambient peaceful romantic lullaby
  toggleMusic(onStateChange) {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stopMusic();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startMusic();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startMusic() {
    this.init();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.playChordProgression();
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  playChordProgression() {
    if (!this.isPlaying || !this.ctx) return;

    // Dreamy romantic chord progressions (Fmaj7, Cmaj7, Am9, Gsus4)
    const chords = [
      [349.23, 440.00, 523.25, 659.25], // Fmaj7 (F, A, C, E)
      [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C, E, G, B)
      [220.00, 261.63, 329.63, 493.88], // Am9 (A, C, E, B)
      [392.00, 523.25, 587.33, 783.99], // Gsus4 / Gadd9 (G, C, D, G)
    ];

    const currentChord = chords[this.chordIndex % chords.length];
    this.chordIndex++;

    // Arpeggiate current chord gently
    currentChord.forEach((freq, i) => {
      setTimeout(() => {
        if (!this.isPlaying) return;
        this.playSoftNote(freq, 2.5);
      }, i * 360);
    });

    // Schedule next chord in 3.6 seconds
    this.timerId = setTimeout(() => {
      this.playChordProgression();
    }, 3600);
  }

  playSoftNote(freq, duration) {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle'; // Warm, soft tone like a romantic electric piano/vibraphone
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context suspended or user gesture needed
    }
  }
}

export const romanticAudio = new RomanticAudioController();

