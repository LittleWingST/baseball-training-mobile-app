# Deployment Guide

## GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `baseball-training-mobile-app`
4. Description: "Mobile baseball training app with practice drills and performance tracking"
5. Make it **Public** (for GitHub Pages) or **Private**
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Local Repository to GitHub
```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/baseball-training-mobile-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages (Free Hosting)
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in left sidebar
4. Source: "Deploy from a branch"
5. Branch: `main` / `/ (root)`
6. Click "Save"
7. Your app will be available at: `https://YOUR_USERNAME.github.io/baseball-training-mobile-app/`

## Alternative Deployment Options

### Netlify (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or "/")
6. Click "Deploy site"
7. Get custom domain: `yourapp.netlify.app`

### Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Deploy with default settings
6. Get domain: `yourapp.vercel.app`

### Local Development Server
```bash
# Option 1: Python
python3 -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js
npx serve .
# Visit: http://localhost:3000

# Option 3: Live Server (VS Code extension)
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

## Domain Configuration (Optional)

### Custom Domain Setup
1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Update DNS settings:
   - **For GitHub Pages**: Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - **For Netlify**: Add CNAME record pointing to your Netlify domain
   - **For Vercel**: Add CNAME record pointing to your Vercel domain

### SSL Certificate
- GitHub Pages: Automatic HTTPS
- Netlify: Automatic HTTPS
- Vercel: Automatic HTTPS

## Performance Optimization

### Image Optimization
- Current: PNG icons (good for quality)
- Consider: WebP format for better compression
- Add: Lazy loading for images

### CDN Links
Current CDN dependencies:
- React 18: `https://unpkg.com/react@18/umd/react.production.min.js`
- ReactDOM: `https://unpkg.com/react-dom@18/umd/react-dom.production.min.js`
- Babel: `https://unpkg.com/@babel/standalone/babel.min.js`
- Tailwind: `https://cdn.tailwindcss.com`

### Mobile Optimization
- ✅ Viewport meta tag configured
- ✅ Touch-friendly interactions
- ✅ iOS-style navigation
- ✅ Responsive design

## Security Considerations

### Content Security Policy (Optional)
Add to `<head>` for enhanced security:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.tailwindcss.com https://fonts.googleapis.com">
```

### HTTPS Only
- GitHub Pages: Automatic
- Netlify: Automatic
- Vercel: Automatic

## Monitoring & Analytics

### Google Analytics (Optional)
Add tracking code to `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Troubleshooting

### Common Issues
1. **Icons not loading**: Check file paths in `public/icons/`
2. **CSS not applying**: Verify Tailwind CDN link
3. **JavaScript errors**: Check browser console for React errors
4. **Mobile layout issues**: Test on actual devices

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ❌ IE (not supported)

## Future Enhancements

### Development Setup
For future development with build tools:
```bash
# Initialize npm project
npm init -y

# Install development dependencies
npm install -D tailwindcss postcss autoprefixer
npm install -D @babel/core @babel/preset-react
npm install -D webpack webpack-cli webpack-dev-server

# Install React dependencies
npm install react react-dom
```

### Progressive Web App (PWA)
- Add service worker
- Configure manifest.json
- Enable offline functionality
- Add push notifications

---

**Ready to deploy!** 🚀
Your baseball training app is now ready for production deployment.