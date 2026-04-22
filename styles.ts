import styled, { css } from 'styled-components/native';

type ButtonVariant = 'primary' | 'secondary';

export const Container = styled.TouchableOpacity<{ variant: ButtonVariant }>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ variant, theme }) =>
    variant === 'primary'
      ? css`
          background-color: ${theme.colors.gray2};
        `
      : css`
          background-color: transparent;
          border-width: 1px;
          border-color: ${theme.colors.gray2};
        `}
`;

export const Label = styled.Text<{ variant: ButtonVariant }>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;

  ${({ variant, theme }) =>
    variant === 'primary'
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.gray1};
        `}
`;
