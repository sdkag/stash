import { fetch } from "./csrf.js";

const FETCH_NOTES = "FETCH_NOTES";
const SEARCH_NOTES = "SEARCH_NOTES";
export const getNotes = () => async (dispatch) => {
  try {
    const notes = await fetch("/api/notes");
    dispatch(fetchNotes(notes));
  } catch (error) {
    console.error(error);
  }
};

const searchStore = (searchTerm, str) => {
  const regexp = new RegExp(searchTerm, "gi");
  str.matchAll(regexp);
  const isEasier = Array.from(
    str.matchAll(regexp),
    (m) => `${regexp.lastIndex} ${m[0]}`
  );
  let array = [...str.matchAll(regexp)];

  console.log("is this actually Easier", isEasier);
  console.log("is this the array that is supposedly easier", array);
  /*
  [ matchedTerm, index, input]
  */
  return array;
};

const searchNotes = (searchTerm) => ({
  type: SEARCH_NOTES,
  payload: searchTerm,
});
export const queryStore = (searchTerm) => (dispatch) => {
  if (!searchTerm) return;
  dispatch(searchNotes(searchTerm));
};

const fetchNotes = (notes) => ({
  type: FETCH_NOTES,
  payload: notes,
});

const initialState = {
  byId: {
    1: {
      title: "The Beginning",
      content: "The beginning of the story",
      status: "notes",
    },
    2: {
      title: "The Middle",
      content:
        "The middle of the story, this is were the story can get real interesting",
      status: "pinned",
    },
    3: {
      title: "The End",
      content: "The end of the story",
      status: "archived",
    },
  },
  allIds: [1, 2, 3],
  Archive: [3],
  Notes: [1, 2],
  Pinned: [2],
  matchedSearch: [],
  matchesMetaById: {},
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
    case SEARCH_NOTES:
      let matches = [];
      let matchIds = [];
      const matchesMetaById = {};
      state.allIds.forEach((id) => {
        // const content = searchStore(action.payload, state.byId[id].content);
        const title = searchStore(action.payload, state.byId[id].title);
        // if (content.length || title.length) {
        if (title.length) {
          // matches.push({ content, title });
          matchIds.push(id);
          // matchesMetaById[id] = { content, title };
          matchesMetaById[id] = { title };
        }
      });
      debugger;
      return {
        ...state,
        matchedSearch: { ...matchIds }, //because... why you not workin'
        matchesMetaById: { ...matchesMetaById }, //because... why you not workin'
      };
    // state.allIds.filer((id) => state.byId[id].title.includes(action.payload));
    default:
      return { ...state };
  }
}

export default reducer;
