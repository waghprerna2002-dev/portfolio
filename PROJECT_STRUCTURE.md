# 📁 Project File Structure & Description

## Root Files

### Configuration Files

| File               | Purpose                          |
| ------------------ | -------------------------------- |
| `package.json`     | Project dependencies and scripts |
| `vite.config.js`   | Vite build configuration         |
| `index.html`       | Main HTML file with meta tags    |
| `.env.example`     | Environment variables template   |
| `.gitignore`       | Git ignore rules                 |
| `eslint.config.js` | ESLint configuration             |

### Documentation Files

| File                   | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `README.md`            | Basic project overview (Vite default)         |
| `PORTFOLIO_SETUP.md`   | Complete setup and customization guide        |
| `SETUP_GUIDE.md`       | Quick start guide with troubleshooting        |
| `FEATURES.md`          | Detailed features and technical documentation |
| `PROJECT_STRUCTURE.md` | This file - file descriptions                 |

---

## Source Code Directory (`src/`)

### Main Files

| File       | Purpose        | Description                           |
| ---------- | -------------- | ------------------------------------- |
| `main.jsx` | Entry point    | Renders App component to DOM          |
| `App.jsx`  | Root component | Main application wrapper with routing |

### Components (`src/components/`)

#### Layout Components

| Component           | Purpose           | Features                                 |
| ------------------- | ----------------- | ---------------------------------------- |
| `Header.jsx`        | Navigation header | Fixed nav, mobile menu, scroll detection |
| `Header.module.css` | Header styles     | Responsive nav styling                   |
| `Footer.jsx`        | Page footer       | Social links, copyright, back to top     |
| `Footer.module.css` | Footer styles     | Contact info cards, social icons         |

#### Page Sections

| Component               | Purpose             | Features                             |
| ----------------------- | ------------------- | ------------------------------------ |
| `Hero.jsx`              | Landing section     | Typing effect, CTAs, social icons    |
| `Hero.module.css`       | Hero styles         | Animated background, responsive grid |
| `About.jsx`             | About section       | Bio, education, statistics           |
| `About.module.css`      | About styles        | Image placeholder, stat cards        |
| `Skills.jsx`            | Skills section      | Progress bars, skill cards, tools    |
| `Skills.module.css`     | Skills styles       | Animated progress, hover effects     |
| `Experience.jsx`        | Experience timeline | Job details, timeline layout         |
| `Experience.module.css` | Experience styles   | Timeline design, alternating cards   |
| `Projects.jsx`          | Projects showcase   | Project cards, filtering, links      |
| `Projects.module.css`   | Projects styles     | Project grid, tech badges            |
| `Contact.jsx`           | Contact form        | Form fields, EmailJS integration     |
| `Contact.module.css`    | Contact styles      | Form layout, info cards              |

#### Utility Components

| Component                   | Purpose            | Features                       |
| --------------------------- | ------------------ | ------------------------------ |
| `ScrollProgress.jsx`        | Progress indicator | Scroll bar, back-to-top button |
| `ScrollProgress.module.css` | Progress styles    | Fixed positioning animations   |
| `NotFound.jsx`              | 404 page           | Error page component           |
| `NotFound.module.css`       | 404 styles         | Error page styling             |

### Custom Hooks (`src/hooks/`)

| Hook                 | Purpose           | Usage                                   |
| -------------------- | ----------------- | --------------------------------------- |
| `useScrollReveal.js` | Scroll animations | Trigger animations on scroll visibility |
|                      | Contains:         | `useScrollReveal()`, `useCounter()`     |

### Utilities (`src/utils/`)

| File         | Purpose          | Functions                                        |
| ------------ | ---------------- | ------------------------------------------------ |
| `helpers.js` | Helper functions | Email validation, scroll functions, utilities    |
|              | Functions        | `validateEmail`, `scrollToSection`, `formatDate` |
|              |                  | `debounce`, `throttle`, `getScrollPercentage`    |
|              |                  | `typeWriter`, `downloadFile`                     |

### Styles (`src/styles/`)

| File          | Purpose       | Content                                     |
| ------------- | ------------- | ------------------------------------------- |
| `globals.css` | Global styles | CSS variables, animations, utilities        |
|               | Includes      | Reset styles, keyframes, responsive classes |

---

## Public Assets (`public/`)

| Asset         | Purpose                        |
| ------------- | ------------------------------ |
| `favicon.svg` | Website icon (can be replaced) |
| `vite.svg`    | Vite logo (can be removed)     |
| `react.svg`   | React logo (can be removed)    |

---

## Build Output (`dist/`)

Generated after `npm run build`:

