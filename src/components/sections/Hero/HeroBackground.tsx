import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

/* Soft architectural glows behind the hero (hex alpha: 26 = 15%, 1a = 10%) */
const Layer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
`;

const GlowTop = styled.div`
  position: absolute;
  top: -128px;
  left: 50%;
  transform: translateX(-50%);
  width: 850px;
  max-width: 100%;
  height: 480px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.primary}26;
  filter: blur(140px);
`;

const GlowSide = styled.div`
  position: absolute;
  top: 192px;
  right: 40px;
  width: 320px;
  height: 320px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.accent}1a;
  filter: blur(110px);
`;

export const HeroBackground: React.FC = () => (
  <Layer aria-hidden="true">
    <GlowTop />
    <GlowSide />
  </Layer>
);