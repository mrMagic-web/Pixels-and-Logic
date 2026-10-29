import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { TechIcon } from './TechIcon';

const TechnologiesSection = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.surface};
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.spacing[3]};
`;

const Eyebrow = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  line-height: 1.2;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.onSurface};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Intro = styled.p`
  margin: 0;
  max-width: 28rem;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  color: ${theme.colors.onSurfaceVariant};
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

export const Technologies: React.FC = () => {
  const { t } = useTranslation('technologies');

  return (
    <TechnologiesSection id="technologies">
      <Container>
        <Inner>
          <HeaderBlock>
            <Eyebrow>{t('eyebrow', 'Full-Stack Ecosystem')}</Eyebrow>
            <Title>{t('title', 'Technologies')}</Title>
            <Intro>
              {t(
                'subtitle',
                'We work with modern, proven technologies engineered for speed and maintainability.'
              )}
            </Intro>
          </HeaderBlock>

          <TechGrid>
            {technologies.map((tech) => (
              <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </TechGrid>
        </Inner>
      </Container>
    </TechnologiesSection>
  );
};