import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Star, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function AdminDashboard() {
  const [servicesCount, testimonialsCount, blogsCount, messagesCount, unreadMessages] = await Promise.all([
    prisma.service.count(),
    prisma.testimonial.count(),
    prisma.blog.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { read: false } }),
  ]);

  const recentMessages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  const stats = [
    {
      title: 'Total Services',
      value: servicesCount,
      icon: Package,
      href: '/admin/services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Testimonials',
      value: testimonialsCount,
      icon: Star,
      href: '/admin/testimonials',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Blog Posts',
      value: blogsCount,
      icon: FileText,
      href: '/admin/blog',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Messages',
      value: messagesCount,
      icon: MessageSquare,
      href: '/admin/messages',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      badge: unreadMessages > 0 ? unreadMessages : undefined,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  {stat.badge && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                      {stat.badge} new
                    </span>
                  )}
                </div>
                <Link href={stat.href}>
                  <Button variant="link" className="mt-2 p-0 h-auto text-blue-600">
                    View all →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {recentMessages.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No messages yet</p>
          ) : (
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg border ${
                    message.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{message.name}</h3>
                        {!message.read && (
                          <span className="px-2 py-0.5 bg-blue-600 text-white rounded-full text-xs">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{message.email}</p>
                      {message.company && (
                        <p className="text-sm text-gray-500">{message.company}</p>
                      )}
                      <p className="text-gray-700 mt-2 line-clamp-2">{message.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
              <Link href="/admin/messages">
                <Button variant="outline" className="w-full">
                  View All Messages
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/services/new">
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                Add New Service
              </Button>
            </Link>
            <Link href="/admin/blog/new">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Create Blog Post
              </Button>
            </Link>
            <Link href="/admin/testimonials/new">
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/" target="_blank">
              <Button variant="outline" className="w-full justify-start">
                View Website →
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button variant="outline" className="w-full justify-start">
                Site Settings →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
