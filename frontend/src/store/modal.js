//purely synchronous slice  of state
const initialState = {
  isOpen: false,
};

const SET_IS_OPEN = "SET_IS_OPEN";
export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: isOpen,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return { ...state };
  }
}
