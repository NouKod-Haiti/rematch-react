import axios from 'axios';

const getTodos = () => axios
  .get('https://api.mockaroo.com/api/e12f5ae0?count=50&key=b9ab26d0')
  .then(res => Promise.reolve(res.data))

export default {
  getTodos
}
