import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
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

export const Head: HeadFC<Queries.IndexPageQuery> = ({ data }) => {
  const { language } = useI18next();

  // Get SEO data from translations
  const seoData = data?.locales?.edges?.find(edge => edge.node.ns === 'common');
  const translations = seoData ? JSON.parse(seoData.node.data) : {};

  const title = translations?.seo?.title || (language === 'pl'
    ? 'Pixels & Logic - Tworzymy nowoczesne aplikacje webowe'
    : 'Pixels & Logic - Building Modern Web Applications');

  const description = translations?.seo?.description || (language === 'pl'
    ? 'Softwarehouse specjalizujący się w aplikacjach webowych, integracjach systemowych i leasingu zespołów IT.'
    : 'Software house specializing in web applications, system integrations, and IT team leasing.');

  const keywords = translations?.seo?.keywords || '';

  return (
    <SEO
      title={title}
      description={description}
    >
      {keywords && <meta name="keywords" content={keywords} />}
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
