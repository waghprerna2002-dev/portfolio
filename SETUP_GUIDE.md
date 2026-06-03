# 🚀 Portfolio Setup & Configuration Guide

## Quick Start

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:5173
   ```

## ⚙️ EmailJS Configuration

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Set Up Email Service

1. Go to "Email Services" in your dashboard
2. Click "Add Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

   ```
   From: {{from_email}}
   Name: {{from_name}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

4. Copy your **Template ID**

### Step 4: Get Public Key

1. Go to "Account" settings
2. Find your **Public Key**
3. Copy it

### Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace:

```javascript
// Line 11 - Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY");

// Line 26 - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

Example:

```javascript
emailjs.init("1234567890abcdef");
await emailjs.send("service_xyz123", "template_abc456", templateParams);
```

## 🎨 Customize Colors & Theme

### Global Colors

Edit `src/styles/globals.css`:

```css
:root {
  --primary: #6c63ff; /* Main brand color */
  --secondary: #00d4ff; /* Accent color */
  --background: #0f172a; /* Page background */
  --surface: #1e293b; /* Card/surface background */
  --text: #f8fafc; /* Main text color */
  --text-secondary: #cbd5e1; /* Secondary text color */
  --border: #334155; /* Border color */
  --success: #10b981; /* Success state */
  --error: #ef4444; /* Error state */
}
```

### Component-Specific Colors

- Header: `src/components/Header.module.css`
- Footer: `src/components/Footer.module.css`
- Hero: `src/components/Hero.module.css`
- etc.

## 📝 Update Content

### 1. Hero Section

**File**: `src/components/Hero.jsx`

```javascript
// Update introduction text
<h1 className={styles.title}>
  Hi, I'm <span className={styles.highlight}>Your Name</span>
</h1>

// Update role
const words = ['Your Role 1', 'Your Role 2', 'Your Role 3'];

// Update description
<p className={styles.description}>
  Your professional description here...
</p>

// Update resume link
const downloadResume = () => {
  const resumeUrl = '/your-resume.pdf';
  // ...
};

// Update social links
<a href="https://github.com/yourprofile">
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your@email.com">
```

### 2. About Section

**File**: `src/components/About.jsx`

```javascript
<h3>Hello! I'm Your Name</h3>
<p>
  Update your professional summary here...
</p>

// Update certifications
<ul>
  <li>Your Certification 1</li>
  <li>Your Certification 2</li>
  <li>Your Certification 3</li>
</ul>

// Update statistics
const stats = [
  { label: 'Years Learning', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Happy Clients', value: '5+' },
];
```

### 3. Skills Section

**File**: `src/components/Skills.jsx`

```javascript
const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript", level: 90 },
  // Add your skills...
];

// Update tools
["VS Code", "React", "Vite", "Git", "GitHub", "MySQL", "Figma", "DevTools"];
```

### 4. Experience Section

**File**: `src/components/Experience.jsx`

```javascript
const experiences = [
  {
    company: "Your Company",
    role: "Your Job Title",
    duration: "Month Year - Month Year",
    description: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
];
```

### 5. Projects Section

**File**: `src/components/Projects.jsx`

```javascript
const projects = [
  {
    id: 1,
    title: "Project Title",
    category: "fullstack", // fullstack, frontend, blockchain
    description: "Project description here...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "📚", // Use emoji or image path
    link: "https://project-link.com",
    github: "https://github.com/username/project",
  },
];
```

### 6. Contact Section

**File**: `src/components/Contact.jsx`

```javascript
// Update email
<a href="mailto:your@email.com">your@email.com</a>

// Update social links
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourprofile">
```

## 👥 Update Footer Information

**File**: `src/components/Footer.jsx`

```javascript
<h3>Your Name</h3>
<p>Your Title | Your Tagline</p>

// Update social links
const socialLinks = [
  {
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  // ...
];
```

## 📸 Add Your Images

1. **Profile Picture**
   - Place in `public/` folder
   - Update `About.jsx` imagePlaceholder

2. **Project Images**
   - Can use emojis (current implementation)
   - Or add actual image paths
   - Place images in `public/projects/`

3. **Favicon**
   - Replace `public/favicon.svg`
   - Or use `public/favicon.ico`

## 🌐 SEO Configuration

Update `index.html`:

```html
<meta name="description" content="Your professional description" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:url" content="https://yourwebsite.com" />
<title>Your Name - Your Title</title>
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Then connect to Vercel dashboard
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push to GitHub
# Enable GitHub Pages in repository settings
```

## 📱 Test Responsiveness

1. **Desktop**: 1920px and above
2. **Tablet**: 768px - 1024px
3. **Mobile**: 360px - 480px

Use Chrome DevTools to test different screen sizes.

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- --port 3000
```

### EmailJS Not Working

1. Check Public Key is correct
2. Check Service ID exists
3. Check Template ID matches
4. Verify email service is connected

### Styling Issues

1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS Modules are imported correctly

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [EmailJS Documentation](https://www.emailjs.com/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Configure EmailJS with correct keys
- [ ] Add profile picture
- [ ] Update social media links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Update SEO meta tags
- [ ] Add resume PDF
- [ ] Test animations in production
- [ ] Optimize images
- [ ] Set up custom domain (if using)

## 🎉 You're Ready!

Your portfolio is now ready to showcase your work. Happy coding!

---

**Need Help?** Check the issues section or create a new one.

**Want to Contribute?** Submit a pull request!
