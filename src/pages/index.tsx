import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero/Hero';
import { Services } from '../components/sections/Services/Services';
import { MVPPackages } from '../components/sections/MVPPackages/MVPPackages';
import { Projects } from '../components/sections/Projects/Projects';
import { WhyUs } from '../components/sections/WhyUs/WhyUs';
import { Technologies } from '../components/sections/Technologies/Technologies';
import { Contact } from '../components/sections/Contact/Contact';
import { SEO } from '../components/SEO';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <MVPPackages />
      <Projects />
      <WhyUs />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { t } = useTranslation('common');

  return (
    <SEO
      title={t('seo.title')}
      description={t('seo.description')}
    >
      <meta name="keywords" content={t('seo.keywords')} />
    </SEO>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
