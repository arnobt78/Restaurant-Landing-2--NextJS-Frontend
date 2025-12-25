# Restaurant TS Landing Page - Next.js, TailwindCSS, Framer Motion Frontend Project

A beautiful, fully responsive restaurant landing page built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion. This project demonstrates modern web development practices including server-side rendering, component composition, animation patterns, and responsive design.

- **Live-Demo:** [https://restaurant-ts-arnob.vercel.app/](https://restaurant-ts-arnob.vercel.app/)

> **Note:** This static webpage is built using TypeScript. For the JavaScript version, see [RestaurantJS-NextJS-Website](https://github.com/arnobt78/RestaurantJS-NextJS-Website).

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.18.0-0055ff)

![project23](https://github.com/user-attachments/assets/8c0b14ce-5afb-4387-8c2f-48ee1fbb7c2b)
![Screenshot 2024-09-13 at 03 34 24](https://github.com/user-attachments/assets/0bc0ad55-6c33-4ecf-9a6b-44627ebc2396)
![Screenshot 2024-09-13 at 03 35 51](https://github.com/user-attachments/assets/42ea4942-e2cc-4119-b83a-31c49062ec90)
![Screenshot 2024-09-13 at 03 34 55](https://github.com/user-attachments/assets/3107bdb9-cc73-4ca6-b79d-4f4748eeab59)
![Screenshot 2024-09-13 at 03 35 33](https://github.com/user-attachments/assets/24751061-c447-4196-840e-825695fa0d1d)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Components Documentation](#-components-documentation)
- [Functionalities](#-functionalities)
- [Routes & Navigation](#-routes--navigation)
- [Reusing Components](#-reusing-components)
- [Code Examples](#-code-examples)
- [Styling & Theming](#-styling--theming)
- [Deployment](#-deployment)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

WU'S Garden is a modern, single-page restaurant website that showcases menu items, allows table reservations, and provides information about the restaurant. Built with Next.js 14 App Router, this project serves as both a production-ready template and an educational resource for learning modern React development patterns.

### Key Highlights

- **Server-Side Rendering (SSR)**: Leverages Next.js App Router for optimal SEO and performance
- **Type Safety**: Full TypeScript implementation for safer, more maintainable code
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Accessible Components**: Radix UI primitives for WCAG compliance
- **Optimized Performance**: Font optimization, image optimization, and code splitting

---

## ✨ Features

### Core Features

- **Fixed Navigation Header**: Changes appearance on scroll with smooth transitions
- **Animated Hero Section**: Eye-catching banner with staggered text animations
- **Menu Showcase**: Responsive grid displaying featured menu items with hover effects
- **Reservation System**: Interactive form with date picker and person selector
- **About Section**: Two-column layout with animated content
- **Footer**: Social media links, blog posts, and contact information
- **Mobile Menu**: Slide-out navigation for mobile devices
- **Smooth Scrolling**: React Scroll integration for seamless section navigation

### Technical Features

- **Font Optimization**: Next.js font optimization for Lora and Poppins fonts
- **SEO Optimized**: Comprehensive metadata for search engines and social sharing
- **Image Optimization**: Next.js Image component for automatic optimization
- **TypeScript**: Full type safety across all components
- **Component Reusability**: Modular, reusable component architecture
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundles

---

## 🛠 Technology Stack

### Core Framework & Language

- **Next.js 14.2.35**: React framework with App Router
- **React 18**: UI library
- **TypeScript 5.4.3**: Type-safe JavaScript

### Styling & UI

- **TailwindCSS 3.3.0**: Utility-first CSS framework
- **Framer Motion 10.18.0**: Animation library
- **Radix UI**: Accessible component primitives
  - `@radix-ui/react-popover`
  - `@radix-ui/react-select`
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`

### Utilities & Libraries

- **class-variance-authority**: Variant-based styling system
- **clsx & tailwind-merge**: Class name utilities
- **date-fns**: Date formatting and manipulation
- **react-day-picker**: Calendar component
- **react-scroll**: Smooth scrolling functionality
- **react-icons**: Icon library
- **lucide-react**: Additional icons
- **react-leaflet**: Map integration (configured but not actively used)

### Development Tools

- **ESLint**: Code linting
- **TypeScript**: Type checking
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

---

## 📁 Project Structure

```bash
restaurant-ts/
├── public/                          # Static assets
│   ├── hero/                        # Hero section images
│   │   ├── bg.png
│   │   ├── plate.png
│   │   └── coffee.png
│   ├── menu/                        # Menu item images
│   │   ├── bg.png
│   │   ├── item-1.png
│   │   ├── item-2.png
│   │   ├── item-3.png
│   │   └── item-4.png
│   ├── about/                       # About section images
│   │   └── img.png
│   ├── reservation/                 # Reservation section images
│   │   └── bg.png
│   ├── footer/                      # Footer background
│   │   └── bg.png
│   ├── logo.svg                     # Site logo
│   └── favicon.ico                  # Site favicon
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Home page
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                  # React components
│   │   ├── Header.tsx               # Navigation header
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── MenuBar.tsx              # Menu showcase
│   │   ├── Reservation.tsx           # Reservation section
│   │   ├── ReservationForm.tsx     # Booking form
│   │   ├── About.tsx                # About section
│   │   ├── Footer.tsx               # Footer component
│   │   ├── Nav.tsx                  # Desktop navigation
│   │   ├── NavMobile.tsx            # Mobile navigation
│   │   │
│   │   └── ui/                      # Reusable UI components
│   │       ├── button.tsx           # Button component
│   │       ├── input.tsx            # Input component
│   │       ├── label.tsx            # Label component
│   │       ├── calendar.tsx        # Calendar component
│   │       ├── popover.tsx          # Popover component
│   │       └── select.tsx           # Select component
│   │
│   └── lib/                         # Utility functions
│       └── utils.ts                 # Class name utilities
│
├── variants.ts                      # Framer Motion animation variants
├── tailwind.config.ts              # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
├── next.config.js                   # Next.js configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** or **pnpm** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/restaurant-ts.git
cd restaurant-ts
```

1. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

1. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

1. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check for code issues

---

## 🔐 Environment Variables

This project is a **static site** and does not require environment variables for basic functionality. However, if you plan to extend the project with backend features, you may need to configure the following:

### Optional Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# Example: API Configuration (if adding backend)
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Example: Analytics (if adding tracking)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Example: Map Services (if using maps)
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token

# Example: Email Service (if adding contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

### Environment Variable Best Practices

1. **Never commit `.env.local`** - Add it to `.gitignore`
2. **Use `NEXT_PUBLIC_` prefix** - For variables needed in the browser
3. **Keep secrets server-side** - Don't expose sensitive data to the client
4. **Use `.env.example`** - Document required variables for other developers

### Setting Up Environment Variables

1. Create `.env.local` in the project root:

```bash
touch .env.local
```

1. Add your variables:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

1. Restart the development server:

```bash
npm run dev
```

1. Access variables in your code:

```typescript
// In client components (use NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// In server components or API routes
const secretKey = process.env.SECRET_KEY;
```

---

## 📚 Components Documentation

### Core Components

#### Header Component

**Location:** `src/components/Header.tsx`

**Purpose:** Fixed navigation header that changes appearance on scroll.

**Features:**

- Scroll detection using `useEffect` and `window.scrollY`
- Dynamic styling based on scroll position
- Responsive design (desktop nav + mobile menu)
- Smooth scroll navigation

**Props:** None (self-contained)

**Usage:**

```tsx
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      {/* Rest of your content */}
    </>
  );
}
```

**Key Concepts:**

- `useState` for managing active state
- `useEffect` for scroll event listeners
- Event listener cleanup to prevent memory leaks

---

#### Hero Component

**Location:** `src/components/Hero.tsx`

**Purpose:** Main banner section with animated text and images.

**Features:**

- Framer Motion animations with staggered delays
- Responsive text alignment (center on mobile, left on desktop)
- Background image support
- Call-to-action button

**Props:** None

**Usage:**

```tsx
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

**Animation Configuration:**

- Uses `fadeIn` variant from `variants.ts`
- Direction: "down" for text, "up" for images
- Viewport triggers: Animates when element enters viewport

---

#### MenuBar Component

**Location:** `src/components/MenuBar.tsx`

**Purpose:** Displays featured menu items in a responsive grid.

**Features:**

- Responsive grid (1 col mobile, 3 col tablet, 4 col desktop)
- Hover effects on menu cards
- Image zoom on hover
- Price display

**Props:** None

**Data Structure:**

```typescript
const menuBar = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$80.00",
  },
  // ... more items
];
```

**Usage:**

```tsx
import MenuBar from "@/components/MenuBar";

export default function Page() {
  return (
    <main>
      <MenuBar />
    </main>
  );
}
```

**Customization:**
To add more menu items, modify the `menuBar` array in the component file.

---

#### Reservation Component

**Location:** `src/components/Reservation.tsx`

**Purpose:** Container for the reservation form with background styling.

**Features:**

- Background image on desktop
- Animated entrance
- Responsive layout

**Props:** None

**Usage:**

```tsx
import Reservation from "@/components/Reservation";

export default function Page() {
  return (
    <main>
      <Reservation />
    </main>
  );
}
```

---

#### ReservationForm Component

**Location:** `src/components/ReservationForm.tsx`

**Purpose:** Interactive form for booking restaurant tables.

**Features:**

- First name and last name inputs
- Date picker using `react-day-picker`
- Person count selector using Radix UI Select
- Form validation ready

**State Management:**

```typescript
const [date, setDate] = useState<Date | undefined>(new Date());
```

**Usage:**

```tsx
import ReservationForm from "@/components/ReservationForm";

export default function Page() {
  return (
    <form>
      <ReservationForm />
    </form>
  );
}
```

**Extending the Form:**

To add form submission, add an `onSubmit` handler:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission
  console.log({ date, firstName, lastName, persons });
};
```

---

#### About Component

**Location:** `src/components/About.tsx`

**Purpose:** Two-column layout displaying restaurant information.

**Features:**

- CSS Grid responsive layout
- Animated text and image
- Call-to-action button

**Props:** None

**Usage:**

```tsx
import About from "@/components/About";

export default function Page() {
  return (
    <main>
      <About />
    </main>
  );
}
```

---

#### Footer Component

**Location:** `src/components/Footer.tsx`

**Purpose:** Website footer with links and social media.

**Features:**

- Blog links section
- New items section
- Social media icons
- Copyright information

**Props:** None

**Usage:**

```tsx
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Footer />
    </main>
  );
}
```

---

### Navigation Components

#### Nav Component (Desktop)

**Location:** `src/components/Nav.tsx`

**Purpose:** Desktop navigation menu with smooth scrolling.

**Props:**

- `containerStyles`: Tailwind classes for container
- `linkStyles`: Tailwind classes for links

**Usage:**

```tsx
import Nav from "@/components/Nav";

<Nav
  containerStyles="hidden xl:flex gap-x-12 text-white"
  linkStyles="capitalize"
/>;
```

**Configuration:**

Modify the `links` array to add/remove navigation items:

```typescript
const links = [
  { path: "home", name: "Home", offset: -50 },
  { path: "menu", name: "Menu", offset: -50 },
  // Add more links
];
```

---

#### NavMobile Component

**Location:** `src/components/NavMobile.tsx`

**Purpose:** Mobile slide-out navigation menu.

**Props:**

- `containerStyles`: Container styling
- `iconStyles`: Icon styling
- `linkStyles`: Link text styling

**Usage:**

```tsx
import NavMobile from "@/components/NavMobile";

<NavMobile
  containerStyles="xl:hidden"
  iconStyles="text-3xl"
  linkStyles="uppercase"
/>;
```

**State Management:**

- Uses `useState` to toggle menu visibility
- `isOpen` state controls slide animation

---

### UI Components

#### Button Component

**Location:** `src/components/ui/button.tsx`

**Purpose:** Reusable, accessible button with variants.

**Features:**

- Multiple variants (default, orange, input)
- Multiple sizes (default, sm, lg, icon)
- Polymorphic (can render as different elements)
- Type-safe with TypeScript

**Usage:**

```tsx
import { Button } from "@/components/ui/button";

// Default button
<Button>Click me</Button>

// Orange variant
<Button variant="orange">Book a table</Button>

// Small size
<Button size="sm">Small button</Button>

// As a link (polymorphic)
<Button asChild>
  <Link href="/about">About</Link>
</Button>
```

**Variants:**

- `default`: Green background
- `orange`: Orange background
- `input`: Transparent with border

**Sizes:**

- `default`: Standard size
- `sm`: Small size
- `lg`: Large size
- `icon`: Square icon button

---

#### Input Component

**Location:** `src/components/ui/input.tsx`

**Purpose:** Styled input field component.

**Usage:**

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter your name" id="name" />;
```

**Features:**

- Forward ref support
- Custom styling for reservation form
- Accessible focus states

---

#### Calendar Component

**Location:** `src/components/ui/calendar.tsx`

**Purpose:** Date picker calendar using `react-day-picker`.

**Usage:**

```tsx
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />;
```

**Props:**

- `mode`: "single" | "range" | "multiple"
- `selected`: Currently selected date(s)
- `onSelect`: Callback when date is selected
- `initialFocus`: Auto-focus on mount

---

#### Select Component

**Location:** `src/components/ui/select.tsx`

**Purpose:** Accessible dropdown select using Radix UI.

**Usage:**

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>;
```

---

## 🎨 Functionalities

### Smooth Scrolling Navigation

The project uses `react-scroll` for smooth section navigation:

```typescript
import { Link as ScrollLink } from "react-scroll";

<ScrollLink to="reservation" smooth={true} offset={-150}>
  Book a table
</ScrollLink>;
```

**How it works:**

1. Each section has an `id` attribute matching the link's `to` prop
2. Clicking the link smoothly scrolls to that section
3. `offset` adjusts for fixed headers

---

### Scroll-Based Header Styling

The header changes appearance when scrolling:

```typescript
const [active, setActive] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setActive(window.scrollY > 100);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Behavior:**

- Scroll < 100px: Transparent background, larger padding
- Scroll > 100px: Black background, smaller padding

---

### Framer Motion Animations

Animations are configured in `variants.ts`:

```typescript
export const fadeIn = (direction: string, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      // ...
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      // ...
    },
  };
};
```

**Usage in components:**

```tsx
<motion.div
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
>
  Content here
</motion.div>
```

**Animation Properties:**

- `initial`: Starting state
- `whileInView`: Triggers when element enters viewport
- `viewport.once`: Whether animation can retrigger
- `viewport.amount`: Percentage of element visible before triggering

---

### Responsive Design

The project uses TailwindCSS breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Example:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

---

### Image Optimization

Next.js Image component provides automatic optimization:

```tsx
import Image from "next/image";

<Image src="/hero/plate.png" width={756} height={682} alt="Delicious food" />;
```

**Benefits:**

- Automatic format optimization (WebP, AVIF)
- Lazy loading
- Responsive images
- Reduced layout shift

---

## 🗺 Routes & Navigation

### Current Route Structure

This is a **single-page application (SPA)** with one main route:

- `/` - Home page with all sections

### Section Navigation

Navigation uses smooth scrolling to sections:

- `#home` - Hero section
- `#menu` - Menu showcase
- `#reservation` - Reservation form
- `#about` - About section
- `#more` - Footer section

### Adding New Routes

To add new pages, create files in `src/app/`:

```text
src/app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page (/)
├── about/
│   └── page.tsx    # About page (/about)
└── menu/
    └── page.tsx    # Menu page (/menu)
```

**Example new page:**

```tsx
// src/app/menu/page.tsx
export default function MenuPage() {
  return (
    <div>
      <h1>Full Menu</h1>
      {/* Menu content */}
    </div>
  );
}
```

---

## 🔄 Reusing Components

### Using Components in Other Projects

#### 1. Copy Component Files

Copy the component file and its dependencies:

```bash
# Copy component
cp src/components/Header.tsx your-project/src/components/

# Copy dependencies
cp src/components/ui/button.tsx your-project/src/components/ui/
cp src/lib/utils.ts your-project/src/lib/
```

#### 2. Install Required Dependencies

```bash
npm install framer-motion react-scroll next
```

#### 3. Import and Use

```tsx
import Header from "@/components/Header";

export default function Page() {
  return <Header />;
}
```

---

### Adapting Components

#### Example: Reusing Button Component

**Original usage:**

```tsx
<Button variant="orange" size="sm">
  Book a table
</Button>
```

**Adapted for different project:**

```tsx
// Add new variant in button.tsx
variants: {
  variant: {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    // ... existing variants
  }
}

// Use in your project
<Button variant="primary">Submit</Button>
```

---

### Creating Component Variants

#### Example: MenuBar Component

**Original (restaurant menu):**

```typescript
const menuBar = [
  { img: "/menu/item-1.png", title: "Food Item", price: "$80.00" },
];
```

**Adapted (product showcase):**

```typescript
const products = [
  { img: "/products/item-1.png", title: "Product Name", price: "$80.00" },
];
```

Then update the component to use `products` instead of `menuBar`.

---

## 💻 Code Examples

### Example 1: Creating a New Animated Section

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function NewSection() {
  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-20"
    >
      <h2>New Section</h2>
      <p>Content here</p>
    </motion.section>
  );
}
```

---

### Example 2: Adding Form Validation

```tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Your name"
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

### Example 3: Fetching Data from API

```tsx
"use client";
import { useState, useEffect } from "react";

interface MenuItem {
  id: number;
  title: string;
  price: string;
  img: string;
}

export default function MenuBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
```

---

### Example 4: Adding Dark Mode

```tsx
// Add to layout.tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Use in components
("use client");
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

---

## 🎨 Styling & Theming

### TailwindCSS Configuration

The project uses custom Tailwind configuration:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/hero/bg.png)",
        menu: "url(/menu/bg.png)",
        reservation: "url(/reservation/bg.png)",
        footer: "url(/footer/bg.png)",
      },
    },
  },
};
```

### Custom CSS Classes

Global styles are defined in `src/app/globals.css`:

```css
@layer base {
  body {
    @apply font-poppins bg-body text-black tracking-[0.5px];
  }
  h1,
  h2,
  h3 {
    @apply font-lora font-bold;
  }
}
```

### Color Scheme

The project uses custom colors defined in Tailwind config. To customize:

1. Update `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      orange: "#your-orange-color",
      green: "#your-green-color",
    },
  },
}
```

1. Use in components:

```tsx
<div className="bg-orange text-green">Styled content</div>
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

1. **Deploy on Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js and deploys

1. **Environment Variables**

Add environment variables in Vercel dashboard:

- Settings → Environment Variables

---

### Netlify

1. **Build Configuration**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

1. **Deploy**

- Connect repository to Netlify
- Netlify auto-detects Next.js configuration

---

### Other Platforms

**Docker:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Static Export:**

Update `next.config.js`:

```javascript
module.exports = {
  output: "export",
};
```

Then build:

```bash
npm run build
```

---

## 🔑 Keywords

- Next.js 14
- TypeScript
- React
- TailwindCSS
- Framer Motion
- Restaurant Website
- Landing Page
- Responsive Design
- Server-Side Rendering
- Component Architecture
- Animation
- Form Handling
- Date Picker
- Smooth Scrolling
- Mobile Navigation
- SEO Optimization
- Image Optimization
- Font Optimization
- Radix UI
- Accessible Components
- Single Page Application
- Modern Web Development
- Frontend Development
- Web Development Tutorial
- React Learning Resource

---

## 📝 Conclusion

This restaurant landing page project demonstrates modern web development practices using Next.js 14, TypeScript, and TailwindCSS. It serves as both a production-ready template and an educational resource for developers learning:

- **Next.js App Router**: Understanding the new routing system
- **TypeScript**: Type-safe React development
- **Component Architecture**: Building reusable, maintainable components
- **Animation Patterns**: Implementing smooth animations with Framer Motion
- **Responsive Design**: Creating mobile-first, responsive layouts
- **Performance Optimization**: Leveraging Next.js optimizations

### Key Takeaways

1. **Component Reusability**: Modular components can be easily adapted for other projects
2. **Type Safety**: TypeScript provides better developer experience and fewer bugs
3. **Performance**: Next.js optimizations improve Core Web Vitals
4. **Accessibility**: Radix UI components ensure WCAG compliance
5. **Modern Patterns**: Following React best practices and Next.js conventions

### Next Steps

- Add backend API integration for dynamic menu items
- Implement form submission handling
- Add user authentication
- Integrate payment processing
- Add blog functionality
- Implement search functionality
- Add multi-language support

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
