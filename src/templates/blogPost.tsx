import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/ui/Container';
import { Contact } from '../components/sections/Contact/Contact';
import { theme } from '../styles/theme';
import { mixins } from '../styles/mixins';

const PostHeader = styled.section`
  background-color: ${theme.colors.backgroundDark};
  padding: ${theme.spacing[24]} 0 ${theme.spacing[16]};
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]} 0 ${theme.spacing[10]};
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: ${theme.colors.teal};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing[6]};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const PostTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  line-height: 1.2;
  max-width: 800px;
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const PostMeta = styled.p`
  margin-top: ${theme.spacing[4]};
  color: ${theme.colors.teal};
  font-size: ${theme.fontSizes.sm};
`;

const PostBody = styled.section`
  ${mixins.section};
  background-color: ${theme.colors.background};
`;

const PostBodyInner = styled.div<{ hasVideo: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasVideo }) => hasVideo ? '1fr 380px' : '1fr'};
  gap: ${theme.spacing[12]};
  align-items: start;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const VideoSidebar = styled.aside`
  position: sticky;
  top: ${theme.spacing[8]};
`;

const VideoLabel = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[3]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const VideoEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const BlogCtaBanner = styled.section`
  background-color: ${theme.colors.backgroundDark};
  padding: ${theme.spacing[16]} 0;
  text-align: center;
`;

const BlogCtaTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const BlogCtaText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.white};
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
`;

const Prose = styled.div`
  max-width: 800px;
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.backgroundDark};
  line-height: 1.8;

  h1, h2, h3, h4 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    margin-top: ${theme.spacing[10]};
    margin-bottom: ${theme.spacing[4]};
  }
  h2 { font-size: ${theme.fontSizes['3xl']}; }
  h3 { font-size: ${theme.fontSizes['2xl']}; }

  p { margin-bottom: ${theme.spacing[6]}; }

  ul, ol {
    padding-left: ${theme.spacing[6]};
    margin-bottom: ${theme.spacing[6]};
    li { margin-bottom: ${theme.spacing[2]}; }
  }

  strong { font-weight: ${theme.fontWeights.bold}; color: ${theme.colors.primary}; }

  blockquote {
    border-left: 4px solid ${theme.colors.accent};
    padding-left: ${theme.spacing[6]};
    margin: ${theme.spacing[8]} 0;
    color: ${theme.colors.textSecondary};
    font-style: italic;
  }

  a {
    color: ${theme.colors.accent};
    &:hover { text-decoration: underline; }
  }
`;

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
        description?: string;
        youtubeUrl?: string;
      };
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;

  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getYoutubeEmbedUrl(post.frontmatter.youtubeUrl);

  return (
    <Layout>
      <PostHeader>
        <Container>
          <BackLink to="/blog">← Back to Blog</BackLink>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostMeta>{post.frontmatter.date}</PostMeta>
        </Container>
      </PostHeader>
      <PostBody>
        <Container>
          <PostBodyInner hasVideo={!!embedUrl}>
            <Prose dangerouslySetInnerHTML={{ __html: post.html }} />
            {embedUrl && (
              <VideoSidebar>
                <VideoLabel>Watch the video</VideoLabel>
                <VideoEmbed>
                  <iframe
                    src={embedUrl}
                    title={post.frontmatter.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VideoEmbed>
              </VideoSidebar>
            )}
          </PostBodyInner>
        </Container>
      </PostBody>

      <BlogCtaBanner>
        <Container>
          <BlogCtaTitle>Got a project in mind?</BlogCtaTitle>
          <BlogCtaText>
            We build MVPs, websites, and SaaS platforms — fast. If something you read here sparked an idea, let's talk. No obligation, just a quick chat.
          </BlogCtaText>
        </Container>
      </BlogCtaBanner>

      <Contact />
    </Layout>
  );
};

export const Head: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  const siteUrl = 'https://pixelsandlogic.eu';
  const slug = post.fields?.slug || '';
  const postUrl = `${siteUrl}${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description || '',
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: 'Maciej',
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pixels & Logic',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo/logo.svg`
      }
    },
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.frontmatter.title, item: postUrl }
    ]
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
  }
`;

export default BlogPost;
