import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

function Sandwich() {
  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)
 const dispatch = useDispatch();

 function handleAddBread() {
  dispatch({ type: 'sandwich/addIngredient', payload: 'bread'})
 }
 function handleAddCheese() {
  dispatch({ type: 'sandwich/addIngredient', payload: 'cheese'})
 }
 function handleAddSalami() {
  dispatch({ type: 'sandwich/addIngredient', payload: 'salami'})
 }

 function handleDelete() {
  dispatch({type: 'sandwich/clear'})
 }

  return (
    <div>
      <h3>Chose your sandwich: </h3>
      <p>Sandwich: { ingredients }</p>
      <button onClick={handleAddBread}>Add Bread</button>
      <button onClick={handleAddCheese}>Add Cheese</button>
      <button onClick={handleAddSalami}>Add bolognia</button>
      <button onClick={handleDelete}>Delete all ingredients</button>
    </div>
  )
}

export default Sandwich;
