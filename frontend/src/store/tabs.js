const SET_TAB_STATUS = "status/SET_TAB_STATUS";

export const setTabStatus = (status) => ({
  type: SET_TAB_STATUS,
  payload: status,
});

const Notes = "Notes";
const Archive = "Archive";
const OPTIONS = { Notes, Archive };
const initialState = { selectedTab: "Notes", previousTabs: [] };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_STATUS:
      return {
        selectedTab: action.payload,
        previousTabs: [...state.previousTabs, state.selectedTab],
      };
    default:
      return { ...state };
  }
}
