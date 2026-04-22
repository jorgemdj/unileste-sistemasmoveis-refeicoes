import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isOnDiet: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`background-color: ${theme.colors.white};`
      : css`background-color: ${theme.colors.white};`}
`;

export const FeedbackTitle = styled.Text<{ isOnDiet: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  margin-bottom: 8px;
  color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.colors.greenDark : theme.colors.redDark};
`;

export const FeedbackSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  line-height: 24px;
  margin-bottom: 32px;
`;

export const Illustration = styled.Text`
  font-size: 120px;
  margin-bottom: 48px;
`;

export const GoBackButton = styled.TouchableOpacity<{ isOnDiet: boolean }>`
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`background-color: ${theme.colors.gray2};`
      : css`background-color: ${theme.colors.gray2};`}
`;

export const GoBackButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.white};
`;
