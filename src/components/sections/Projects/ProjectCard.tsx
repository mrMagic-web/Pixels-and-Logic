import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: ${theme.colors.surfaceLowest};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 500ms ease;
`;

const ImageFade = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, ${theme.colors.surfaceLow}, transparent 60%);
  pointer-events: none;
`;

const StatusBadge = styled.span`
  position: absolute;
  top: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.accent}33;
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.semibold};
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: ${theme.spacing[6]};
  padding: ${theme.spacing[8]};
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const ProjectName = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
  transition: color ${theme.transitions.base};
`;

const Description = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  color: ${theme.colors.onSurfaceVariant};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  padding-top: ${theme.spacing[2]};
`;

const TechBadge = styled.span`
  padding: ${theme.spacing[1]} 0.625rem;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.accentSoft};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
`;

const ExternalIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: 0.625rem 1.25rem;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.onSurface};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  transition: all ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.onPrimary};
  }
`;

/* Card acts as the hover "group" (like Tailwind's `group`) */
const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.md};
  transition: background-color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceContainer};
  }

  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }

  &:hover ${ProjectName} {
    color: ${theme.colors.primarySoft};
  }
`;

interface ProjectCardProps {
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
  cta: string;
  status?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  images,
  technologies,
  link,
  cta,
  status,
}) => {
  const image = images && images.length > 0 ? images[0] : null;

  return (
    <Card>
      <ImageWrapper>
        {image && <ProjectImage src={image.url} alt={image.alt} loading="lazy" />}
        <ImageFade />
        {status && <StatusBadge>{status}</StatusBadge>}
      </ImageWrapper>

      <Content>
        <TextBlock>
          <ProjectName>{name}</ProjectName>
          <Description>{description}</Description>
          <TechStack>
            {technologies.map((tech, index) => (
              <TechBadge key={index}>{tech}</TechBadge>
            ))}
          </TechStack>
        </TextBlock>

        <div>
          <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
            <span>{cta}</span>
            <ExternalIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </ExternalIcon>
          </ProjectLink>
        </div>
      </Content>
    </Card>
  );
};