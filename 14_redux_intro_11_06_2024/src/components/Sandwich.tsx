import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addIngredient, resetIngredients } from '../redux/actions';

const Sandwich: React.FC = () => {
  const ingredients = useSelector((state: RootState) => state.ingredients);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Бутерброд</h1>
      <div>
        <button onClick={() => dispatch(addIngredient('хлеб'))}>Добавить хлеб</button>
        <button onClick={() => dispatch(addIngredient('колбаса'))}>Добавить колбасу</button>
        <button onClick={() => dispatch(addIngredient('сыр'))}>Добавить сыр</button>
        <button onClick={() => dispatch(resetIngredients())}>Удалить ингредиенты</button>
      </div>
      <p>Бутерброд: {ingredients.join(' ')}</p>
    </div>
  );
};

export default Sandwich;