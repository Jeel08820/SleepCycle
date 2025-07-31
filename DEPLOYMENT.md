# Sleep Calculator - Deployment Guide

This guide covers multiple deployment options for the Sleep Calculator app, ranging from free to low-cost solutions.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended - Free Tier)

**Cost:** Free for personal projects
**Features:** Automatic deployments, global CDN, serverless functions

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the [Vercel Dashboard](https://vercel.com) to connect your GitHub repository.

### 2. Netlify (Free Tier)

**Cost:** Free for personal projects
**Features:** Continuous deployment, form handling, edge functions

1. Push your code to GitHub
2. Connect repository at [Netlify](https://netlify.com)
3. Build settings are automatically configured via `netlify.toml`

### 3. Railway (Low Cost)

**Cost:** $5/month for hobby plan
**Features:** Persistent storage, custom domains, automatic scaling

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway deploy
```

### 4. Render (Free Tier Available)

**Cost:** Free tier available, paid plans start at $7/month
**Features:** Auto-deploy from Git, custom domains, SSL

1. Connect your GitHub repository at [Render](https://render.com)
2. Choose "Web Service"
3. Use these settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`

### 5. DigitalOcean App Platform

**Cost:** Starting at $5/month
**Features:** Managed infrastructure, auto-scaling, monitoring

1. Create app at [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Connect GitHub repository
3. App will auto-detect Node.js and use Dockerfile

## 🐳 Docker Deployment

For any platform supporting Docker:

```bash
# Build image
docker build -t sleep-calculator .

# Run container
docker run -p 5000:5000 sleep-calculator
```

## 📋 Pre-deployment Checklist

- [ ] Code is pushed to GitHub/GitLab
- [ ] All dependencies are in `package.json`
- [ ] Build command works locally: `npm run build`
- [ ] Start command works: `npm start`
- [ ] No hardcoded localhost URLs in code

## 🔧 Environment Variables

The app works without environment variables, but you can set:

- `NODE_ENV=production` (automatically set by most platforms)
- `PORT` (automatically set by most platforms)

## 💡 Cost Optimization Tips

1. **Use Free Tiers First:** Vercel and Netlify offer generous free tiers
2. **Static Hosting:** Consider converting to a pure client-side app for even cheaper hosting
3. **CDN Benefits:** Most platforms include global CDN for faster loading
4. **Auto-scaling:** Serverless functions scale to zero when not in use

## 🔍 Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility (app uses Node 18+)
- Verify build command: `npm run build`

### App Won't Start
- Check start command: `npm start`
- Ensure port is configurable: `process.env.PORT || 5000`
- Verify all files are included in deployment

### API Routes Not Working
- Check platform-specific routing configuration
- Ensure API routes are properly configured in deployment settings
- Verify serverless function setup for platforms like Vercel/Netlify

## 📞 Support

For deployment issues:
1. Check platform-specific documentation
2. Verify the app runs locally with `npm run dev`
3. Check deployment logs in your platform's dashboard

---

**Recommended for beginners:** Start with Vercel or Netlify for the easiest deployment experience.