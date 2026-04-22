import styled, { css } from 'styled-components/native';

type Variant = 'default' | 'green' | 'red';

export const Container = styled.View<{ variant: Variant }>`
  padding: 24px 24px 8px;
  flex-direction: row;
  align-items: center;

  ${({ variant, theme }) => {
    if (variant === 'green') return css`background-color: ${theme.colors.greenLight};`;
    if (variant === 'red') return css`background-color: ${theme.colors.redLight};`;
    return css`background-color: ${theme.colors.gray7};`;
  }}
`;

export const BackButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const BackIcon = styled.Text<{ variant: Variant }>`
  font-size: 24px;
  color: ${({ variant, theme }) =>
    variant === 'green'
      ? theme.colors.greenDark
      : variant === 'red'
      ? theme.colors.redDark
      : theme.colors.gray2};
`;

export const Title = styled.Text<{ variant: Variant }>`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-right: 32px;
`;
