'use client';

import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
    if (typeof window !== 'undefined' && measurementId) {
        ReactGA.initialize(measurementId);
    }
};

// Log page views
export const logPageView = (path: string, title?: string) => {
    if (typeof window !== 'undefined') {
        ReactGA.send({ hitType: 'pageview', page: path, title });
    }
};

// Log events
export const logEvent = (category: string, action: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined') {
        ReactGA.event({
            category,
            action,
            label,
            value,
        });
    }
};

// Predefined event tracking functions
export const trackContactFormSubmission = () => {
    logEvent('Contact', 'Form Submission', 'Contact Form');
};

export const trackNewsletterSignup = () => {
    logEvent('Newsletter', 'Signup', 'Newsletter Subscription');
};

export const trackServiceView = (serviceName: string) => {
    logEvent('Service', 'View', serviceName);
};

export const trackBlogView = (blogTitle: string) => {
    logEvent('Blog', 'View', blogTitle);
};

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
    logEvent('CTA', 'Click', `${ctaLocation} - ${ctaText}`);
};

export const trackDownload = (fileName: string) => {
    logEvent('Download', 'File', fileName);
};

export const trackSocialShare = (platform: string, contentType: string) => {
    logEvent('Social', 'Share', `${platform} - ${contentType}`);
};

// Track user engagement
export const trackEngagement = (engagementType: string, details?: string) => {
    logEvent('Engagement', engagementType, details);
};

// Track errors
export const trackError = (errorType: string, errorMessage?: string) => {
    logEvent('Error', errorType, errorMessage);
};
