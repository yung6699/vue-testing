import { register, deregister } from "@/utils/userMessage.js"
import { sendSMS, sendEmail } from "@/utils/messageService.js"
import api from '@/api';

const axios = require("axios")

jest.mock("axios")
jest.mock("@/utils/messageService")

//
// const sendEmail = messageService.sendEmail
// const sendSMS = messageService.sendSMS

beforeEach(() => {
  sendEmail.mockClear()
  sendSMS.mockClear()
})

const user = {
  email: "test@email.com",
  phone: "012-345-6789",
}

test("register sends messeges", () => {
  register(user)

  expect(sendEmail).toBeCalledTimes(1)
  expect(sendEmail).toBeCalledWith(user.email, "회원 가입을 환영합니다!")

  expect(sendSMS).toBeCalledTimes(1)
  expect(sendSMS).toBeCalledWith(user.phone, "회원 가입을 환영합니다!")
})

test("deregister sends messaes", () => {
  deregister(user)

  expect(sendEmail).toBeCalledTimes(1)
  expect(sendEmail).toBeCalledWith(user.email, "탈퇴 처리 되었습니다.")

  expect(sendSMS).toBeCalledTimes(1)
  expect(sendSMS).toBeCalledWith(user.phone, "탈퇴 처리 되었습니다.")
})


test("findOne fetches data from the API endpoint and returns what axios get returns", async () => {
  axios.get.mockResolvedValue({
    data: {
      id: 1,
      name: "Yoon",
    },
  })

  const user = await api.findOne(1)

  expect(user).toHaveProperty("id", 1)
  expect(user).toHaveProperty("name", "Yoon")
  expect(axios.get).toBeCalledTimes(1)
  expect(axios.get).toBeCalledWith(
    `https://jsonplaceholder.typicode.com/users/1`
  )
})
