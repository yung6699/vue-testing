import { shallowMount } from '@vue/test-utils';
import getters from "@/store/getters";

const dogs = [
  { name: "lucky", breed: "poodle", age: 1 },
  { name: "pochy", breed: "dalmatian", age: 2 },
  { name: "blackie", breed: "poodle", age: 4 }
]
const state = { dogs }

describe("poodles", () => {
  it("poodles를 반환한다", () => {
    const actual = getters.poodles(state)
    expect(actual).toEqual([ dogs[0], dogs[2] ])
  })

  it("age에 따라 poodles를 반환한다", () => {
    const poodles = [ dogs[0], dogs[2] ]
    const actual = getters.poodlesByAge(state, { poodles })(1)
    expect(actual).toEqual([ dogs[0] ])
  })
})
