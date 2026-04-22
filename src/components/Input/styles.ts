import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const StyledInput = styled.TextInput`
  height: 48px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray5};
  border-radius: 6px;
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray1};
`;
