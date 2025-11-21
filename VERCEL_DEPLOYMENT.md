# Vercel Deployment Checklist

## Environment Variables Required

Go to your Vercel Project → Settings → Environment Variables and add:

### 1. Database Configuration
**DATABASE_URL** (CRITICAL - Use connection pooling for Vercel)
```
postgresql://postgres:xectah-hUpkug-juqmy5@db.cccceehzwjnxigquawif.supabase.co:6543/postgres?pgbouncer=true
```
⚠️ **Important**: 
- Port must be **6543** (not 5432)
- Must include **?pgbouncer=true** parameter
- This is the Transaction Pooler connection from Supabase

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
   - Should return JSON with database connection status
   - If it fails, the DATABASE_URL is incorrect

2. **Home Page**: `https://your-app.vercel.app/`
   - Should load without errors
   - May show empty content if database connection fails

3. **Services**: `https://your-app.vercel.app/services`
4. **Blog**: `https://your-app.vercel.app/blog`
5. **Testimonials**: `https://your-app.vercel.app/testimonials`

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
