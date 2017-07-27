import { createStore } from 'redux';
import { Map } from 'immutable';

const initialState = new Map({
  title: 'Welcome',
  cards: [
    {
      name: 'alien',
      emoji: '👽'
    },
    {
      name: 'ghost',
      emoji: '👻'
    },
    {
      name: 'footsteps',
      emoji: '👣'
    },
    {
      name: 'snek',
      emoji: '🐍'
    },
    {
      name: 'pineapple',
      emoji: '🍍'
    }
  ]
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
