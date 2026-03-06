import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { TestimonialsSlider } from './TestimonialsSlider';

const Subtitle = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[12]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  /* 4 columns on wide screens */
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[8]};
  
  /* two columns at large breakpoint */
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* single column on medium and smaller devices */
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Projects: React.FC = () => {
    const { t } = useTranslation('projects');

    const projects = t('projects', { returnObjects: true }) as Array<{
        name: string;
        description: string;
        images: Array<{ url: string; alt: string }>;
        technologies: string[];
        testimonial?: {
            text: string;
            author: string;
            position: string;
        };
        link: string;
        status?: string;
    }>;

    return (
        <Section id="projects" backgroundColor={theme.colors.white}>
            <Container>
                <SectionHeading title={t('title')} />
                <Subtitle>{t('subtitle')}</Subtitle>

                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            images={project.images}
                            technologies={project.technologies}
                            testimonial={project.testimonial}
                            link={project.link}
                            cta={t('cta')}
                            status={project.status}
                        />
                    ))}
                </ProjectsGrid>

                {/* testimonials slider uses all projects that have a non-empty testimonial */}
                <TestimonialsSlider
                    testimonials={projects
                        .map((p) => p.testimonial)
                        .filter((t): t is { text: string; author: string; position?: string } =>
                            !!t && t.text && t.text.trim().length > 0
                        )}
                />
            </Container>
        </Section>
    );
};
