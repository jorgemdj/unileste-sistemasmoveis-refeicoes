import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { MealForm } from '../screens/MealForm';
import { MealDetail } from '../screens/MealDetail';
import { MealFeedback } from '../screens/MealFeedback';

export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  MealForm: { mealId?: string } | undefined;
  MealDetail: { mealId: string };
  MealFeedback: { isOnDiet: boolean };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Statistics" component={Statistics} />
        <Screen name="MealForm" component={MealForm} />
        <Screen name="MealDetail" component={MealDetail} />
        <Screen name="MealFeedback" component={MealFeedback} />
      </Navigator>
    </NavigationContainer>
  );
}
