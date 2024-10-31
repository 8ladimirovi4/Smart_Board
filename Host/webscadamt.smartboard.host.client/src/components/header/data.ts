export const NodeService = {
  getUserData() {
    return [{ label: 'Войти', value: '1' }];
  },
  getUser() {
    return Promise.resolve(this.getUserData());
  },
};
