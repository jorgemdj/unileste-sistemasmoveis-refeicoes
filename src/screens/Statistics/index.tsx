import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllMeals, calcDietStats } from '../../storage/mealStorage';
import {
  Container,
  HeaderCard,
  PercentText,
  PercentLabel,
  BackBtn,
  BackBtnText,
  Title,
  CardsGrid,
  StatCard,
  StatValue,
  StatLabel,
  HighlightCard,
} from './styles';

export function Statistics() {
  const navigation = useNavigation();
  const [stats, setStats] = useState({
    total: 0,
    onDiet: 0,
    offDiet: 0,
    percentOnDiet: 0,
    bestSequence: 0,
  });

  useFocusEffect(
    useCallback(() => {
      async function load() {
        const meals = await getAllMeals();
        setStats(calcDietStats(meals));
      }
      load();
    }, [])
  );

  const isGood = stats.percentOnDiet >= 50;

  return (
    <Container>
      <HeaderCard isGood={isGood}>
        <BackBtn onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <BackBtnText isGood={isGood}>←</BackBtnText>
        </BackBtn>
        <PercentText>{stats.percentOnDiet.toFixed(2).replace('.', ',')}%</PercentText>
        <PercentLabel>das refeições dentro da dieta</PercentLabel>
      </HeaderCard>

      <Title>Estatísticas gerais</Title>

      <CardsGrid>
        <HighlightCard>
          <StatValue>{stats.bestSequence}</StatValue>
          <StatLabel>melhor sequência de refeições dentro da dieta</StatLabel>
        </HighlightCard>

        <HighlightCard>
          <StatValue>{stats.total}</StatValue>
          <StatLabel>refeições registradas</StatLabel>
        </HighlightCard>

        <StatCard variant="green">
          <StatValue>{stats.onDiet}</StatValue>
          <StatLabel>refeições dentro da dieta</StatLabel>
        </StatCard>

        <StatCard variant="red">
          <StatValue>{stats.offDiet}</StatValue>
          <StatLabel>refeições fora da dieta</StatLabel>
        </StatCard>
      </CardsGrid>
    </Container>
  );
}
