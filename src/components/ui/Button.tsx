import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    as?: 'button' | 'a';
    href?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.base};
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  
  ${({ size }) => {
        switch (size) {
            case 'sm':
                return `
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes.sm};
        `;
            case 'lg':
                return `
          padding: ${theme.spacing[4]} ${theme.spacing[8]};
          font-size: ${theme.fontSizes.lg};
        `;
            default:
                return `
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          font-size: ${theme.fontSizes.base};
        `;
        }
    }}
  
  ${({ variant }) => {
        switch (variant) {
            case 'secondary':
                return `
          background-color: ${theme.colors.accentAlt};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.mustard};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
            case 'outline':
                return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            transform: translateY(-2px);
          }
        `;
            default:
                return `
          background-color: ${theme.colors.accent};
          color: ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.yellow};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
        }
    }}
  
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) => {
    return (
        <StyledButton variant={variant} size={size} {...props}>
            {children}
        </StyledButton>
    );
};
