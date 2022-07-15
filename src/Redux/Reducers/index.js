import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import CountByFiveReducer from "./CountByFiveReducer";
import TodosReducer from "./TodosReducer";

const allReducers = combineReducers({
  counterReducer: CounterReducer,
  countByFiveReducer: CountByFiveReducer,
  getTodosReducer: TodosReducer,
});
export default allReducers;
