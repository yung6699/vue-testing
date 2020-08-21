export function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  }
}
