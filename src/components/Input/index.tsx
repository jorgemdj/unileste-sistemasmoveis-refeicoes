import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Label, StyledInput } from './styles';

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        placeholderTextColor="#B9BBBC"
        autoCapitalize="none"
        {...rest}
      />
    </Container>
  );
}
