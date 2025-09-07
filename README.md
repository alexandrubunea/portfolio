# Alexandru Bunea - Portfolio Website

A modern, responsive portfolio website showcasing my work as a full-stack developer with expertise in web development and embedded systems. Built with React, TypeScript, and Tailwind CSS, featuring dynamic animations and a glassmorphism design aesthetic.

## ✨ Features

- **Modern Design**: Glassmorphism UI with smooth animations and gradient effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Background**: Animated blob background with physics-based movement
- **GitHub Integration**: Automatically fetches and displays latest repositories
- **Contact Form**: Functional contact form with Web3Forms integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Dark/Light Adaptive**: Navigation bar adapts based on scroll position

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Icons**: Phosphor Icons
- **Animations**: Anime.js for smooth blob animations
- **Forms**: Web3Forms for contact form handling
- **SEO**: React Helmet Async for meta tag management
- **Build Tool**: Vite
- **Fonts**: Google Fonts (JetBrains Mono, Poppins)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexandrubunea/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutMe.tsx          # About section with skills and bio
│   ├── Background.tsx       # Animated blob background
│   ├── Contact.tsx          # Contact form and information
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Landing/hero section
│   ├── Navigation.tsx       # Responsive navigation bar
│   └── Projects.tsx         # GitHub repository showcase
├── assets/
│   └── profile_photo.png    # Profile picture
├── App.tsx                  # Main application component
├── App.css                  # Global styles and font imports
└── main.tsx                 # Application entry point
```

## 🎨 Design Features

### Glassmorphism Effects
- Backdrop blur effects with transparency
- Subtle borders and shadows
- Glass-like cards and components

### Dynamic Animations
- Physics-based blob movement
- Smooth hover transitions
- Interactive button animations
- Scroll-triggered navigation changes

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly mobile navigation

## 📧 Contact Form Setup

The contact form uses Web3Forms for handling submissions. To set up your own:

1. Sign up at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Replace the access key in `src/components/Contact.tsx`:
   ```typescript
   access_key: 'your-access-key-here'
   ```

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and title
- `src/components/AboutMe.tsx` - Bio, skills, and profile photo
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links
- `src/components/Navigation.tsx` - Social media links

### Styling
- Colors and gradients can be modified in `src/App.css`
- Tailwind classes can be customized throughout components
- Background blob colors are defined in `src/components/Background.tsx`

### GitHub Integration
The Projects component automatically fetches your latest repositories. Update the username in:
```typescript
// src/components/Projects.tsx
const response = await fetch('https://api.github.com/users/your-username/repos?sort=updated&per_page=4');
```

## 📱 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Me** - Personal bio, skills, and profile photo
3. **Projects** - Latest GitHub repositories with live links
4. **Contact** - Contact form and social media links
5. **Footer** - Additional links and information

## 🌟 Performance Features

- **Lazy Loading**: Components load efficiently
- **Optimized Images**: Compressed assets for faster loading
- **Minimal Bundle**: Tree-shaking and code splitting
- **Smooth Animations**: Hardware-accelerated CSS animations

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - DOM bindings for React
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - Utility-first CSS framework
- `@phosphor-icons/react` - Icon library
- `animejs` - Animation library

### Utilities
- `react-helmet-async` - SEO meta tag management
- `random` - Random number generation for animations

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react-swc` - Fast React refresh
- `eslint` - Code linting
- `typescript-eslint` - TypeScript linting rules

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deployment Steps
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your domain and SSL (if needed)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Contact

- **Email**: alexandrubunea03.contact@gmail.com
- **LinkedIn**: [/in/alexandruwbunea](https://www.linkedin.com/in/alexandruwbunea/)
- **GitHub**: [/alexandrubunea](https://github.com/alexandrubunea)

---

⭐ If you found this project helpful, please give it a star on GitHub!