import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { ProjectCard } from './ProjectCard';
import { TestimonialsSlider } from './TestimonialsSlider';

const ProjectsSection = styled(Section)`
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
  background-color: ${theme.colors.accent};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface ProjectData {
  name: string;
  description: string;
  images: Array<{ url: string; alt: string }>;
  technologies: string[];
  testimonial?: {
    text: string;
    author: string;
    position?: string;
  };
  link: string;
  status?: string;
}

export const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  const projects = t('projects', { returnObjects: true }) as ProjectData[];

  const testimonials = projects
    .map((p) => p.testimonial)
    .filter(
      (item): item is { text: string; author: string; position?: string } =>
        !!item && !!item.text && item.text.trim().length > 0
    );

  return (
    <>
      {/* id matches the header's "Selected Work" link (#selected-projects) */}
      <ProjectsSection id="selected-projects">
        <Container>
          <Inner>
            <HeaderRow>
              <HeaderText>
                <EyebrowRow>
                  <EyebrowDot />
                  <Eyebrow>{t('eyebrow', 'Proven Track Record')}</Eyebrow>
                </EyebrowRow>
                <Title>{t('title', 'Selected Projects')}</Title>
              </HeaderText>
              <Intro>
                {t(
                  'subtitle',
                  'Real results from real clients — see how we helped companies build and scale their applications.'
                )}
              </Intro>
            </HeaderRow>

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
          </Inner>
        </Container>
      </ProjectsSection>

      {/* Own full-width section so it shares the same Container/edges as everything else */}
      <TestimonialsSlider
        testimonials={testimonials}
        eyebrow={t('testimonialsEyebrow', 'Client Testimonials')}
        title={t('testimonialsTitle', 'Trusted by Founders & Operators')}
      />
    </>
  );
};