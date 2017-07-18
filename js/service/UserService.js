import axios from 'axios';
import qs from 'qs';
import { loginUrl } from '../config/Constant';

const login = (email, password) => {
	const data = qs.stringify({ email, password });
	return axios.post(loginUrl, data).catch(e => {
		return Promise.resolve({ data: { code: 1, msg: '请求错误' } })
	}).then(res => res.data);
};
export default { login };