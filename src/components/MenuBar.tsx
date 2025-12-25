/**
 * MenuBar Component
 * 
 * Displays featured menu items in a responsive grid layout.
 * 
 * Features:
 * - Responsive grid (1 col mobile, 3 col tablet, 4 col desktop)
 * - Hover effects on menu cards (image zoom)
 * - Animated section header
 * - Animated menu items grid
 * - Price display with custom styling
 * 
 * CSS Grid Responsive Breakpoints:
 * - grid-cols-1: Mobile (default)
 * - md:grid-cols-3: Tablet (medium screens)
 * - xl:grid-cols-4: Desktop (extra-large screens)
 */
"use client";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { IoIosArrowRoundForward } from "react-icons/io";

/**
 * Menu Items Data
 * 
 * Static data array containing featured menu items.
 * In a real application, this would typically come from:
 * - A CMS (Content Management System)
 * - An API endpoint
 * - A database
 * 
 * Each item contains:
 * - img: Image path (stored in public folder)
 * - title: Menu item name
 * - price: Formatted price string
 */
const menuBar = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$80.00",
  },

  {
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$70.00",
  },

  {
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$60.00",
  },

  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$50.00",
  },
];
const MenuBar = () => {
  return (
    <section className=" relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" max-w-[570px] mx-auto text-center xl:text-right"
        >
          <div>
            <h2 className="mb-3"> Favorite Menu</h2>
            <Link
              className="text-green flex justify-center items-center mb-16 xl:justify-end"
              href="/"
            >
              view all
              <IoIosArrowRoundForward className="text-3xl" />
            </Link>
          </div>
        </motion.div>
        {/* 
          Menu Items Grid
          - Responsive grid layout with different column counts per breakpoint
          - group class enables group-hover effects on child elements
        */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menuBar.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-2xl  mx-auto xl:mx-0 group"
              >
                {/* 
                  Image Container with Hover Effect
                  - overflow-hidden: Clips image during scale animation
                  - group-hover:scale-110: Scales image 110% on card hover
                  - transition-all: Smooth animation for all properties
                */}
                <div className="overflow-hidden">
                  <Image
                    className="group-hover:scale-110 transition-all duration-300"
                    src={item.img}
                    width={270}
                    height={270}
                    alt="image"
                  />
                </div>
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href="/">
                    <h3 className=" font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-poppins font-semibold text-orange ">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuBar;
