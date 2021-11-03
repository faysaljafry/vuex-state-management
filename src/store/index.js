import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: {
        firstname: 'Jim',
        lastName: 'Cooper',
        email: 'faysaljafry@gmail.com',
      },
    };
  },
});

export default store;
