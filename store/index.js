export const state = () => ({
  menu: [
    { path: '/', title: 'Главная страница', meta: [] },
    { path: '/page2', title: 'Страница №2', meta: [] },
    { path: '/page3', title: 'Страница №3', meta: [] }
  ],
  text: null
});

export const mutations = {
  changeText(state, text) {
    state.text = text;
  }
};
