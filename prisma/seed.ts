import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gkit-consulting.com' },
    update: {},
    create: {
      email: 'admin@gkit-consulting.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create site content
  const siteContent = [
    {
      key: 'home_hero_title',
      title: 'Hero Title',
      content: 'Empowering Businesses with Scalable Technology Solutions',
    },
    {
      key: 'home_hero_subtitle',
      title: 'Hero Subtitle',
      content: 'We help companies build reliable systems, optimize infrastructure, implement cloud solutions, and automate workflows.',
    },
    {
      key: 'about_content',
      title: 'About Us',
      content: `GK IT Consulting is a leading technology consultancy specializing in cloud infrastructure, software development, and digital transformation. With years of experience across diverse industries, we deliver innovative solutions that drive business growth.

Our team of expert engineers and consultants brings deep technical expertise across cloud platforms, modern development frameworks, DevOps practices, and emerging technologies like AI and machine learning.

We pride ourselves on delivering high-quality, scalable solutions that not only meet current needs but are built to evolve with your business.`,
      metadata: {
        mission: 'To empower businesses with cutting-edge technology solutions that drive innovation and efficiency.',
        values: ['Excellence', 'Innovation', 'Integrity', 'Customer Success'],
      },
    },
  ];

  for (const content of siteContent) {
    await prisma.siteContent.upsert({
      where: { key: content.key },
      update: content,
      create: content,
    });
  }
  console.log('✅ Site content created');

  // Create services
  const services = [
    {
      title: 'Cloud Consulting',
      slug: 'cloud-consulting',
      description: 'Transform your infrastructure with modern cloud solutions. We help businesses migrate to the cloud, optimize costs, and build scalable, secure cloud architectures on AWS, Azure, and Google Cloud Platform.',
      icon: 'Cloud',
      deliverables: [
        'Cloud migration strategy and execution',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Cost optimization analysis',
        'Security and compliance assessment',
        'Multi-cloud architecture design',
      ],
      process: [
        'Assessment: Analyze current infrastructure and business needs',
        'Strategy: Design cloud architecture and migration plan',
        'Implementation: Execute migration with minimal downtime',
        'Optimization: Fine-tune performance and costs',
        'Support: Ongoing monitoring and improvements',
      ],
      techStacks: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      faqs: [
        {
          question: 'How long does cloud migration take?',
          answer: 'Typically 2-6 months depending on infrastructure complexity.',
        },
        {
          question: 'Will there be downtime?',
          answer: 'We plan migrations to minimize downtime, often achieving zero-downtime migrations.',
        },
      ],
      featured: true,
      order: 1,
    },
    {
      title: 'Data Engineering',
      slug: 'data-engineering',
      description: 'Build robust data pipelines and analytics platforms. We design and implement modern data architectures that enable real-time insights, ML capabilities, and data-driven decision making.',
      icon: 'Database',
      deliverables: [
        'Data pipeline architecture and implementation',
        'ETL/ELT workflow automation',
        'Data warehouse design',
        'Real-time streaming solutions',
        'Data quality frameworks',
      ],
      process: [
        'Discovery: Understand data sources and requirements',
        'Design: Create scalable data architecture',
        'Build: Implement pipelines and transformations',
        'Validate: Ensure data quality and accuracy',
        'Monitor: Set up observability and alerts',
      ],
      techStacks: ['Apache Spark', 'Airflow', 'Snowflake', 'BigQuery', 'Kafka', 'dbt'],
      faqs: [
        {
          question: 'What data sources can you integrate?',
          answer: 'We work with databases, APIs, files, streams, and third-party platforms.',
        },
      ],
      featured: true,
      order: 2,
    },
    {
      title: 'Software Development',
      slug: 'software-development',
      description: 'Custom software solutions tailored to your business needs. From web applications to mobile apps and enterprise systems, we build scalable, maintainable software using modern frameworks and best practices.',
      icon: 'Code',
      deliverables: [
        'Full-stack web applications',
        'Mobile applications (iOS/Android)',
        'API development and integration',
        'Legacy system modernization',
        'Technical documentation',
      ],
      process: [
        'Requirements: Gather and document specifications',
        'Design: Create UI/UX and system architecture',
        'Development: Agile sprints with regular demos',
        'Testing: Comprehensive QA and user testing',
        'Deployment: Production launch and monitoring',
      ],
      techStacks: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL'],
      faqs: [
        {
          question: 'What is your development methodology?',
          answer: 'We use Agile/Scrum with 2-week sprints and continuous delivery.',
        },
      ],
      featured: true,
      order: 3,
    },
    {
      title: 'DevOps & CI/CD',
      slug: 'devops-cicd',
      description: 'Streamline your software delivery with modern DevOps practices. We implement automated pipelines, infrastructure as code, and monitoring solutions that accelerate deployment and improve reliability.',
      icon: 'Workflow',
      deliverables: [
        'CI/CD pipeline implementation',
        'Infrastructure automation',
        'Container orchestration',
        'Monitoring and observability',
        'Security automation (DevSecOps)',
      ],
      process: [
        'Audit: Review current deployment processes',
        'Design: Plan automation and tooling strategy',
        'Implement: Build and test pipelines',
        'Train: Knowledge transfer to your team',
        'Optimize: Continuous improvement',
      ],
      techStacks: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus'],
      faqs: [
        {
          question: 'How much faster will deployments be?',
          answer: 'Most clients see 5-10x faster deployment times with our CI/CD solutions.',
        },
      ],
      order: 4,
    },
    {
      title: 'Cybersecurity Assessment',
      slug: 'cybersecurity-assessment',
      description: 'Protect your business with comprehensive security assessments. We identify vulnerabilities, implement security best practices, and ensure compliance with industry standards.',
      icon: 'Shield',
      deliverables: [
        'Security vulnerability assessment',
        'Penetration testing',
        'Compliance audit (SOC 2, HIPAA, GDPR)',
        'Security policy development',
        'Incident response planning',
      ],
      process: [
        'Scope: Define assessment boundaries',
        'Scan: Automated and manual security testing',
        'Analyze: Identify and prioritize risks',
        'Report: Detailed findings and recommendations',
        'Remediate: Support fixing critical issues',
      ],
      techStacks: ['OWASP', 'Nessus', 'Burp Suite', 'Metasploit', 'SIEM tools'],
      order: 5,
    },
    {
      title: 'IT Support & Maintenance',
      slug: 'it-support-maintenance',
      description: 'Reliable ongoing support for your technology infrastructure. From helpdesk services to system maintenance, we keep your operations running smoothly.',
      icon: 'Headphones',
      deliverables: [
        '24/7 helpdesk support',
        'System monitoring and maintenance',
        'Performance optimization',
        'Backup and disaster recovery',
        'Software updates and patches',
      ],
      process: [
        'Onboard: Learn your systems and processes',
        'Monitor: Proactive system health checks',
        'Respond: Quick issue resolution',
        'Maintain: Regular updates and improvements',
        'Report: Monthly performance reports',
      ],
      techStacks: ['Various monitoring tools', 'Ticketing systems', 'Remote support tools'],
      order: 6,
    },
    {
      title: 'AI Automation Consulting',
      slug: 'ai-automation-consulting',
      description: 'Leverage AI to automate workflows and enhance decision-making. We help businesses implement practical AI solutions from chatbots to predictive analytics.',
      icon: 'Bot',
      deliverables: [
        'AI use case identification',
        'Custom AI model development',
        'Workflow automation',
        'Chatbot and virtual assistant implementation',
        'ML pipeline development',
      ],
      process: [
        'Discover: Identify automation opportunities',
        'Prototype: Build proof of concept',
        'Train: Develop and train AI models',
        'Integrate: Deploy into existing systems',
        'Optimize: Monitor and improve performance',
      ],
      techStacks: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Python', 'MLOps tools'],
      featured: true,
      order: 7,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log('✅ Services created');

  // Create testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechFlow Inc',
      role: 'CTO',
      feedback: 'GK IT Consulting transformed our cloud infrastructure. They migrated our entire platform to AWS with zero downtime and cut our cloud costs by 40%. Their expertise is unmatched.',
      rating: 5,
      featured: true,
      order: 1,
    },
    {
      name: 'Michael Chen',
      company: 'DataDrive Solutions',
      role: 'VP of Engineering',
      feedback: 'The data engineering team built us a robust pipeline that processes millions of events daily. Reliable and fast delivery on a complex project.',
      rating: 5,
      featured: true,
      order: 2,
    },
    {
      name: 'Emily Rodriguez',
      company: 'FinanceHub',
      role: 'CEO',
      feedback: 'They modernized our entire backend system and implemented a CI/CD pipeline that increased our deployment frequency by 10x. Game changer for our business.',
      rating: 5,
      featured: true,
      order: 3,
    },
    {
      name: 'David Park',
      company: 'HealthTech Plus',
      role: 'Product Manager',
      feedback: 'Professional, knowledgeable, and always responsive. The team delivered our mobile app ahead of schedule with exceptional quality.',
      rating: 5,
      order: 4,
    },
    {
      name: 'Lisa Anderson',
      company: 'RetailCore',
      role: 'IT Director',
      feedback: 'Their security assessment revealed critical vulnerabilities we weren\'t aware of. They helped us remediate everything and achieve SOC 2 compliance.',
      rating: 5,
      order: 5,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }
  console.log('✅ Testimonials created');

  // Create blog posts
  const blogs = [
    {
      title: 'How to Build a Scalable Cloud Architecture in 2025',
      slug: 'scalable-cloud-architecture-2025',
      excerpt: 'Learn the essential principles and best practices for designing cloud architectures that scale with your business growth.',
      content: `
# How to Build a Scalable Cloud Architecture in 2025

Cloud architecture is the foundation of modern digital businesses. In this comprehensive guide, we'll explore the key principles for building scalable, resilient, and cost-effective cloud systems.

## Key Principles

### 1. Design for Failure
Always assume components will fail. Build redundancy and graceful degradation into your architecture.

### 2. Decouple Components
Use microservices, message queues, and API gateways to create loosely coupled systems.

### 3. Implement Automation
Infrastructure as Code (IaC) ensures consistency and enables rapid scaling.

### 4. Optimize Costs
Right-size resources, use auto-scaling, and leverage reserved instances for predictable workloads.

## Best Practices

- Use managed services when possible
- Implement comprehensive monitoring
- Design for security from the start
- Plan for disaster recovery
- Document architecture decisions

## Conclusion

Building scalable cloud architecture requires careful planning and adherence to proven patterns. Start with these principles and adapt them to your specific needs.
      `.trim(),
      category: 'Cloud Computing',
      tags: ['Cloud', 'Architecture', 'Scalability', 'AWS'],
      published: true,
      featured: true,
      publishedAt: new Date('2025-01-15'),
      views: 1250,
    },
    {
      title: 'DevOps Best Practices for 2025',
      slug: 'devops-best-practices-2025',
      excerpt: 'Discover the latest DevOps practices that leading organizations use to accelerate software delivery and improve reliability.',
      content: `
# DevOps Best Practices for 2025

DevOps continues to evolve. Here are the practices that will define success in 2025.

## CI/CD Pipeline Excellence

Modern pipelines should be:
- Fast (under 10 minutes)
- Reliable (green builds 95%+)
- Automated (no manual steps)
- Observable (clear metrics)

## Infrastructure as Code

IaC is no longer optional. Use tools like:
- Terraform for multi-cloud
- Pulumi for programming language IaC
- AWS CDK for AWS-specific infrastructure

## Observability, Not Just Monitoring

Move beyond basic monitoring to full observability:
- Distributed tracing
- Structured logging
- Custom metrics
- Real-time alerting

## Security Integration (DevSecOps)

Security must be automated:
- Vulnerability scanning in CI
- Secrets management
- Compliance as code
- Container security

## Conclusion

DevOps is about culture, automation, and continuous improvement. Adopt these practices to stay competitive.
      `.trim(),
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Best Practices'],
      published: true,
      featured: true,
      publishedAt: new Date('2025-02-01'),
      views: 890,
    },
    {
      title: 'Why Every Business Needs AI Automation in 2025',
      slug: 'ai-automation-business-2025',
      excerpt: 'AI automation is no longer a luxury—it\'s a competitive necessity. Learn how to identify and implement AI opportunities in your business.',
      content: `
# Why Every Business Needs AI Automation in 2025

Artificial Intelligence has moved from experimental to essential. Here's why your business needs AI automation now.

## The Business Case for AI

### Cost Reduction
Automate repetitive tasks and reduce operational costs by 30-50%.

### Improved Accuracy
AI systems make fewer errors than manual processes.

### 24/7 Operations
Automated systems work around the clock without breaks.

### Better Customer Experience
AI chatbots provide instant responses and personalized interactions.

## Common AI Use Cases

1. **Customer Support**: AI chatbots handle common inquiries
2. **Data Entry**: Extract information from documents automatically
3. **Predictive Analytics**: Forecast trends and customer behavior
4. **Content Generation**: Create marketing copy and summaries
5. **Quality Assurance**: Automated testing and inspection

## Getting Started

1. Identify repetitive, time-consuming tasks
2. Start with a small pilot project
3. Measure ROI carefully
4. Scale what works
5. Continuously optimize

## Conclusion

AI automation is accessible and affordable for businesses of all sizes. The question is not whether to adopt AI, but how quickly you can implement it.
      `.trim(),
      category: 'AI & Machine Learning',
      tags: ['AI', 'Automation', 'Business Strategy', 'Digital Transformation'],
      published: true,
      featured: true,
      publishedAt: new Date('2025-02-10'),
      views: 2100,
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }
  console.log('✅ Blog posts created');

  console.log('🎉 Seed completed successfully!');
  console.log('\n📝 Login credentials:');
  console.log('Email: admin@gkit-consulting.com');
  console.log('Password: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
