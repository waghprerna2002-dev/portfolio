# 🚀 Prerna Wagh - Portfolio

A modern, responsive, and interactive portfolio website showcasing projects, skills, and experience as a Frontend Developer. Built with React, Vite, and modern web technologies.

**Live Demo:** [Coming Soon]  
**Repository:** https://github.com/waghprerna2002-dev/portfolio

---

## ✨ Features

- **Responsive Design** – Fully optimized for mobile, tablet, and desktop devices
- **Dark Theme UI** – Modern glassmorphism design with smooth animations
- **Interactive Sections** – Hero, About, Skills, Experience, Projects, and Contact
- **Scroll Animations** – Reveal effects and smooth scrolling with Intersection Observer
- **EmailJS Integration** – Functional contact form with email notifications
- **Performance Optimized** – Fast load times with Vite's optimized bundling
- **SEO Ready** – Semantic HTML and meta tags for search engine optimization
- **Production Build** – Fully built and tested for production deployment

---

## 🛠 Tech Stack

- **Frontend:** React 19 with Hooks
- **Build Tool:** Vite 5
- **Styling:** CSS Modules + Global CSS
- **Routing:** React Router DOM
- **Email Service:** EmailJS
- **Icons:** React Icons (Font Awesome)
- **Code Quality:** ESLint
- **Package Manager:** npm

---

## 📋 Sections

1. **Header & Navigation** – Sticky navigation with smooth scrolling
2. **Hero Section** – Welcome banner with CTA buttons
3. **About** – Personal introduction and background
4. **Skills** – Technical skills with proficiency levels
5. **Experience** – Professional work history
6. **Projects** – Showcase of personal and professional projects
7. **Contact** – Functional contact form with EmailJS
8. **Footer** – Social links and copyright

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/waghprerna2002-dev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create .env file and add your credentials
cp .env.example .env
```

### Configuration

Update `.env` with your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_GITHUB_URL=https://github.com/waghprerna2002-dev
```

### Development

```bash
# Start development server
npm run dev

# Open your browser
# Navigate to http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components (Hero, About, Skills, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles and theme
│   ├── utils/            # Helper functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # React entry point
├── public/               # Static assets
├── .env.example          # Environment variables template
├── vite.config.js        # Vite configuration
└── index.html            # HTML entry point
```

---

## 📬 Contact Form

The contact form uses EmailJS for email delivery. To enable:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a Gmail service
3. Create an email template
4. Add your Public Key, Service ID, and Template ID to `.env`
5. Test the form on the Contact section

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

```bash
# Add to vite.config.js
export default {
  base: '/portfolio/',
  // ... rest of config
}

# Deploy
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [EmailJS Docs](https://www.emailjs.com/docs)
- [React Icons](https://react-icons.github.io/react-icons)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

---

## 👋 About

**Prerna Wagh** – Senior Frontend Developer | React Specialist

- 📧 Email: waghprerna2002@gmail.com
- 🔗 GitHub: https://github.com/waghprerna2002-dev
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐦 Twitter: [Your Twitter Handle]

---

**Built with ❤️ using React & Vite**
