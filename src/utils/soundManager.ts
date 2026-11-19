// Global sound state manager for kitten animations
let globalSoundEnabled = false;
const soundListeners = new Set<(enabled: boolean) => void>();

export const getGlobalSound = (): boolean => globalSoundEnabled;

export const setGlobalSound = (enabled: boolean): void => {
  globalSoundEnabled = enabled;
  soundListeners.forEach((listener) => listener(enabled));
};

export const subscribeToSound = (listener: (enabled: boolean) => void): (() => void) => {
  soundListeners.add(listener);
  return () => {
    soundListeners.delete(listener);
  };
};

export const playSynthesizedKittenSound = (type: 'chirp' | 'purr'): void => {
  if (!globalSoundEnabled || typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === 'chirp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.14);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.32);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      [587.33, 739.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime + idx * 0.12;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.42);
      });
    }
  } catch {
    // Autoplay restrictions safely caught
  }
};
