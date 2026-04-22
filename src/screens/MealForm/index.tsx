import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';

import { RootStackParamList } from '../../routes';
import { Input } from '../../components/Input';
import { SelectGroup } from '../../components/SelectGroup';
import { saveMeal, updateMeal, getMealById, Meal } from '../../storage/mealStorage';

import {
  Container,
  HeaderArea,
  BackBtn,
  BackBtnText,
  HeaderTitle,
  FormArea,
  Row,
  SubmitButton,
  SubmitButtonText,
} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'MealForm'>;

export function MealForm() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const mealId = route.params?.mealId;
  const isEditing = !!mealId;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (isEditing) {
        getMealById(mealId).then((meal) => {
          if (meal) {
            setName(meal.name);
            setDescription(meal.description);
            setDate(meal.date);
            setTime(meal.time);
            setIsOnDiet(meal.isOnDiet);
          }
        });
      }
    }, [mealId])
  );

  function formatDate(text: string) {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
  }

  function formatTime(text: string) {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    return `${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`;
  }

  async function handleSubmit() {
    if (!name.trim()) {
      Alert.alert('Atenção', 'O nome da refeição é obrigatório.');
      return;
    }
    if (!date.trim() || date.length < 10) {
      Alert.alert('Atenção', 'Informe uma data válida (DD/MM/AAAA).');
      return;
    }
    if (!time.trim() || time.length < 5) {
      Alert.alert('Atenção', 'Informe um horário válido (HH:MM).');
      return;
    }
    if (isOnDiet === null) {
      Alert.alert('Atenção', 'Informe se a refeição está dentro ou fora da dieta.');
      return;
    }

    const meal: Meal = {
      id: mealId ?? String(uuid.v4()),
      name: name.trim(),
      description: description.trim(),
      date,
      time,
      isOnDiet,
      createdAt: new Date().toISOString(),
    };

    if (isEditing) {
      await updateMeal(meal);
      navigation.goBack();
    } else {
      await saveMeal(meal);
      navigation.navigate('MealFeedback', { isOnDiet });
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <HeaderArea>
          <BackBtn onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <BackBtnText>←</BackBtnText>
          </BackBtn>
          <HeaderTitle>{isEditing ? 'Editar refeição' : 'Nova refeição'}</HeaderTitle>
        </HeaderArea>

        <FormArea>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16, paddingBottom: 32 }}>
            <Input
              label="Nome"
              value={name}
              onChangeText={setName}
              placeholder="Nome da refeição"
            />
            <Input
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              placeholder="Descrição da refeição"
              multiline
              numberOfLines={4}
              style={{ height: 120, textAlignVertical: 'top', paddingTop: 12 }}
            />
            <Input
              label="Data"
              value={date}
              onChangeText={(t) => setDate(formatDate(t))}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              maxLength={10}
              style={{ flex: 1 }}
            />
            <Input
              label="Hora"
              value={time}
              onChangeText={(t) => setTime(formatTime(t))}
              placeholder="HH:MM"
              keyboardType="numeric"
              maxLength={5}
              style={{ flex: 1 }}
            />
            <SelectGroup
              label="Está dentro da dieta?"
              value={isOnDiet}
              onChange={setIsOnDiet}
            />
          </ScrollView>

          <SubmitButton onPress={handleSubmit} activeOpacity={0.8}>
            <SubmitButtonText>
              {isEditing ? 'Salvar alterações' : 'Cadastrar refeição'}
            </SubmitButtonText>
          </SubmitButton>
        </FormArea>
      </Container>
    </KeyboardAvoidingView>
  );
}
