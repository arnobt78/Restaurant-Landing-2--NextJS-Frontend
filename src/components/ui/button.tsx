/**
 * Button Component
 * 
 * A reusable, accessible button component built with:
 * - Radix UI Slot: For polymorphic component behavior
 * - class-variance-authority (cva): For variant-based styling
 * - TypeScript: For type safety
 * 
 * Features:
 * - Multiple variants (default, orange, input)
 * - Multiple sizes (default, sm, lg, icon)
 * - Polymorphic (can render as different elements via asChild)
 * - Accessible focus states
 * - Disabled state handling
 * 
 * Variant System:
 * Uses CVA (Class Variance Authority) to create type-safe variant combinations.
 * This pattern is common in modern React component libraries (shadcn/ui).
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * buttonVariants - CVA Configuration
 * 
 * Defines all possible button styles using class-variance-authority.
 * 
 * Base Classes: Applied to all button variants
 * - inline-flex: Flexbox layout
 * - transition-colors: Smooth color transitions
 * - focus-visible: Accessible focus ring
 * - disabled: Disabled state styling
 * 
 * Variants:
 * - variant: Color/style variants (default, orange, input)
 * - size: Size variants (default, sm, lg, icon)
 * 
 * defaultVariants: Applied when no variant/size is specified
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
       default: 'text-white bg-green hover:bg-green-hover',
       orange: 'text-white bg-orange hover:bg-orange-hover',
       input: 'bg-white/5 border border-white/10 text-white',
      },
      size: {
        default: "w-{170px] h-[62px] px-6",
        sm: "w-[150px] h-[58px] px-6",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * ButtonProps Interface
 * 
 * Extends standard button HTML attributes and adds:
 * - VariantProps: Type-safe variant and size props from CVA
 * - asChild: Polymorphic behavior (render as different element)
 * 
 * This provides full TypeScript support for all button props.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * Button Component Implementation
 * 
 * Uses React.forwardRef to allow parent components to access
 * the underlying DOM element (useful for focus management, etc.)
 * 
 * Polymorphic Behavior:
 * - asChild={false}: Renders as <button> element
 * - asChild={true}: Renders as Slot, allowing it to merge with child element
 *   This is useful when you want the button styles on a <Link> or other element
 * 
 * @param className - Additional classes to merge
 * @param variant - Button style variant
 * @param size - Button size
 * @param asChild - Whether to render as Slot (polymorphic)
 * @param props - All other standard button HTML attributes
 * @param ref - Forwarded ref to underlying element
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Polymorphic component: Use Slot if asChild, otherwise use button element
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button" // Required for React DevTools

export { Button, buttonVariants }
