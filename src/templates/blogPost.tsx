import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link as PostLink } from 'gatsby';
import { Link } from 'gatsby-plugin-react-i18next';
import styled from '@emotion/styled';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/ui/Container';
import { Contact } from '../components/sections/Contact/Contact';
import { theme } from '../styles/theme';
import {
    t,
    Page,
    Section,
    Eyebrow,
    GradientButton,
    CtaBanner,
    HEADER_HEIGHT_PX,
} from '../components/ServicePageTemplate';

const SITE_URL = 'https://pixelsandlogic.eu';
const up = (px: number) => `@media (min-width: ${px}px)`;


const ProgressTrack = styled.div`
    position: fixed;
    top: ${HEADER_HEIGHT_PX}px;
    left: 0;
    right: 0;
    height: 3px;
    z-index: 50;
    background: rgba(9, 13, 22, 0.9);
`;

const ProgressBar = styled.div`
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, ${t.blue}, ${t.cyan}, ${t.secondary});
    transition: width 0.15s;
`;

const Top = styled.div`
    position: relative;
    padding: calc(${HEADER_HEIGHT_PX}px + 2rem) 0 2.5rem;
`;

const Breadcrumb = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${t.muted};

    a { color: inherit; text-decoration: none; transition: color ${theme.transitions.base}; }
    a:hover { color: ${t.primary}; }
    .sep { color: ${t.outline}; }
    .current {
        max-width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${t.secondary};
        font-weight: 600;
        ${up(640)} { max-width: 480px; }
    }
`;

const ArticleHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
`;

const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;
    color: ${t.muted};

    span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 9999px;
        background: ${t.high};
    }
`;

const Title = styled.h1`
    margin: 0;
    max-width: 56rem;
    font-family: ${theme.fonts.heading};
    font-size: 36px;
    line-height: 44px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${t.text};
    text-wrap: balance;
    ${up(1024)} { font-size: 56px; line-height: 64px; }
`;

const Lead = styled.p`
    margin: 0;
    max-width: 48rem;
    font-size: 18px;
    line-height: 28px;
    color: ${t.muted};
`;

const AuthorBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    ${up(640)} { flex-direction: row; align-items: center; justify-content: space-between; }
`;

const Avatar = styled.span<{ $size?: number }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${({ $size }) => $size ?? 48}px;
    height: ${({ $size }) => $size ?? 48}px;
    border-radius: 50%;
    background: ${t.high};
    box-shadow: 0 0 0 2px rgba(179, 197, 255, 0.35);
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    color: ${t.primary};
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    strong { display: block; font-size: 16px; line-height: 22px; color: ${t.text}; }
    span.role { font-size: 13px; color: ${t.muted}; }
`;

const ShareRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const shareStyles = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    border: 0;
    border-radius: ${theme.borderRadius.lg};
    background: ${t.high};
    color: ${t.muted};
    font-family: ${t.fontLabel};
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover { background: ${t.bright}; color: ${t.text}; }
    &:focus-visible { outline: 2px solid ${t.cyan}; outline-offset: 2px; }
    span.label { display: none; }
    @media (min-width: 768px) { span.label { display: inline; } }
`;

const ShareButton = styled.button`${shareStyles}`;
const ShareLink = styled.a`${shareStyles}`;

const Layout2Col = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
    ${up(1024)} { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); }
