import axios from 'axios';
import api from '@/api';

const spyGet = jest.spyOn(axios, "get")

test('mock', () => {
  const mockFn = jest.fn();

  // mockFn()
  // mockFn(1)
  mockFn("A")
  expect(mockFn).toBeCalledWith("A")
  mockFn([1, 2], { a: "b" })
  expect(mockFn).toBeCalledWith([1, 2], { a: "b" })
  mockFn.mockReturnValue("I am a mock!")
  console.log(mockFn())

  mockFn.mockResolvedValue("I will be a mock!")
  mockFn().then((result) => {
    console.log(result) // I will be a mock!
  })
})

test('mock spy test', () => {
  const calculator = {
    add: (a, b) => a + b,
  }
  const spyFn = jest.spyOn(calculator, "add")
  const result = calculator.add(2, 3)

  expect(spyFn).toBeCalledTimes(1)
  expect(spyFn).toBeCalledWith(2, 3)
  expect(result).toBe(5)
})

test('ajax mock test', async () => {
  await api.findOne(1);
  expect(spyGet).toBeCalledTimes(1)
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`)
})

test('ajax mock test return', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: "Dale Seo",
    },
  });

  const user = await api.findOne(1);
  expect(user).toHaveProperty("id", 1)
  expect(user).toHaveProperty("name", "Dale Seo")
  expect(axios.get).toBeCalledTimes(1)
  expect(axios.get).toBeCalledWith(
    `https://jsonplaceholder.typicode.com/users/1`
  )
})
