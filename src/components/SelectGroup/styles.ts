import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const OptionsRow = styled.View`
  flex-direction: row;
  gap: 8px;
`;

type OptionProps = { isSelected: boolean; isOnDiet: boolean };

export const Option = styled.TouchableOpacity<OptionProps>`
  flex: 1;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ isSelected, isOnDiet, theme }) => {
    if (!isSelected) {
      return css`
        background-color: ${theme.colors.gray6};
      `;
    }
    return isOnDiet
      ? css`
          background-color: ${theme.colors.greenLight};
          border-width: 1px;
          border-color: ${theme.colors.greenDark};
        `
      : css`
          background-color: ${theme.colors.redLight};
          border-width: 1px;
          border-color: ${theme.colors.redDark};
        `;
  }}
`;

export const Dot = styled.View<{ isOnDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.colors.greenDark : theme.colors.redDark};
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray1};
`;
