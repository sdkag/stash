const SET_TYPE_STATUS = "status/SET_TYPE_STATUS";

export const setTypeStatus = (status) => ({
  type: SET_TYPE_STATUS,
  payload: status,
});

const notes = "Notes";
const archive = "Archive";

const initialState = {
  status: "",
  options: { notes, archive },
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TYPE_STATUS:
      return {
        ...state,
        status: state.options[action.payload],
      };
    default:
      return { ...state };
  }
}
