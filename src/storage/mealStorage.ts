import AsyncStorage from '@react-native-async-storage/async-storage';

export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string; // DD/MM/YYYY
  time: string; // HH:MM
  isOnDiet: boolean;
  createdAt: string;
};

const STORAGE_KEY = '@dailydiet:meals';

export async function getAllMeals(): Promise<Meal[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function saveMeal(meal: Meal): Promise<void> {
  const meals = await getAllMeals();
  const updated = [...meals, meal];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export async function updateMeal(updatedMeal: Meal): Promise<void> {
  const meals = await getAllMeals();
  const updated = meals.map((m) => (m.id === updatedMeal.id ? updatedMeal : m));
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export async function deleteMeal(id: string): Promise<void> {
  const meals = await getAllMeals();
  const updated = meals.filter((m) => m.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export async function getMealById(id: string): Promise<Meal | undefined> {
  const meals = await getAllMeals();
  return meals.find((m) => m.id === id);
}

export type MealsByDate = {
  title: string;
  data: Meal[];
};

export function groupMealsByDate(meals: Meal[]): MealsByDate[] {
  const sorted = [...meals].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA).getTime();
    const dateB = new Date(yearB, monthB - 1, dayB).getTime();
    return dateB - dateA;
  });

  const groups: Record<string, Meal[]> = {};
  sorted.forEach((meal) => {
    if (!groups[meal.date]) groups[meal.date] = [];
    groups[meal.date].push(meal);
  });

  return Object.entries(groups).map(([date, data]) => ({
    title: date,
    data: data.sort((a, b) => b.time.localeCompare(a.time)),
  }));
}

export function calcDietStats(meals: Meal[]) {
  const total = meals.length;
  const onDiet = meals.filter((m) => m.isOnDiet).length;
  const offDiet = total - onDiet;
  const percentOnDiet = total > 0 ? (onDiet / total) * 100 : 0;

  // Best sequence on diet
  let bestSequence = 0;
  let currentSequence = 0;
  meals
    .slice()
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA, ...a.time.split(':').map(Number) as [number, number]).getTime();
      const dateB = new Date(yearB, monthB - 1, dayB, ...b.time.split(':').map(Number) as [number, number]).getTime();
      return dateA - dateB;
    })
    .forEach((m) => {
      if (m.isOnDiet) {
        currentSequence++;
        if (currentSequence > bestSequence) bestSequence = currentSequence;
      } else {
        currentSequence = 0;
      }
    });

  return { total, onDiet, offDiet, percentOnDiet, bestSequence };
}
