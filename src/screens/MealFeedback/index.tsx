import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

import {
  Container,
  FeedbackTitle,
  FeedbackSubtitle,
  Illustration,
  GoBackButton,
  GoBackButtonText,
} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'MealFeedback'>;

export function MealFeedback() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { isOnDiet } = route.params;

  return (
    <Container isOnDiet={isOnDiet}>
      {isOnDiet ? (
        <>
          <FeedbackTitle isOnDiet>Continue assim!</FeedbackTitle>
          <FeedbackSubtitle>
            Você continua <FeedbackSubtitle style={{ fontWeight: 'bold' }}>dentro da dieta</FeedbackSubtitle>. Muito bem!
          </FeedbackSubtitle>
          <Illustration>🥗</Illustration>
        </>
      ) : (
        <>
          <FeedbackTitle isOnDiet={false}>Que pena!</FeedbackTitle>
          <FeedbackSubtitle>
            Você <FeedbackSubtitle style={{ fontWeight: 'bold' }}>saiu da dieta</FeedbackSubtitle> dessa vez, mas continue se esforçando e não desista!
          </FeedbackSubtitle>
          <Illustration>😔</Illustration>
        </>
      )}

      <GoBackButton
        isOnDiet={isOnDiet}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.8}
      >
        <GoBackButtonText>Ir para a página inicial</GoBackButtonText>
      </GoBackButton>
    </Container>
  );
}
