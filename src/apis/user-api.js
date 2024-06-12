import axios from '../config/axios';

const userApi = {};

userApi.rename = (body) => axios.patch('http://localhost:9690/user/rename', body);

export default userApi;