import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { ServiceCard } from './ServiceCard';

const WhatWeDoSection = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.surfaceCanvas};
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const EyebrowRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.primary};
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const serviceIcons: React.ReactNode[] = [
  // Monitor — web apps
  <svg key="monitor" {...iconProps}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // Git merge — integrations / legacy modernization
  <svg key="git" {...iconProps}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M6 9v12M18 9a9 9 0 0 0-9 9" />
  </svg>,
  // Users — team extension
  <svg key="users" {...iconProps}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
];

export const Services: React.FC = () => {
  const { t } = useTranslation('services');

  const cards = t('cards', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    cta: string;
  }>;

  return (
    // id matches the hero's "See how we help" button (#what-we-do)
    <WhatWeDoSection id="what-we-do">
      <Container>
        <Inner>
          <HeaderRow>
            <HeaderText>
              <EyebrowRow>
                <EyebrowDot />
                <Eyebrow>{t('eyebrow', 'Full-Stack Precision')}</Eyebrow>
              </EyebrowRow>
              <Title>{t('title', 'What We Do')}</Title>
            </HeaderText>
            <Intro>
              {t(
                'intro',
                'Zero bloat. High velocity. We architect clean digital software engineered for immediate market traction and seamless scale.'
              )}
            </Intro>
          </HeaderRow>

          <ServicesGrid>
            {cards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
                cta={card.cta}
                icon={serviceIcons[index]}
              />
            ))}
          </ServicesGrid>
        </Inner>
      </Container>
    </WhatWeDoSection>
  );
};