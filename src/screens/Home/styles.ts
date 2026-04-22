import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

export const LogoRow = styled.View`
  padding: 56px 24px 24px;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const LogoAccent = styled.Text`
  color: ${({ theme }) => theme.colors.greenDark};
`;

export const StatsCard = styled.TouchableOpacity<{ isGood: boolean }>`
  margin: 0 24px;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  position: relative;

  ${({ isGood, theme }) =>
    isGood
      ? css`
          background-color: ${theme.colors.greenLight};
        `
      : css`
          background-color: ${theme.colors.redLight};
        `}
`;

export const StatsPercent = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const StatsLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 4px;
`;

export const StatsArrow = styled.Text<{ isGood: boolean }>`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 20px;
  color: ${({ isGood, theme }) =>
    isGood ? theme.colors.greenDark : theme.colors.redDark};
`;

export const ListContent = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 32px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 6px;
  height: 50px;
  gap: 8px;
  margin-bottom: 16px;
`;

export const PlusIcon = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const AddButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const EmptyText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray4};
  margin-top: 40px;
`;
