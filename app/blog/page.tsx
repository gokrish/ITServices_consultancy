import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Calendar, Eye } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog',
  description: 'Insights, guides, and best practices from GK IT Consulting experts.',
};

export default async function BlogPage() {
  let blogs = [];
  try {
    blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and best practices from our experts
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {blogs.length === 0 ? (
              <p className="text-center text-gray-500 py-12">No blog posts yet. Check back soon!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                      {blog.image && (
                        <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <CardHeader className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          {blog.publishedAt && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(blog.publishedAt)}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {blog.views} views
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2 mb-2">{blog.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {blog.category && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {blog.category}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
