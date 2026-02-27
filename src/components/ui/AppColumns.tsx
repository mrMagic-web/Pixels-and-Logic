import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface AppColumnsProps {
    size?: 'small' | 'large';
    className?: string;
}

const Wrapper = styled.div<{ size: 'small' | 'large' }>`
  display: flex;
  width: 100%;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[2]};

  & > .image {
    flex: 1;
    background: ${theme.colors.backgroundAlt};
    border-radius: ${theme.borderRadius.sm};
    height: ${props => (props.size === 'large' ? '60px' : '50px')};
  }

  & > .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      background: ${theme.colors.textSecondary};
      border-radius: ${theme.borderRadius.sm};
      margin-bottom: ${theme.spacing[1]};
      height: ${props => (props.size === 'large' ? '12px' : '10px')};
      width: ${props => (props.size === 'large' ? '80%' : '70%')};

      &:last-of-type {
        width: ${props => (props.size === 'large' ? '60%' : '50%')};
        margin-bottom: 0;
      }
    }
  }
`;

export const AppColumns: React.FC<AppColumnsProps> = ({ size = 'large', className }) => {
    return (
        <Wrapper size={size} className={className}>
            <div className="image" />
            <div className="text">
                <div />
                <div />
            </div>
        </Wrapper>
    );
};
