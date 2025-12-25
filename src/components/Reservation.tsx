/**
 * Reservation Component
 * 
 * Table booking section with background image and form container.
 * 
 * Features:
 * - Background image on desktop (xl screens)
 * - Animated section entrance
 * - Form container with dark background
 * - Responsive design (full width on mobile, positioned on desktop)
 * 
 * Layout Strategy:
 * - Mobile: Full-width form container
 * - Desktop: Background image with form positioned at bottom-right
 */
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    {/* 
      Reservation Section
      - xl:bg-reservation: Background image on extra-large screens
      - xl:flex xl:flex-col: Flexbox layout on desktop
      - xl:justify-end xl:items-end: Positions form at bottom-right
      - id="reservation": Anchor for smooth scroll navigation
    */}
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="reservation"
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col text-white xl:justify-end xl:items-end"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14"
      >
        <h2 className=" mb-9 capitalize">book a table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
