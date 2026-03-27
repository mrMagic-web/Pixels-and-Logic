import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[8]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }
`;

const serviceIcons: React.ReactNode[] = [
    // Monitor — web apps
    <svg key="monitor" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
    </svg>,
    // Git merge — integrations
    <svg key="git" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M6 9v12M18 9a9 9 0 0 0-9 9" />
    </svg>,
    // Users — team extension
    <svg key="users" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <Section id="services" backgroundColor="#C7FFED">
            <Container>
                <SectionHeading title={t('title')} />
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
            </Container>
        </Section>
    );
};
