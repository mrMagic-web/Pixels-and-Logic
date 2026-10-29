import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface ReasonCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.accent};
  transition: transform ${theme.transitions.base};
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const Description = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
`;

/* Card acts as the hover "group" (like Tailwind's `group`) */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[6]};
  text-align: center;
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.md};
  transition: background-color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceContainer};
  }

  &:hover ${IconWrapper} {
    transform: scale(1.1);
  }
`;

export const ReasonCard: React.FC<ReasonCardProps> = ({ title, description, icon }) => {
  return (
    <CardWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <TextBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextBlock>
    </CardWrapper>
  );
};