/* eslint-disable react/no-unescaped-entities */
/**
 * Header Component
 * 
 * A fixed navigation header that changes appearance on scroll.
 * Uses React hooks for state management and side effects.
 * 
 * Features:
 * - Fixed positioning (stays at top while scrolling)
 * - Dynamic styling based on scroll position
 * - Responsive design (desktop nav + mobile menu)
 * - Smooth scroll navigation to page sections
 * 
 * "use client" directive: Required because this component uses:
 * - useState hook (client-side state)
 * - useEffect hook (browser APIs like window, addEventListener)
 * - Event handlers
 */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import NavMobile from "./NavMobile";

const Header = () => {
  /**
   * State Management with useState
   * 
   * 'active' state tracks whether user has scrolled past 100px.
   * When true, header gets a black background and reduced padding.
   * This creates a visual feedback that user is scrolling.
   */
  const [active, setActive] = useState(false);

  /**
   * useEffect Hook for Side Effects
   * 
   * This effect:
   * 1. Adds a scroll event listener when component mounts
   * 2. Updates 'active' state based on scroll position
   * 3. Cleans up the event listener when component unmounts
   * 
   * Empty dependency array [] means this runs once on mount.
   * The return function is the cleanup function that runs on unmount.
   * 
   * Why cleanup is important: Prevents memory leaks by removing
   * event listeners when component is no longer in the DOM.
   */
  useEffect(() => {
    const handleScroll = () => {
      // scroll detection: Check if user scrolled more than 100px
      setActive(window.scrollY > 100);
    };
    //event listener (add)
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    {/* 
      Dynamic className with template literals:
      - Conditional styling based on 'active' state
      - fixed: Position fixed to viewport
      - z-50: High z-index to stay above other content
      - transition-all: Smooth transitions for all property changes
    */}
    <header
      className={`${
        active ? " bg-black py-4 " : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo - Next.js Image component for optimized image loading */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="" />
          </Link>
          {/* navbar - Desktop navigation (hidden on mobile, shown on xl screens) */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* button - Smooth scroll to reservation section using react-scroll */}
          <ScrollLink to="reservation" smooth={true}>
            <Button className="rounded" variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          {/* navMobile - Mobile navigation menu (shown on screens smaller than xl) */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
