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
    Card,
    IconBox,
    TagRow,
    Tag,
    SplitGrid,
    Narrative,
    BenefitGrid,
    BenefitCard,
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
    <svg key="zap" {...svgProps}><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    <svg key="phone" {...svgProps}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" /></svg>,
    <svg key="search" {...svgProps}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    <svg key="shield" {...svgProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    <svg key="edit" {...svgProps}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    <svg key="chart" {...svgProps}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
];

const typeIcons: React.ReactNode[] = [
    <svg key="globe" {...svgProps} width={26} height={26}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>,
    <svg key="layout" {...svgProps} width={26} height={26}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
    <svg key="cart" {...svgProps} width={26} height={26}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>,
    <svg key="doc" {...svgProps} width={26} height={26}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></svg>,
];

const WebsitesPage: React.FC<PageProps> = ({ data }: any) => {
    const edges = data?.locales?.edges ?? [];
    const parse = (ns: string) => {
        const edge = edges.find((e: any) => e.node.ns === ns);
        return edge ? JSON.parse(edge.node.data) : {};
    };

    const content = parse('websites');
    const mvpContent = parse('mvp');
    const packages: any[] = mvpContent.categories?.websites?.packages || [];

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

                {/* ================= WHAT WE BUILD ================= */}
                <Section>
                    <Container>
                        <Heading>
                            <Eyebrow>{content.whatWeBuild?.eyebrow ?? 'Product formats'}</Eyebrow>
                            <H2>{content.whatWeBuild?.title}</H2>
                            {content.whatWeBuild?.subtitle && <Lead>{content.whatWeBuild.subtitle}</Lead>}
                        </Heading>
                        <Grid $cols={4}>
                            {content.whatWeBuild?.types?.map((type: any, index: number) => (
                                <Card key={index}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <IconBox>{typeIcons[index % typeIcons.length]}</IconBox>
                                        <div>
                                            <h3>{type.title}</h3>
                                            <p>{type.description}</p>
                                        </div>
                                    </div>
                                    {type.tags?.length > 0 && (
                                        <TagRow>
                                            {type.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
                                        </TagRow>
                                    )}
                                </Card>
                            ))}
                        </Grid>
                    </Container>
                </Section>

                {/* ================= WHY IT MATTERS ================= */}
                <Section>
                    <Container>
                        <SplitGrid>
                            <Narrative>
                                <Heading style={{ marginBottom: 0 }}>
                                    <Eyebrow>{content.whatIs?.eyebrow ?? 'Why it matters'}</Eyebrow>
                                    <H2>{content.whatIs?.title}</H2>
                                </Heading>
                                <p>{content.whatIs?.description}</p>
                            </Narrative>
                            <BenefitGrid>
                                {content.whatIs?.benefits?.map((benefit: string, index: number) => (
                                    <BenefitCard key={index}>
                                        <IconBox $size={40} style={{ color: index % 2 ? t.primary : t.cyan }}>
                                            <CheckIcon />
                                        </IconBox>
                                        {benefit}
                                    </BenefitCard>
                                ))}
                            </BenefitGrid>
                        </SplitGrid>
                    </Container>
                </Section>

                {/* ================= INCLUDED FEATURES ================= */}
                <Section>
                    <Container>
                        <Panel>
                            <Heading style={{ position: 'relative' }}>
                                <Eyebrow>{content.features?.eyebrow ?? 'Included in every website'}</Eyebrow>
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
                            <Eyebrow>{mvpContent.categories?.websites?.eyebrow ?? 'Predictable investment'}</Eyebrow>
                            <H2>{mvpContent.categories?.websites?.title ?? 'Packages & Pricing'}</H2>
                            <Lead>
                                {mvpContent.categories?.websites?.subtitle ??
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

export default WebsitesPage;

export const Head: HeadFC<any> = ({ data }) => {
    const edge = data?.locales?.edges?.find((e: any) => e.node.ns === 'websites');
    const content = edge ? JSON.parse(edge.node.data) : {};

    return (
        <SEO
            title={content.title || 'Websites | Pixels & Logic'}
            description={content.hero?.description || 'Professional website development services.'}
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