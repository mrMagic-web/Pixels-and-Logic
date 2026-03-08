import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { theme } from '../../styles/theme';
import { mixins } from '../../styles/mixins';

const PageHeader = styled.section`
  background-color: ${theme.colors.backgroundDark};
  padding: ${theme.spacing[24]} 0 ${theme.spacing[16]};
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]} 0 ${theme.spacing[10]};
  }
`;

const PageTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[4]};
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const PageSubtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.teal};
`;

const PostsSection = styled.section`
  ${mixins.section};
  background-color: ${theme.colors.background};
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[8]};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled(Link)`
  ${mixins.card};
  display: block;
  padding: ${theme.spacing[8]};
  text-decoration: none;
  border-left: 4px solid ${theme.colors.accent};
`;

const PostDate = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  display: block;
  margin-bottom: ${theme.spacing[2]};
`;

const PostTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[4]};
  line-height: 1.3;
`;

const ReadMore = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.accent};
`;

interface BlogIndexProps {
  data: {
    allMarkdownRemark: {
      nodes: {
        fields: { slug: string };
        frontmatter: { title: string; date: string };
      }[];
    };
  };
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <PageHeader>
        <Container>
          <PageTitle>Blog</PageTitle>
          <PageSubtitle>Insights on programming, AI, SaaS and building online products.</PageSubtitle>
        </Container>
      </PageHeader>
      <PostsSection>
        <Container>
          <PostsGrid>
            {posts.map(post => (
              <PostCard key={post.fields.slug} to={post.fields.slug}>
                <PostDate>{post.frontmatter.date}</PostDate>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <ReadMore>Read article →</ReadMore>
              </PostCard>
            ))}
          </PostsGrid>
        </Container>
      </PostsSection>
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
