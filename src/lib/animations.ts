import { Variants } from 'framer-motion';
import { ANIMATION_DELAYS, ANIMATION_DURATION, ANIMATION_STAGGER } from './constants';

// 기본 컨테이너 애니메이션
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_STAGGER.CHILDREN,
      delayChildren: ANIMATION_STAGGER.DELAY,
    },
  },
};

// 아래에서 위로 페이드인 애니메이션
export const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
};

// 왼쪽에서 오른쪽으로 슬라이드 애니메이션
export const slideInLeft: Variants = {
  hidden: { x: -30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
};

// 오른쪽에서 왼쪽으로 슬라이드 애니메이션
export const slideInRight: Variants = {
  hidden: { x: 30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
};

// 스케일 애니메이션
export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
};

// 개별 애니메이션 지연 설정 생성 함수
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createDelayedAnimation = (baseAnimation: any, delayMultiplier: number = 1) => ({
  ...baseAnimation,
  show: {
    ...baseAnimation.show,
    transition: {
      ...baseAnimation.show.transition,
      delay: ANIMATION_DELAYS.FIRST * delayMultiplier,
    },
  },
});

// HeroSection 전용 애니메이션 variants
export const heroAnimations = {
  badge: {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.NORMAL,
        delay: ANIMATION_DELAYS.FIRST,
      },
    },
  },
  title: {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.SLOW,
        delay: ANIMATION_DELAYS.SECOND,
      },
    },
  },
  subtitle: {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.SLOW,
        delay: ANIMATION_DELAYS.THIRD,
      },
    },
  },
  status: {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_DURATION.NORMAL,
        delay: ANIMATION_DELAYS.FOURTH,
      },
    },
  },
};

// 버튼 hover 애니메이션
export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATION.FAST,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: ANIMATION_DURATION.FAST,
    },
  },
};

// 카드 hover 애니메이션
export const cardHover = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: ANIMATION_DURATION.FAST,
    },
  },
}; 