import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, BackButton, BackIcon, Title } from './styles';

type Props = {
  title?: string;
  onBack?: () => void;
  variant?: 'default' | 'green' | 'red';
};

export function Header({ title, onBack, variant = 'default' }: Props) {
  return (
    <Container variant={variant}>
      {onBack && (
        <BackButton onPress={onBack} activeOpacity={0.7}>
          <BackIcon variant={variant}>←</BackIcon>
        </BackButton>
      )}
      {title && <Title variant={variant}>{title}</Title>}
    </Container>
  );
}
