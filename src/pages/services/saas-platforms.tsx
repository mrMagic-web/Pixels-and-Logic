import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { theme } from '../../styles/theme';
import { SEO } from '../../components/SEO';
import { Contact } from '../../components/sections/Contact/Contact';
import {
    HeroSection,
    HeroTitle,
    HeroDescription,
    ContentSection,
    WhatIsSection,
    BenefitsList,
    BenefitItem,
    PlatformsSection,
    PlatformsGrid,
    PlatformCard,
    FeaturesSection,
    FeaturesList,
    FeatureItem,
    FeatureIcon,
    ProcessSection,
    ProcessGrid,
    ProcessStep,
    StepNumber,
    PackagesSection,
    PackagesGrid,
    PackageCard,
    PackageBadge,
    PackageName,
    PackageDescription,
    PackagePrice,
    PackagePriceNote,
    PackageDetails,
    PackageDetail,
    PackageCta,
    CtaSection,
    CtaTitle,
    CtaDescription
} from '../../components/ServicePageTemplate';

const SaasPlatformsPage: React.FC<PageProps> = ({ data }) => {
    const { t } = useI18next();

    const translations = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'saas-platforms');
    const content = translations ? JSON.parse(translations.node.data) : {};

    // Get packages from mvp.json
    const mvpData = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'mvp');
    const mvpContent = mvpData ? JSON.parse(mvpData.node.data) : {};

    const packages = mvpContent.categories?.saas?.packages || [];

    const featureIcons: React.ReactNode[] = [
        // User authentication and security
        <svg key="lock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
        // Payment processing and billing
        <svg key="card" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
        // Real-time notifications
        <svg key="bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
        // Data analytics and reporting
        <svg key="chart" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        // API integrations
        <svg key="link" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
        // Multi-tenant architecture
        <svg key="layers" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
        // Scalable cloud infrastructure
        <svg key="cloud" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
    ];

    return (
        <Layout>
            <HeroSection>
                <Container>
                    <HeroTitle>{content.hero?.title}</HeroTitle>
                    <HeroDescription>{content.hero?.description}</HeroDescription>
                    <Button size="lg" as="a" href="#contact">
                        {content.hero?.cta}
                    </Button>
                </Container>
            </HeroSection>

            <ContentSection>
                <Container>



                    <FeaturesSection>
                        <SectionHeading title={content.features?.title} />
                        <FeaturesList>
                            {content.features?.list?.map((feature: string, index: number) => (
                                <FeatureItem key={index}>
                                    <FeatureIcon>{featureIcons[index]}</FeatureIcon>
                                    {feature}
                                </FeatureItem>
                            ))}
                        </FeaturesList>
                    </FeaturesSection>

                    <ProcessSection>
                        <SectionHeading title={content.process?.title} />
                        <ProcessGrid>
                            {content.process?.steps?.map((step: any, index: number) => (
                                <ProcessStep key={index}>
                                    <StepNumber>{index + 1}</StepNumber>
                                    <h3 style={{ fontSize: theme.fontSizes.xl, marginBottom: theme.spacing[2] }}>{step.title}</h3>
                                    <p>{step.description}</p>
                                </ProcessStep>
                            ))}
                        </ProcessGrid>
                    </ProcessSection>

                    <PackagesSection>
                        <SectionHeading title="Service Packages" />
                        <PackagesGrid>
                            {packages.map((pkg: any, index: number) => (
                                <PackageCard key={index}>
                                    <PackageBadge>{pkg.badge}</PackageBadge>
                                    <PackageName>{pkg.name}</PackageName>
                                    <PackageDescription>{pkg.description}</PackageDescription>
                                    <PackagePrice>{pkg.price}</PackagePrice>
                                    <PackagePriceNote>{pkg.priceNote}</PackagePriceNote>
                                    <PackageDetails>
                                        {pkg.features?.map((feature: string, idx: number) => (
                                            <PackageDetail key={idx}>{feature}</PackageDetail>
                                        ))}
                                    </PackageDetails>
                                    <PackageCta size="sm" as="a" href="#contact" onClick={() => {
                                        window.dispatchEvent(new CustomEvent('packageSelected', { detail: pkg.name }));
                                    }}>{pkg.cta}</PackageCta>
                                </PackageCard>
                            ))}
                        </PackagesGrid>
                    </PackagesSection>
                </Container>
            </ContentSection>

            <Contact />

            <CtaSection>
                <Container>
                    <CtaTitle>{content.cta?.title}</CtaTitle>
                    <CtaDescription>{content.cta?.description}</CtaDescription>
                    <Button size="lg" as="a" href="#contact">
                        {content.cta?.button}
                    </Button>
                </Container>
            </CtaSection>
        </Layout>
    );
};

export default SaasPlatformsPage;

export const Head: HeadFC<any> = ({ data }) => {
    const translations = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'saas-platforms');
    const content = translations ? JSON.parse(translations.node.data) : {};

    const title = content.title || 'SaaS & Platforms | Pixels & Logic';
    const description = content.hero?.description || 'Professional SaaS platform development services.';

    return (
        <SEO
            title={title}
            description={description}
        />
    );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;