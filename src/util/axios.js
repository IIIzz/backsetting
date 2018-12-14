import axios from 'axios'

axios.defaults.baseURL='test.jucailin.com'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
export default axios