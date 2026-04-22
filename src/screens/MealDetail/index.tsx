import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes';
import { getMealById, deleteMeal, Meal } from '../../storage/mealStorage';

import {
  Container,
  HeaderArea,
  BackBtn,
  BackBtnText,
  HeaderTitle,
  ContentArea,
  DietBadge,
  DotBadge,
  BadgeText,
  FieldLabel,
  FieldValue,
  DescriptionValue,
  ActionsArea,
  EditButton,
  EditButtonText,
  DeleteButton,
  DeleteButtonText,
  EditIcon,
  DeleteIcon,
} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'MealDetail'>;

export function MealDetail() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { mealId } = route.params;
  const [meal, setMeal] = useState<Meal | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMealById(mealId).then((m) => setMeal(m ?? null));
    }, [mealId])
  );

  function handleDelete() {
    Alert.alert(
      'Excluir refeição',
      'Deseja realmente excluir o registro da refeição?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim, excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteMeal(mealId);
            navigation.navigate('Home');
          },
        },
      ]
    );
  }

  if (!meal) return null;

  return (
    <Container>
      <HeaderArea isOnDiet={meal.isOnDiet}>
        <BackBtn onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <BackBtnText isOnDiet={meal.isOnDiet}>←</BackBtnText>
        </BackBtn>
        <HeaderTitle>Refeição</HeaderTitle>
      </HeaderArea>

      <ContentArea>
        <FieldLabel>Nome</FieldLabel>
        <FieldValue>{meal.name}</FieldValue>

        <FieldLabel style={{ marginTop: 20 }}>Descrição</FieldLabel>
        <DescriptionValue>{meal.description || 'Sem descrição'}</DescriptionValue>

        <FieldLabel style={{ marginTop: 20 }}>Data e hora</FieldLabel>
        <FieldValue>
          {meal.date} às {meal.time}
        </FieldValue>

        <DietBadge style={{ marginTop: 24 }}>
          <DotBadge isOnDiet={meal.isOnDiet} />
          <BadgeText>{meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}</BadgeText>
        </DietBadge>
      </ContentArea>

      <ActionsArea>
        <EditButton
          onPress={() => navigation.navigate('MealForm', { mealId })}
          activeOpacity={0.8}
        >
          <EditIcon>✏</EditIcon>
          <EditButtonText>Editar refeição</EditButtonText>
        </EditButton>

        <DeleteButton onPress={handleDelete} activeOpacity={0.8}>
          <DeleteIcon>🗑</DeleteIcon>
          <DeleteButtonText>Excluir refeição</DeleteButtonText>
        </DeleteButton>
      </ActionsArea>
    </Container>
  );
}
