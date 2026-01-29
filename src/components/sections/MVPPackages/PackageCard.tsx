import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Button } from '../../ui/Button';

const Card = styled.div<{ isPopular?: boolean }>`
  background: ${theme.colors.white};
  border: 2px solid ${({ isPopular }) =>
        isPopular ? theme.colors.accent : theme.colors.navy};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const Badge = styled.div<{ isPopular?: boolean }>`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ isPopular }) =>
        isPopular ? theme.colors.accent : theme.colors.teal};
  color: ${theme.colors.primary};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`;

const PackageName = styled.h3`
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[2]};
  margin-top: ${theme.spacing[4]};
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[6]};
`;

const PriceWrapper = styled.div`
  margin-bottom: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing[6]};
  border-bottom: 2px solid ${theme.colors.background};
`;

const Price = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[1]};
`;

const PriceNote = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-left: ${theme.spacing[2]};
`;

const Details = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
  flex-wrap: wrap;
`;

const Detail = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

const FeaturesLabel = styled.h4`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[4]};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing[8]} 0;
  flex-grow: 1;
`;

const Feature = styled.li`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text};
  padding: ${theme.spacing[2]} 0;
  padding-left: ${theme.spacing[6]};
  position: relative;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${theme.colors.text};
    font-weight: ${theme.fontWeights.bold};
  }
`;

interface PackageCardProps {
    badge: string;
    name: string;
    description: string;
    price: string;
    priceNote?: string;
    duration: string;
    pages: string;
    features: string[];
    cta: string;
    includedLabel: string;
    isPopular?: boolean;
    onSelect: () => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
    badge,
    name,
    description,
    price,
    priceNote,
    duration,
    pages,
    features,
    cta,
    includedLabel,
    isPopular,
    onSelect
}) => {
    return (
        <Card isPopular={isPopular}>
            <Badge isPopular={isPopular}>{badge}</Badge>
            <PackageName>{name}</PackageName>
            <Description>{description}</Description>

            <PriceWrapper>
                <Price>
                    {price}
                    {priceNote && <PriceNote>{priceNote}</PriceNote>}
                </Price>
            </PriceWrapper>

            <Details>
                <Detail>⏱️ {duration}</Detail>
                <Detail>📄 {pages}</Detail>
            </Details>

            <FeaturesLabel>{includedLabel}</FeaturesLabel>
            <FeaturesList>
                {features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                ))}
            </FeaturesList>

            <Button
                size="lg"
                fullWidth
                variant={isPopular ? 'primary' : 'outline'}
                onClick={onSelect}
            >
                {cta}
            </Button>
        </Card>
    );
};
