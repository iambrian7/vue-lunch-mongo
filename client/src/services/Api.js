import axios from 'axios'
// import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `/`,
    // baseURL: `http://localhost:8080/`,
    headers: {
      Authorization: `Bearer xxxxx`
      // Authorization: `Bearer ${store.state.token}`
    }
  })
}
