import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface TechIconProps {
  name: string;
  icon: string;
}

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[3]};
  padding: 1.25rem;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceLow};
  transition: background-color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceContainerHigh};
  }
`;

/*
 * The devicon logos are full-colour and some (Next.js, AWS) are dark,
 * so they sit on a light chip to stay readable on the dark tile.
 */
const IconChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.onSurface};
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const Name = styled.span`
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
  color: ${theme.colors.onSurface};
`;

export const TechIcon: React.FC<TechIconProps> = ({ name, icon }) => {
  return (
    <Tile>
      <IconChip>
        {/* empty alt: the visible label below already names the technology */}
        <Icon src={icon} alt="" loading="lazy" />
      </IconChip>
      <Name>{name}</Name>
    </Tile>
  );
};