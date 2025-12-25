/**
 * Utility Functions
 * 
 * This file contains reusable utility functions used throughout the application.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn Function - Class Name Merger
 * 
 * A utility function that combines clsx and twMerge to intelligently
 * merge Tailwind CSS class names.
 * 
 * Why this is needed:
 * - clsx: Conditionally joins classNames together
 * - twMerge: Intelligently merges Tailwind classes, resolving conflicts
 *   (e.g., "px-2 px-4" becomes just "px-4")
 * 
 * @param inputs - Variable number of class name arguments (strings, objects, arrays)
 * @returns Merged and deduplicated class name string
 * 
 * Usage Examples:
 * cn("px-2", "px-4") // Returns "px-4" (twMerge resolves conflict)
 * cn("text-red", isActive && "text-blue") // Conditional classes
 * cn("base-class", className) // Merge with prop className
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
