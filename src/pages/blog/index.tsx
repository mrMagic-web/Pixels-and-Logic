import React from 'react';
import { graphql, Link as PostLink } from 'gatsby';
import { Link } from 'gatsby-plugin-react-i18next';
import styled from '@emotion/styled';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { theme } from '../../styles/theme';
import {
    t,
    Page,
    Section,
    Hero,
    HeroTitle,
    HeroDescription,
    Eyebrow,
    GradientButton,
    CtaBanner,
} from '../../components/ServicePageTemplate';

/* ------------------------------------------------------------------ */
/* Local styled components                                             */
/* ------------------------------------------------------------------ */
const media = (px: number) => `@media (min-width: ${px}px)`;

const Breadcrumb = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${t.muted};

    a {
        color: inherit;
        text-decoration: none;
        transition: color ${theme.transitions.base};
        &:hover { color: ${t.primary}; }
    }
    .current { color: ${t.secondary}; font-weight: 600; }
    .sep { color: ${t.outline}; }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 760px;
`;

const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;
    color: ${t.muted};

    span {
        padding: 4px 10px;
        border-radius: 9999px;
        background: ${t.high};
    }
    .badge {
        background: rgba(0, 102, 255, 0.15);
        color: ${t.secondary};
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }
`;

const cardBase = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    text-decoration: none;
    color: inherit;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    transition: background 0.2s, transform 0.2s;

    &:hover { transform: translateY(-4px); }
    &:focus-visible { outline: 2px solid ${t.cyan}; outline-offset: 3px; }
    @media (prefers-reduced-motion: reduce) { &:hover { transform: none; } }
`;

const FeaturedCard = styled(PostLink)`
    ${cardBase}
    position: relative;
    overflow: hidden;
    padding: 1.5rem;
    background: ${t.elevated};
    ${media(1024)} { padding: 2.5rem; }

    &::before {
        content: '';
        position: absolute;
        top: -96px;
        right: -96px;
        width: 384px;
        height: 384px;
        border-radius: 50%;
        background: rgba(0, 102, 255, 0.2);
        filter: blur(100px);
        pointer-events: none;
    }
    &:hover { background: ${t.highlight}; }
    > * { position: relative; }

    h2 {
        margin: 0;
        max-width: 760px;
        font-family: ${theme.fonts.heading};
        font-size: 28px;
        line-height: 36px;
        font-weight: 700;
        color: ${t.text};
        ${media(1024)} { font-size: 40px; line-height: 48px; }
    }
    p {
        margin: 0;
        max-width: 640px;
        font-size: 18px;
        line-height: 28px;
        color: ${t.muted};
    }
`;

const PostsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
    ${media(768)} { grid-template-columns: repeat(2, 1fr); }
    ${media(1024)} { grid-template-columns: repeat(3, 1fr); }
`;

const PostCard = styled(PostLink)`
    ${cardBase}
    padding: 1.5rem;
    background: ${t.low};
    &:hover { background: ${t.container}; }

    h3 {
        margin: 0.75rem 0 0.5rem;
        font-family: ${theme.fonts.heading};
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: ${t.text};
        transition: color ${theme.transitions.base};
    }
    &:hover h3 { color: ${t.primary}; }
    p {
        margin: 0;
        font-size: 13px;
        line-height: 20px;
        color: ${t.muted};
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

const ReadMore = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: ${t.fontLabel};
    font-size: 12px;
    font-weight: 600;
    color: ${t.secondary};
`;

const Empty = styled.p`
    padding: 2.5rem 0;
    text-align: center;
    color: ${t.muted};
`;

const CtaLink = GradientButton.withComponent(Link);

const Arrow = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
interface BlogPost {
    fields: { slug: string };
    excerpt?: string;
    timeToRead?: number;
    frontmatter: { title: string; date: string };
}

interface BlogIndexProps {
    data: { allMarkdownRemark: { nodes: BlogPost[] } };
}

const PostMeta: React.FC<{ post: BlogPost; badge?: string }> = ({ post, badge }) => (
    <MetaRow>
        {badge && <span className="badge">{badge}</span>}
        <span>{post.frontmatter.date}</span>
        {post.timeToRead ? <span>{post.timeToRead} min read</span> : null}
    </MetaRow>
);

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;
    const [latest, ...rest] = posts;

    return (
        <Layout>
            <Page>
                <Hero style={{ paddingBottom: '1.5rem' }}>
                    <Container>
                        <Breadcrumb aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="sep">/</span>
                            <span className="current">Blog</span>
                        </Breadcrumb>
                        <Intro>
                            <Eyebrow>Engineering journal</Eyebrow>
                            <HeroTitle>Blog</HeroTitle>
                            <HeroDescription>
                                Insights on programming, AI, SaaS and building online products.
                            </HeroDescription>
                        </Intro>
                    </Container>
                </Hero>

                <Section>
                    <Container>
                        {posts.length === 0 && <Empty>No articles yet. Check back soon.</Empty>}

                        {latest && (
                            <FeaturedCard to={latest.fields.slug}>
                                <PostMeta post={latest} badge="Latest" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h2>{latest.frontmatter.title}</h2>
                                    {latest.excerpt && <p>{latest.excerpt}</p>}
                                </div>
                                <ReadMore>Read article <Arrow /></ReadMore>
                            </FeaturedCard>
                        )}

                        {rest.length > 0 && (
                            <PostsGrid>
                                {rest.map(post => (
                                    <PostCard key={post.fields.slug} to={post.fields.slug}>
                                        <div>
                                            <PostMeta post={post} />
                                            <h3>{post.frontmatter.title}</h3>
                                            {post.excerpt && <p>{post.excerpt}</p>}
                                        </div>
                                        <ReadMore>Read article <Arrow /></ReadMore>
                                    </PostCard>
                                ))}
                            </PostsGrid>
                        )}
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <CtaBanner>
                            <div>
                                <h3>Got a project in mind?</h3>
                                <p>We build MVPs, websites and SaaS platforms, fast. Let&rsquo;s talk.</p>
                            </div>
                            <CtaLink to="/services/mvp-prototypes">Start your MVP</CtaLink>
                        </CtaBanner>
                    </Container>
                </Section>
            </Page>
        </Layout>
    );
};

export const query = graphql`
  query BlogIndexQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        excerpt(pruneLength: 160)
        timeToRead
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

export default BlogIndex;

export const Head: React.FC = () => (
  <>
    <title>Blog | Pixels & Logic</title>
    <meta name="description" content="Insights on programming, AI, SaaS and building online products." />
    <link rel="canonical" href="https://pixelsandlogic.eu/blog" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Blog | Pixels & Logic" />
    <meta property="og:description" content="Insights on programming, AI, SaaS and building online products." />
    <meta property="og:url" content="https://pixelsandlogic.eu/blog" />
    <meta property="og:site_name" content="Pixels & Logic" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Blog | Pixels & Logic" />
    <meta name="twitter:description" content="Insights on programming, AI, SaaS and building online products." />
  </>
);