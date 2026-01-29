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

const serviceIcons = ['💻', '🔄', '👥'];

export const Services: React.FC = () => {
    const { t } = useTranslation('services');

    const cards = t('cards', { returnObjects: true }) as Array<{
        title: string;
        description: string;
        cta: string;
    }>;

    return (
        <Section id="services" backgroundColor={theme.colors.background}>
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
