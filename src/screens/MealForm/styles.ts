import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

export const HeaderArea = styled.View`
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 56px 24px 24px;
  flex-direction: row;
  align-items: center;
`;

export const BackBtn = styled.TouchableOpacity`
  padding: 4px;
`;

export const BackBtnText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-right: 32px;
`;

export const FormArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-top: -20px;
  padding: 32px 24px 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray2};
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const SubmitButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.white};
`;
