# 🥗 Unileste-sistemasmoveis-refeicoes App

Aplicativo de controle de refeições desenvolvido com React Native + Expo SDK 54.

## 🚀 Como iniciar

```bash
# 1. Crie o projeto com o template
git clone https://github.com/jorgemdj/unileste-sistemasmoveis-refeicoes.git
npm install

# 2. Instale as dependências
npx expo install @react-navigation/native @react-navigation/native-stack @react-native-async-storage/async-storage @expo-google-fonts/nunito-sans react-native-screens react-native-safe-area-context expo-status-bar expo-splash-screen babel-plugin-styled-components react-native-uuid
npm install styled-components
npm install --save-dev @types/styled-components-react-native

# 4. Execute o app
npx expo start
```

## 📁 Estrutura de arquivos

```
unileste-sistemasmoveis-refeicoes/
├── src/
│   ├── @types/
│   │   └── styled.d.ts
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Input/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── MealCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── SelectGroup/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── screens/
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Statistics/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── MealForm/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── MealDetail/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── MealFeedback/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── storage/
│   │   └── mealStorage.ts
│   ├── theme/
│   │   └── index.ts
│   └── routes/
│       └── index.tsx
├── App.tsx
└── app.json
```

## 📦 Dependências

- `@react-navigation/native` + `@react-navigation/native-stack` — Navegação
- `@react-native-async-storage/async-storage` — Persistência local
- `styled-components` — Estilização
- `expo-status-bar` — Status bar
