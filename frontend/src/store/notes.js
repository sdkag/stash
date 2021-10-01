import { fetch } from "./csrf.js";

const FETCH_NOTES = "FETCH_NOTES";

export const getNotes = () => async (dispatch) => {
  try {
    const notes = await fetch("/api/notes");
    dispatch(fetchNotes(notes));
  } catch (error) {
    console.error(error);
  }
};

const fetchNotes = (notes) => ({
  type: FETCH_NOTES,
  payload: notes,
});

const initialState = {
  byId: {
    1: {
      title: "The Beginning",
      body: "The beginning of the story",
    },
    2: {
      title: "The Middle",
    },
    3: {
      title: "The End",
    },
  },
  allIds: [1, 2, 3],
  archived: [3],
  notes: [1, 2],
  pinned: [2],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        byId: action.payload.reduce(
          (state, note) => ({
            ...state,
            [note.id]: note,
          }),
          {}
        ),
        allIds: action.payload.map(({ id }) => id),
      };
    default:
      return state;
  }
}

export default reducer;
