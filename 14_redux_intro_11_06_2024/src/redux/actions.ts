export const addIngredient = 'addIngridient';
export const resetIngredients = 'resetIngridients';

interface AddIngredientAction {
  type: typeof addIngredient;
  payload: string;
}

interface ResetIngredientsAction {
  type: typeof resetIngredients;
}

export type SandwichActionTypes = AddIngredientAction | ResetIngredientsAction;

export const addIngredient = (ingredient: string): SandwichActionTypes => ({
  type: addIngredient,
  payload: ingredient,
});

export const resetIngredients = (): SandwichActionTypes => ({
  type: resetIngredients,
});