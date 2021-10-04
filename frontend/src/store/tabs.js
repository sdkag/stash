const SET_TAB = "status/SET_TAB";

export const setTab = (tab) => ({
  type: SET_TAB,
  payload: tab,
});

// const TABS = ["notes", "archive"];
const initialState = { selectedTab: "notes", previousTabs: [] };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TAB:
      return {
        selectedTab: action.payload,
        previousTabs: [...state.previousTabs, state.selectedTab],
      };
    default:
      return { ...state };
  }
}
