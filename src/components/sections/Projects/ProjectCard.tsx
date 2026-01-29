import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Button } from '../../ui/Button';

const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.base};
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
  }
`;

const ImageGallery = styled.div`
  position: relative;
  height: 400px;
  background: ${theme.colors.background};
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.md}) {
    height: 300px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${theme.transitions.base};
`;

const ThumbnailsWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]};
  background: rgba(0, 21, 66, 0.7);
  backdrop-filter: blur(4px);
  border-radius: ${theme.borderRadius.md};
`;

const Thumbnail = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ isActive }) =>
        isActive ? theme.colors.accent : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: ${theme.transitions.base};
  
  &:hover {
    background: ${theme.colors.accent};
  }
`;

const Content = styled.div`
  padding: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectName = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[4]};
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const TechBadge = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background: ${theme.colors.teal};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

const Testimonial = styled.blockquote`
  margin: ${theme.spacing[6]} 0;
  padding: ${theme.spacing[6]};
  background: ${theme.colors.background};
  border-left: 4px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.md};
`;

const TestimonialText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.text};
  font-style: italic;
  margin-bottom: ${theme.spacing[4]};
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

const AuthorName = styled.div`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.primary};
`;

interface ProjectCardProps {
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
    cta: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    images,
    technologies,
    testimonial,
    link,
    cta
}) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <Card>
            {/* <ImageGallery>
        <MainImage src={images[activeImage].url} alt={images[activeImage].alt} />
        {images.length > 1 && (
          <ThumbnailsWrapper>
            {images.map((_, index) => (
              <Thumbnail
                key={index}
                isActive={index === activeImage}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </ThumbnailsWrapper>
        )}
      </ImageGallery> */}

            <Content>
                <ProjectName>{name}</ProjectName>
                <Description>{description}</Description>

                <TechStack>
                    {technologies.map((tech, index) => (
                        <TechBadge key={index}>{tech}</TechBadge>
                    ))}
                </TechStack>

                {/* {testimonial && testimonial.author && (
                    <Testimonial>
                        <TestimonialText>"{testimonial.text}"</TestimonialText>
                        <TestimonialAuthor>
                            <AuthorName>{testimonial.author}</AuthorName>
                            {testimonial.position}
                        </TestimonialAuthor>
                    </Testimonial>
                )} */}

                <ButtonWrapper>
                    <Button as="a" href={link} size="lg" fullWidth>
                        {cta}
                    </Button>
                </ButtonWrapper>
            </Content>
        </Card>
    );
};
