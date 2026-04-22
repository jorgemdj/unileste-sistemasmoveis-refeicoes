import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Divider, MealName, StatusDot } from './styles';
import { Meal } from '../../storage/mealStorage';

type Props = TouchableOpacityProps & {
  meal: Meal;
};

export function MealCard({ meal, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Time>{meal.time}</Time>
      <Divider />
      <MealName numberOfLines={1}>{meal.name}</MealName>
      <StatusDot isOnDiet={meal.isOnDiet} />
    </Container>
  );
}
