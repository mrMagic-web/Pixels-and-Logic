import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { theme } from '../../../styles/theme';
import { Button } from '../../ui/Button';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  max-width: 600px;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.text};
`;

const Input = styled.input`
  padding: ${theme.spacing[3]};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fonts.body};
  border: 2px solid ${theme.colors.navy};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.text};
  transition: ${theme.transitions.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
  
  &::placeholder {
    color: ${theme.colors.navy};
  }
`;

const TextArea = styled.textarea`
  padding: ${theme.spacing[3]};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fonts.body};
  border: 2px solid ${theme.colors.navy};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.text};
  min-height: 150px;
  resize: vertical;
  transition: ${theme.transitions.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
  
  &::placeholder {
    color: ${theme.colors.navy};
  }
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${({ type }) =>
        type === 'success' ? theme.colors.teal : '#ffebee'};
  color: ${({ type }) =>
        type === 'success' ? theme.colors.primary : '#c62828'};
  text-align: center;
`;

const ErrorText = styled.span`
  color: #c62828;
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing[1]};
`;

export const ContactForm: React.FC = () => {
    const { t } = useTranslation('contact');
    const [state, handleSubmit] = useForm("xdazeego");

    if (state.succeeded) {
        return (
            <FormWrapper as="div">
                <Message type="success">{t('form.success')}</Message>
            </FormWrapper>
        );
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name">{t('form.name')}</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('form.namePlaceholder')}
                    required
                />
                <ValidationError 
                    prefix={t('form.name')} 
                    field="name"
                    errors={state.errors}
                    as={ErrorText}
                />
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
                <ValidationError 
                    prefix={t('form.email')} 
                    field="email"
                    errors={state.errors}
                    as={ErrorText}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="message">{t('form.message')}</Label>
                <TextArea
                    id="message"
                    name="message"
                    placeholder={t('form.messagePlaceholder')}
                    required
                />
                <ValidationError 
                    prefix={t('form.message')} 
                    field="message"
                    errors={state.errors}
                    as={ErrorText}
                />
            </FormGroup>

            <Button type="submit" size="lg" fullWidth disabled={state.submitting}>
                {state.submitting ? t('form.sending') : t('form.submit')}
            </Button>

            {state.errors && state.errors.length > 0 && !state.succeeded && (
                <Message type="error">{t('form.error')}</Message>
            )}
        </FormWrapper>
    );
};