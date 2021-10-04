const OPEN_CREATE_NOTE = "OPEN_CREATE_NOTE";
const CLOSE_CREATE_NOTE = "CLOSE_CREATE_NOTE";

export const openCreateNote = () => ({ type: OPEN_CREATE_NOTE });
export const closeCreateNote = () => ({ type: CLOSE_CREATE_NOTE });

const initialState = {
  isOpen: false,
};
export default function reducer(state = initialState, { type }) {
  switch (type) {
    case OPEN_CREATE_NOTE:
      return {
        isOpen: true,
      };
    case CLOSE_CREATE_NOTE:
      return {
        isOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}
