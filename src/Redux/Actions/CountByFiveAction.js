import {
  DECREMENTS_BY_FIVE,
  INCREMENTS_BY_FIVE,
  RESET_BY_FIVE,
} from "../Constants/CountByFiveConstants";

export const incrementsByFive = () => {
  return {
    type: INCREMENTS_BY_FIVE,
  };
};

export const decrementsByFive = () => {
  return {
    type: DECREMENTS_BY_FIVE,
  };
};

export const resetByFive = () => {
  return {
    type: RESET_BY_FIVE,
  };
};
