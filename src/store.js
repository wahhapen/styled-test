import { createStore } from 'redux';
import { Map } from 'immutable';

const initialState = new Map({
  title: 'Welcome'
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
