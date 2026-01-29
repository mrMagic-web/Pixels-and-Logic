import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

const Wrapper = styled.div<{ align: 'left' | 'center' }>`
  text-align: ${({ align }) => align};
  margin-bottom: ${theme.spacing[12]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing[8]};
  }
`;

const Title = styled.h2`
  font-size: ${theme.fontSizes['5xl']};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[4]};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing[2]};
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: ${theme.borderRadius.full};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-top: ${theme.spacing[6]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    align = 'center',
    className
}) => {
    return (
        <Wrapper align={align} className={className}>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Wrapper>
    );
};
