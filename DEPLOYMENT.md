# ASTU Lost & Found - Deployment Guide

## Quick Start Deployment

### Option 1: Railway + Vercel (Recommended)

#### Backend Deployment (Railway)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub repo"
   - Select your repository
   - Railway will automatically detect your backend

3. **Set Environment Variables in Railway:**
   ```
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/astu_lost_found_prod
   JWT_SECRET=your-super-secure-production-secret-key
   FRONTEND_URL=https://your-frontend.vercel.app
   INITIAL_ADMIN_EMAIL=admin@yourdomain.com
   INITIAL_ADMIN_PASSWORD=your-secure-password
   ```

#### Frontend Deployment (Vercel)

1. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your project

2. **Set Environment Variables in Vercel:**
   ```
   VITE_API_URL=https://your-backend-railway-app.up.railway.app
   ```

3. **Configure Project Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: `Other`

### Option 2: All-in-One Platform (Render.com)

1. **Deploy Backend:**
   - Go to [render.com](https://render.com)
   - Create Web Service
   - Connect GitHub repository
   - Set build command: `npm install && npm start`
   - Set environment variables

2. **Deploy Frontend:**
   - Create Static Site
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## Environment Setup

### Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account:**
   - Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create free cluster
   - Set up database user
   - Configure network access (allow all IPs for testing)

2. **Get Connection String:**
   - Go to Database Access
   - Copy connection string
   - Replace `<password>` with your database user password

### Environment Variables

#### Backend (.env)
```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/astu_lost_found_prod
JWT_SECRET=your-super-secure-production-secret-key
FRONTEND_URL=https://your-frontend.vercel.app
INITIAL_ADMIN_EMAIL=admin@yourdomain.com
INITIAL_ADMIN_PASSWORD=your-secure-password
```

#### Frontend (.env.production)
```env
VITE_API_URL=https://your-backend-railway-app.up.railway.app
VITE_APP_NAME=ASTU Lost & Found
VITE_APP_VERSION=1.0.0
```

## Testing Your Deployment

### 1. Test Backend
Visit your backend URL (e.g., `https://your-backend.up.railway.app/ping`)
Should return: `{"message": "Server is running"}`

### 2. Test Frontend
Visit your frontend URL (e.g., `https://your-frontend.vercel.app`)
Should load the React application

### 3. Test Full Flow
1. Register a new user
2. Log in
3. Report a lost item
4. Report a found item
5. Test admin features

## Troubleshooting

### Common Issues

**404 Errors on Vercel:**
- Ensure `vercel.json` is in your frontend directory
- Check build command is `npm run build`
- Verify `dist` directory is created

**CORS Errors:**
- Check `FRONTEND_URL` environment variable
- Ensure CORS is configured correctly in backend

**Database Connection Issues:**
- Verify MongoDB connection string
- Check network access settings
- Ensure database user has proper permissions

**Authentication Issues:**
- Verify JWT_SECRET is the same in all environments
- Check token expiration settings

### Build Commands

**Local Development:**
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev
```

**Production Build:**
```bash
# Frontend
cd frontend
npm run build
```

## Security Notes

- ✅ **Debug code removed** from all files
- ⚠️ **Change JWT_SECRET** before production
- ⚠️ **Use strong database passwords**
- ⚠️ **Configure proper CORS origins**
- ⚠️ **Enable HTTPS** in production

## Performance Optimization

- ✅ **Vite build optimization** configured
- ✅ **Code splitting** implemented
- ✅ **Bundle analysis** available
- ✅ **Compression** enabled

## Monitoring

- **Railway**: Built-in monitoring and logs
- **Vercel**: Analytics and performance monitoring
- **MongoDB Atlas**: Database performance metrics

## Support

For deployment issues:
1. Check the logs in your deployment platform
2. Verify environment variables are set correctly
3. Test API endpoints with tools like Postman
4. Check browser developer console for frontend errors