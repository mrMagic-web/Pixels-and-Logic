import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';

const HEADER_HEIGHT_PX = 80;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing[6]};
  text-align: left;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.surfaceContainerHigh}cc;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
`;

const PillDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const PillText = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.accentSoft};
`;

const Headline = styled.h1`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  line-height: 1.2;
  font-weight: ${theme.fontWeights.extrabold};
  letter-spacing: -0.025em;
  color: ${theme.colors.onSurface};
  text-wrap: balance;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 56px;
    line-height: 64px;
  }
`;

const HeadlineAccent = styled.span`
  background-image: ${theme.gradients.brandText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 36rem;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  line-height: 1.6;
  color: ${theme.colors.onSurfaceVariant};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding-top: ${theme.spacing[2]};
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: auto;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  width: 100%;
  padding: 0.875rem ${theme.spacing[6]};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  @media (min-width: ${theme.breakpoints.sm}) {
    width: auto;
  }
`;

const PrimaryButton = styled.a`
  ${buttonBase}
  color: ${theme.colors.onPrimary};
  background-image: ${theme.gradients.brand};
  box-shadow: ${theme.shadows.glowCta};

  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  ${buttonBase}
  color: ${theme.colors.onSurface};
  background-color: ${theme.colors.surfaceContainerHigh}cc;

  &:hover {
    background-color: ${theme.colors.surfaceBright};
  }
`;

const Metrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[8]};
  padding-top: ${theme.spacing[6]};
`;

const Metric = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
`;

const MetricValue = styled.span<{ accent?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${({ accent }) => (accent ? theme.colors.accent : theme.colors.onSurface)};
`;

const MetricLabel = styled.span`
  max-width: 6rem;
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.outline};
`;

const MetricDivider = styled.div`
  display: none;
  width: 1px;
  height: 32px;
  background-color: ${theme.colors.surfaceContainerHigh};

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.colors.accentSoft}
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  const element = document.getElementById(id);
  if (!element) return;
  e.preventDefault();
  const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT_PX;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export const HeroContent: React.FC = () => {
  const { t } = useTranslation('hero');

  const metrics = [
    { value: '99.98%', label: t('metrics.uptime', 'Uptime SLA Deployed'), accent: false },
    { value: '5 Days', label: t('metrics.sprint', 'Sprint to Launch'), accent: false },
    { value: '15+ Yrs', label: t('metrics.experience', 'Core Tech Mastery'), accent: true },
  ];

  return (
    <Content>
      <Pill>
        <PillDot />
        <PillText>{t('tagline', 'MVP in 5 days • Full-Stack Digital Agency')}</PillText>
      </Pill>

      <Headline>
        {t('headlinePrefix', 'MVPs, Websites & SaaS –')}{' '}
        <HeadlineAccent>{t('headlineAccent', 'built fast, ready to scale')}</HeadlineAccent>
      </Headline>

      <Subtitle>
        {t(
          'subtitle',
          'A full-stack digital agency — starter MVPs in 5 business days • Websites from 3 days • SaaS from €6,900. Battle-tested architecture crafted for maximum velocity.'
        )}
      </Subtitle>

      <ButtonGroup>
        <PrimaryButton href="#packages" onClick={scrollToSection('packages')}>
          <span>{t('cta.primary', 'Start Your MVP')}</span>
          <ArrowIcon />
        </PrimaryButton>
        <SecondaryButton href="#what-we-do" onClick={scrollToSection('what-we-do')}>
          <TerminalIcon />
          <span>{t('cta.secondary', 'See how we help')}</span>
        </SecondaryButton>
      </ButtonGroup>

      <Metrics>
        {metrics.map((m, i) => (
          <React.Fragment key={m.value}>
            {i > 0 && <MetricDivider />}
            <Metric>
              <MetricValue accent={m.accent}>{m.value}</MetricValue>
              <MetricLabel>{m.label}</MetricLabel>
            </Metric>
          </React.Fragment>
        ))}
      </Metrics>
    </Content>
  );
};