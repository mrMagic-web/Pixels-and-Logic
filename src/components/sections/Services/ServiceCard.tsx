import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
}

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.accent};
  transition: transform ${theme.transitions.base}, background-color ${theme.transitions.base},
    color ${theme.transitions.base};
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  line-height: 36px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
  transition: color ${theme.transitions.base};
`;

const Description = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.6;
  color: ${theme.colors.onSurfaceVariant};
`;

const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  transition: transform ${theme.transitions.base};
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  color: ${theme.colors.accentSoft};
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const Bottom = styled.div`
  padding-top: ${theme.spacing[8]};
`;

/* The whole card acts as the hover "group" (like Tailwind's `group`) */
const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.md};
  transition: background-color ${theme.transitions.slow};

  &:hover {
    background-color: ${theme.colors.surfaceContainer};
  }

  &:hover ${IconWrapper} {
    transform: scale(1.1);
    background-color: ${theme.colors.primary};
    color: ${theme.colors.onPrimary};
  }

  &:hover ${Title} {
    color: ${theme.colors.primarySoft};
  }

  &:hover ${ArrowIcon} {
    transform: translateX(4px);
  }
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, cta, icon }) => {
  return (
    <Card>
      <Top>
        <IconWrapper>{icon}</IconWrapper>
        <TextBlock>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextBlock>
      </Top>
      <Bottom>
        <CtaLink href="#packages">
          <span>{cta}</span>
          <ArrowIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </ArrowIcon>
        </CtaLink>
      </Bottom>
    </Card>
  );
};