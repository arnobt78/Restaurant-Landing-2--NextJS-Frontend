/**
 * Framer Motion Animation Variants
 * 
 * This file exports reusable animation configurations for Framer Motion.
 * Variants are a powerful way to define animation states in Framer Motion.
 * 
 * fadeIn Function:
 * Creates a fade-in animation with directional movement.
 * 
 * @param direction - Animation direction: 'up', 'down', 'left', 'right', or 'center'
 * @param delay - Delay in seconds before animation starts
 * @returns Object with 'hidden' and 'show' animation states
 * 
 * Animation States:
 * - hidden: Initial state (invisible, offset position)
 * - show: Final state (visible, original position)
 * 
 * Technical Details:
 * - type: 'tween' - Uses tweening (smooth interpolation) instead of spring physics
 * - ease: Cubic bezier easing function for smooth acceleration/deceleration
 * - opacity: Fades from 0 (invisible) to 1 (visible)
 * - x/y: Horizontal/vertical offset for directional movement
 * 
 * Usage Example:
 * <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show">
 *   Content here
 * </motion.div>
 */
export const fadeIn = (direction: string, delay: any) => {
  return {
    /**
     * Hidden State (Initial)
     * 
     * Element starts invisible and offset from its final position.
     * Direction determines offset direction:
     * - 'up': Starts 80px below (y: 80)
     * - 'down': Starts 80px above (y: -80)
     * - 'left': Starts 80px to the right (x: 80)
     * - 'right': Starts 80px to the left (x: -80)
     * - 'center' or other: No offset (x: 0, y: 0)
     */
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween', // Smooth interpolation (not spring physics)
        duration: 1.5, // Animation duration in seconds
        delay: delay, // Delay before animation starts
        ease: [0.25, 0.6, 0.3, 0.8], // Cubic bezier easing curve
      },
    },
    /**
     * Show State (Final)
     * 
     * Element ends visible and in its natural position.
     * All offsets return to 0, opacity becomes 1.
     */
    show: {
      y: 0, // Return to natural vertical position
      x: 0, // Return to natural horizontal position
      opacity: 1, // Fully visible
      transition: {
        type: 'tween',
        duration: 1.4, // Slightly faster than hidden transition
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75], // Different easing for show state
      },
    },
  };
};
