import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import CountByFiveReducer from "./CountByFiveReducer";

const allReducers = combineReducers({
  counterReducer: CounterReducer,
  countByFiveReducer: CountByFiveReducer,
});
export default allReducers;
