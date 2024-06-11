import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";

const store = legacy_createStore(combineReducers({
    counter: counterReducer 
})); //make global store





//sandwich

const rootReducer = combineReducers({
    sandwich: sandwichReducer,
  });
  
  const store = createStore(rootReducer);
  
  export type AppDispatch = typeof store.dispatch;

  export type RootState = ReturnType <typeof store.getState>; //получили тип данны который хранится в стор

  export default store;
  