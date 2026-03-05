import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/ui/Container';
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
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
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
          <Prose dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </PostBody>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
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
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;
