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
    TypesSection,
    TypesGrid,
    TypeCard,
    WhatIsSection,
    BenefitsList,
    BenefitItem,
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

const WebsitesPage: React.FC<PageProps> = ({ data }) => {
    const { t } = useI18next();

    const translations = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'websites');
    const content = translations ? JSON.parse(translations.node.data) : {};

    // Get packages from mvp.json
    const mvpData = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'mvp');
    const mvpContent = mvpData ? JSON.parse(mvpData.node.data) : {};

    const packages = mvpContent.categories?.websites?.packages || [];

    const featureIcons: React.ReactNode[] = [
        // Lightning-fast loading speeds
        <svg key="zap" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        // Mobile-friendly responsive design
        <svg key="smartphone" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" /></svg>,
        // SEO optimized
        <svg key="search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        // Secure and reliable hosting
        <svg key="shield" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        // Easy-to-use content management
        <svg key="edit" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
        // Analytics and tracking
        <svg key="chart" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
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
                    <TypesSection>
                        <SectionHeading title={content.whatWeBuild?.title} />
                        <TypesGrid>
                            {content.whatWeBuild?.types?.map((type: any, index: number) => (
                                <TypeCard key={index}>
                                    <h3 style={{ fontSize: theme.fontSizes.xl, marginBottom: theme.spacing[3] }}>{type.title}</h3>
                                    <p>{type.description}</p>
                                </TypeCard>
                            ))}
                        </TypesGrid>
                    </TypesSection>

                    <WhatIsSection>
                        <SectionHeading title={content.whatIs?.title} />
                        <p style={{ fontSize: theme.fontSizes.lg, marginBottom: theme.spacing[6], textAlign: 'center', maxWidth: '800px', margin: '0 auto ' + theme.spacing[6] }}>
                            {content.whatIs?.description}
                        </p>
                        <BenefitsList>
                            {content.whatIs?.benefits?.map((benefit: string, index: number) => (
                                <BenefitItem key={index}>{benefit}</BenefitItem>
                            ))}
                        </BenefitsList>
                    </WhatIsSection>

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

export default WebsitesPage;

export const Head: HeadFC<any> = ({ data }) => {
    const translations = data?.locales?.edges?.find((edge: any) => edge.node.ns === 'websites');
    const content = translations ? JSON.parse(translations.node.data) : {};

    const title = content.title || 'Websites | Pixels & Logic';
    const description = content.hero?.description || 'Professional website development services.';

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