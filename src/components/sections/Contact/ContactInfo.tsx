import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';

// webpack will handle image import and return a string URL
import photoSrc from '../../../images/maciej.jpg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.md};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: ${theme.borderRadius.full};
  object-fit: cover;
  background-color: ${theme.colors.surfaceContainerHigh};
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const ProfileRole = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.accent};
`;

const ProfileTagline = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.surfaceContainerHigh};
`;

const HotlineBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const HotlineLabel = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.outline};
`;

const PhoneIcon = styled.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${theme.colors.accent};
  transition: transform ${theme.transitions.base};
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceContainer};
  color: ${theme.colors.onSurface};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: -0.025em;
  text-decoration: none;
  transition: background-color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceBright};
  }

  &:hover ${PhoneIcon} {
    transform: scale(1.1);
  }
`;

const Availability = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${theme.colors.onSurfaceVariant};
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.success};
`;

export const ContactInfo: React.FC = () => {
  const { t } = useTranslation('contact');
  const phone = t('info.phone');

  return (
    <Card>
      <Profile>
        <Avatar src={photoSrc} alt="Maciej" />
        <ProfileText>
          <ProfileName>Maciej</ProfileName>
          <ProfileRole>{t('info.role', 'Lead Architect • Pixels & Logic')}</ProfileRole>
          <ProfileTagline>{t('subtitle')}</ProfileTagline>
        </ProfileText>
      </Profile>

      <Divider />

      <HotlineBlock>
        <HotlineLabel>{t('info.phoneLabel', 'Direct Hotline')}</HotlineLabel>
        <PhoneLink href={`tel:${phone.replace(/\s/g, '')}`}>
          <PhoneIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </PhoneIcon>
          <span>{phone}</span>
        </PhoneLink>
      </HotlineBlock>

      <Availability>
        <StatusDot />
        <span>{t('info.availability', 'Available for Q2/Q3 sprint reservations')}</span>
      </Availability>
    </Card>
  );
};