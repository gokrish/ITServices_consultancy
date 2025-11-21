import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Calendar, Eye, User } from 'lucide-react';

export async function generateStaticParams() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug, published: true },
  });

  if (!blog) {
    notFound();
  }

  // Increment view count
  await prisma.blog.update({
    where: { id: blog.id },
    data: { views: { increment: 1 } },
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
            ← Back to Blog
          </Link>

          {blog.image && (
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-8">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              {blog.publishedAt && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blog.publishedAt)}
                </span>
              )}
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {blog.views} views
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.category && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              )}
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{line.substring(4)}</h3>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4 text-gray-700">{line}</p>;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
