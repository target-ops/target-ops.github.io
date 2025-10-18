import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';

type AnimationType = 'spin' | 'wink' | 'bounce' | 'shake' | 'flip' | 'pulse' | 'disappear' | 'slide-away';

export interface AnimatedLogoRef {
  playRandomAnimation: (excludeAnimation?: AnimationType | null) => AnimationType;
}

const AnimatedLogo = forwardRef<AnimatedLogoRef>((_, ref) => {
  const [animation, setAnimation] = useState<AnimationType | null>(null);
  const location = useLocation();

  const animations: AnimationType[] = ['spin', 'bounce', 'shake', 'flip', 'pulse', 'disappear', 'slide-away'];
  const [lastAnimation, setLastAnimation] = useState<AnimationType | null>(null);

  const playRandomAnimation = (excludeAnimation?: AnimationType | null): AnimationType => {
    // Filter out the animation to exclude
    const availableAnimations = excludeAnimation 
      ? animations.filter(a => a !== excludeAnimation)
      : animations;
    
    const randomAnimation = availableAnimations[Math.floor(Math.random() * availableAnimations.length)];
    setAnimation(randomAnimation);
    setLastAnimation(randomAnimation);

    // Reset animation after it completes (different durations)
    const duration = randomAnimation === 'slide-away' ? 2000 : randomAnimation === 'disappear' ? 800 : 600;
    setTimeout(() => {
      setAnimation(null);
    }, duration);

    return randomAnimation;
  };

  // Expose playRandomAnimation to parent
  useImperativeHandle(ref, () => ({
    playRandomAnimation
  }));

  // Play animation on route change
  useEffect(() => {
    playRandomAnimation();
  }, [location.pathname]);

  // Auto-trigger 2 different animations in sequence every 1 minute
  useEffect(() => {
    const interval = setInterval(() => {
      // Play first animation
      const firstAnim = playRandomAnimation();
      
      // Play second animation after first completes (must be different)
      setTimeout(() => {
        playRandomAnimation(firstAnim);
      }, 2200); // Wait for longest possible animation (slide-away) + buffer
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = () => {
    if (!animation) return '';
    
    switch (animation) {
      case 'spin':
        return 'animate-spin-once';
      case 'bounce':
        return 'animate-bounce-once';
      case 'shake':
        return 'animate-shake';
      case 'flip':
        return 'animate-flip';
      case 'pulse':
        return 'animate-pulse-once';
      case 'disappear':
        return 'animate-disappear';
      case 'slide-away':
        return 'animate-slide-away';
      default:
        return '';
    }
  };

  return (
    <div 
      className="relative w-12 h-12 flex items-center justify-center"
      onMouseEnter={() => playRandomAnimation()}
    >
      {/* Glow effect on animation */}
      <div className={`absolute inset-0 bg-gradient-to-br from-tech-cyan/30 to-tech-purple/30 rounded-lg blur-lg transition-opacity duration-300 ${animation ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Logo image */}
      <div className={`h-12 w-12 relative z-10 ${getAnimationClass()}`}>
        <img 
          src="/assets/targetOpsBlackNOBG.webp" 
          alt="Target-Ops" 
          className="h-12 w-12 object-contain antialiased"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>
    </div>
  );
});

AnimatedLogo.displayName = 'AnimatedLogo';

export default AnimatedLogo;

