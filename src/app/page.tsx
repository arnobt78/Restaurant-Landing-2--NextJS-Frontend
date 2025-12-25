/**
 * Home Page Component
 * 
 * This is the main landing page of the restaurant website.
 * It's a Server Component by default in Next.js App Router,
 * which means it can be rendered on the server for better SEO and performance.
 * 
 * The page uses a single-page application (SPA) structure where all sections
 * are on one page, navigated via smooth scrolling.
 * 
 * Component Structure:
 * - Header: Fixed navigation bar with logo and menu
 * - Hero: Main banner section with call-to-action
 * - MenuBar: Featured menu items showcase
 * - Reservation: Table booking form section
 * - About: Information about the restaurant
 * - Footer: Contact info, links, and social media
 */
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import Reservation from "@/components/Reservation";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <MenuBar />
      <Reservation />
      <About />
      <Footer />
    </main>
  );
}
