const SET_TYPE_STATUS = "status/SET_TYPE_STATUS";

export const setTypeStatus = (status) => ({
  type: SET_TYPE_STATUS,
  payload: status,
});

const notes = "Notes";
const archive = "Archive";
const OPTIONS = { notes, archive };
const initialState = [null, OPTIONS];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TYPE_STATUS:
      return [OPTIONS[action.payload] || null, OPTIONS];
    default:
      return { ...state };
  }
}
