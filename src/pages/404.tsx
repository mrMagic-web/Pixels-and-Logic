import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby-plugin-react-i18next';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

const NotFoundSection = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[16]} 0;
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCode = styled.h1`
  font-size: ${theme.fontSizes['7xl']};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[4]};
`;

const Title = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[4]};
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[8]};
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <NotFoundSection>
        <Container>
          <Content>
            <ErrorCode>404</ErrorCode>
            <Title>Page Not Found</Title>
            <Description>
              The page you are looking for doesn't exist or has been moved.
            </Description>
            <Link to="/">
              <Button size="lg">Go Back Home</Button>
            </Link>
          </Content>
        </Container>
      </NotFoundSection>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 - Page Not Found | Pixel & Logic</title>;
