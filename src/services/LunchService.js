import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('lunches', {
      params: {
        search: search
      }
    })
  },
  show (lunchId) {
    return Api().get(`lunches/${lunchId}`)
  },
  post (lunch) {
    return Api().post('lunches', lunch)
  },
  put (lunch) {
    return Api().put(`lunches/${lunch.id}`, lunch)
  }
}
