import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { SEO } from '../../components/SEO';
import { Contact } from '../../components/sections/Contact/Contact';
import {
    t,
    Page,
    Section,
    GradientButton,
    GhostButton,
    Heading,
    Eyebrow,
    H2,
    Lead,
    Hero,
    HeroGrid,
    HeroText,
    HeroTitle,
    HeroDescription,
    ButtonRow,
    MetricGrid,
    Metric,
    Grid,
    IconBox,
    Tag,
    Panel,
    FeatureGrid,
    FeatureItem,
    ProcessCard,
    PackagesGrid,
    PackageCard,
    PopularBadge,
    PackageMeta,
    PackageName,
    PackageDescription,
    PackagePrice,
    PackageDetails,
    PackageDetail,
    PackageCta,
    CtaBanner,
} from '../../components/ServicePageTemplate';

const svgProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

const CheckIcon = () => (
    <svg {...svgProps} width={18} height={18} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const ArrowIcon = () => (
    <svg {...svgProps} width={18} height={18} aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const featureIcons: React.ReactNode[] = [
    <svg key="lock" {...svgProps}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    <svg key="card" {...svgProps}><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    <svg key="bell" {...svgProps}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    <svg key="chart" {...svgProps}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    <svg key="link" {...svgProps}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
    <svg key="layers" {...svgProps}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
    <svg key="cloud" {...svgProps}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
];

const SaasPlatformsPage: React.FC<PageProps> = ({ data }: any) => {
    const edges = data?.locales?.edges ?? [];
    const parse = (ns: string) => {
        const edge = edges.find((e: any) => e.node.ns === ns);
        return edge ? JSON.parse(edge.node.data) : {};
    };

    const content = parse('saas-platforms');
    const mvpContent = parse('mvp');
    const packages: any[] = mvpContent.categories?.saas?.packages || [];

    // Included grid: a leftover last item (7, 10, ...) becomes the wide card
    const features: string[] = content.features?.list ?? [];

    const selectPackage = (name: string) => {
        window.dispatchEvent(new CustomEvent('packageSelected', { detail: name }));
    };

    return (
        <Layout>
            <Page>
                {/* ================= HERO ================= */}
                <Hero>
                    <Container>
                        <HeroGrid>
                            <HeroText style={{ gridColumn: '1 / -1', maxWidth: 760 }}>
                                <HeroTitle>{content.hero?.title}</HeroTitle>
                                <HeroDescription>{content.hero?.description}</HeroDescription>
                                <ButtonRow>
                                    <GradientButton href="#contact">
                                        {content.hero?.cta}
                                    </GradientButton>
                                    <GhostButton href="#packages">
                                        {content.hero?.secondaryCta ?? 'Explore packages'}
                                    </GhostButton>
                                </ButtonRow>
                                {content.hero?.metrics?.length > 0 && (
                                    <MetricGrid>
                                        {content.hero.metrics.map((m: any, i: number) => (
                                            <Metric key={i}>
                                                <strong>{m.value}</strong>
                                                <span>{m.label}</span>
                                            </Metric>
                                        ))}
                                    </MetricGrid>
                                )}
                            </HeroText>
                        </HeroGrid>
                    </Container>
                </Hero>

                {/* ================= INCLUDED FEATURES ================= */}
                <Section>
                    <Container>
                        <Panel>
                            <Heading style={{ position: 'relative' }}>
                                <Eyebrow>{content.features?.eyebrow ?? 'Built into every platform'}</Eyebrow>
                                <H2>{content.features?.title}</H2>
                            </Heading>
                            <FeatureGrid>
                                {features.map((feature, index) => {
                                    const isLast = index === features.length - 1 && features.length % 3 === 1;
                                    return (
                                        <FeatureItem key={index} $wide={isLast}>
                                            <IconBox
                                                $size={32}
                                                style={isLast ? { background: t.blue, color: t.onBlue } : undefined}
                                            >
                                                {featureIcons[index]}
                                            </IconBox>
                                            <span>{feature}</span>
                                        </FeatureItem>
                                    );
                                })}
                            </FeatureGrid>
                        </Panel>
                    </Container>
                </Section>

                {/* ================= PROCESS ================= */}
                <Section>
                    <Container>
                        <Heading $center>
                            <Eyebrow>{content.process?.eyebrow ?? 'How it works'}</Eyebrow>
                            <H2>{content.process?.title}</H2>
                            {content.process?.subtitle && <Lead>{content.process.subtitle}</Lead>}
                        </Heading>
                        <Grid $cols={4}>
                            {content.process?.steps?.map((step: any, index: number) => (
                                <ProcessCard key={index}>
                                    <div>
                                        <div className="top">
                                            <span className="num">{String(index + 1).padStart(2, '0')}</span>
                                            {step.timeframe && <Tag>{step.timeframe}</Tag>}
                                        </div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                    {step.output && (
                                        <span className="out"><ArrowIcon />{step.output}</span>
                                    )}
                                </ProcessCard>
                            ))}
                        </Grid>
                    </Container>
                </Section>

                {/* ================= PACKAGES & PRICING ================= */}
                <Section id="packages">
                    <Container>
                        <Heading $center>
                            <Eyebrow>{mvpContent.categories?.saas?.eyebrow ?? 'Predictable investment'}</Eyebrow>
                            <H2>{mvpContent.categories?.saas?.title ?? 'Packages & Pricing'}</H2>
                            <Lead>
                                {mvpContent.categories?.saas?.subtitle ??
                                    'Fixed pricing with clear scope and timelines. No hourly bills or hidden extras.'}
                            </Lead>
                        </Heading>
                        <PackagesGrid>
                            {packages.map((pkg: any, index: number) => {
                                // Highlight explicit flag, otherwise the middle tier
                                const featured = pkg.featured ?? (packages.length === 3 && index === 1);
                                return (
                                    <PackageCard key={index} $featured={featured}>
                                        {featured && <PopularBadge>{pkg.popularLabel ?? 'Most popular'}</PopularBadge>}
                                        <div>
                                            <PackageMeta $featured={featured}>
                                                <span className="badge">{pkg.badge}</span>
                                                {pkg.duration && <span className="duration">{pkg.duration}</span>}
                                            </PackageMeta>
                                            <PackageName>{pkg.name}</PackageName>
                                            <PackageDescription>{pkg.description}</PackageDescription>
                                            <PackagePrice $featured={featured}>
                                                <strong>{pkg.price}</strong>
                                                <span>{pkg.priceNote}</span>
                                            </PackagePrice>
                                            <PackageDetails>
                                                {pkg.features?.map((feature: string, idx: number) => (
                                                    <PackageDetail key={idx} $featured={featured}>
                                                        <CheckIcon />
                                                        <span>{feature}</span>
                                                    </PackageDetail>
                                                ))}
                                            </PackageDetails>
                                        </div>
                                        <PackageCta
                                            $featured={featured}
                                            href="#contact"
                                            onClick={() => selectPackage(pkg.name)}
                                        >
                                            {pkg.cta}
                                            {featured && <ArrowIcon />}
                                        </PackageCta>
                                    </PackageCard>
                                );
                            })}
                        </PackagesGrid>
                    </Container>
                </Section>
            </Page>

            <Contact />

            <Page>
                <Section>
                    <Container>
                        <CtaBanner>
                            <div>
                                <h3>{content.cta?.title}</h3>
                                <p>{content.cta?.description}</p>
                            </div>
                            <GradientButton href="#contact">{content.cta?.button}</GradientButton>
                        </CtaBanner>
                    </Container>
                </Section>
            </Page>
        </Layout>
    );
};

export default SaasPlatformsPage;

export const Head: HeadFC<any> = ({ data }) => {
    const edge = data?.locales?.edges?.find((e: any) => e.node.ns === 'saas-platforms');
    const content = edge ? JSON.parse(edge.node.data) : {};

    return (
        <SEO
            title={content.title || 'SaaS & Platforms | Pixels & Logic'}
            description={content.hero?.description || 'Professional SaaS platform development services.'}
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