import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.VUE_APP_API}/v0/templates/highlights`,
});
