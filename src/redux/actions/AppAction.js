const AppAction = {
  sidebarShow: (val) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: "SET_SIDEBAR_SHOW",
          data: val,
        });
      } catch (err) {
        console.log("AppAction.sidebarShow", err.message);
      }
    };
  },
};

export { AppAction };
