import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ReasonCard } from './ReasonCard';

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[6]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const reasonIcons: React.ReactNode[] = [
    // Trophy — 15 years of experience
    <svg key="trophy" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4h10l-1 6a5 5 0 0 1-8 0L7 4z" />
        <path d="M5 4H3v2a4 4 0 0 0 4 4" />
        <path d="M19 4h2v2a4 4 0 0 1-4 4" />
        <path d="M12 14v4M8 18h8" />
    </svg>,
    // Building — enterprise experience
    <svg key="building" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="1" />
        <path d="M9 22V12h6v10" />
        <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M16 11h.01" />
    </svg>,
    // Lightbulb — product approach
    <svg key="lightbulb" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    </svg>,
    // Zap — fast decisions
    <svg key="zap" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <Section id="why-us" backgroundColor="#C7FFED">
            <Container>
                <SectionHeading title={t('title')} />
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
            </Container>
        </Section>
    );
};
