export const SERVICES = [
    {
        title: 'AI Automation Consulting',
        slug: 'ai-automation-consulting',
        description: 'Leverage AI to automate workflows and enhance decision-making.',
        icon: 'Bot',
        color: 'cyan',
    },
    {
        title: 'Cloud Solutions',
        slug: 'cloud-solutions',
        description: 'Scalable and secure cloud infrastructure for modern businesses. Migration, optimization, and management.',
        icon: 'Cloud',
        color: 'blue',
    },
    {
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom web applications built with modern frameworks. Fast, responsive, and user-friendly.',
        icon: 'Code2',
        color: 'purple',
    },
    {
        title: 'Mobile Apps',
        slug: 'mobile-apps',
        description: 'Native and cross-platform mobile applications for iOS and Android. Engaging user experiences.',
        icon: 'Smartphone',
        color: 'pink',
    },
    {
        title: 'IT Consulting',
        slug: 'it-consulting',
        description: 'Strategic IT guidance to align technology with business goals. Expert advisory and planning.',
        icon: 'Lightbulb',
        color: 'green',
    },
    {
        title: 'DevOps & CI/CD',
        slug: 'devops',
        description: 'Streamline development with modern DevOps practices. Automated pipelines and deployment.',
        icon: 'GitBranch',
        color: 'orange',
    },
    {
        title: 'Data Analytics',
        slug: 'data-analytics',
        description: 'Transform data into insights. Business intelligence, machine learning, and visualization.',
        icon: 'BarChart3',
        color: 'indigo',
    },
    {
        title: 'Cybersecurity',
        slug: 'cybersecurity',
        description: 'Comprehensive security solutions. Protect your business from cyber threats and vulnerabilities.',
        icon: 'Shield',
        color: 'red',
    },
    {
        title: 'IT Support',
        slug: 'it-support',
        description: 'Reliable IT support and maintenance services. Keep your systems running smoothly 24/7.',
        icon: 'HeadphonesIcon',
        color: 'teal',
    },
] as const;

export const COMPANY_LINKS = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
] as const;

export const RESOURCE_LINKS = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
] as const;

export const CONTACT_INFO = {
    phone: {
        display: '+1 (437) 375-0349',
        href: 'tel:+14373750349',
    },
    email: {
        display: 'contact@gkit-consulting.com',
        href: 'mailto:contact@gkit-consulting.com',
    },
    address: {
        display: 'Toronto, ON, Canada',
        mapLink: 'https://maps.google.com/?q=Toronto,ON,Canada',
    },
} as const;
