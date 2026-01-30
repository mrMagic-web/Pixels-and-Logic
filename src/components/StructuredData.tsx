import React from 'react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsSchemaProps {
    items: BreadcrumbItem[];
}

/**
 * Generates Schema.org BreadcrumbList structured data
 * Usage in page Head component:
 * 
 * <BreadcrumbsSchema items={[
 *   { name: 'Home', url: 'https://pixelsandlogic.eu' },
 *   { name: 'Services', url: 'https://pixelsandlogic.eu/services' }
 * ]} />
 */
export const BreadcrumbsSchema: React.FC<BreadcrumbsSchemaProps> = ({ items }) => {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
        </script>
    );
};

interface FAQSchemaItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    items: FAQSchemaItem[];
}

/**
 * Generates Schema.org FAQPage structured data
 * Useful for pages with frequently asked questions
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ items }) => {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
        </script>
    );
};

interface ServiceSchemaProps {
    name: string;
    description: string;
    provider: string;
    areaServed?: string;
}

/**
 * Generates Schema.org Service structured data
 * Useful for service pages
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    name,
    description,
    provider,
    areaServed = 'Worldwide'
}) => {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'Organization',
            name: provider
        },
        areaServed,
        serviceType: 'Software Development'
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
        </script>
    );
};
