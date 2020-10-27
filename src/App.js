import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat it.',
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '5:45',
    instructions: '1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat it.',
  },
  {
    id: 3,
    name: 'Plain Fish',
    servings: 5,
    cookTime: '5:45',
    instructions: '1. Put paprika on Fish\n2. Put Fish in oven\n3. Eat it.',
  },
];

export default App;
