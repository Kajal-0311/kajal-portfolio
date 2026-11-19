import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Volume2, RotateCcw, Play, Pause } from 'lucide-react';

type CatPlayState =
  | 'peeking'
  | 'running_to_center'
  | 'meeting_center'
  | 'chasing_across'
  | 'turning_around'
  | 'returning_center'
  | 'meeting_again'
  | 'returning_home';

interface PersianCatSvgProps {
  id: string;
  collarColor: string;
  bellColor: string;
  isWalking: boolean;
  isGreeting: boolean;
  isHappyJump?: boolean;
}

// Detailed, high-charm Persian Cat SVG with fluffy cheeks, snub nose, plume tail & walking paws
const PersianCatSvg: React.FC<PersianCatSvgProps> = ({
  id,
  collarColor,
  bellColor,
  isWalking,
  isGreeting,
  isHappyJump = false,
}) => {
  return (
    <svg
      width="84"
      height="72"
      viewBox="0 0 84 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none filter drop-shadow-[0_4px_8px_rgba(84,53,31,0.18)] transition-transform ${
        isHappyJump ? 'scale-110' : ''
      }`}
    >
      <defs>
        {/* Persian Beige Fur Gradient */}
        <linearGradient id={`persianFur-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E8D8" />
          <stop offset="45%" stopColor="#EADBCC" />
          <stop offset="100%" stopColor="#D5BEA4" />
        </linearGradient>

        {/* Fluffy Chest Highlight */}
        <linearGradient id={`creamHighlight-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F7EFE4" />
        </linearGradient>

        {/* Soft Shadow */}
        <radialGradient id={`pawShadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(84,53,31,0.22)" />
          <stop offset="100%" stopColor="rgba(84,53,31,0)" />
        </radialGradient>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="44" cy="67" rx="30" ry="4.5" fill={`url(#pawShadow-${id})`} />

      {/* Animated Plume-like Fluffy Persian Tail */}
      <motion.g
        animate={
          isGreeting
            ? { rotate: [0, 16, -10, 14, 0] }
            : isWalking
            ? { rotate: [-10, 12, -10] }
            : { rotate: [0, 8, -4, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 1.2 : isWalking ? 0.8 : 2.5,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '68px 50px' }}
      >
        {/* Fluffy tail base and plume */}
        <path
          d="M 64 50 C 72 48, 79 40, 77 30 C 75 22, 66 18, 62 23 C 58 28, 65 35, 68 37 C 70 39, 68 47, 62 52 Z"
          fill={`url(#persianFur-${id})`}
        />
        {/* Fluffy tail tuft details */}
        <path
          d="M 75 24 C 79 26, 80 32, 77 36 C 75 32, 73 28, 75 24 Z"
          fill="#FFF9F1"
          opacity="0.8"
        />
      </motion.g>

      {/* Back Legs (Deeper beige for depth) */}
      <motion.g
        animate={isWalking ? { y: [0, -3.5, 0] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 0.35, ease: 'easeInOut', delay: 0.18 }}
      >
        <path
          d="M 54 52 C 54 57, 53 62, 54 65 C 54 66, 58 66, 59 65 C 60 62, 61 57, 59 52 Z"
          fill="#C8AE94"
        />
        {/* Back paw toes */}
        <ellipse cx="56.5" cy="65" rx="3.5" ry="2" fill="#FBF6EF" />
      </motion.g>

      <motion.g
        animate={isWalking ? { y: [0, -3.5, 0] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 0.35, ease: 'easeInOut' }}
      >
        <path
          d="M 28 52 C 28 57, 27 62, 28 65 C 28 66, 32 66, 33 65 C 34 62, 35 57, 33 52 Z"
          fill="#C8AE94"
        />
        <ellipse cx="30.5" cy="65" rx="3.5" ry="2" fill="#FBF6EF" />
      </motion.g>

      {/* Chubby Round Persian Cat Body */}
      <path
        d="M 26 42 C 23 36, 28 32, 36 31 C 46 30, 56 32, 62 37 C 68 43, 67 55, 60 59 C 52 63, 33 63, 26 57 C 22 52, 22 46, 26 42 Z"
        fill={`url(#persianFur-${id})`}
      />

      {/* Fluffy Persian Back Ruffs */}
      <path
        d="M 62 38 C 65 42, 65 48, 62 53 C 60 50, 60 42, 62 38 Z"
        fill="#DFCAAe"
      />

      {/* Front Left Paw */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -6, 0], rotate: [0, -12, 0] }
            : isWalking
            ? { y: [0, -4, 0] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 0.6 : 0.35,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '34px 52px' }}
      >
        <path
          d="M 33 48 C 33 54, 32 60, 34 65 C 34 66.5, 39 66.5, 40 65 C 41 61, 41 54, 39 48 Z"
          fill={`url(#persianFur-${id})`}
        />
        {/* Soft white paw tip */}
        <ellipse cx="36.5" cy="65" rx="4" ry="2.2" fill={`url(#creamHighlight-${id})`} />
        {/* Paw toe indentations */}
        <line x1="35" y1="64" x2="35" y2="66.5" stroke="#D2BFA6" strokeWidth="0.6" />
        <line x1="38" y1="64" x2="38" y2="66.5" stroke="#D2BFA6" strokeWidth="0.6" />
      </motion.g>

      {/* Front Right Paw */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -6, 0], rotate: [0, 12, 0] }
            : isWalking
            ? { y: [-4, 0, -4] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 0.6 : 0.35,
          ease: 'easeInOut',
          delay: isGreeting ? 0.15 : 0.18,
        }}
        style={{ transformOrigin: '48px 52px' }}
      >
        <path
          d="M 46 48 C 46 54, 45 60, 47 65 C 47 66.5, 52 66.5, 53 65 C 54 61, 54 54, 52 48 Z"
          fill={`url(#persianFur-${id})`}
        />
        <ellipse cx="49.5" cy="65" rx="4" ry="2.2" fill={`url(#creamHighlight-${id})`} />
        <line x1="48" y1="64" x2="48" y2="66.5" stroke="#D2BFA6" strokeWidth="0.6" />
        <line x1="51" y1="64" x2="51" y2="66.5" stroke="#D2BFA6" strokeWidth="0.6" />
      </motion.g>

      {/* Fluffy White Chest Apron / Bib */}
      <path
        d="M 28 32 C 24 38, 25 46, 33 49 C 41 51, 47 48, 49 41 C 49 35, 45 31, 38 31 C 32 31, 29 30, 28 32 Z"
        fill={`url(#creamHighlight-${id})`}
      />

      {/* Persian Head Group */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -2, 0], rotate: [-2, 3, -2] }
            : isWalking
            ? { y: [-1, 1, -1] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 0.8 : 0.35,
          ease: 'easeInOut',
        }}
      >
        {/* Left Ear */}
        <path
          d="M 16 18 C 14 12, 17 6, 21 7 C 25 8, 26 14, 25 18 Z"
          fill="#D5BEA4"
        />
        {/* Left Inner Ear (Sweet Pinkish-Caramel) */}
        <path
          d="M 18 16 C 17 12, 18 8, 20 8.5 C 22 9, 23 13, 22 16 Z"
          fill="#EDB4A6"
        />
        {/* Left Ear Fluff Tuft */}
        <path
          d="M 19 14 C 21 15, 23 15, 24 13 C 23 16, 20 17, 19 14 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />

        {/* Right Ear */}
        <path
          d="M 37 18 C 36 14, 37 8, 41 7 C 45 6, 48 12, 46 18 Z"
          fill="#D5BEA4"
        />
        {/* Right Inner Ear */}
        <path
          d="M 40 16 C 39 13, 40 9, 42 8.5 C 44 8, 45 12, 44 16 Z"
          fill="#EDB4A6"
        />
        {/* Right Ear Fluff Tuft */}
        <path
          d="M 39 14 C 40 16, 42 16, 43 13 C 41 15, 39 15, 39 14 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />

        {/* Signature Round Persian Head with Extra Chubby Fluffy Cheeks */}
        <path
          d="M 15 26 C 10 28, 9 36, 14 40 C 18 43, 23 44, 31 44 C 39 44, 44 43, 48 40 C 53 36, 52 28, 47 26 C 45 20, 39 16, 31 16 C 23 16, 17 20, 15 26 Z"
          fill={`url(#persianFur-${id})`}
        />

        {/* Fluffy Cheek Tuft Outlines (Persian fluff) */}
        <path
          d="M 11 31 C 8 33, 9 37, 12 38 C 10 39, 11 41, 14 41 C 17 41, 16 38, 14 36 C 12 36, 11 34, 11 31 Z"
          fill="#F5E8D8"
        />
        <path
          d="M 51 31 C 54 33, 53 37, 50 38 C 52 39, 51 41, 48 41 C 45 41, 46 38, 48 36 C 50 36, 51 34, 51 31 Z"
          fill="#F5E8D8"
        />

        {/* Muzzle / Nose Bridge (Snub-nosed Persian feature) */}
        <ellipse cx="31" cy="32" rx="9" ry="6.5" fill={`url(#creamHighlight-${id})`} />

        {/* Left Big Shiny Eye */}
        <g>
          {/* Eye socket / shadow */}
          <ellipse cx="23.5" cy="27" rx="4.5" ry="5" fill="#54351F" />
          {/* Warm caramel iris */}
          <ellipse cx="23.5" cy="27" rx="3.6" ry="4.2" fill="#75451F" />
          {/* Pupil */}
          <ellipse cx="23.8" cy="27" rx="2.5" ry="3.5" fill="#2E180B" />
          {/* Big Sparkle Highlight */}
          <circle cx="22" cy="25.2" r="1.4" fill="#FFFFFF" />
          {/* Small Sparkle Highlight */}
          <circle cx="25" cy="28.5" r="0.75" fill="#FFFFFF" />
        </g>

        {/* Right Big Shiny Eye */}
        <g>
          <ellipse cx="38.5" cy="27" rx="4.5" ry="5" fill="#54351F" />
          <ellipse cx="38.5" cy="27" rx="3.6" ry="4.2" fill="#75451F" />
          <ellipse cx="38.2" cy="27" rx="2.5" ry="3.5" fill="#2E180B" />
          <circle cx="37" cy="25.2" r="1.4" fill="#FFFFFF" />
          <circle cx="40" cy="28.5" r="0.75" fill="#FFFFFF" />
        </g>

        {/* Cute Persian Button Snub Nose */}
        <path
          d="M 29.5 30.5 C 29.5 29.5, 30.2 29, 31 29 C 31.8 29, 32.5 29.5, 32.5 30.5 C 32.5 31.5, 31.8 32, 31 32 C 30.2 32, 29.5 31.5, 29.5 30.5 Z"
          fill="#D98A78"
        />

        {/* Happy Smiling Cat Mouth (3 shape) */}
        <path
          d="M 28 33.5 Q 29.5 35.5 31 33.5 Q 32.5 35.5 34 33.5"
          fill="none"
          stroke="#683F20"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Rosy Soft Cheeks */}
        <ellipse cx="18" cy="33" rx="3.2" ry="2" fill="#F4B7A8" opacity="0.55" />
        <ellipse cx="44" cy="33" rx="3.2" ry="2" fill="#F4B7A8" opacity="0.55" />

        {/* Delicate Whiskers */}
        <path
          d="M 18 32 L 6 30 M 18 34.5 L 4 35 M 18 37 L 7 39"
          stroke="#B59E87"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 44 32 L 56 30 M 44 34.5 L 58 35 M 44 37 L 55 39"
          stroke="#B59E87"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Chic Cat Collar with Shiny Jingle Bell */}
        <path
          d="M 23 43 C 27 45, 35 45, 39 43"
          stroke={collarColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Golden/Caramel Bell */}
        <circle cx="31" cy="45" r="2.8" fill={bellColor} stroke="#54351F" strokeWidth="0.5" />
        <circle cx="30.5" cy="44.5" r="0.8" fill="#FFF9F1" />
      </motion.g>
    </svg>
  );
};