| File          | Size      | Purpose                         |
| ------------- | --------- | ------------------------------- |
| `index.html`  | 1.67 KB   | Minified HTML file              |
| `index-*.css` | 32.42 KB  | Combined and minified CSS       |
| `index-*.js`  | 260.05 KB | Bundled and minified JavaScript |

---

## Component Dependency Tree

```
App
├── Router
│   └── BrowserRouter
├── ScrollProgress
│   ├── Progress Bar
│   └── Back to Top Button
├── Header
│   ├── Logo
│   ├── Navigation Links
│   └── Mobile Menu
├── main
│   ├── Hero
│   │   ├── Title with Typing Effect
│   │   ├── Call-to-Action Buttons
│   │   └── Social Icons
│   ├── About
│   │   ├── Profile Image
│   │   ├── Bio Text
│   │   ├── Certifications List
│   │   └── Statistics
│   ├── Skills
│   │   ├── Skill Cards with Progress Bars
│   │   └── Tools Badges
│   ├── Experience
│   │   └── Timeline Items
│   ├── Projects
│   │   ├── Filter Buttons
│   │   └── Project Cards
│   └── Contact
│       ├── Contact Form
│       └── Contact Information
└── Footer
    ├── Quick Links
    ├── Social Links
    └── Copyright
```

---

## CSS Organization

### Global Styles

```
globals.css
├── CSS Variables (Colors, Transitions)
├── Reset Styles
├── Animations (Keyframes)
├── Utilities (Container, Section, Buttons)
└── Responsive Media Queries
```

### Component Styles

Each component has its own `.module.css` file with:

- Component-specific styles
- Hover/Active states
- Responsive breakpoints
- Animations specific to component

---

## Import Statements Guide

### Component Imports

```javascript
// Within React components
import Header from "./components/Header";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { validateEmail } from "./utils/helpers";
import styles from "./components/Component.module.css";
```

### CSS Imports

```javascript
// Main styles
import "./styles/globals.css";
```

---

## File Size Analysis

### Development Build

- All files unminified
- Full source maps
- Development optimizations

### Production Build

- Total: ~294 KB (89.11 KB gzipped)
- JavaScript: 260.05 KB → 83.34 KB (68% compression)
- CSS: 32.42 KB → 5.77 KB (82% compression)
- HTML: 1.67 KB → 0.60 KB (64% compression)

---

## Environment Configuration

### Variables

```env
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service
VITE_EMAILJS_TEMPLATE_ID=your_template
VITE_RESUME_URL=/resume.pdf
VITE_GITHUB_URL=https://github.com/user
VITE_LINKEDIN_URL=https://linkedin.com/in/user
```

---

## Development Scripts

| Script     | Command           | Purpose                  |
| ---------- | ----------------- | ------------------------ |
| Dev Server | `npm run dev`     | Start development server |
| Build      | `npm run build`   | Create production build  |
| Preview    | `npm run preview` | Preview production build |
| Lint       | `npm run lint`    | Run ESLint               |

---

## Adding New Components

### Template

```javascript
// Component File: src/components/NewComponent.jsx
import React from "react";
import styles from "./NewComponent.module.css";

const NewComponent = () => {
  return (
    <section className={styles.container}>{/* Component content */}</section>
  );
};

export default NewComponent;
```

### Stylesheet Template

```css
/* Component File: src/components/NewComponent.module.css */
.container {
  /* Styles */
}

@media (max-width: 768px) {
  /* Mobile styles */
}
```

---

## Best Practices

### File Organization

✅ One component per file
✅ CSS Module for each component
✅ Meaningful file names
✅ Logical folder structure

### Naming Conventions

✅ Components: PascalCase (e.g., `MyComponent.jsx`)
✅ CSS Modules: PascalCase (e.g., `MyComponent.module.css`)
✅ Utilities: camelCase (e.g., `myFunction.js`)
✅ Constants: UPPER_CASE (e.g., `MAX_SIZE`)

### Code Style

✅ ES6+ syntax
✅ Functional components with hooks
✅ Prop validation
✅ Semantic HTML
✅ BEM for CSS naming
✅ Comments for complex logic

---

## Performance Checklist

| Item                | Status | Size                |
| ------------------- | ------ | ------------------- |
| JavaScript Minified | ✅     | 260 KB → 83 KB      |
| CSS Minified        | ✅     | 32 KB → 5.77 KB     |
| Gzip Compression    | ✅     | Total: 89 KB        |
| Code Splitting      | ✅     | Automatic with Vite |
| Tree Shaking        | ✅     | Production build    |

---

**Generated Files**: 25 JavaScript/JSX files + 15 CSS Modules + Documentation
**Total Components**: 12 (8 sections + 4 utility)
**Total Styles**: Custom CSS + 15 CSS Modules
**Documentation**: 4 complete guides

---

Last Updated: June 3, 2026
