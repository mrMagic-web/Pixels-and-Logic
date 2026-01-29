import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface TechIconProps {
  name: string;
  icon: string;
}

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const Name = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
`;

export const TechIcon: React.FC<TechIconProps> = ({ name, icon }) => {
  return (
    <IconWrapper>
      <Icon src={icon} alt={name} />
      <Name>{name}</Name>
    </IconWrapper>
  );
};
