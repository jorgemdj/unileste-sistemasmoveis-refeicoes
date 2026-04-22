import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

export const HeaderCard = styled.View<{ isGood: boolean }>`
  align-items: center;
  padding: 48px 24px 32px;
  ${({ isGood, theme }) =>
    isGood
      ? css`background-color: ${theme.colors.greenLight};`
      : css`background-color: ${theme.colors.redLight};`}
`;

export const BackBtn = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 24px;
  padding: 4px;
`;

export const BackBtnText = styled.Text<{ isGood: boolean }>`
  font-size: 24px;
  color: ${({ isGood, theme }) =>
    isGood ? theme.colors.greenDark : theme.colors.redDark};
`;

export const PercentText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const PercentLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.gray3};
  text-align: center;
  margin: 24px 0 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 24px;
  gap: 12px;
`;

export const HighlightCard = styled.View`
  flex: 1;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;

type StatCardVariant = 'green' | 'red';

export const StatCard = styled.View<{ variant: StatCardVariant }>`
  flex: 1;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  ${({ variant, theme }) =>
    variant === 'green'
      ? css`background-color: ${theme.colors.greenLight};`
      : css`background-color: ${theme.colors.redLight};`}
`;

export const StatValue = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const StatLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  margin-top: 4px;
`;
