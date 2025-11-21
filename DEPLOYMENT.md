# Deployment Guide - GK IT Consulting Website

## Prerequisites
- GitHub account
- Vercel account
- Supabase or Neon account (PostgreSQL database)
- Gmail or SMTP email service

## Step-by-Step Deployment

### 1. Setup Database (Supabase)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Wait for database to initialize
4. Go to Project Settings → Database
5. Copy the **Connection String** (URI format)
6. **Important:** Replace `[YOUR-PASSWORD]` with your actual password in the connection string
7. Example: `postgresql://postgres:yourpassword@db.xxxx.supabase.co:5432/postgres`

### 2. Setup Storage (Supabase - Optional)

1. Go to Storage in Supabase dashboard
2. Create a new bucket named `images`
3. Make it public:
   - Click on bucket → Policies
   - Add policy: "Enable read access for all users"
4. Get your credentials:
   - Project Settings → API
   - Copy **URL** and **anon/public key**

### 3. Setup Email (Gmail)

1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/security
3. Under "2-Step Verification" → "App passwords"
4. Generate an app password for "Mail"
5. Copy the 16-character password (remove spaces)

### 4. Push Code to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - GK IT Consulting"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 5. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure Project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: Leave default
   - Output Directory: Leave default

5. **Add Environment Variables:**

Click "Environment Variables" and add these:

```env
DATABASE_URL
postgresql://postgres:password@db.xxx.supabase.co:5432/postgres

NEXTAUTH_URL
https://your-project.vercel.app

NEXTAUTH_SECRET
[Generate with: openssl rand -base64 32]

NEXT_PUBLIC_SUPABASE_URL
https://xxx.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
your-anon-key-here

SUPABASE_SERVICE_ROLE_KEY
your-service-role-key

EMAIL_SERVER_HOST
smtp.gmail.com

EMAIL_SERVER_PORT
587

EMAIL_SERVER_USER
your-email@gmail.com

EMAIL_SERVER_PASSWORD
your-16-char-app-password

EMAIL_FROM
noreply@yourdomain.com

EMAIL_TO
admin@yourdomain.com
```

6. Click **Deploy**

### 6. Setup Database in Production

After Vercel deployment completes:

**Option A: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run migrations
npx prisma migrate deploy

# Seed database
npx tsx prisma/seed.ts
```

**Option B: Using Vercel Dashboard**
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add a temporary variable:
   ```
   RUN_SEED=true
   ```
4. Redeploy the project
5. The seed will run automatically on build

### 7. Generate NEXTAUTH_SECRET

In your terminal:
```bash
openssl rand -base64 32
```

Copy the output and use it for `NEXTAUTH_SECRET`

### 8. Update Domain in Settings

After deployment:
1. Go to Vercel project settings
2. Update `NEXTAUTH_URL` to your actual Vercel URL:
   - Example: `https://your-project.vercel.app`
3. Redeploy if needed

### 9. Test Your Website

1. Visit your Vercel URL
2. Test public pages
3. Go to `/admin/login`
4. Login with:
   - Email: admin@gkit-consulting.com
   - Password: admin123
5. **Change password immediately!**

## Custom Domain Setup (Optional)

### Using Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed
4. Update `NEXTAUTH_URL` to your custom domain
5. Redeploy

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Admin login works
- [ ] Database queries work
- [ ] Contact form sends emails
- [ ] Images upload (if using Supabase storage)
- [ ] Change default admin password
- [ ] Test on mobile devices
- [ ] Check SEO meta tags
- [ ] Submit sitemap to Google Search Console

## Troubleshooting

### Build Errors

**Issue:** Prisma client not found
```bash
# Solution: Ensure postinstall script runs
npm run postinstall
```

**Issue:** Module not found
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Database Issues

**Issue:** Can't connect to database
- Verify DATABASE_URL is correct
- Check if database exists
- Ensure IP is whitelisted (if using restrictions)

**Issue:** Migration errors
```bash
# Reset and remigrate
npx prisma migrate reset
npx prisma migrate deploy
```

### Email Issues

**Issue:** Emails not sending
- Verify Gmail app password (not regular password)
- Check SMTP settings
- Ensure 2FA is enabled on Gmail
- Try sending test email manually

### Authentication Issues

**Issue:** Can't login to admin
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches deployment URL
- Clear browser cookies

## Environment Variables Quick Reference

| Variable | Where to Get | Required |
|----------|--------------|----------|
| DATABASE_URL | Supabase/Neon Dashboard | ✅ Yes |
| NEXTAUTH_URL | Your Vercel URL | ✅ Yes |
| NEXTAUTH_SECRET | Generate with openssl | ✅ Yes |
| NEXT_PUBLIC_SUPABASE_URL | Supabase Dashboard | ✅ Yes |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase Dashboard | ✅ Yes |
| EMAIL_SERVER_HOST | smtp.gmail.com | ✅ Yes |
| EMAIL_SERVER_USER | Your Gmail | ✅ Yes |
| EMAIL_SERVER_PASSWORD | Gmail App Password | ✅ Yes |

## Monitoring & Maintenance

### Check Logs
- Vercel Dashboard → Logs
- Monitor build logs
- Check runtime logs for errors

### Database Maintenance
```bash
# Backup database
npx prisma db pull

# View data
npx prisma studio
```

### Performance
- Monitor Vercel Analytics
- Check Core Web Vitals
- Optimize images if needed

## Updates & Redeployment

```bash
# Pull latest changes
git pull

# Make changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update description"
git push

# Vercel auto-deploys on push
```

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Prisma Docs:** https://www.prisma.io/docs
- **Supabase Docs:** https://supabase.com/docs

## Success! 🎉

Your IT consultancy website is now live and ready to attract clients!

Don't forget to:
1. Change the default admin password
2. Customize content via admin panel
3. Add your own services and testimonials
4. Start writing blog posts
5. Share your website!
