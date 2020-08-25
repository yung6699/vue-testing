import { getUser } from '@/utils';

describe('return a user object', () => {
  it('getUser function test', () => {
    expect(getUser(1)).toEqual({
      id: 1,
      email: `user1@test.com`
    })

    expect(getUser(1).email).toBe('user1@test.com')
    expect(getUser(2).email).toBe('user2@test.com')
  })
})

test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow()
  expect(() => getUser(-1)).toThrow("Invalid ID")
})

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy()
  expect("0").toBeTruthy()
})

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"]
  expect(colors).toHaveLength(3)
  expect(colors).toContain("Yellow")
  expect(colors).not.toContain("Green")
})
