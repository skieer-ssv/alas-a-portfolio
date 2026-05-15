# Alas - A Modern Portfolio

A sleek, high-performance portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. This project serves as a personal showcase for projects, blogs, talks, and more, featuring a minimalist aesthetic and a focus on user experience.

---

## ✨ Features

- ⌨️ **Command Palette**: Fully functional navigation and action menu accessible via `CMD + K` (or `CTRL + K`).
- 📁 **Dynamic Projects Showcase**: Beautifully animated project cards with filtering and detailed views.
- ✍️ **Blog & Content**: Clean, readable layouts for blog posts and shared thoughts.
- 🎙️ **Talks & Presentations**: Dedicated section to list speaking engagements and presentations.
- 🌓 **Dark Mode**: Seamless theme switching with system preference detection.
- 🐦 **Tweet Integration**: Embedded social proof using optimized tweet components.
- 🌊 **Fluid Animations**: Smooth transitions and micro-interactions powered by Framer Motion.
- 📱 **Fully Responsive**: Optimized for every screen size, from mobile to ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes)

---

## 🧩 Key Components

- **`CommandMenu`**: The central hub for navigation, allowing users to jump between pages and trigger actions quickly.
- **`ProjectCard`**: A reusable component for projects featuring hover animations and responsive layouts.
- **`TweetDisplay`**: A custom wrapper for `react-tweet` to ensure social content fits perfectly within the design system.
- **`ThemeToggle`**: A clean UI element to switch between light and dark themes.
- **`GridBackground`**: A subtle, modern background pattern that adds depth to the UI.

---

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- **Node.js** (v20 or higher recommended)
- **npm** (or yarn/pnpm/bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alas-a-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd alas-a-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

---

## 📁 Project Structure

```text
src/
├── app/          # Next.js App Router (pages and layouts)
├── components/   # Reusable UI components
│   ├── layout/   # Navbar, Footer, and structural components
│   └── ui/       # Shared UI primitives (shadcn)
├── data/         # Static data for projects, blogs, etc.
├── lib/          # Utility functions and shared logic
└── public/       # Static assets (images, fonts)
```

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio!
