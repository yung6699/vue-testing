export default {
  poodles: (state) => {
    return state.dogs.filter(dog => dog.breed === "poodle")
  },

  poodlesByAge: (state, getters) => (age) => {
    return getters.poodles.filter(dog => dog.age === age)
  },

  fullName: (state) => {
    return `${state.firstName} ${state.lastName}`
  }

}
