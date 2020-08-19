import { shallowMount } from '@vue/test-utils';
import mutations from "@/store/mutations";

describe("SET_POST", () => {
  it("상태에 post를 추가한다", () => {
    const post = { id: 1, title: "Post" }
    const state = {
      postIds: [],
      posts: {}
    }

    mutations.SET_POST(state, { post })

    expect(state).toEqual({
      postIds: [1],
      posts: { "1": post }
    })
  })
})
