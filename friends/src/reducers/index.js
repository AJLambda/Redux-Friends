import { LOGGING_IN } from "../actions/login";

// Start with a pretty simple initialState object that has a friends property set as an empty array. Your state tree will grow pretty large as you build out more and more actions.
//Your initial state could (but doesn't have to) look something like this:
const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        error: "",
        loggingIn: true,
        fetchingFriends: false
      };
  }
};

export default reducer;
