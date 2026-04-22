import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

export const HeaderArea = styled.View<{ isOnDiet: boolean }>`
  padding: 56px 24px 24px;
  flex-direction: row;
  align-items: center;
  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`background-color: ${theme.colors.greenLight};`
      : css`background-color: ${theme.colors.redLight};`}
`;

export const BackBtn = styled.TouchableOpacity`
  padding: 4px;
`;

export const BackBtnText = styled.Text<{ isOnDiet: boolean }>`
  font-size: 24px;
  color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.colors.greenDark : theme.colors.redDark};
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-right: 32px;
`;

export const ContentArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-top: -20px;
  padding: 32px 24px 24px;
`;

export const FieldLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray3};
`;

export const FieldValue = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 4px;
`;

export const DescriptionValue = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 4px;
`;

export const DietBadge = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: 100px;
  padding: 6px 16px;
  gap: 8px;
`;

export const DotBadge = styled.View<{ isOnDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.colors.greenDark : theme.colors.redDark};
`;

export const BadgeText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const ActionsArea = styled.View`
  padding: 16px 24px 32px;
  gap: 12px;
`;

export const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray2};
  height: 50px;
  border-radius: 6px;
  gap: 8px;
`;

export const EditButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const EditIcon = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray2};
  gap: 8px;
`;

export const DeleteButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const DeleteIcon = styled.Text`
  font-size: 16px;
`;
