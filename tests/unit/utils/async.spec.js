import { fetchUser, fetchUserPromise } from '@/utils';

test("fetch a user", (done) => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com"
    })
    done();
  })
})

test("Promise Test", () => {
  return fetchUserPromise(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    })
  })
})

test("await Promise Test", async () => {
  const user = await fetchUserPromise(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  })
})
