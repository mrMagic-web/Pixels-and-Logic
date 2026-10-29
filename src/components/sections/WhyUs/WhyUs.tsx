import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { ReasonCard } from './ReasonCard';

const WhyUsSection = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.surfaceCanvas};
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
  max-width: 32rem;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  color: ${theme.colors.onSurfaceVariant};
`;

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor', // color comes from the card (accent)
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const reasonIcons: React.ReactNode[] = [
  // Trophy — 15 years of experience
  <svg key="trophy" {...iconProps}>
    <path d="M7 4h10l-1 6a5 5 0 0 1-8 0L7 4z" />
    <path d="M5 4H3v2a4 4 0 0 0 4 4" />
    <path d="M19 4h2v2a4 4 0 0 1-4 4" />
    <path d="M12 14v4M8 18h8" />
  </svg>,
  // Building — enterprise experience
  <svg key="building" {...iconProps}>
    <rect x="3" y="2" width="18" height="20" rx="1" />
    <path d="M9 22V12h6v10" />
    <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M16 11h.01" />
  </svg>,
  // Lightbulb — product approach
  <svg key="lightbulb" {...iconProps}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
  </svg>,
  // Zap — fast decisions
  <svg key="zap" {...iconProps}>
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
];

export const WhyUs: React.FC = () => {
  const { t } = useTranslation('whyus');

  const reasons = t('reasons', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <WhyUsSection id="why-us">
      <Container>
        <Inner>
          <HeaderBlock>
            <Eyebrow>{t('eyebrow', 'Architectural Edge')}</Eyebrow>
            <Title>{t('title', 'Why Us')}</Title>
            <Intro>
              {t(
                'intro',
                'We combine enterprise discipline with the agility of an elite strike team.'
              )}
            </Intro>
          </HeaderBlock>

          <ReasonsGrid>
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                title={reason.title}
                description={reason.description}
                icon={reasonIcons[index]}
              />
            ))}
          </ReasonsGrid>
        </Inner>
      </Container>
    </WhyUsSection>
  );
};