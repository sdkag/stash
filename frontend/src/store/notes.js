import { fetch } from "./csrf.js";
const FETCH_NOTES = "FETCH_NOTES";
const SEARCH_NOTES = "SEARCH_NOTES";
export const ADD_NOTE = "ADD_NOTE";

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

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});
const searchNotes = (searchTerm) => ({
  type: SEARCH_NOTES,
  payload: searchTerm,
});

const fetchNotes = (notes) => ({
  type: FETCH_NOTES,
  payload: notes,
});

//THUNKS
export const getNotes = (authorId) => async (dispatch) => {
  if (!authorId) return;
  try {
    const {
      data: { notes },
    } = await fetch(`/api/notes/${authorId}`);
    dispatch(fetchNotes(notes));
  } catch (error) {
    console.error(error);
  }
};

export const queryStore = (searchTerm) => (dispatch) => {
  if (!searchTerm) return;
  dispatch(searchNotes(searchTerm));
};

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
  byStatus: { archive: [3], notes: [1], pinned: [2] },
  matchedSearch: [],
  matchesMetaById: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    //TODO trace structure for allowing offline interaction.
    case ADD_NOTE: //this is how you can have the app work `offline`
      const tempByStatus = {
        archive: [...state.byStatus.archive],
        notes: [...state.byStatus.notes],
        pinned: [...state.byStatus.pinned],
      };
      tempByStatus[action.payload.status].unshift("temp");

      return {
        ...state,
        byId: {
          ...state.byId,
          temp: action.payload,
        },
        allIds: ["temp", ...state.allIds],
        byStatus: tempByStatus,
      };
    case FETCH_NOTES: //backend groupby, status order by created at
      let pinned = [];
      let notes = [];
      let archive = [];
      let byStatus = { pinned, notes, archive };

      return {
        ...state,
        byId: action.payload.reduce((state, note) => {
          byStatus[note.status].push(note.id);
          return { ...state, [note.id]: note };
        }, {}),
        allIds: action.payload.map(({ id }) => id),
        byStatus,
      };
    case SEARCH_NOTES:
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
