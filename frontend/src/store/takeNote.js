const SET_IS_OPEN = "takeNote/SET_IS_OPEN";
const TOGGLE_PINNED = "takeNote/TOGGLE_PINNED";
const TOGGLE_ARCHIVED = "takeNote/TOGGLE_ARCHIVED";
const SET_COLOR = "takeNote/SET_COLOR";
const SUBMIT = "takeNote/SUBMIT";
const SET_TITLE = "takeNote/SET_TITLE";
const SET_CONTENT = "takeNote/SET_CONTENT";

export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: isOpen,
});

export const togglePinned = () => ({
  type: TOGGLE_PINNED,
});

export const toggleState = (state) => (dispatch, getState) => {
  getState().takeNote;
  if (state === "pinned") {
    dispatch(togglePinned());
  } else if (state === "archived") {
    dispatch(toggleArchived());
  }
};

export const toggleArchived = () => ({
  type: TOGGLE_ARCHIVED,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  action: color,
});

export const setTitle = (title) => ({
  type: SET_TITLE,
  action: title,
});

export const createNote = () => async (dispatch) => {};
const initialState = {
  isOpen: false,
  isPinned: false,
  isArchived: false,
  color: "white",
  content: "",
  title: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case TOGGLE_PINNED:
      return {
        ...state,
        isPinned: action.paylaod,
      };
    case TOGGLE_ARCHIVED:
      return {
        ...state,
        isArchived: action.paylaod,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.paylaod,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_CONTENT:
      return {
        title: action.payload,
      };
    case SUBMIT:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
}
