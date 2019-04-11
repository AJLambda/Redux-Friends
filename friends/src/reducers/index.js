// Start with a pretty simple initialState object that has a friends property set as an empty array. Your state tree will grow pretty large as you build out more and more actions.
//Your initial state could (but doesn't have to) look something like this:
const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const reducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default reducer;
