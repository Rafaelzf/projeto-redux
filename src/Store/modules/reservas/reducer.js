const reserve = (state = [], action) => {
  switch (action.type) {
    case "ADD_RESERVE":
      return [];
    default:
      return state;
  }
};

export default reserve;
