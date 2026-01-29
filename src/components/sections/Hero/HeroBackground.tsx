import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

const Background = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    opacity: 0.3;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, ${theme.colors.teal} 0%, ${theme.colors.backgroundAlt} 100%);
  border-radius: 50%;
  top: 10%;
  right: 10%;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
  }
`;

const Shape2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.yellow} 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  bottom: 20%;
  right: 30%;
  opacity: 0.5;
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
`;

const Shape3 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 4px solid ${theme.colors.accentAlt};
  border-radius: ${theme.borderRadius['2xl']};
  top: 40%;
  right: 5%;
  opacity: 0.4;
  animation: rotate 20s linear infinite;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const HeroBackground: React.FC = () => {
    return (
        <Background>
            <Shape1 />
            <Shape2 />
            <Shape3 />
        </Background>
    );
};
