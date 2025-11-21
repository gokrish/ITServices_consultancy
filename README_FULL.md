# GK IT Consulting Website

A modern, full-featured IT consultancy website built with Next.js 14, TypeScript, Prisma, and Supabase. Features a complete CMS, admin dashboard, contact forms, blog, and SEO optimization.

## 🚀 Features

### Public Website
- **Homepage** with hero section, services preview, testimonials, and CTAs
- **Services** pages with detailed information, deliverables, and process
- **About** page with company info, mission, and values
- **Testimonials** showcase with ratings
- **Blog** with full articles and categories
- **Contact** form with email notifications
- Fully responsive and mobile-first design
- SEO optimized with meta tags, Open Graph, and sitemap

### Admin Dashboard
- Secure authentication with NextAuth
- **Services Management** (CRUD operations)
- **Testimonials Management** (CRUD operations)
- **Blog Management** (Create, edit, publish blog posts)
- **Contact Messages** inbox with read/unread status
- **Site Content** editor for homepage and about page
- Beautiful UI with ShadCN components

### Technical Features
- Server-side rendering (SSR)
- Static site generation (SSG) for optimal performance
- PostgreSQL database with Prisma ORM
- Image upload with Supabase Storage
- Email notifications with Nodemailer
- Type-safe with TypeScript
- Modern UI with Tailwind CSS and ShadCN UI
- Animated components with Framer Motion

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase or Neon)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Email:** Nodemailer
- **Storage:** Supabase Storage
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (Supabase or Neon account)
- Git

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd itservices-consultancy
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your actual credentials:

```env
# Database (Get from Supabase or Neon)
DATABASE_URL="postgresql://user:password@host:5432/dbname?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Supabase (Get from Supabase Dashboard)
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Email (Gmail or SMTP)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@gkit-consulting.com"
EMAIL_TO="admin@gkit-consulting.com"
```

#### Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Step 4: Set Up Database

#### Run Prisma Migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

#### Seed the Database

```bash
npm run seed
```

This will create:
- Admin user (email: admin@gkit-consulting.com, password: admin123)
- Sample services
- Sample testimonials
- Sample blog posts
- Site content

### Step 5: Set Up Supabase Storage (Optional)

1. Go to Supabase Dashboard
2. Create a new bucket called `images`
3. Set bucket to public
4. Add your Supabase credentials to `.env`

### Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Access

After seeding, you can log in to the admin dashboard:

- **URL:** http://localhost:3000/admin/login
- **Email:** admin@gkit-consulting.com
- **Password:** admin123

**⚠️ Important:** Change the default password immediately after first login!

## 📁 Project Structure

```
itservices-consultancy/
├── app/
│   ├── admin/              # Admin dashboard pages
│   │   ├── login/          # Admin login
│   │   ├── services/       # Service management
│   │   ├── blog/           # Blog management
│   │   └── messages/       # Contact messages
│   ├── api/                # API routes
│   │   ├── auth/           # NextAuth endpoints
│   │   ├── services/       # Services API
│   │   └── contact/        # Contact form API
│   ├── services/           # Public services pages
│   ├── blog/               # Public blog pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── testimonials/       # Testimonials page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── navbar.tsx          # Navigation bar
│   └── footer.tsx          # Footer
├── lib/
│   ├── prisma.ts           # Prisma client
│   ├── auth.ts             # NextAuth config
│   ├── utils.ts            # Utility functions
│   ├── email.ts            # Email service
│   └── supabase.ts         # Supabase client
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Seed script
├── public/                 # Static assets
├── .env.example            # Environment template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind config
├── next.config.mjs         # Next.js config
└── tsconfig.json           # TypeScript config
```

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables (copy from .env)
5. Deploy

### Step 3: Set Up Production Database

1. Create a production database on Supabase or Neon
2. Add production DATABASE_URL to Vercel environment variables
3. Run migrations in Vercel CLI or dashboard:

```bash
vercel env pull .env.local
npx prisma migrate deploy
```

### Step 4: Update URLs

Update these in Vercel environment variables:
- `NEXTAUTH_URL` → Your Vercel domain
- `EMAIL_FROM` → Your production email
- `EMAIL_TO` → Your production email

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-factor authentication on Gmail
2. Generate an App Password:
   - Go to Google Account → Security
   - Under "2-Step Verification", select "App passwords"
   - Generate password for "Mail"
3. Use generated password in `EMAIL_SERVER_PASSWORD`

### Alternative: SendGrid, Resend, or other SMTP

Update EMAIL_SERVER_* variables accordingly.

## 🎨 Customization

### Change Company Name and Branding

1. Update seed data in `prisma/seed.ts`
2. Modify site content in admin dashboard
3. Update metadata in `app/layout.tsx`

### Add New Services

1. Go to Admin Dashboard → Services
2. Click "Add New Service"
3. Fill in details and publish

### Customize Styling

- Colors: Edit `tailwind.config.ts`
- Global styles: Edit `app/globals.css`
- Components: Modify files in `components/`

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run seed         # Seed database
npx prisma studio    # Open Prisma Studio (DB GUI)
npx prisma migrate dev  # Create new migration
```

## 📊 Database Management

### View Database
```bash
npx prisma studio
```

### Create Migration
```bash
npx prisma migrate dev --name your-migration-name
```

### Reset Database (⚠️ Deletes all data)
```bash
npx prisma migrate reset
```

## 🐛 Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if PostgreSQL is running
- Ensure database exists

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check `node_modules` folder is not corrupted
- Verify TypeScript has no errors

### Email Not Sending
- Verify SMTP credentials
- Check EMAIL_SERVER_* variables
- Ensure less secure app access is enabled (Gmail)

## 📝 License

MIT License - feel free to use this project for your own consultancy!

## 🤝 Support

For issues or questions:
- Open an issue on GitHub
- Contact: admin@gkit-consulting.com

## ✨ Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
