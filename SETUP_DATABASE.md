# Quick Database Setup (2 minutes)

Your app needs a PostgreSQL database. Here are the **fastest** options:

## Option 1: Neon (Recommended - Free Forever)

1. Go to **https://neon.tech**
2. Click "Sign Up" (use GitHub login - 1 click)
3. Create a new project (default settings are fine)
4. Copy the connection string shown
5. Paste it in your `.env` file as `DATABASE_URL`

**Example:**
```bash
DATABASE_URL="postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

## Option 2: Supabase (Also Free)

1. Go to **https://supabase.com**
2. Click "Start your project" → Sign in with GitHub
3. Click "New Project"
4. After creation, go to "Settings" → "Database"
5. Copy the "Connection string" → "URI" format
6. Paste it in your `.env` file as `DATABASE_URL`

## Option 3: Railway (Free Trial)

1. Go to **https://railway.app**
2. Sign up with GitHub
3. Click "New Project" → "Provision PostgreSQL"
4. Click on the PostgreSQL service
5. Go to "Connect" tab
6. Copy the "Postgres Connection URL"
7. Paste it in your `.env` file as `DATABASE_URL`

---

## After Setting Up Database

Once you've updated the `DATABASE_URL` in `.env`, run:

```bash
npx prisma migrate dev --name init
npm run seed
npm run dev
```

Then visit **http://localhost:3000** 🎉

---

## Need Help?

If you get stuck, you can:
1. Use Neon - it's the simplest (literally 2 clicks after signup)
2. Let me know and I can help troubleshoot
