import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
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

export const ContactForm: React.FC = () => {
    const { t } = useTranslation('contact');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple form handling - in production, connect to Formspree or backend
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name">{t('form.name')}</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t('form.namePlaceholder')}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">{t('form.email')}</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('form.emailPlaceholder')}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="message">{t('form.message')}</Label>
                <TextArea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t('form.messagePlaceholder')}
                    required
                />
            </FormGroup>

            <Button type="submit" size="lg" fullWidth>
                {t('form.submit')}
            </Button>

            {status === 'success' && (
                <Message type="success">{t('form.success')}</Message>
            )}

            {status === 'error' && (
                <Message type="error">{t('form.error')}</Message>
            )}
        </FormWrapper>
    );
};
