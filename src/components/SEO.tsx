import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    pathname?: string;
    article?: boolean;
    noindex?: boolean;
    children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image,
    pathname,
    article = false,
    noindex = false,
    children
}) => {
    const { language } = useI18next();

    // Default values
    const siteUrl = 'https://pixelsandlogic.eu';
    const defaultTitle = language === 'pl'
        ? 'Pixels & Logic - Tworzymy nowoczesne aplikacje webowe'
        : 'Pixels & Logic - Building Modern Web Applications';
    const defaultDescription = language === 'pl'
        ? 'Softwarehouse specjalizujący się w aplikacjach webowych, integracjach systemowych i leasingu zespołów IT. 15 lat doświadczenia w sektorze enterprise.'
        : 'Software house specializing in web applications, system integrations, and IT team leasing. 15 years of enterprise experience.';
    const defaultImage = `${siteUrl}/og-image.jpg`;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: pathname ? `${siteUrl}${pathname}` : siteUrl,
        language: language
    };

    // Extract path without language prefix for hreflang
    const pathWithoutLang = pathname
        ? pathname.replace(/^\/(en|pl)/, '')
        : '';

    return (
        <>
            {/* Basic Meta Tags */}
            <html lang={seo.language} />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {/* Language and locale */}
            <meta property="og:locale" content={language === 'pl' ? 'pl_PL' : 'en_US'} />
            {language === 'en' && <meta property="og:locale:alternate" content="pl_PL" />}
            {language === 'pl' && <meta property="og:locale:alternate" content="en_US" />}

            {/* Canonical URL */}
            <link rel="canonical" href={seo.url} />

            {/* Hreflang for multilingual SEO */}
            <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${pathWithoutLang}`} />
            <link rel="alternate" hrefLang="pl" href={`${siteUrl}/pl${pathWithoutLang}`} />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en${pathWithoutLang}`} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:image:alt" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:site_name" content="Pixels & Logic" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:image:alt" content={seo.title} />

            {/* Additional Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="theme-color" content="#001542" />

            {/* Structured Data - Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Pixels & Logic',
                    url: siteUrl,
                    logo: `${siteUrl}/logo/logo.svg`,
                    description: seo.description,
                    address: {
                        '@type': 'PostalAddress',
                        addressCountry: 'PL'
                    },
                    sameAs: []
                })}
            </script>

            {/* Structured Data - WebSite */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Pixels & Logic',
                    url: siteUrl,
                    description: seo.description,
                    inLanguage: language
                })}
            </script>

            {children}
        </>
    );
};
