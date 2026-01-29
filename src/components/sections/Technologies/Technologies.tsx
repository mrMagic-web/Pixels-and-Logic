import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { TechIcon } from './TechIcon';

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${theme.spacing[6]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing[4]};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'GraphQL', icon: '◐' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Gatsby', icon: '🟣' },
    { name: 'Figma', icon: '🎨' },
];

export const Technologies: React.FC = () => {
    const { t } = useTranslation('technologies');

    return (
        <Section id="technologies" backgroundColor={theme.colors.background}>
            <Container>
                <SectionHeading
                    title={t('title')}
                    subtitle={t('subtitle')}
                />
                <TechGrid>
                    {technologies.map((tech) => (
                        <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                    ))}
                </TechGrid>
            </Container>
        </Section>
    );
};
