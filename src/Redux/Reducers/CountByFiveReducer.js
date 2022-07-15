import {
  DECREMENTS_BY_FIVE,
  INCREMENTS_BY_FIVE,
  RESET_BY_FIVE,
} from "../Constants/CountByFiveConstants";

const initialState = { count: 0 };

const CountByFiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTS_BY_FIVE:
      return {
        ...state,
        count: state.count + 5,
      };

    case DECREMENTS_BY_FIVE:
      return {
        ...state,
        count: state.count - 5,
      };

    case RESET_BY_FIVE:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default CountByFiveReducer;
