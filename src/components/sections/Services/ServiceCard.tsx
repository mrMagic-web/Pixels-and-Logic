import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Card } from '../../ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.mustard};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
`;

const Title = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[2]};
`;

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  flex-grow: 1;
`;

const CtaLink = styled.a`
  color: ${theme.colors.accent};
  font-weight: ${theme.fontWeights.semibold};
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  transition: ${theme.transitions.base};
  
  &:hover {
    gap: ${theme.spacing[3]};
  }
  
  &::after {
    content: '→';
  }
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  cta,
  icon
}) => {
  return (
    <StyledCard>
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <CtaLink href="#contact">{cta}</CtaLink>
    </StyledCard>
  );
};
