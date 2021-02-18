const funka = ({ dispatch }) => (next) => (action) => {
  // check to see if the action has a promise on its payload promise
  // if it does then wait for it to resolve
  // if it does not then send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if it does wait for the promise to resolve
  // get its data and then create a new action with that data and dispatch it

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default funka;
