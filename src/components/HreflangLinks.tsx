import React from 'react';

interface HreflangLinksProps {
    pathname?: string;
}

/**
 * Generates hreflang link tags for multilingual SEO
 * Helps search engines understand language and regional targeting
 * 
 * Usage in page Head component:
 * <HreflangLinks pathname="/services" />
 */
export const HreflangLinks: React.FC<HreflangLinksProps> = ({ pathname = '' }) => {
    const baseUrl = 'https://pixelsandlogic.eu';

    // Remove leading slash if present
    const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    return (
        <>
            {/* English version */}
            <link
                rel="alternate"
                hrefLang="en"
                href={`${baseUrl}/en/${cleanPath}`}
            />

            {/* Polish version */}
            <link
                rel="alternate"
                hrefLang="pl"
                href={`${baseUrl}/pl/${cleanPath}`}
            />

            {/* Default/fallback */}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${baseUrl}/en/${cleanPath}`}
            />
        </>
    );
};