`;

const Prose = styled.article`
    font-size: 18px;
    line-height: 1.75;
    color: ${t.muted};
    overflow-wrap: anywhere;

    > *:first-child { margin-top: 0; }

    h1, h2, h3, h4 {
        font-family: ${theme.fonts.heading};
        color: ${t.text};
        line-height: 1.25;
        margin: 2.5rem 0 1rem;
    }
    h2 {
        font-size: 28px;
        font-weight: 700;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        ${up(1024)} { font-size: 34px; }
    }
    h3 { font-size: 22px; font-weight: 600; }
    h4 { font-size: 18px; font-weight: 600; }

    p { margin: 0 0 1.5rem; }
    strong { color: ${t.text}; font-weight: 700; }
    em { color: ${t.text}; }

    a {
        color: ${t.primary};
        font-weight: 600;
        text-decoration: none;
        &:hover { text-decoration: underline; }
    }

    ul, ol { margin: 0 0 1.5rem; padding-left: 1.5rem; }
    li { margin-bottom: 0.5rem; }
    li::marker { color: ${t.cyan}; }

    blockquote {
        position: relative;
        margin: 2rem 0;
        padding: 1.5rem 1.5rem 1.5rem 2rem;
        border-radius: 0.75rem;
        background: rgba(38, 42, 52, 0.5);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: ${t.text};
        font-size: 20px;
        line-height: 28px;
        font-style: italic;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            inset: 0 auto 0 0;
            width: 4px;
            background: linear-gradient(to bottom, ${t.primary}, ${t.cyan});
        }
        p:last-child { margin-bottom: 0; }
    }

    code {
        padding: 2px 6px;
        border-radius: 4px;
        background: ${t.high};
        color: ${t.secondary};
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.85em;
    }
    pre {
        margin: 0 0 1.5rem;
        padding: 1rem 1.25rem;
        overflow-x: auto;
        border-radius: 0.75rem;
        background: ${t.lowest};
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        font-size: 13px;
        line-height: 1.7;
    }
    pre code { padding: 0; background: none; color: ${t.muted}; font-size: inherit; }

    img, video {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 2rem 0;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
    }

    hr { margin: 2.5rem 0; border: 0; height: 1px; background: rgba(255, 255, 255, 0.08); }

    table {
        display: block;
        width: 100%;
        margin: 0 0 1.5rem;
        overflow-x: auto;
        border-collapse: collapse;
        font-size: 15px;
    }
    th, td { padding: 0.625rem 0.875rem; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    th { color: ${t.text}; background: ${t.low}; }
`;

const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${up(1024)} {
        position: sticky;
        top: calc(${HEADER_HEIGHT_PX}px + 1.5rem);
    }
`;

const SideCard = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background: ${t.elevated};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);

    h3 { margin: 0; font-size: 18px; line-height: 24px; font-weight: 700; color: ${t.text}; }
    p { margin: 0; font-size: 13px; line-height: 20px; color: ${t.muted}; }
`;

const VideoEmbed = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 0.75rem;
    background: ${t.lowest};

    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
`;

