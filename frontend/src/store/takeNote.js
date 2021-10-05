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

export const toggleState = (whichState) =>
  ({ toggleArchived, togglePinned }[whichState]());

export const toggleArchived = () => ({
  type: TOGGLE_ARCHIVED,
});
export const setContent = (content) => ({
  type: SET_CONTENT,
  payload: content,
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

    // onst TOGGLE_STATE: state[action.payload] = !state[action.payload];
    // return { ...state };
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
        ...state,
        content: action.payload,
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
