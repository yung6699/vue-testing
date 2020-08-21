import { getUser } from '@/utils';

describe('return a user object', () => {
  it('getUser function test', () => {
    expect(getUser(1)).toEqual({
      id: 1,
      email: `user1@test.com`
    })
  })
})
