import produce from "immer";

const reserve = (state = [], action) => {
  switch (action.type) {
    case "ADD_RESERVE":
      /* antes do immer 
    [
        ...state,
        {
          ...action.trip,
          amount: 1,
        },
      ];
  */
      return produce(state, (draft) => {
        draft.push(action.trip);
      });
    default:
      return state;
  }
};

export default reserve;
