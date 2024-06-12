type Ingredient = 'bread' | 'cheese' | 'salami'; //сузили значения возможными вариантами строки

type Action = 
| { type: 'sandwich/addIngredient', payload: Ingredient }
| { type: 'sandwich/clear' }

export default Action;