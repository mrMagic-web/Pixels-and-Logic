import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background-color: ${theme.colors.backgroundDark};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const MockupOverlay = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppMockup = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 320px;
  min-width: 320px;
  height: 550px;
  max-width: 90vw;
  max-height: 90vh;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.background} 100%);
  border-radius: 25px;
  box-shadow: ${theme.shadows.xl};
  border: 6px solid ${theme.colors.primary};
  overflow: hidden;
  position: relative;

  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1);

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 320px;
    min-width: 220px;
    height: 500px;
    max-width: 90vw;
    max-height: 90vh;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 220px;
    min-width: 160px;
    height: 350px;
    max-width: 95vw;
    max-height: 80vh;
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

const BrowserMockup = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 25%;
  top: 25%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 320px;
  max-width: 95vw;
  max-height: 80vh;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.background} 100%);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  border: 2px solid ${theme.colors.primary};
  overflow: hidden;
  position: relative;

  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1);

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 320px;
    height: 220px;
    max-width: 90vw;
    max-height: 60vh;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 200px;
    height: 120px;
    max-width: 95vw;
    max-height: 40vh;
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
  background: ${theme.colors.primaryDark || theme.colors.primary};
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
  const [showApp, setShowApp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowApp(prev => !prev);
    }, 4000); // 4 seconds per mockup
    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <MockupOverlay>
        <AppMockup visible={showApp} aria-hidden={!showApp}>
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
                  <NavItem />
                  <NavItem />
                </AppNav>
              </AppHeader>
              <AppContent>
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <div className='app-columns' style={{ display: 'flex', width: '100%', gap: theme.spacing[2], marginTop: theme.spacing[2] }}>
                  <div style={{ flex: 1, height: '50px', background: theme.colors.backgroundAlt }}>
                    <div style={{ display: 'flex', gap: theme.spacing[2], marginTop: theme.spacing[2] }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.primary }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors.accent }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.blue }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.primary }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors.accent }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.blue }} />

                    </div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ width: '70%', height: '10px', background: theme.colors.textSecondary, marginBottom: theme.spacing[1] }} />
                    <div style={{ width: '50%', height: '10px', background: theme.colors.textSecondary }} />
                  </div>
                </div>
                <AppButton />
              </AppContent>
            </AppInterface>
            <GrowthBadge>10x User Growth</GrowthBadge>
          </AfterState>
        </AppMockup>

        <BrowserMockup visible={!showApp} aria-hidden={showApp}>
          <AfterState>
            <MockupTitle>Advanced Platform</MockupTitle>
            <MockupText>Complex features, enterprise-ready</MockupText>
            <AppInterface>
              <AppHeader>
                <AppNav>
                  <NavItem />
                  <NavItem />
                  <NavItem />
                  <NavItem />
                  <NavItem />
                  <NavItem />
                </AppNav>
              </AppHeader>
              <AppContent>
                <AppCard />
                <AppCard />
                <div className='app-columns' style={{ display: 'flex', width: '100%', gap: theme.spacing[2], marginTop: theme.spacing[2] }}>
                  <div style={{ flex: 1, height: '50px', background: theme.colors.backgroundAlt }}>
                    <div style={{ display: 'flex', gap: theme.spacing[2], marginTop: theme.spacing[2] }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.primary }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors.accent }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.blue }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.primary }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors.accent }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.blue }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.primary }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: theme.colors.accent }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: theme.colors.blue }} />

                    </div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ width: '70%', height: '10px', background: theme.colors.textSecondary, marginBottom: theme.spacing[1] }} />
                    <div style={{ width: '50%', height: '10px', background: theme.colors.textSecondary }} />
                  </div>
                </div>

                <AppButton />
              </AppContent>
            </AppInterface>
            <GrowthBadge>5x Revenue Growth</GrowthBadge>
          </AfterState>
        </BrowserMockup>
      </MockupOverlay>

      <FloatingElements>
        <FloatingIcon delay={0}>📱</FloatingIcon>
        <FloatingIcon delay={4}>💻</FloatingIcon>
        <FloatingIcon delay={8}>🚀</FloatingIcon>
      </FloatingElements>
    </Background>
  );
};