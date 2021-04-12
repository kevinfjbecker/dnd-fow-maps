dndFowMap.createStore = (function(dfm) {
  return function(reducer, initialState = null) {
    let state = initialState;
    const listenters = [];

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action);
      listenters.forEach((listener)=>listener());
    };

    const subscribe = (listener) => {
      listenters.push(listener);
      return () => {
        listenters = listenters.filter((l)=>l !== listener);
      };
    };

    return {
      dispatch,
      getState,
      subscribe,
    };
  };
}(dndFowMap));
