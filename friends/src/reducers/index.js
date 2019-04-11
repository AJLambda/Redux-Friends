// Start with a pretty simple initialState object that has a friends property set as an empty array. Your state tree will grow pretty large as you build out more and more actions.

const initialState = {
  friends: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default reducer;
