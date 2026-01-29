import React from 'react';
import styled from '@emotion/styled';
import { mixins } from '../../styles/mixins';
import { theme } from '../../styles/theme';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    backgroundColor?: string;
    className?: string;
}

const StyledSection = styled.section<{ backgroundColor?: string }>`
  ${mixins.section}
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  position: relative;
`;

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    backgroundColor,
    className
}) => {
    return (
        <StyledSection id={id} backgroundColor={backgroundColor} className={className}>
            {children}
        </StyledSection>
    );
};
