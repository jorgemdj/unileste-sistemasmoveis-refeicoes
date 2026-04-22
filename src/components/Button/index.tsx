import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, Label } from './styles';

type ButtonVariant = 'primary' | 'secondary';

type Props = TouchableOpacityProps & {
  title: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: React.ReactNode;
};

export function Button({ title, variant = 'primary', isLoading = false, icon, ...rest }: Props) {
  return (
    <Container variant={variant} disabled={isLoading} activeOpacity={0.7} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#1B1D1E'} />
      ) : (
        <>
          {icon}
          <Label variant={variant}>{title}</Label>
        </>
      )}
    </Container>
  );
}
