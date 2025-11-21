# Vercel Deployment Checklist

## Environment Variables Required

Go to your Vercel Project → Settings → Environment Variables and add:

### 1. Database Configuration
**DATABASE_URL** (CRITICAL)
```
postgresql://postgres:xectah-hUpkug-juqmy5@db.cccceehzwjnxigquawif.supabase.co:5432/postgres?sslmode=require
```
⚠️ **Important**: 
- Port must be **5432** (direct connection)
- Must include **?sslmode=require** parameter
- This is the direct connection from Supabase (Session mode)
- The pooler (port 6543) seems to have connectivity issues from Vercel

### 2. NextAuth Configuration
**NEXTAUTH_URL**
```
https://your-app-name.vercel.app
```
Replace `your-app-name` with your actual Vercel domain

**NEXTAUTH_SECRET**
```
I4p/I9qBYfQWnlSty/cCA0mqpseAH8EniYv/3qTRTG4=
```

### 3. Email Configuration (Resend)
**RESEND_API_KEY**
```
re_4omwXnLY_7bwBKnT2MSwFRbAB7FJw8xaR
```

**EMAIL_FROM**
```
noreply@gkit-consulting.com
```

**EMAIL_TO**
```
admin@gkit-consulting.com
```

## After Setting Environment Variables

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **⋯** (three dots) menu
4. Click **Redeploy**
5. Check "Use existing Build Cache" is UNCHECKED
6. Click **Redeploy**

## Testing the Deployment

After deployment, test these URLs:

1. **Health Check**: `https://your-app.vercel.app/api/health`
   - Should return JSON with `"status": "healthy"` and `"database": "connected"`
   - **If it shows `"database": "disconnected"`**, the DATABASE_URL is incorrect

2. **Home Page**: `https://your-app.vercel.app/`
   - Should load with services, testimonials, and hero content
   - **If page is empty or minimal**, database connection is failing

3. **Services**: `https://your-app.vercel.app/services`
4. **Blog**: `https://your-app.vercel.app/blog`
5. **Testimonials**: `https://your-app.vercel.app/testimonials`
6. **Contact Form**: Fill out and submit - should send email and save to database
   - **If it fails**, check RESEND_API_KEY is valid

## Troubleshooting

### If you see "Application error: a server-side exception has occurred"

1. Check the health endpoint first: `/api/health`
2. Look at the browser console for error details
3. Check Vercel function logs:
   - Go to your project → Deployments
   - Click on the deployment
   - Click on "Functions" tab
   - Look for error logs

### Common Issues

**"Pages show but content is empty/missing"**
- ✅ Check `/api/health` endpoint - if database is disconnected, that's the issue
- ✅ Verify DATABASE_URL uses port **6543** with **?pgbouncer=true**
- ✅ Check Vercel function logs for database errors
- ✅ Verify your Supabase database has data (run `npm run seed` locally first)

**"Contact form: Failed to send message"**
- ✅ Verify RESEND_API_KEY in Vercel is valid (should start with `re_`)
- ✅ Get a new API key from https://resend.com/api-keys if needed
- ✅ Check EMAIL_FROM domain is verified in Resend dashboard
- ✅ Look at Vercel function logs for the actual error

**Database Connection Failed**
- ✅ Verify DATABASE_URL uses port **6543** with **?pgbouncer=true**
- ✅ Verify your Supabase password is correct
- ✅ Make sure your Supabase project is not paused

**NextAuth Errors**
- ✅ Verify NEXTAUTH_URL matches your production domain
- ✅ Verify NEXTAUTH_SECRET is set

**Empty Pages**
- ✅ Database is connected but no data seeded
- ✅ Run `npm run seed` locally if you haven't already

## Getting the Supabase Pooler URL

1. Go to your Supabase project dashboard
2. Click on "Project Settings" (gear icon)
3. Click on "Database"
4. Under "Connection string" section
5. Select "Transaction" mode (port 6543)
6. Copy the connection string
7. Replace `[YOUR-PASSWORD]` with: `xectah-hUpkug-juqmy5`
8. Add `?pgbouncer=true` at the end

The final URL should look like:
```
postgresql://postgres:xectah-hUpkug-juqmy5@db.cccceehzwjnxigquawif.supabase.co:6543/postgres?pgbouncer=true
```
