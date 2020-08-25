export function getUser(id) {
  if (id <= 0) throw new Error("Invalid ID")

  return {
    id,
    email: `user${id}@test.com`,
  }
}

export function fetchUser(id, cb) {
  setTimeout(() => {
    console.log("wait 0.1 sec.")
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    }
    cb(user)
  }, 100)
}

export function fetchUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.")
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      }
      resolve(user)
    }, 100)
  })
}

