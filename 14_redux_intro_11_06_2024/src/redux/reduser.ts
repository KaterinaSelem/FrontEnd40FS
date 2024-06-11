import { SandwichActionTypes, addIngredient, resetIngredients } from "./actions";

interface SandwichState {
    ingredients: string[];
  }
  
  const initialSandwichState: SandwichState = {
    ingredients: [],
  };
  
  const sandwichReducer = (
    state = initialSandwichState,
    action: SandwichActionTypes
  ): SandwichState => {
    switch (action.type) {
      case addIngredient:
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      case resetIngredients:
        return {
          ...state,
          ingredients: [],
        };
      default:
        return state;
    }
  };
  
  export default combineReducers({
    sandwich: sandwichReducer,
  });