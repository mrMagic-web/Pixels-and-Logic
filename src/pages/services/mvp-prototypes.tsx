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
    Cockpit,
    CockpitBar,
    PipelineGrid,
    PipelineStep,
    Bars,
    Ribbon,
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

const VerifiedIcon = () => (
    <svg {...svgProps} width={18} height={18} aria-hidden="true">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const featureIcons: React.ReactNode[] = [
    <svg key="lock" {...svgProps}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    <svg key="route" {...svgProps}><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>,
    <svg key="phone" {...svgProps}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" /></svg>,
    <svg key="chart" {...svgProps}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    <svg key="link" {...svgProps}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
    <svg key="cloud" {...svgProps}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
    <svg key="code" {...svgProps}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
];

const typeIcons: React.ReactNode[] = [
    <svg key="web" {...svgProps} width={26} height={26}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></svg>,
    <svg key="mobile" {...svgProps} width={26} height={26}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" /></svg>,
    <svg key="saas" {...svgProps} width={26} height={26}><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /></svg>,
    <svg key="hub" {...svgProps} width={26} height={26}><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m7 7 3 3m4 0 3-3m-10 10 3-3m4 0 3 3" /></svg>,
];

const BAR_HEIGHTS = [40, 55, 35, 70, 60, 88, 95, 75, 82, 68];

const MvpPrototypesPage: React.FC<PageProps> = ({ data }: any) => {
    const edges = data?.locales?.edges ?? [];
    const parse = (ns: string) => {
        const edge = edges.find((e: any) => e.node.ns === ns);
        return edge ? JSON.parse(edge.node.data) : {};
    };

    const content = parse('mvp-prototypes');
    const mvpContent = parse('mvp');
    const packages: any[] = mvpContent.categories?.mvp?.packages || [];

    // Lines of the "Included" grid: first 6 are cards, the last (source code ownership) is the wide card
    const features: string[] = content.features?.list ?? [];

    const selectPackage = (name: string) => {
        window.dispatchEvent(new CustomEvent('packageSelected', { detail: name }));
    };

    return (
        <Layout>
            <Page>
                <Hero>
                    <Container>
                        <HeroGrid>
                            <HeroText>
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

                            {/* Decorative "live build" mockup */}
                            <Cockpit aria-hidden="true">
                                <CockpitBar>
                                    <span className="dots">
                                        <span className="dot" style={{ background: '#ffb4ab' }} />
                                        <span className="dot" style={{ background: '#47d6ff' }} />
                                        <span className="dot" style={{ background: t.emerald }} />
                                        <span style={{ marginLeft: 8 }}>mvp-sprint-terminal.tsx</span>
                                    </span>
                                    <span className="live">LIVE BUILD</span>
                                </CockpitBar>
                                <PipelineGrid>
                                    <PipelineStep><small>DAY 01</small><b>Sprint Kickoff</b><i /></PipelineStep>
                                    <PipelineStep><small>DAY 03</small><b>Clickable Wireframe</b><i /></PipelineStep>
                                    <PipelineStep $active><small>DAY 05</small><b>Cloud Deploy</b><i /></PipelineStep>
                                </PipelineGrid>
                                <Bars>
                                    {BAR_HEIGHTS.map((h, i) => (
                                        <span
                                            key={i}
                                            className={i === 6 ? 'peak' : i === 5 ? 'hot' : undefined}
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </Bars>
                                <Ribbon>
                                    <VerifiedIcon />
                                    {content.hero?.ribbon ?? 'Investor-ready product output'}
                                </Ribbon>
                            </Cockpit>
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

                {/* ================= WHAT IS AN MVP ================= */}
                <Section>
                    <Container>
                        <SplitGrid>
                            <Narrative>
                                <Heading style={{ marginBottom: 0 }}>
                                    <Eyebrow>{content.whatIs?.eyebrow ?? 'Why an MVP'}</Eyebrow>
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
                                <Eyebrow>{content.features?.eyebrow ?? 'Included in every MVP'}</Eyebrow>
                                <H2>{content.features?.title}</H2>
                            </Heading>
                            <FeatureGrid>
                                {features.map((feature, index) => {
                                    const isLast = index === features.length - 1;
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
                            <Eyebrow>{mvpContent.categories?.mvp?.eyebrow ?? 'Predictable investment'}</Eyebrow>
                            <H2>{mvpContent.categories?.mvp?.title ?? 'MVP Packages & Pricing'}</H2>
                            <Lead>
                                {mvpContent.categories?.mvp?.subtitle ??
                                    'Fixed sprint pricing with guaranteed timelines. No hourly bills or hidden extras.'}
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

export default MvpPrototypesPage;

export const Head: HeadFC<any> = ({ data }) => {
    const edge = data?.locales?.edges?.find((e: any) => e.node.ns === 'mvp-prototypes');
    const content = edge ? JSON.parse(edge.node.data) : {};

    return (
        <SEO
            title={content.title || 'MVP & Prototypes | Pixels & Logic'}
            description={content.hero?.description || 'Build your MVP fast with our expert development team.'}
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