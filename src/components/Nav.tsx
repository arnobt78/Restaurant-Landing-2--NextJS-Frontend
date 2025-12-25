/**
 * Nav Component - Desktop Navigation
 * 
 * A reusable navigation component that uses react-scroll for smooth scrolling
 * to different sections of the single-page application.
 * 
 * Features:
 * - Smooth scroll navigation
 * - Active link highlighting (spy prop)
 * - Customizable styling via props
 * - Offset adjustment for fixed headers
 * 
 * react-scroll Library:
 * - Provides smooth scrolling behavior
 * - spy: Highlights active link based on scroll position
 * - offset: Adjusts scroll position to account for fixed headers
 */
import { Link, Link as ScrollLink } from "react-scroll";

interface InternalLinkProps {
  path: string;
  offset?: number;
}

/**
 * Navigation Links Configuration
 * 
 * Each link object contains:
 * - path: The section ID to scroll to (must match id on target element)
 * - name: Display text for the link
 * - offset: Pixel offset from top when scrolling (negative = scroll higher)
 * 
 * Offset explanation:
 * - Negative values help account for fixed headers
 * - -50 means scroll 50px higher than the section start
 */
const links = [
  { path: "home", name: "Home", offset: -50 },
  { path: "menu", name: "Menu", offset: -50 },
  { path: "about", name: "About", offset: -150 },
  { path: "more", name: "More", offset: 0 },
  // { path: "reservation", name: "reservation", offset: 50 },
];

/**
 * Nav Component
 * 
 * @param containerStyles - Tailwind classes for the nav container
 * @param linkStyles - Tailwind classes for individual links
 * 
 * Props Pattern: This component accepts style props to allow
 * parent components to customize appearance without modifying
 * the component itself (composition over configuration).
 */
const Nav = ({
  containerStyles,
  linkStyles,
}: {
  containerStyles: string;
  linkStyles: string;
}) => {
  return (
    <nav className={`${containerStyles}`}>
      {/* 
        Map over links array to render navigation items
        Using index as key is acceptable here since links don't reorder
      */}
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          spy={true} // Highlights link when corresponding section is in view
          smooth={true} // Enables smooth scrolling animation
          offset={link.offset} // Scroll offset to account for fixed header
          duration={500} // Animation duration in milliseconds
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
