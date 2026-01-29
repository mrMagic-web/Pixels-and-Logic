import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

const Background = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const AppMockup = styled.div`
  width: 200px;
  height: 400px;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.background} 100%);
  border-radius: 25px;
  box-shadow: ${theme.shadows.xl};
  border: 6px solid ${theme.colors.primary};
  overflow: hidden;
  animation: morph 8s ease-in-out infinite;
  position: relative;

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 160px;
    height: 320px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 130px;
    height: 260px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 20px;
    background: ${theme.colors.primary};
    border-radius: 0 0 12px 12px;
    z-index: 2;
  }
`;

const BrowserMockup = styled.div`
  width: 300px;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.background} 100%);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  border: 2px solid ${theme.colors.primary};
  overflow: hidden;
  animation: morph 8s ease-in-out infinite;
  animation-delay: 2s;
  position: relative;

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 240px;
    height: 160px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 200px;
    height: 130px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 10px;
    background: ${theme.colors.white};
    border-radius: 5px;
    opacity: 0.8;
  }
`;

const MockupContent = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${theme.spacing[3]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BeforeState = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${theme.spacing[3]};
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  animation: fadeBefore 8s ease-in-out infinite;

  @keyframes fadeBefore {
    0%, 40% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
`;

const AfterState = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${theme.spacing[3]};
  background: linear-gradient(135deg, ${theme.colors.teal} 0%, ${theme.colors.backgroundAlt} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  animation: fadeAfter 8s ease-in-out infinite;

  @keyframes fadeAfter {
    0%, 40% { opacity: 0; }
    60%, 100% { opacity: 1; }
  }
`;

const MockupTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[1]};
  font-weight: ${theme.fontWeights.bold};
`;

const MockupText = styled.p`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[2]};
`;

const AppInterface = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[1]};
  width: 100%;
`;

const AppHeader = styled.div`
  width: 100%;
  height: 30px;
  background: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing[2]};
`;

const AppNav = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
`;

const NavItem = styled.div`
  width: 15px;
  height: 3px;
  background: ${theme.colors.white};
  border-radius: 2px;
  opacity: 0.7;
`;

const AppContent = styled.div`
  flex: 1;
  width: 100%;
  padding: ${theme.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const AppCard = styled.div`
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const AppButton = styled.div`
  height: 25px;
  background: ${theme.colors.accent};
  border-radius: ${theme.borderRadius.sm};
  margin-top: ${theme.spacing[1]};
`;

const GrowthBadge = styled.div`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingIcon = styled.div<{ delay: number }>`
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  animation: floatAround 12s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  &:nth-of-type(1) {
    top: 20%;
    left: 10%;
  }

  &:nth-of-type(2) {
    top: 60%;
    right: 15%;
  }

  &:nth-of-type(3) {
    bottom: 20%;
    left: 20%;
  }

  @keyframes floatAround {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(90deg);
    }
    50% {
      transform: translateY(0px) rotate(180deg);
    }
    75% {
      transform: translateY(20px) rotate(270deg);
    }
  }
`;

export const HeroBackground: React.FC = () => {
  return (
    <Background>
      <AppMockup>
        <BeforeState>
          <MockupTitle>Basic MVP</MockupTitle>
          <MockupText>Just an idea, no users yet</MockupText>
          <AppInterface>
            <AppHeader>
              <AppNav>
                <NavItem />
                <NavItem />
              </AppNav>
            </AppHeader>
            <AppContent>
              <AppCard />
              <AppCard />
            </AppContent>
          </AppInterface>
        </BeforeState>
        <AfterState>
          <MockupTitle>Scalable App</MockupTitle>
          <MockupText>Full-featured, user-loved</MockupText>
          <AppInterface>
            <AppHeader>
              <AppNav>
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
              </AppNav>
            </AppHeader>
            <AppContent>
              <AppCard />
              <AppCard />
              <AppCard />
              <AppButton />
            </AppContent>
          </AppInterface>
          <GrowthBadge>10x User Growth</GrowthBadge>
        </AfterState>
      </AppMockup>

      <BrowserMockup>
        <BeforeState>
          <MockupTitle>Simple Web App</MockupTitle>
          <MockupText>Basic functionality online</MockupText>
        </BeforeState>
        <AfterState>
          <MockupTitle>Advanced Platform</MockupTitle>
          <MockupText>Complex features, enterprise-ready</MockupText>
          <GrowthBadge>5x Revenue Growth</GrowthBadge>
        </AfterState>
      </BrowserMockup>

      <FloatingElements>
        <FloatingIcon delay={0}>📱</FloatingIcon>
        <FloatingIcon delay={4}>💻</FloatingIcon>
        <FloatingIcon delay={8}>🚀</FloatingIcon>
      </FloatingElements>
    </Background>
  );
};