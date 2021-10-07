import { fetch } from "./csrf";
const FETCH_USERS = "FETCH_USERS";

const fetchUsers = (users) => ({
  type: FETCH_USERS,
  payload: users,
});
export const getUsers = () => async (dispatch) => {
  const {
    data: { users },
  } = await fetch("/api/users");

  dispatch(fetchUsers(users));
};

const initialState = {
  allIds: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      let byId = {};
      return {
        ...state,
        byId: action.payload.reduce(
          (dict, user) => ({ ...dict, [user.id]: user }),
          byId
        ),
        allIds: action.payload.map((user) => user.id),
      };

    default:
      return { ...state };
  }
}
