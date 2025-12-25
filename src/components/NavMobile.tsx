/**
 * NavMobile Component - Mobile Navigation Menu
 * 
 * A slide-out mobile navigation menu that appears on smaller screens.
 * Uses state to toggle menu visibility and provides smooth animations.
 * 
 * Features:
 * - Hamburger menu icon
 * - Slide-in sidebar menu
 * - Icon-based navigation links
 * - Auto-close on navigation
 * - Smooth scroll to sections
 * 
 * State Management:
 * - isOpen: Controls menu visibility (true = menu visible)
 * - Toggled by clicking hamburger icon or close button
 */
"use client";
import { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

/**
 * Mobile Navigation Links
 * 
 * Each link includes an icon component from react-icons library.
 * Icons provide visual cues for better UX on mobile devices.
 */
const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    path: "Contact",
    name: "contact",
    offset: 0,
  },
];

const NavMobile = ({
  containerStyles,
  iconStyles,
  linkStyles,
}: {
  containerStyles: string;
  iconStyles: string;
  linkStyles: string;
}) => {
  /**
   * State Hook: Menu Toggle
   * 
   * useState returns [currentValue, setterFunction]
   * - isOpen: Boolean indicating if menu is visible
   * - setIsOpen: Function to update isOpen state
   * 
   * Initial value: false (menu starts closed)
   */
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${containerStyles}`}>
      {/* 
        Hamburger Menu Button
        onClick handler toggles isOpen state
        Using !isOpen to flip the boolean value
      */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white transition-all " />
      </div>
      {/* 
        Slide-out Menu Sidebar
        - Conditional className: right-0 when open, -right-full when closed
        - fixed: Positioned relative to viewport
        - z-20: Above most content but below modals
        - transition-all: Smooth animation for position change
        - duration-500: 500ms animation duration
      */}
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20  w-full p-10 bottom-0 top-0 transition-all duration-500 `}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* Close Button - Closes menu when clicked */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute flex w-10 h-10 left-8 top-8 items-center bg-green justify-center rounded-lg"
          >
            <IoCloseOutline />
          </div>
          {/* Logo in mobile menu */}
          <Link href="/">
            <Image
              className="mt-1"
              src="/logo.svg"
              width={90}
              height={36}
              alt=""
            />
          </Link>
          {/* Navigation Links with Icons */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  className="flex items-center"
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false} // Set to false for mobile (can be jarring)
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* CTA Button - Scrolls to reservation section */}
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button className="rounded mb-1" variant="orange">
              Book a table
            </Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
