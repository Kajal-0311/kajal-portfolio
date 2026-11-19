import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles, Volume2, VolumeX, RotateCcw, Play, Pause } from 'lucide-react';
import {
  getGlobalSound,
  setGlobalSound,
  subscribeToSound,
  playSynthesizedKittenSound,
} from '../utils/soundManager';

type KittenPhase =
  | 'fade_in'
  | 'walking_to_center'
  | 'greeting_in_center'
  | 'returning_to_corners'
  | 'paused_at_corners';

interface KittyAnimationProps {
  sectionName?: string;
  className?: string;
}

// Sequential letter typewriter reveal: h -> e -> l -> l -> o -> space -> k -> a -> j -> u -> u -> u -> space -> 💗
const TypewriterGreeting: React.FC<{ text: string }> = ({ text }) => {
  const [revealedLength, setRevealedLength] = useState(1);

  useEffect(() => {
    const stepTime = 65; // ~900ms total for 14 characters
    const interval = setInterval(() => {
      setRevealedLength((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-[#54351F] inline-flex items-center">
      {text.slice(0, revealedLength)}
      {revealedLength < text.length && (
        <span className="inline-block w-1.5 h-3.5 bg-[#B9875B] ml-0.5 animate-pulse rounded-xs" />
      )}
    </span>
  );
};

// Persian Kitten SVG: Adorable, small, fluffy Persian kitten with soft beige fur
interface PersianKittenSvgProps {
  id: string;
  isWalking: boolean;
  isGreeting: boolean;
  isHappyJump?: boolean;
  collarColor?: string;
  bellColor?: string;
}

const PersianKittenSvg: React.FC<PersianKittenSvgProps> = ({
  id,
  isWalking,
  isGreeting,
  isHappyJump = false,
  collarColor = '#75451F',
  bellColor = '#B9875B',
}) => {
  return (
    <svg
      width="68"
      height="58"
      viewBox="0 0 74 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none filter drop-shadow-[0_3px_6px_rgba(84,53,31,0.14)] transition-transform duration-300 ${
        isHappyJump ? '-translate-y-2.5 scale-105' : ''
      }`}
    >
      <defs>
        {/* Soft Persian Beige Fur Gradient */}
        <linearGradient id={`persianBeigeFur-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7ECE0" />
          <stop offset="50%" stopColor="#EADBCC" />
          <stop offset="100%" stopColor="#D5BEA4" />
        </linearGradient>

        {/* Soft Cream Highlight */}
        <linearGradient id={`creamBib-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F9F3EA" />
        </linearGradient>

        {/* Ground Shadow */}
        <radialGradient id={`shadowGrad-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(84,53,31,0.2)" />
          <stop offset="100%" stopColor="rgba(84,53,31,0)" />
        </radialGradient>
      </defs>

      {/* Gentle Ground Shadow */}
      <ellipse cx="38" cy="57" rx="26" ry="3.5" fill={`url(#shadowGrad-${id})`} />

      {/* Fluffy Persian Plume Tail with Soft Sway */}
      <motion.g
        animate={
          isGreeting
            ? { rotate: [0, 14, -8, 12, 0] }
            : isWalking
            ? { rotate: [-8, 10, -8] }
            : { rotate: [0, 6, -3, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 1.4 : isWalking ? 1.0 : 2.5,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '58px 42px' }}
      >
        <path
          d="M 54 42 C 61 40, 67 33, 65 24 C 63 17, 56 14, 52 18 C 49 22, 55 28, 57 30 C 59 32, 57 39, 52 44 Z"
          fill={`url(#persianBeigeFur-${id})`}
        />
        {/* Soft cream tail tip */}
        <path
          d="M 63 20 C 66 22, 67 27, 65 30 C 63 27, 61 23, 63 20 Z"
          fill="#FFF9F1"
          opacity="0.85"
        />
      </motion.g>

      {/* Back Paws */}
      <motion.g
        animate={isWalking ? { y: [0, -2.5, 0] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
      >
        <path
          d="M 46 44 C 46 48, 45 52, 46 55 C 46 56, 49 56, 50 55 C 51 52, 52 48, 50 44 Z"
          fill="#C8AE94"
        />
        <ellipse cx="48" cy="55" rx="3" ry="1.8" fill="#FDF8F2" />
      </motion.g>

      <motion.g
        animate={isWalking ? { y: [0, -2.5, 0] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut' }}
      >
        <path
          d="M 24 44 C 24 48, 23 52, 24 55 C 24 56, 27 56, 28 55 C 29 52, 30 48, 28 44 Z"
          fill="#C8AE94"
        />
        <ellipse cx="26" cy="55" rx="3" ry="1.8" fill="#FDF8F2" />
      </motion.g>

      {/* Round Chubby Body */}
      <path
        d="M 22 35 C 19 30, 24 26, 31 25 C 39 24, 48 26, 53 30 C 58 35, 57 46, 51 49 C 44 53, 28 53, 22 47 C 19 43, 19 38, 22 35 Z"
        fill={`url(#persianBeigeFur-${id})`}
      />

      {/* Front Left Paw */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -5, 0], rotate: [0, -10, 0] }
            : isWalking
            ? { y: [0, -3, 0] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 0.7 : 0.5,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '28px 44px' }}
      >
        <path
          d="M 28 40 C 28 45, 27 51, 29 55 C 29 56.5, 33 56.5, 34 55 C 35 51, 35 45, 33 40 Z"
          fill={`url(#persianBeigeFur-${id})`}
        />
        <ellipse cx="31" cy="55" rx="3.2" ry="1.8" fill={`url(#creamBib-${id})`} />
      </motion.g>

      {/* Front Right Paw */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -5, 0], rotate: [0, 10, 0] }
            : isWalking
            ? { y: [-3, 0, -3] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 0.7 : 0.5,
          ease: 'easeInOut',
          delay: isGreeting ? 0.2 : 0.25,
        }}
        style={{ transformOrigin: '40px 44px' }}
      >
        <path
          d="M 39 40 C 39 45, 38 51, 40 55 C 40 56.5, 44 56.5, 45 55 C 46 51, 46 45, 44 40 Z"
          fill={`url(#persianBeigeFur-${id})`}
        />
        <ellipse cx="42" cy="55" rx="3.2" ry="1.8" fill={`url(#creamBib-${id})`} />
      </motion.g>

      {/* Fluffy Cream Chest Bib */}
      <path
        d="M 24 27 C 20 32, 21 39, 28 42 C 35 44, 40 41, 42 35 C 42 30, 38 26, 32 26 C 27 26, 25 25, 24 27 Z"
        fill={`url(#creamBib-${id})`}
      />

      {/* Head Group with Soft Head Tilt & Blinking */}
      <motion.g
        animate={
          isGreeting
            ? { y: [0, -1.8, 0], rotate: [-1.5, 2, -1.5] }
            : isWalking
            ? { y: [-0.8, 0.8, -0.8] }
            : { y: 0 }
        }
        transition={{
          repeat: Infinity,
          duration: isGreeting ? 1.0 : 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* Left Fluffy Ear */}
        <path d="M 14 15 C 12 10, 15 5, 18 6 C 22 7, 23 12, 22 15 Z" fill="#D5BEA4" />
        <path d="M 15 13 C 14 10, 15 7, 17 7.5 C 19 8, 20 11, 19 13 Z" fill="#EDB4A6" />
        <path d="M 16 11 C 18 12, 19 12, 20 10 C 19 13, 17 14, 16 11 Z" fill="#FFFFFF" opacity="0.9" />

        {/* Right Fluffy Ear */}
        <path d="M 32 15 C 31 11, 32 6, 35 5 C 38 4, 41 10, 39 15 Z" fill="#D5BEA4" />
        <path d="M 34 13 C 33 11, 34 7, 36 6.5 C 38 6, 39 10, 38 13 Z" fill="#EDB4A6" />
        <path d="M 33 11 C 34 13, 36 13, 37 10 C 35 12, 33 12, 33 11 Z" fill="#FFFFFF" opacity="0.9" />

        {/* Round Persian Head with Extra Chubby Cheeks */}
        <path
          d="M 13 22 C 9 24, 8 30, 12 34 C 15 36, 19 37, 26 37 C 33 37, 37 36, 40 34 C 44 30, 43 24, 39 22 C 37 17, 32 14, 26 14 C 19 14, 14 17, 13 22 Z"
          fill={`url(#persianBeigeFur-${id})`}
        />

        {/* Fluffy Cheek Tufts */}
        <path d="M 10 26 C 7 28, 8 31, 10 32 C 8 33, 9 35, 11 35 C 14 35, 13 32, 12 30 Z" fill="#F7ECE0" />
        <path d="M 43 26 C 46 28, 45 31, 43 32 C 45 33, 44 35, 42 35 C 39 35, 40 32, 41 30 Z" fill="#F7ECE0" />

        {/* Persian Snub Muzzle */}
        <ellipse cx="26" cy="27" rx="7.5" ry="5.5" fill={`url(#creamBib-${id})`} />

        {/* Big Expressive Mocha Eyes */}
        <g>
          <ellipse cx="20" cy="23" rx="3.8" ry="4.2" fill="#54351F" />
          <ellipse cx="20" cy="23" rx="3" ry="3.5" fill="#75451F" />
          <ellipse cx="20.2" cy="23" rx="2" ry="2.8" fill="#2E180B" />
          {/* Gleam Highlights */}
          <circle cx="18.8" cy="21.5" r="1.1" fill="#FFFFFF" />
          <circle cx="21.2" cy="24.2" r="0.6" fill="#FFFFFF" />
        </g>

        <g>
          <ellipse cx="32" cy="23" rx="3.8" ry="4.2" fill="#54351F" />
          <ellipse cx="32" cy="23" rx="3" ry="3.5" fill="#75451F" />
          <ellipse cx="31.8" cy="23" rx="2" ry="2.8" fill="#2E180B" />
          <circle cx="30.8" cy="21.5" r="1.1" fill="#FFFFFF" />
          <circle cx="33.2" cy="24.2" r="0.6" fill="#FFFFFF" />
        </g>

        {/* Tiny Button Nose */}
        <path
          d="M 25 25.8 C 25 25, 25.5 24.6, 26 24.6 C 26.5 24.6, 27 25, 27 25.8 C 27 26.5, 26.5 27, 26 27 C 25.5 27, 25 26.5, 25 25.8 Z"
          fill="#D98A78"
        />

        {/* Sweet Smiling Mouth (3 shape) */}
        <path
          d="M 23.8 28.2 Q 25 29.8 26 28.2 Q 27 29.8 28.2 28.2"
          fill="none"
          stroke="#683F20"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Soft Blush */}
        <ellipse cx="15.5" cy="28" rx="2.5" ry="1.6" fill="#F4B7A8" opacity="0.6" />
        <ellipse cx="36.5" cy="28" rx="2.5" ry="1.6" fill="#F4B7A8" opacity="0.6" />

        {/* Delicate Whiskers */}
        <path d="M 15 27 L 5 25.5 M 15 29 L 3 29.5 M 15 31 L 6 32.5" stroke="#B59E87" strokeWidth="0.7" strokeLinecap="round" opacity="0.8" />
        <path d="M 37 27 L 47 25.5 M 37 29 L 49 29.5 M 37 31 L 46 32.5" stroke="#B59E87" strokeWidth="0.7" strokeLinecap="round" opacity="0.8" />

        {/* Cute Collar with Jingle Bell */}
        <path d="M 19 36 C 23 37.5, 29 37.5, 33 36" stroke={collarColor} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="26" cy="37.5" r="2.2" fill={bellColor} stroke="#54351F" strokeWidth="0.4" />
        <circle cx="25.5" cy="37" r="0.6" fill="#FFF9F1" />
      </motion.g>
    </svg>
  );
};

export const KittyAnimation: React.FC<KittyAnimationProps> = ({
  sectionName = 'Section',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const [phase, setPhase] = useState<KittenPhase>('fade_in');
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(getGlobalSound());
  const [petCount, setPetCount] = useState(0);
  const [jumpKitten, setJumpKitten] = useState<'left' | 'right' | null>(null);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const TARGET_GREETING = 'hello kajuuu 💗';

  // Sync global audio state
  useEffect(() => {
    return subscribeToSound((enabled) => setSoundEnabled(enabled));
  }, []);

  const toggleSound = () => {
    setGlobalSound(!soundEnabled);
  };

  // Play gentle cat chirp/purr using soundManager
  const playChime = useCallback((type: 'chirp' | 'purr') => {
    playSynthesizedKittenSound(type);
  }, []);

  // Main State Machine for the slow, gentle synchronized kitten cycle
  useEffect(() => {
    if (!isInView || isPaused) return;

    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case 'fade_in':
        // Soft fade in for 0.8s, then begin walking towards center
        timer = setTimeout(() => {
          setPhase('walking_to_center');
        }, 800);
        break;

      case 'walking_to_center':
        // Slow, gentle walk towards the center: 4.8 seconds
        timer = setTimeout(() => {
          setPhase('greeting_in_center');
          playChime('chirp');
        }, 4800);
        break;

      case 'greeting_in_center':
        // Meet in center, display "hello kajuuu 💗" for 2.8 seconds
        timer = setTimeout(() => {
          setPhase('returning_to_corners');
        }, 2800);
        break;

      case 'returning_to_corners':
        // Slow, synchronized reverse walk back to their corners: 4.8 seconds
        timer = setTimeout(() => {
          setPhase('paused_at_corners');
        }, 4800);
        break;

      case 'paused_at_corners':
        // Gentle pause at corners for 1.4 seconds before repeating cycle
        timer = setTimeout(() => {
          setPhase('walking_to_center');
        }, 1400);
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [phase, isInView, isPaused, playChime]);

  // Floating Hearts while in center greeting
  useEffect(() => {
    if (phase === 'greeting_in_center' && isInView) {
      const interval = setInterval(() => {
        setHearts((prev) => [
          ...prev.slice(-4),
          {
            id: Date.now() + Math.random(),
            x: 50 + (Math.random() * 8 - 4),
            y: 42 + Math.random() * 8,
          },
        ]);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [phase, isInView]);

  useEffect(() => {
    if (hearts.length > 0) {
      const t = setTimeout(() => setHearts((prev) => prev.slice(1)), 1800);
      return () => clearTimeout(t);
    }
  }, [hearts]);

  // Positional calculations (Desktop & Mobile safe percentages)
  // Left Kitten starts at left corner (2%), Right Kitten starts at right corner (calc(100% - 70px))
  let leftKittenX = '2%';
  let leftKittenFacing: 'left' | 'right' = 'right';
  let rightKittenX = 'calc(100% - 70px)';
  let rightKittenFacing: 'left' | 'right' = 'left';
  let isWalking = false;
  let showGreeting = false;

  switch (phase) {
    case 'fade_in':
      leftKittenX = '2%';
      leftKittenFacing = 'right';
      rightKittenX = 'calc(100% - 70px)';
      rightKittenFacing = 'left';
      isWalking = false;
      showGreeting = false;
      break;

    case 'walking_to_center':
      // Move simultaneously to center
      leftKittenX = 'calc(50% - 58px)';
      leftKittenFacing = 'right';
      rightKittenX = 'calc(50% + 4px)';
      rightKittenFacing = 'left';
      isWalking = true;
      showGreeting = false;
      break;

    case 'greeting_in_center':
      leftKittenX = 'calc(50% - 58px)';
      leftKittenFacing = 'right';
      rightKittenX = 'calc(50% + 4px)';
      rightKittenFacing = 'left';
      isWalking = false;
      showGreeting = true; // Displays "hello kajuuu 💗"
      break;

    case 'returning_to_corners':
      // Smooth synchronized walk back to respective origin corners
      leftKittenX = '2%';
      leftKittenFacing = 'left'; // Faces outward towards corner
      rightKittenX = 'calc(100% - 70px)';
      rightKittenFacing = 'right'; // Faces outward towards corner
      isWalking = true;
      showGreeting = false;
      break;

    case 'paused_at_corners':
      leftKittenX = '2%';
      leftKittenFacing = 'right'; // Turns to face inward ready for next cycle
      rightKittenX = 'calc(100% - 70px)';
      rightKittenFacing = 'left'; // Turns to face inward ready for next cycle
      isWalking = false;
      showGreeting = false;
      break;
  }

  const handlePetKitten = (side: 'left' | 'right') => {
    setPetCount((c) => c + 1);
    setJumpKitten(side);
    playChime('chirp');
    setTimeout(() => setJumpKitten(null), 600);
  };

  const handleReplay = () => {
    setIsPaused(false);
    setPhase('fade_in');
    playChime('purr');
  };

  return (
    <div
      ref={containerRef}
      aria-label={`Persian Kittens Animation for ${sectionName}`}
      className={`relative w-full overflow-hidden select-none py-5 sm:py-8 mt-8 sm:mt-12 border-t border-[#D2BFA6]/40 ${className}`}
    >
      {/* Subtle Dappled Sunlight dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#D2BFA6_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Runway Guideline */}
      <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#D2BFA6]/60 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-3 sm:px-8 relative z-10">
        {/* Subtle Minimal Signature Header with Controls */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-2">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2E7D8]/80 border border-[#D2BFA6]/60 text-[10px] sm:text-[11px] font-mono text-[#75451F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9875B] animate-pulse" />
            <span className="font-semibold text-[#54351F]">Milo & Bella</span>
            <span className="text-[#806F60] hidden sm:inline">• Persian Kittens</span>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-1.5 sm:px-2 rounded-md border text-[10px] sm:text-[11px] font-mono transition-all flex items-center justify-center gap-1 cursor-pointer min-w-[28px] min-h-[28px] ${
                !isPaused
                  ? 'bg-[#F2E7D8]/80 border-[#D2BFA6] text-[#54351F] hover:bg-[#F2E7D8]'
                  : 'bg-[#B9875B] border-[#75451F] text-white'
              }`}
              title={isPaused ? 'Resume kittens' : 'Pause kittens'}
              aria-label={isPaused ? 'Resume kittens' : 'Pause kittens'}
            >
              {isPaused ? <Play size={11} /> : <Pause size={11} />}
              <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            <button
              onClick={toggleSound}
              className={`p-1.5 sm:px-2 rounded-md border text-[10px] sm:text-[11px] font-mono transition-all flex items-center justify-center gap-1 cursor-pointer min-w-[28px] min-h-[28px] ${
                soundEnabled
                  ? 'bg-[#F2E7D8]/80 border-[#B9875B] text-[#75451F]'
                  : 'bg-[#EDE0CC]/80 border-[#D2BFA6] text-[#806F60]'
              }`}
              title={soundEnabled ? 'Cat sounds enabled (click to mute)' : 'Cat sounds muted (click to enable)'}
              aria-label="Toggle cat sounds"
            >
              {soundEnabled ? (
                <Volume2 size={11} className="text-[#B9875B]" />
              ) : (
                <VolumeX size={11} className="opacity-50" />
              )}
              <span className="hidden sm:inline">{soundEnabled ? 'Meow: On' : 'Muted'}</span>
            </button>

            <button
              onClick={handleReplay}
              className="p-1.5 sm:px-2 rounded-md bg-[#F2E7D8]/80 border border-[#D2BFA6] hover:border-[#B9875B] text-[#54351F] hover:text-[#75451F] transition-all text-[10px] sm:text-[11px] font-mono flex items-center justify-center gap-1 cursor-pointer min-w-[28px] min-h-[28px]"
              title="Replay from corners"
              aria-label="Replay kittens animation"
            >
              <RotateCcw size={11} />
              <span className="hidden sm:inline">Replay</span>
            </button>
          </div>
        </div>

        {/* Kittens Playground Stage */}
        <div className="relative w-full h-[88px] sm:h-[95px] overflow-hidden flex items-end pb-1">
          {/* Subtle center marker heart */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 pointer-events-none opacity-30">
            <Heart size={12} className="text-[#B9875B] fill-[#B9875B]/30" />
          </div>

          {/* Floating Hearts in the Center when greeting */}
          <AnimatePresence>
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: 1, y: -38, scale: [0.8, 1.2, 1] }}
                exit={{ opacity: 0, y: -55, scale: 0.5 }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                style={{ left: `${h.x}%`, bottom: `${h.y}px` }}
                className="absolute pointer-events-none z-30 flex items-center gap-1 text-[#B9875B]"
              >
                <Heart size={14} className="fill-[#B9875B]" />
                <Sparkles size={9} className="text-[#75451F]" />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* SHARED CENTER SPEECH BUBBLE: "hello kajuuu 💗" */}
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.85 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 bg-[#F2E7D8] border border-[#D2BFA6] px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(84,53,31,0.14)] flex items-center gap-1.5"
              >
                <TypewriterGreeting text={TARGET_GREETING} />
                {/* Pointer beak pointing towards Milo (left kitten) */}
                <div className="absolute -bottom-1.5 left-[30%] w-2.5 h-2.5 bg-[#F2E7D8] border-b border-r border-[#D2BFA6] rotate-45" />
                {/* Pointer beak pointing towards Bella (right kitten) */}
                <div className="absolute -bottom-1.5 right-[30%] w-2.5 h-2.5 bg-[#F2E7D8] border-b border-r border-[#D2BFA6] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* LEFT KITTEN: MILO */}
          <motion.div
            animate={{
              left: shouldReduceMotion ? 'calc(50% - 58px)' : leftKittenX,
              scaleX: leftKittenFacing === 'left' ? -1 : 1,
              opacity: phase === 'fade_in' ? [0, 1] : 1,
            }}
            transition={{
              duration:
                shouldReduceMotion
                  ? 0.3
                  : phase === 'walking_to_center' || phase === 'returning_to_corners'
                  ? 4.8
                  : phase === 'fade_in'
                  ? 0.8
                  : 0.4,
              ease: [0.42, 0, 0.58, 1], // Gentle, smooth natural easing
            }}
            onClick={() => handlePetKitten('left')}
            className="absolute bottom-1 z-20 cursor-pointer"
            title="Click Milo to pet!"
          >
            <PersianKittenSvg
              id={`left-${sectionName}`}
              collarColor="#75451F"
              bellColor="#B9875B"
              isWalking={isWalking && !shouldReduceMotion}
              isGreeting={showGreeting}
              isHappyJump={jumpKitten === 'left'}
            />
          </motion.div>

          {/* RIGHT KITTEN: BELLA */}
          <motion.div
            animate={{
              left: shouldReduceMotion ? 'calc(50% + 4px)' : rightKittenX,
              scaleX: rightKittenFacing === 'left' ? -1 : 1,
              opacity: phase === 'fade_in' ? [0, 1] : 1,
            }}
            transition={{
              duration:
                shouldReduceMotion
                  ? 0.3
                  : phase === 'walking_to_center' || phase === 'returning_to_corners'
                  ? 4.8
                  : phase === 'fade_in'
                  ? 0.8
                  : 0.4,
              ease: [0.42, 0, 0.58, 1],
            }}
            onClick={() => handlePetKitten('right')}
            className="absolute bottom-1 z-20 cursor-pointer"
            title="Click Bella to pet!"
          >
            <PersianKittenSvg
              id={`right-${sectionName}`}
              collarColor="#B9875B"
              bellColor="#75451F"
              isWalking={isWalking && !shouldReduceMotion}
              isGreeting={showGreeting}
              isHappyJump={jumpKitten === 'right'}
            />
          </motion.div>
        </div>

        {/* Small tip note */}
        {petCount > 0 && (
          <div className="text-center text-[10px] font-mono text-[#75451F] font-semibold mt-1">
            ❤️ {petCount} {petCount === 1 ? 'pet' : 'pets'} given to Milo & Bella!
          </div>
        )}
      </div>
    </div>
  );
};

export default KittyAnimation;