const ContactChip = styled.a<{ $accent?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: ${theme.borderRadius.lg};
    background: ${({ $accent }) => ($accent ? 'rgba(0,102,255,.2)' : t.high)};
    color: ${({ $accent }) => ($accent ? t.primary : t.text)};
    font-family: ${t.fontLabel};
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    &:hover { background: ${({ $accent }) => ($accent ? 'rgba(0,102,255,.3)' : t.bright)}; }
`;

const RelatedHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    ${up(640)} { flex-direction: row; align-items: flex-end; justify-content: space-between; }

    h2 { margin: 4px 0 0; font-size: 28px; line-height: 36px; font-weight: 700; color: ${t.text}; ${up(1024)} { font-size: 40px; line-height: 48px; } }
    a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-family: ${t.fontLabel};
        font-size: 12px;
        font-weight: 600;
        color: ${t.primary};
        text-decoration: none;
        &:hover { color: ${t.cyan}; }
    }
`;

const RelatedGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    ${up(768)} { grid-template-columns: repeat(3, 1fr); }
`;

const RelatedCard = styled(PostLink)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background: ${t.elevated};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    color: inherit;
    transition: background 0.2s, transform 0.2s;

    &:hover { background: ${t.highlight}; transform: translateY(-4px); }
    &:focus-visible { outline: 2px solid ${t.cyan}; outline-offset: 3px; }
    @media (prefers-reduced-motion: reduce) { &:hover { transform: none; } }

    .meta { font-family: ${t.fontLabel}; font-size: 11px; color: ${t.muted}; }
    h3 { margin: 0.5rem 0; font-size: 18px; line-height: 1.35; font-weight: 600; color: ${t.text}; transition: color 0.2s; }
    &:hover h3 { color: ${t.primary}; }
    p {
        margin: 0;
        font-size: 13px;
        line-height: 20px;
        color: ${t.muted};
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .more { font-family: ${t.fontLabel}; font-size: 12px; font-weight: 600; color: ${t.secondary}; }
`;

const CtaLink = GradientButton.withComponent(Link);

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */
const iconProps = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
};
const LinkIcon = () => (
    <svg {...iconProps}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const CheckIcon = () => (
    <svg {...iconProps} stroke={t.emerald}><path d="m5 13 4 4L19 7" /></svg>
);
const ShareIcon = () => (
    <svg {...iconProps}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
);
const ArrowIcon = () => (
    <svg {...iconProps} width={14} height={14}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
interface PostNode {
    fields: { slug: string };
    excerpt?: string;
    timeToRead?: number;
    frontmatter: { title: string; date: string };
}

interface BlogPostProps {
    data: {
        markdownRemark: {
            html: string;
            timeToRead?: number;
            fields: { slug: string };
            frontmatter: {
                title: string;
                date: string;
                description?: string;
                youtubeUrl?: string;
            };
        };
        related?: { nodes: PostNode[] };
    };
}

const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
    const post = data.markdownRemark;
    const related = data.related?.nodes ?? [];
    const embedUrl = getYoutubeEmbedUrl(post.frontmatter.youtubeUrl);
    const postUrl = `${SITE_URL}${post.fields?.slug || ''}`;

    const barRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
            if (barRef.current) barRef.current.style.width = `${pct}%`;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard unavailable: ignore */
        }
    };

    const enc = encodeURIComponent;

    return (
        <Layout>
            <ProgressTrack aria-hidden="true"><ProgressBar ref={barRef} /></ProgressTrack>

            <Page>
                <Top>
                    <Container>
                        <Breadcrumb aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="sep">/</span>
                            <Link to="/blog">Blog</Link>
                            <span className="sep">/</span>
                            <span className="current">{post.frontmatter.title}</span>
                        </Breadcrumb>

                        <ArticleHeader>
                            <Badges>
                                {post.timeToRead ? <span>{post.timeToRead} min read</span> : null}
                                <span>{post.frontmatter.date}</span>
                            </Badges>
                            <Title>{post.frontmatter.title}</Title>
                            {post.frontmatter.description && <Lead>{post.frontmatter.description}</Lead>}

                            <AuthorBar>
                                <AuthorInfo>
                                    <Avatar aria-hidden="true">M</Avatar>
                                    <div>
                                        <strong>Maciej</strong>
                                        <span className="role">Lead Architect &amp; Partner at Pixels &amp; Logic</span>
                                    </div>
                                </AuthorInfo>
                                <ShareRow>
                                    <ShareButton type="button" onClick={copyLink} title="Copy article URL">
                                        {copied ? <CheckIcon /> : <LinkIcon />}
                                        <span className="label" style={copied ? { color: t.emerald } : undefined}>
                                            {copied ? 'Copied!' : 'Copy link'}
                                        </span>
                                    </ShareButton>
                                    <ShareLink
                                        href={`https://twitter.com/intent/tweet?text=${enc(post.frontmatter.title)}&url=${enc(postUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ShareIcon /><span className="label">X / Twitter</span>
                                    </ShareLink>
                                    <ShareLink
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(postUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ShareIcon /><span className="label">LinkedIn</span>
                                    </ShareLink>
                                </ShareRow>
                            </AuthorBar>
                        </ArticleHeader>

                        <Layout2Col>
                            <Prose dangerouslySetInnerHTML={{ __html: post.html }} />

                            <Sidebar>
                                {embedUrl && (
                                    <SideCard>
                                        <Eyebrow>Watch the video</Eyebrow>
                                        <VideoEmbed>
                                            <iframe
                                                src={embedUrl}
                                                title={post.frontmatter.title}
                                                loading="lazy"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </VideoEmbed>
                                    </SideCard>
                                )}

                                <SideCard>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Avatar $size={56} aria-hidden="true">M</Avatar>
                                        <div>
                                            <h3>Maciej</h3>
                                            <Eyebrow>Lead Architect &amp; Partner</Eyebrow>
                                        </div>
                                    </div>
                                    <p>
                                        Building and scaling web platforms and SaaS products in record time. Sharing real code,
                                        architecture and live numbers from the development trenches.
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <ContactChip href="tel:+48511322292">+48 511 322 292</ContactChip>
                                        <ContactChip $accent href="mailto:hello@pixelsandlogic.eu">Inquire</ContactChip>
                                    </div>
                                </SideCard>

                                <SideCard>
                                    <h3>Have an idea to validate?</h3>
                                    <p>We turn ideas into working MVPs, with fixed pricing and clear timelines.</p>
                                    <CtaLink to="/services/mvp-prototypes">Start your MVP</CtaLink>
                                </SideCard>
                            </Sidebar>
                        </Layout2Col>
                    </Container>
                </Top>

                {related.length > 0 && (
                    <Section>
                        <Container>
                            <RelatedHead>
                                <div>
                                    <Eyebrow>Keep reading</Eyebrow>
                                    <h2>More from our engineering journal</h2>
                                </div>
                                <Link to="/blog">View all articles <ArrowIcon /></Link>
                            </RelatedHead>
                            <RelatedGrid>
                                {related.map(item => (
                                    <RelatedCard key={item.fields.slug} to={item.fields.slug}>
                                        <div>
                                            <span className="meta">
                                                {item.frontmatter.date}
                                                {item.timeToRead ? ` • ${item.timeToRead} min read` : ''}
                                            </span>
                                            <h3>{item.frontmatter.title}</h3>
                                            {item.excerpt && <p>{item.excerpt}</p>}
                                        </div>
                                        <span className="more">Read article →</span>
                                    </RelatedCard>
                                ))}
                            </RelatedGrid>
                        </Container>
                    </Section>
                )}

                <Section>
                    <Container>
                        <CtaBanner>
                            <div>
                                <h3>Got a project in mind?</h3>
                                <p>
                                    We build MVPs, websites and SaaS platforms, fast. If something you read here sparked an
                                    idea, let&rsquo;s talk. No obligation, just a quick chat.
                                </p>
                            </div>
                            <CtaLink to="/services/mvp-prototypes">Start your MVP</CtaLink>
                        </CtaBanner>
                    </Container>
                </Section>
            </Page>

            <Contact />
        </Layout>
    );
};

export const Head: React.FC<BlogPostProps> = ({ data }) => {
    const post = data.markdownRemark;
    const slug = post.fields?.slug || '';
    const postUrl = `${SITE_URL}${slug}`;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.frontmatter.title,
        description: post.frontmatter.description || '',
        datePublished: post.frontmatter.date,
        author: { '@type': 'Person', name: 'Maciej', url: SITE_URL },
        publisher: {
            '@type': 'Organization',
            name: 'Pixels & Logic',
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/logo.svg` },
        },
        url: postUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.frontmatter.title, item: postUrl },
        ],
    };

    return (
        <>
            <title>{`${post.frontmatter.title} | Pixels & Logic Blog`}</title>
            <meta name="description" content={post.frontmatter.description || ''} />
            <link rel="canonical" href={postUrl} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${post.frontmatter.title} | Pixels & Logic Blog`} />
            <meta property="og:description" content={post.frontmatter.description || ''} />
            <meta property="og:url" content={postUrl} />
            <meta property="og:site_name" content="Pixels & Logic" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${post.frontmatter.title} | Pixels & Logic Blog`} />
            <meta name="twitter:description" content={post.frontmatter.description || ''} />
            <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </>
    );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!, $language: String) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        youtubeUrl
      }
    }
    related: allMarkdownRemark(
      filter: { fields: { slug: { ne: $slug } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        fields {
          slug
        }
        excerpt(pruneLength: 120)
        timeToRead
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

export default BlogPost;