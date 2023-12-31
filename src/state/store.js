import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ADD_EMPLOYEE } from './reducer'
import persistConfig from './persistConfig'; // Importez la configuration de persistConfig que vous avez créée

const persistedReducer = persistReducer(persistConfig, reducer);

export function addEmployee(employeeData) {
  console.log(employeeData)
  return {
    type: ADD_EMPLOYEE,
    payload: employeeData,
  };
}

export const store = createStore(
  persistedReducer, 
  applyMiddleware(thunk)
);

export const persistor = persistStore(store); 