import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface ReasonCardProps {
    title: string;
    description: string;
    icon: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.base};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.teal} 0%, ${theme.colors.backgroundAlt} 100%);
  border-radius: 50%;
  font-size: 40px;
  margin-bottom: ${theme.spacing[4]};
`;

const Title = styled.h4`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[2]};
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

export const ReasonCard: React.FC<ReasonCardProps> = ({
    title,
    description,
    icon
}) => {
    return (
        <CardWrapper>
            <IconWrapper>{icon}</IconWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardWrapper>
    );
};
