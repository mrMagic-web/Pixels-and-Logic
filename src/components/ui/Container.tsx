import React from 'react';
import styled from '@emotion/styled';
import { mixins } from '../../styles/mixins';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const StyledContainer = styled.div`
  ${mixins.container}
`;

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <StyledContainer className={className}>{children}</StyledContainer>;
};
