const OPEN_TAKE_NOTE = "OPEN_TAKE_NOTE";
const CLOSE_TAKE_NOTE = "CLOSE_TAKE_NOTE";
const TOGGLE_PINNED = "TOGGLE_PINNED";
export const openTakeNote = () => ({ type: OPEN_TAKE_NOTE });
export const closeTakeNote = () => ({ type: CLOSE_TAKE_NOTE });

const initialState = {
  isOpen: false,
};
export default function reducer(state = initialState, { type }) {
  switch (type) {
    case OPEN_TAKE_NOTE:
      return {
        isOpen: true,
      };
    case CLOSE_TAKE_NOTE:
      return {
        isOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}
