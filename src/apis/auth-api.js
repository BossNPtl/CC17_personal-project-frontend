import axios from '../config/axios';

const authApi = {};

authApi.register = body => axios.post('http://localhost:9690/auth/register', body);
authApi.login = body => axios.post('http://localhost:9690/auth/login', body);
authApi.getAuthUser = () => axios.get('http://localhost:9690/auth/me');

export default authApi;