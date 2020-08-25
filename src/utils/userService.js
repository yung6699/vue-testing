import data from '@/db/data.js';

module.exports = {
  findAll () {
    return data.users;
  },

  create (user) {
    data.users.push(user);
  },

  destroy (id) {
    data.users.splice(data.users.findIndex(user => user.id === id), 1)
  },

  update (user) {
    data.users[data.users.findIndex(user => user.id === id)] = user
  }
}