export const PersianCatsPlayground: React.FC = () => {
  const [playState, setPlayState] = useState<CatPlayState>('running_to_center');
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pawClicks, setPawClicks] = useState(0);
  const [manualJumpCat, setManualJumpCat] = useState<'milo' | 'bella' | null>(null);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Play audio meow/purr using Web Audio API synthesis (no external mp3 file required!)
  const playCatChime = useCallback((type: 'purr' | 'meow' | 'chime') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'meow') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(460, now + 0.35);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } else {
        // Melodic playful chime
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const now = ctx.currentTime + idx * 0.1;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.09, now + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.5);
        });
      }
    } catch {
      // Audio autoplay gracefully suppressed if user has not interacted
    }
  }, [soundEnabled]);

  // State Machine Loop to choreograph the Persian cats' movements
  useEffect(() => {
    if (isPaused) return;

    let timer: ReturnType<typeof setTimeout>;

    switch (playState) {
      case 'peeking':
        timer = setTimeout(() => {
          setPlayState('running_to_center');
        }, 1500);
        break;

      case 'running_to_center':
        // Run towards center for 3.6 seconds
        timer = setTimeout(() => {
          setPlayState('meeting_center');
          playCatChime('meow');
        }, 3600);
        break;

      case 'meeting_center':
        // Meet in center, play & simultaneously say "hello kajuuu" for 4.2 seconds
        timer = setTimeout(() => {
          setPlayState('chasing_across');
        }, 4200);
        break;

      case 'chasing_across':
        // Chase each other across the runway for 3.8 seconds
        timer = setTimeout(() => {
          setPlayState('turning_around');
        }, 3800);
        break;

      case 'turning_around':
        // Pause briefly at the corners and turn around
        timer = setTimeout(() => {
          setPlayState('returning_center');
        }, 1200);
        break;

      case 'returning_center':
        // Return to center from opposite sides
        timer = setTimeout(() => {
          setPlayState('meeting_again');
          playCatChime('chime');
        }, 3600);
        break;

      case 'meeting_again':
        // Meet in center again & say "hello kajuuu"
        timer = setTimeout(() => {
          setPlayState('returning_home');
        }, 4000);
        break;

      case 'returning_home':
        // Return to original starting corners
        timer = setTimeout(() => {
          setPlayState('running_to_center');
        }, 3800);
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [playState, isPaused, playCatChime]);

  // Floating Heart Particle Generator when cats are greeting
  useEffect(() => {
    if (playState === 'meeting_center' || playState === 'meeting_again') {
      const interval = setInterval(() => {
        setHearts((prev) => [
          ...prev.slice(-6),
          {
            id: Date.now() + Math.random(),
            x: 50 + (Math.random() * 12 - 6),
            y: 40 + Math.random() * 10,
          },
        ]);
      }, 700);

      return () => clearInterval(interval);
    }
  }, [playState]);

  // Clean old hearts
  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  // Determine positions & orientations based on current state
  // Left Cat: Milo (comes out from left corner)
  // Right Cat: Bella (comes out from right corner)
  let miloTargetX = '3%';
  let miloFacing: 'left' | 'right' = 'right';
  let bellaTargetX = 'calc(100% - 94px)';
  let bellaFacing: 'left' | 'right' = 'left';
  let isWalking = true;
  let showSpeechBubbles = false;

  switch (playState) {
    case 'peeking':
      miloTargetX = '2%';
      miloFacing = 'right';
      bellaTargetX = 'calc(100% - 90px)';
      bellaFacing = 'left';
      isWalking = false;
      showSpeechBubbles = false;
      break;

    case 'running_to_center':
      miloTargetX = 'calc(50% - 78px)';
      miloFacing = 'right';
      bellaTargetX = 'calc(50% + 2px)';
      bellaFacing = 'left';
      isWalking = true;
      showSpeechBubbles = false;
      break;

    case 'meeting_center':
      miloTargetX = 'calc(50% - 72px)';
      miloFacing = 'right';
      bellaTargetX = 'calc(50% + 4px)';
      bellaFacing = 'left';
      isWalking = false;
      showSpeechBubbles = true; // Both say "hello kajuuu"
      break;

    case 'chasing_across':
      // Milo runs across towards right, Bella runs towards left
      miloTargetX = 'calc(100% - 96px)';
      miloFacing = 'right';
      bellaTargetX = '4%';
      bellaFacing = 'left';
      isWalking = true;
      showSpeechBubbles = false;
      break;

    case 'turning_around':
      miloTargetX = 'calc(100% - 96px)';
      miloFacing = 'left'; // Turns to look back
      bellaTargetX = '4%';
      bellaFacing = 'right'; // Turns to look back
      isWalking = false;
      showSpeechBubbles = false;
      break;

    case 'returning_center':
      miloTargetX = 'calc(50% + 4px)';
      miloFacing = 'left';
      bellaTargetX = 'calc(50% - 72px)';
      bellaFacing = 'right';
      isWalking = true;
      showSpeechBubbles = false;
      break;

    case 'meeting_again':
      miloTargetX = 'calc(50% + 4px)';
      miloFacing = 'left';
      bellaTargetX = 'calc(50% - 72px)';
      bellaFacing = 'right';
      isWalking = false;
      showSpeechBubbles = true; // Both say "hello kajuuu" again
      break;

    case 'returning_home':
      miloTargetX = '3%';
      miloFacing = 'left';
      bellaTargetX = 'calc(100% - 94px)';
      bellaFacing = 'right';
      isWalking = true;
      showSpeechBubbles = false;
      break;
  }

  // Interactive Petting Click Handler
  const handlePetCat = (catName: 'milo' | 'bella') => {
    setPawClicks((c) => c + 1);
    setManualJumpCat(catName);
    playCatChime('meow');
    setTimeout(() => setManualJumpCat(null), 800);
  };

  const handleResetLoop = () => {
    setPlayState('running_to_center');
    playCatChime('chime');
  };

  return (
    <section
      aria-label="Playful Persian Kittens Animation"
      className="relative w-full bg-[#E8DAC5] border-t border-b border-[#D2BFA6] py-8 sm:py-10 overflow-hidden select-none transition-colors"
    >
      {/* Subtle Dappled Sunlight & Paw Trail Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#D2BFA6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Warm Ambient Radial Underglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[160px] bg-[#B9875B]/10 rounded-full blur-[70px] pointer-events-none" />

      {/* Runway Floor Line with Paw Prints */}
      <div className="absolute bottom-5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D2BFA6] to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10" ref={containerRef}>
        {/* Header Label & Interactive Controls */}
        <div className="flex items-center justify-between gap-3 mb-2">
          {/* Persian Kittens Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] shadow-xs text-xs font-mono text-[#75451F]">
            <span className="w-2 h-2 rounded-full bg-[#B9875B] animate-pulse" />
            <span className="font-semibold text-[#54351F]">Milo & Bella</span>
            <span className="text-[#806F60] hidden sm:inline">• Persian Beige Kittens</span>
          </div>

          {/* Play / Chime / Reset Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                !isPaused
                  ? 'bg-[#F2E7D8] border-[#D2BFA6] text-[#54351F]'
                  : 'bg-[#B9875B] border-[#75451F] text-white'
              }`}
              title={isPaused ? 'Resume cat play' : 'Pause cat play'}
              aria-label={isPaused ? 'Resume cat play' : 'Pause cat play'}
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
              <span className="hidden sm:inline text-[11px] font-mono">{isPaused ? 'Play' : 'Pause'}</span>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                soundEnabled
                  ? 'bg-[#F2E7D8] border-[#B9875B] text-[#75451F]'
                  : 'bg-[#EDE0CC] border-[#D2BFA6] text-[#806F60]'
              }`}
              title={soundEnabled ? 'Cat sounds enabled (click to mute)' : 'Cat sounds muted (click to enable)'}
              aria-label="Toggle cat sounds"
            >
              <Volume2 size={13} className={soundEnabled ? 'text-[#B9875B]' : 'opacity-50'} />
              <span className="hidden sm:inline text-[11px]">{soundEnabled ? 'Meow: On' : 'Muted'}</span>
            </button>

            <button
              onClick={handleResetLoop}
              className="p-1.5 rounded-lg bg-[#F2E7D8] border border-[#D2BFA6] hover:border-[#B9875B] text-[#54351F] hover:text-[#75451F] transition-all text-xs flex items-center gap-1 cursor-pointer"
              title="Replay meeting"
              aria-label="Replay kittens meeting"
            >
              <RotateCcw size={13} />
              <span className="hidden sm:inline text-[11px] font-mono">Replay</span>
            </button>
          </div>
        </div>

        {/* Cats Playground Stage (Height: 120px) */}
        <div className="relative w-full h-[120px] sm:h-[130px] overflow-hidden flex items-end pb-3">
          {/* Subtle Center Meeting Marker (Soft heart on the floor) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 pointer-events-none flex flex-col items-center opacity-40">
            <Heart size={14} className="text-[#B9875B] fill-[#B9875B]/30 animate-pulse" />
          </div>

          {/* Floating Hearts in the Center when meeting */}
          <AnimatePresence>
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 15, scale: 0.6 }}
                animate={{ opacity: 1, y: -45, scale: [0.8, 1.2, 1] }}
                exit={{ opacity: 0, y: -70, scale: 0.5 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                style={{ left: `${h.x}%`, bottom: `${h.y}px` }}
                className="absolute pointer-events-none z-30 flex items-center gap-1 text-[#B9875B]"
              >
                <Heart size={16} className="fill-[#B9875B] drop-shadow-xs" />
                <Sparkles size={10} className="text-[#75451F]" />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* LEFT PERSIAN CAT: MILO */}
          <motion.div
            animate={{
              left: miloTargetX,
              scaleX: miloFacing === 'left' ? -1 : 1,
            }}
            transition={{
              duration:
                playState === 'running_to_center' || playState === 'returning_center'
                  ? 3.4
                  : playState === 'chasing_across' || playState === 'returning_home'
                  ? 3.6
                  : 0.4,
              ease: 'easeInOut',
            }}
            onClick={() => handlePetCat('milo')}
            className="absolute bottom-3 z-20 cursor-pointer group"
            title="Click Milo to pet!"
          >
            {/* SPEECH BUBBLE: MILO ("hello kajuuu") */}
            <AnimatePresence>
              {(showSpeechBubbles || manualJumpCat === 'milo') && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                  // Invert scaleX so the text reads normally regardless of cat direction!
                  style={{ transform: miloFacing === 'left' ? 'scaleX(-1)' : 'none' }}
                  className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 bg-[#F2E7D8] border border-[#D2BFA6] px-3.5 py-1.5 rounded-2xl shadow-[0_6px_20px_rgba(84,53,31,0.16)] flex items-center gap-1.5"
                >
                  <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-[#54351F]">
                    hello kajuuu
                  </span>
                  <span className="text-[#B9875B] text-xs">🐾</span>
                  {/* Bubble pointer beak */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F2E7D8] border-b border-r border-[#D2BFA6] rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Cat SVG Illustration */}
            <PersianCatSvg
              id="milo"
              collarColor="#75451F"
              bellColor="#B9875B"
              isWalking={isWalking}
              isGreeting={showSpeechBubbles}
              isHappyJump={manualJumpCat === 'milo'}
            />
          </motion.div>

          {/* RIGHT PERSIAN CAT: BELLA */}
          <motion.div
            animate={{
              left: bellaTargetX,
              scaleX: bellaFacing === 'left' ? -1 : 1,
            }}
            transition={{
              duration:
                playState === 'running_to_center' || playState === 'returning_center'
                  ? 3.4
                  : playState === 'chasing_across' || playState === 'returning_home'
                  ? 3.6
                  : 0.4,
              ease: 'easeInOut',
            }}
            onClick={() => handlePetCat('bella')}
            className="absolute bottom-3 z-20 cursor-pointer group"
            title="Click Bella to pet!"
          >
            {/* SPEECH BUBBLE: BELLA ("hello kajuuu") */}
            <AnimatePresence>
              {(showSpeechBubbles || manualJumpCat === 'bella') && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                  style={{ transform: bellaFacing === 'left' ? 'scaleX(-1)' : 'none' }}
                  className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 bg-[#F2E7D8] border border-[#D2BFA6] px-3.5 py-1.5 rounded-2xl shadow-[0_6px_20px_rgba(84,53,31,0.16)] flex items-center gap-1.5"
                >
                  <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-[#54351F]">
                    hello kajuuu
                  </span>
                  <span className="text-[#B9875B] text-xs">❤️</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F2E7D8] border-b border-r border-[#D2BFA6] rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Cat SVG Illustration */}
            <PersianCatSvg
              id="bella"
              collarColor="#B9875B"
              bellColor="#75451F"
              isWalking={isWalking}
              isGreeting={showSpeechBubbles}
              isHappyJump={manualJumpCat === 'bella'}
            />
          </motion.div>
        </div>

        {/* Small prompt helper under runway */}
        <div className="flex items-center justify-center gap-2 mt-1 text-[11px] font-mono text-[#806F60]">
          <span>Tip: Click on either kitten to pet them!</span>
          {pawClicks > 0 && (
            <span className="text-[#75451F] font-semibold">
              ({pawClicks} {pawClicks === 1 ? 'pet' : 'pets'} ❤️)
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersianCatsPlayground;
