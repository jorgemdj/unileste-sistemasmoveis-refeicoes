import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray5};
  border-radius: 6px;
  padding: 12px 16px;
  gap: 12px;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.gray4};
`;

export const MealName = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const StatusDot = styled.View<{ isOnDiet: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.colors.greenMid : theme.colors.redMid};
`;
