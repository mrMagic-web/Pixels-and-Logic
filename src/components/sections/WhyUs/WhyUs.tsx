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

const reasonIcons = ['🏆', '🚀', '💡', '⚡'];

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
