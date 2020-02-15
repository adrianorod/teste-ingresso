import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-content.ingresso.com/v0/templates/highlights',
});
