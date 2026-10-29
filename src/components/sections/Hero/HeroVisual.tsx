import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../../../styles/theme';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const Terminal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[5]};
  padding: ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow}e6;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0 25px 50px -12px ${theme.colors.primary}1a;
`;

const WindowBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${theme.spacing[3]};
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const Dot = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${({ color }) => color};
`;

const WindowUrl = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  color: ${theme.colors.onSurfaceVariant};
  opacity: 0.7;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceContainerHigh};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
`;

const Eyebrow = styled.span<{ soft?: boolean }>`
  display: block;
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ soft }) => (soft ? theme.colors.primarySoft : theme.colors.accent)};
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const Badge = styled.span<{ variant: 'success' | 'primary' }>`
  flex-shrink: 0;
  padding: 0.25rem 0.625rem;
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  font-weight: ${theme.fontWeights.semibold};
  background-color: ${({ variant }) =>
    variant === 'success' ? `${theme.colors.success}26` : `${theme.colors.primary}33`};
  color: ${({ variant }) =>
    variant === 'success' ? theme.colors.success : theme.colors.accent};
`;

const Sparkline = styled.svg`
  width: 100%;
  height: 56px;
  overflow: visible;
  color: ${theme.colors.accent};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[2]};
  padding-top: ${theme.spacing[1]};
`;

const Stat = styled.div`
  padding: ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.surfaceLow};
  text-align: center;
`;

const StatLabel = styled.span`
  display: block;
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${theme.colors.outline};
`;

const StatValue = styled.span<{ color?: string }>`
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${({ color }) => color || theme.colors.onSurface};
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: 0.625rem;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.surfaceLowest};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11px;
  color: ${theme.colors.onSurfaceVariant};
`;

const Cursor = styled.span`
  width: 8px;
  height: 16px;
  margin-left: auto;
  background-color: ${theme.colors.accent};
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={theme.colors.accent} aria-hidden="true">
    <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
  </svg>
);

export const HeroVisual: React.FC = () => (
  <Terminal aria-hidden="true">
    <WindowBar>
      <Dots>
        <Dot color={theme.colors.errorContainer} />
        <Dot color={theme.colors.surfaceContainerHighest} />
        <Dot color={theme.colors.success} />
      </Dots>
      <WindowUrl>console.pixelsandlogic.app</WindowUrl>
      <BoltIcon />
    </WindowBar>

    <Card>
      <CardHeader>
        <div>
          <Eyebrow>Scalable App Architecture</Eyebrow>
          <CardTitle>Full-featured, user-loved</CardTitle>
        </div>
        <Badge variant="success">10x User Growth</Badge>
      </CardHeader>
      <Sparkline viewBox="0 0 300 60" fill="none">
        <path d="M0,50 Q40,45 80,32 T160,25 T240,12 T300,4" stroke="currentColor"
          strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M0,50 Q40,45 80,32 T160,25 T240,12 T300,4 L300,60 L0,60 Z"
          fill="currentColor" fillOpacity="0.12" />
        <circle cx="300" cy="4" r="4" fill="currentColor" />
      </Sparkline>
    </Card>

    <Card>
      <CardHeader>
        <div>
          <Eyebrow soft>Advanced Platform</Eyebrow>
          <CardTitle>Complex features, enterprise-ready</CardTitle>
        </div>
        <Badge variant="primary">5x Revenue Growth</Badge>
      </CardHeader>
      <Stats>
        <Stat><StatLabel>TPS</StatLabel><StatValue>2,450</StatValue></Stat>
        <Stat><StatLabel>Latency</StatLabel><StatValue color={theme.colors.success}>18ms</StatValue></Stat>
        <Stat><StatLabel>Nodes</StatLabel><StatValue>12/12</StatValue></Stat>
        <Stat><StatLabel>Status</StatLabel><StatValue color={theme.colors.accent}>LIVE</StatValue></Stat>
      </Stats>
    </Card>

    <CommandLine>
      <span style={{ color: theme.colors.success, fontWeight: 700 }}>&gt;</span>
      <span>npm run deploy --production --zero-downtime</span>
      <Cursor />
    </CommandLine>
  </Terminal>
);