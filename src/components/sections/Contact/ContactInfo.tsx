import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';

// webpack will handle image import and return a string URL
import photoSrc from '../../../images/maciej.jpg';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileName = styled.h3`
  text-align: center;
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.primary};
  margin: ${theme.spacing[2]} 0 0;
`;

const ProfileTagline = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textSecondary};
  margin: ${theme.spacing[1]} 0 ${theme.spacing[4]};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[4]};
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.yellow} 100%);
  border-radius: ${theme.borderRadius.md};
  font-size: 24px;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Value = styled.a`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const ContactInfo: React.FC = () => {
  const { t } = useTranslation('contact');

  // photoSrc is imported at top of file

  return (
    <InfoWrapper>
      <ProfilePhoto src={photoSrc} alt="Maciej" />
      <ProfileName>Maciej</ProfileName>
      <ProfileTagline>Let's discuss your project</ProfileTagline>

      <InfoItem>
        <IconWrapper>✉️</IconWrapper>
        <InfoContent>
          <Label>Email</Label>
          <Value href={`mailto:${t('info.email')}`}>
            {t('info.email')}
          </Value>
        </InfoContent>
      </InfoItem>

      <InfoItem>
        <IconWrapper>📱</IconWrapper>
        <InfoContent>
          <Label>Phone</Label>
          <Value href={`tel:${t('info.phone')}`}>
            {t('info.phone')}
          </Value>
        </InfoContent>
      </InfoItem>
    </InfoWrapper>
  );
};
