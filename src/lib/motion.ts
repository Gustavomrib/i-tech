import type { Variants } from 'motion/react'

type CubicBezier = [number, number, number, number]

/**
 * Motion roles mirror the visual system: controls respond quickly, while
 * editorial reveals have more room to settle. MotionConfig handles the
 * reduced-motion fallback globally.
 */
export const motionDuration = {
  feedback: 0.14,
  fast: 0.22,
  normal: 0.48,
  reveal: 0.68,
  editorial: 0.9,
} as const

export const motionEase: Record<
  'enter' | 'exit' | 'hover' | 'reveal',
  CubicBezier
> = {
  enter: [0.22, 1, 0.36, 1],
  exit: [0.4, 0, 0.8, 0.2],
  hover: [0.2, 0.75, 0.25, 1],
  reveal: [0.16, 1, 0.3, 1],
}

export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.reveal,
    },
  },
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.reveal,
    },
  },
}

export function createStaggerVariants(
  staggerChildren = 0.07,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { delayChildren, staggerChildren },
    },
  }
}

export function createDirectionalReveal(
  distance: number,
  staggerChildren = 0,
): Variants {
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: motionDuration.reveal,
        ease: motionEase.reveal,
        staggerChildren,
      },
    },
  }
}
