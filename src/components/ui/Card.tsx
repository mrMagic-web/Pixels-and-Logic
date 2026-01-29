import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

const StyledCard = styled.div<{ hoverable?: boolean }>`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[8]};
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.base};
  height: 100%;
  
  ${({ hoverable }) => hoverable && `
    &:hover {
      box-shadow: ${theme.shadows.xl};
      transform: translateY(-8px);
    }
  `}
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]};
  }
`;

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hoverable = true
}) => {
    return (
        <StyledCard className={className} hoverable={hoverable}>
            {children}
        </StyledCard>
    );
};
