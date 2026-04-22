import React, { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container,
  LogoRow,
  LogoText,
  LogoAccent,
  StatsCard,
  StatsPercent,
  StatsLabel,
  StatsArrow,
  SectionTitle,
  ListContent,
  AddButton,
  AddButtonText,
  PlusIcon,
  EmptyText,
} from './styles';

import { MealCard } from '../../components/MealCard';
import { getAllMeals, groupMealsByDate, calcDietStats, MealsByDate } from '../../storage/mealStorage';
import { RootStackParamList } from '../../routes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [sections, setSections] = useState<MealsByDate[]>([]);
  const [percent, setPercent] = useState(0);

  useFocusEffect(
    useCallback(() => {
      async function load() {
        const meals = await getAllMeals();
        setSections(groupMealsByDate(meals));
        const stats = calcDietStats(meals);
        setPercent(stats.percentOnDiet);
      }
      load();
    }, [])
  );

  const isGoodPercent = percent >= 50;

  return (
    <Container>
      <LogoRow>
        <LogoText>
          Daily<LogoAccent>Diet</LogoAccent>
        </LogoText>
      </LogoRow>

      <StatsCard
        isGood={isGoodPercent}
        onPress={() => navigation.navigate('Statistics')}
        activeOpacity={0.8}
      >
        <StatsPercent>{percent.toFixed(2).replace('.', ',')}%</StatsPercent>
        <StatsLabel>das refeições dentro da dieta</StatsLabel>
        <StatsArrow isGood={isGoodPercent}>↗</StatsArrow>
      </StatsCard>

      <ListContent>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section }) => (
            <SectionTitle>{section.title}</SectionTitle>
          )}
          renderItem={({ item }) => (
            <MealCard
              meal={item}
              onPress={() => navigation.navigate('MealDetail', { mealId: item.id })}
              style={{ marginBottom: 8 }}
            />
          )}
          ListEmptyComponent={<EmptyText>Nenhuma refeição cadastrada ainda.</EmptyText>}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        />

        <AddButton
          onPress={() => navigation.navigate('MealForm')}
          activeOpacity={0.8}
        >
          <PlusIcon>+</PlusIcon>
          <AddButtonText>Nova refeição</AddButtonText>
        </AddButton>
      </ListContent>
    </Container>
  );
}
