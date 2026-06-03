# Prerna Wagh Portfolio

A modern, premium, and responsive portfolio website built with React.js, Vite, and cutting-edge web technologies. This portfolio showcases professional experience, projects, skills, and provides a contact interface.

## 🎨 Features

- **Modern Design**: Premium dark theme with glassmorphism effects
- **Responsive Layout**: Fully responsive design for all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS keyframes and scroll reveal animations using Intersection Observer
- **Interactive Components**: Typing effect, progress bars, skill animations
- **Project Showcase**: Interactive project cards with filtering
- **Contact Form**: EmailJS integration for direct email notifications
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and code splitting
- **Smooth Scrolling**: Custom scroll progress indicator and back-to-top button
- **Custom Cursor**: Premium custom cursor experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS Modules & CSS3
- **Routing**: React Router v7
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Carousel**: Swiper.js
- **Animation**: CSS Keyframes (no Framer Motion)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Public Key, Service ID, and Template ID
   - Update the values in `src/components/Contact.jsx`:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
     // And in the handleSubmit function:
     await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.module.css
│   │   ├── Footer.jsx & Footer.module.css
│   │   ├── Hero.jsx & Hero.module.css
│   │   ├── About.jsx & About.module.css
│   │   ├── Skills.jsx & Skills.module.css
│   │   ├── Experience.jsx & Experience.module.css
│   │   ├── Projects.jsx & Projects.module.css
│   │   ├── Contact.jsx & Contact.module.css
│   │   ├── ScrollProgress.jsx & ScrollProgress.module.css
│   │   └── NotFound.jsx & NotFound.module.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── index.html
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update introduction text
   - Modify social media links
   - Change resume download link

2. **About Section** (`src/components/About.jsx`)
   - Update professional summary
   - Add/modify education and certifications
   - Update statistics

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills
   - Adjust proficiency levels
   - Add/remove tools

4. **Experience Section** (`src/components/Experience.jsx`)
   - Add internships or job experiences
   - Update descriptions and dates

5. **Projects Section** (`src/components/Projects.jsx`)
   - Add your projects
   - Update descriptions and technologies
   - Add project links

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update email address
   - Modify social links

### Theme Customization

Update color scheme in `src/styles/globals.css`:

```css
:root {
  --primary: #6c63ff;
  --secondary: #00d4ff;
  --background: #0f172a;
  --surface: #1e293b;
  --text: #f8fafc;
  /* ... other colors ... */
}
```

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

#### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy

#### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: "/portfolio/",
     plugins: [react()],
   });
   ```
2. Install and use:
   ```bash
   npm install -D gh-pages
   ```
3. Add to `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run: `npm run deploy`

#### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 📊 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use optimized images in public folder
- **Lazy Loading**: Components load on intersection
- **CSS Modules**: Scoped styling prevents conflicts
- **Production Build**: Minified and optimized output

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant
- Alt text for images

## 🔍 SEO

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter card meta tags
- Descriptive page titles
- Structured data markup ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact directly.

## ✨ Features Checklist

- ✅ Responsive Design
- ✅ Dark Theme
- ✅ Glassmorphism Effects
- ✅ Smooth Animations
- ✅ Typing Effect
- ✅ Scroll Reveal
- ✅ Progress Bars
- ✅ Project Filtering
- ✅ Contact Form with EmailJS
- ✅ Social Media Integration
- ✅ SEO Optimization
- ✅ Performance Optimized
- ✅ Custom Cursor
- ✅ Scroll Progress Indicator
- ✅ Back to Top Button
- ✅ 404 Page
- ✅ Mobile Friendly

## 🎉 Credits

Built with passion using modern web technologies.

---

**Last Updated**: June 2026

**Version**: 1.0.0
