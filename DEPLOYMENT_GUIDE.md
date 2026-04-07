# Temp Job Marketplace - Production Deployment Guide

## Overview
This is a production-ready Next.js application configured for deployment on Vercel with a Node.js backend.

**Status**: ✅ Ready for deployment  
**Platform**: Vercel (recommended)  
**Framework**: Next.js 14  
**Backend API**: http://10.0.2.2:4000 (development)

---

## Quick Start (Development)

### Prerequisites
- Node.js 18+ (check with `node --version`)
- npm or yarn
- Git

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Deployment to Vercel

### Step 1: Prepare Your Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - production ready"
git push origin main
```

### Step 2: Setup Vercel Project

#### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New → Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### Option B: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Step 3: Set Environment Variables

In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add the following:

```
NEXT_PUBLIC_API_URL=https://api.yourbackend.com
API_SECRET_KEY=your-secret-key
NEXT_PUBLIC_APP_NAME=Temp Job Marketplace
```

**Development**: `NEXT_PUBLIC_API_URL=http://10.0.2.2:4000`  
**Production**: `NEXT_PUBLIC_API_URL=https://api.yourdomain.com`

### Step 4: Configure GitHub Actions (CI/CD)

Vercel automatically detects and deploys on push to main branch.

For manual CI/CD, add Vercel secrets to GitHub:
1. Go to GitHub Repo → Settings → Secrets and variables → Actions
2. Add secrets:
   - `VERCEL_TOKEN` (from Vercel account settings)
   - `VERCEL_ORG_ID` (from Vercel account settings)
   - `VERCEL_PROJECT_ID` (from Vercel project settings)

---

## Production Checklist

### Before Deployment
- [ ] All environment variables set in `.env.example` → Vercel Dashboard
- [ ] Backend API is accessible and running
- [ ] Test all screens with backend API
- [ ] Run `npm run build` locally succeeds
- [ ] No console errors or warnings
- [ ] Mobile responsive tested (375px, 768px, 1024px)
- [ ] Forms submit correctly

### Backend Configuration
The app expects backend at: `NEXT_PUBLIC_API_URL` environment variable

**Default (Development)**: `http://10.0.2.2:4000`  
**Production**: Update to your production API URL

Required endpoints:
- `POST /auth/login`
- `POST /auth/register`
- `GET /jobs`
- `GET /jobs/:id`
- `POST /applications`
- `GET /profile`

### Security Checklist
- [ ] API HTTPS enabled in production
- [ ] CORS configured on backend
- [ ] Rate limiting enabled
- [ ] API authentication (JWT tokens) working
- [ ] No sensitive data in client-side code
- [ ] Environment variables not exposed

---

## Available Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start              # Start production server (local)
npm run lint           # Run ESLint
npm run lint:fix       # Fix linting issues
npm run type-check     # TypeScript checks
npm run format         # Format code with Prettier

# Deployment
npm run deploy         # Deploy to Vercel (preview)
npm run deploy:prod    # Deploy to Vercel (production)
```

---

## Monitoring & Logs

### Vercel Dashboard
- Deployments: Monitor build status
- Analytics: Core Web Vitals, traffic
- Logs: Real-time function logs

### GitHub Actions
- View workflows: `.github/workflows/`
- Check deployment status on pull requests

---

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### API Connection Issues
1. Check `NEXT_PUBLIC_API_URL` environment variable
2. Verify backend API is running
3. Check CORS headers on backend
4. Review network tab in browser DevTools

### Performance Issues
```bash
# Check bundle size
npm run build

# Lighthouse audit (Chrome DevTools)
# Ctrl+Shift+I → Lighthouse tab
```

---

## Rollback

If deployment has issues:

**Via Vercel Dashboard**:
1. Go to Deployments
2. Click on previous successful deployment
3. Click "Promote to Production"

**Via Vercel CLI**:
```bash
# List deployments
vercel list

# Rollback to specific deployment
vercel rollback
```

---

## Scaling & Performance

### Database/Backend
- Ensure backend can handle traffic
- Use connection pooling
- Enable caching headers
- Monitor database performance

### Frontend (Vercel)
- Automatic global CDN distribution
- Image optimization
- Automatic code splitting
- Edge caching

### Monitoring
Vercel provides:
- Real-time analytics
- Error tracking
- Performance metrics
- Deployment logs

---

## Regional Deployment

Edit `vercel.json` to specify regions:
```json
{
  "regions": ["sfo1"],  // San Francisco
  // Other options: iad1, hnd1, syd1, etc.
}
```

---

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided by Vercel)
4. Wait for DNS propagation (~24 hours)

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Check repository issues
- **Vercel Support**: support@vercel.com

---

## Deployment Summary

| Item | Details |
|------|---------|
| **Host** | Vercel |
| **Framework** | Next.js 14 |
| **Backend** | Node.js + Database |
| **CDN** | Vercel Global CDN |
| **SSL** | Automatic |
| **CI/CD** | GitHub Actions |
| **Environment** | Automatic preview + production |

---

## Next Steps

1. ✅ Setup Vercel project
2. ✅ Configure environment variables
3. ✅ Deploy to preview (test)
4. ✅ Promote to production
5. ✅ Monitor analytics and errors
6. ✅ Setup custom domain

**Duration**: 15-30 minutes for first deployment

---

**Created**: April 7, 2026  
**Status**: Production Ready ✅

