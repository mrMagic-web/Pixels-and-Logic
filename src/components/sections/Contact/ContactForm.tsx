import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { theme } from '../../../styles/theme';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  width: 100%;
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.xl};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[10]};
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const fieldStyles = `
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceLowest};
  color: ${theme.colors.onSurface};
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  transition: box-shadow ${theme.transitions.base};

  &::placeholder {
    color: ${theme.colors.outline};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.accent};
  }
`;

const Input = styled.input`
  ${fieldStyles}
`;

const Select = styled.select`
  ${fieldStyles}
  cursor: pointer;
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 120px;
  resize: none;
`;

const SubmitIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  width: 100%;
  padding: ${theme.spacing[4]} 0;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  background-image: ${theme.gradients.brand};
  color: ${theme.colors.onPrimary};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  box-shadow: ${theme.shadows.glowCta};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover:not(:disabled) {
    opacity: 0.95;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Note = styled.p`
  margin: 0;
  text-align: center;
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${theme.colors.outline};
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${({ type }) =>
    type === 'success' ? `${theme.colors.success}26` : `${theme.colors.errorContainer}4d`};
  color: ${({ type }) => (type === 'success' ? theme.colors.success : theme.colors.error)};
  font-family: ${theme.fonts.body};
  font-size: 15px;
  text-align: center;
`;

const ErrorText = styled.span`
  color: ${theme.colors.error};
  font-family: ${theme.fonts.body};
  font-size: 13px;
`;

const ALL_PACKAGES = [
  'Starter MVP',
  'Professional MVP',
  'Custom MVP',
  'Landing Page',
  'Business Website',
  'Custom Website',
  'Basic SaaS',
  'Growth SaaS',
  'Custom SaaS',
];

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');
  const [state, handleSubmit] = useForm('xdazeego');
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    const handler = (e: Event) => {
      setSelectedPackage((e as CustomEvent<string>).detail);
    };
    window.addEventListener('packageSelected', handler);
    return () => window.removeEventListener('packageSelected', handler);
  }, []);

  if (state.succeeded) {
    return (
      <FormWrapper as="div">
        <Message type="success">{t('form.success')}</Message>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Row>
        <FormGroup>
          <Label htmlFor="name">{t('form.name')}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={t('form.namePlaceholder')}
            required
          />
          <ValidationError prefix={t('form.name')} field="name" errors={state.errors} as={ErrorText} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">{t('form.email')}</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={t('form.emailPlaceholder')}
            required
          />
          <ValidationError prefix={t('form.email')} field="email" errors={state.errors} as={ErrorText} />
        </FormGroup>
      </Row>

      <FormGroup>
        <Label htmlFor="package">{t('form.package')}</Label>
        <Select
          id="package"
          name="package"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          <option value="">{t('form.packagePlaceholder')}</option>
          {ALL_PACKAGES.map((pkg) => (
            <option key={pkg} value={pkg}>
              {pkg}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">{t('form.message')}</Label>
        <TextArea
          id="message"
          name="message"
          rows={4}
          placeholder={t('form.messagePlaceholder')}
          required
        />
        <ValidationError prefix={t('form.message')} field="message" errors={state.errors} as={ErrorText} />
      </FormGroup>

      <SubmitButton type="submit" disabled={state.submitting}>
        <span>{state.submitting ? t('form.sending') : t('form.submit')}</span>
        {!state.submitting && (
          <SubmitIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </SubmitIcon>
        )}
      </SubmitButton>

      <Note>{t('form.note', 'NDA signed on request • Response guaranteed under 24 hours')}</Note>

      {state.errors && state.errors.length > 0 && !state.succeeded && (
        <Message type="error">{t('form.error')}</Message>
      )}
    </FormWrapper>
  );
};