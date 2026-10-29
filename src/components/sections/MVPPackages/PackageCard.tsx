import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface PackageCardProps {
  badge: string;
  tier?: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  duration: string;
  pages: string;
  features: string[];
  cta: string;
  includedLabel: string;
  highlightLabel?: string;
  popularLabel?: string;
  isPopular?: boolean;
  onSelect: () => void;
}

/* ---------- card shell ---------- */
const Card = styled.div<{ isPopular?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${({ isPopular }) =>
    isPopular ? theme.colors.surfaceHighlight : theme.colors.surfaceLow};
  box-shadow: ${({ isPopular }) => (isPopular ? theme.shadows.glowCard : theme.shadows.md)};

  /* featured card sits slightly higher, like the design */
  @media (min-width: ${theme.breakpoints.lg}) {
    margin-top: ${({ isPopular }) => (isPopular ? `-${theme.spacing[4]}` : '0')};
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${theme.spacing[1]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.full};
  background-image: ${theme.gradients.brand};
  color: ${theme.colors.onPrimary};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: ${theme.shadows.md};
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const BadgeRow = styled.div<{ isPopular?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  padding-top: ${({ isPopular }) => (isPopular ? theme.spacing[1] : 0)};
`;

const Badge = styled.span<{ isPopular?: boolean }>`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.semibold};
  background-color: ${({ isPopular }) =>
    isPopular ? `${theme.colors.accent}33` : theme.colors.surfaceContainerHigh};
  color: ${({ isPopular }) => (isPopular ? theme.colors.accent : theme.colors.onSurfaceVariant)};
`;

const Tier = styled.span<{ mono?: boolean }>`
  font-family: ${({ mono }) =>
    mono ? 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' : theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  text-transform: ${({ mono }) => (mono ? 'uppercase' : 'none')};
  color: ${theme.colors.accent};
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const PackageName = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  line-height: 36px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const Description = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing[2]};
`;

const Price = styled.span<{ compact?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: ${({ compact }) => (compact ? '40px' : '56px')};
  line-height: ${({ compact }) => (compact ? '48px' : '64px')};
  font-weight: ${({ compact }) => (compact ? theme.fontWeights.bold : theme.fontWeights.extrabold)};
  letter-spacing: -0.02em;
  color: ${theme.colors.onSurface};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${({ compact }) => (compact ? '32px' : '44px')};
    line-height: ${({ compact }) => (compact ? '40px' : '52px')};
  }
`;

const PriceNote = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${theme.colors.outline};
`;

const Meta = styled.div<{ isPopular?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[2]} 0;
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${({ isPopular }) => (isPopular ? theme.colors.onSurface : theme.colors.onSurfaceVariant)};
`;

const MetaItem = styled.span<{ isPopular?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: ${({ isPopular }) => (isPopular ? theme.colors.accent : theme.colors.accentSoft)};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.surfaceContainerHigh};
`;

const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const FeaturesLabel = styled.span<{ isPopular?: boolean }>`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ isPopular }) => (isPopular ? theme.colors.accent : theme.colors.onSurface)};
`;

const FeaturesList = styled.ul<{ isPopular?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${({ isPopular }) => (isPopular ? theme.colors.onSurface : theme.colors.onSurfaceVariant)};
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${theme.colors.accent};
  }
`;

const Bottom = styled.div`
  padding-top: ${theme.spacing[8]};
`;

const SelectButton = styled.button<{ isPopular?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ isPopular }) => (isPopular ? '0.875rem' : theme.spacing[3])} 0;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  color: ${({ isPopular }) => (isPopular ? theme.colors.onPrimary : theme.colors.onSurface)};
  background-color: ${({ isPopular }) =>
    isPopular ? 'transparent' : theme.colors.surfaceContainerHigh};
  background-image: ${({ isPopular }) => (isPopular ? theme.gradients.brand : 'none')};
  box-shadow: ${({ isPopular }) => (isPopular ? theme.shadows.glowCta : 'none')};

  &:hover {
    background-color: ${({ isPopular }) =>
      isPopular ? 'transparent' : theme.colors.surfaceBright};
    opacity: ${({ isPopular }) => (isPopular ? 0.95 : 1)};
  }
`;

/* ---------- icons ---------- */
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

/* ---------- component ---------- */
export const PackageCard: React.FC<PackageCardProps> = ({
  badge,
  tier,
  name,
  description,
  price,
  priceNote,
  duration,
  pages,
  features,
  cta,
  includedLabel,
  highlightLabel,
  popularLabel,
  isPopular,
  onSelect,
}) => {
  // "Contact Us" style prices (no digits) use the smaller headline size
  const compactPrice = !/\d/.test(price);

  return (
    <Card isPopular={isPopular}>
      {isPopular && highlightLabel && <FloatingBadge>{highlightLabel}</FloatingBadge>}

      <Top>
        <BadgeRow isPopular={isPopular}>
          <Badge isPopular={isPopular}>{badge}</Badge>
          {isPopular && popularLabel ? (
            <Tier mono>{popularLabel}</Tier>
          ) : (
            tier && <Tier>{tier}</Tier>
          )}
        </BadgeRow>

        <NameBlock>
          <PackageName>{name}</PackageName>
          <Description>{description}</Description>
        </NameBlock>

        <PriceRow>
          <Price compact={compactPrice}>{price}</Price>
          {priceNote && <PriceNote>{priceNote}</PriceNote>}
        </PriceRow>

        <Meta isPopular={isPopular}>
          <MetaItem isPopular={isPopular}>
            <ClockIcon /> {duration}
          </MetaItem>
          <MetaItem isPopular={isPopular}>
            <DocIcon /> {pages}
          </MetaItem>
        </Meta>

        <Divider />

        <FeaturesBlock>
          <FeaturesLabel isPopular={isPopular}>{includedLabel}</FeaturesLabel>
          <FeaturesList isPopular={isPopular}>
            {features.map((feature, index) => (
              <Feature key={index}>
                <CheckIcon />
                <span>{feature}</span>
              </Feature>
            ))}
          </FeaturesList>
        </FeaturesBlock>
      </Top>

      <Bottom>
        <SelectButton type="button" isPopular={isPopular} onClick={onSelect}>
          {cta}
        </SelectButton>
      </Bottom>
    </Card>
  );
};