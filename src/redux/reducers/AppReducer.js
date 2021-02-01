const initialState = {
  sidebarShow: "responsive",
};

const AppReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case "SET_SIDEBAR_SHOW":
      return { ...state, sidebarShow: data };
    default:
      return state;
  }
};

export { AppReducer };
