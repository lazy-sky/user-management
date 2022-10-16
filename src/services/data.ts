import axios from 'axios'

const baseUrl = 'http://localhost:9000'

export const getUserData = async () => {
  const { data } = await axios.get(`${baseUrl}/users`)

  return data
}

export const toggleUserChecked = async (id: number, checked: boolean) => {
  await axios.patch(`${baseUrl}/users/${id}`, {
    checked,
  })
}
