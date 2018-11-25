import axios from 'axios';

const getUsers = username =>
  axios.get('https://api.github.com/users/' + username);

export default {
  getUsers
};
