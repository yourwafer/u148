import axios from 'axios';
import { getSearchArticleUrl, getArticleDetailUrl } from '../config/Constant';

const loadArticle = (subject, page) => {
	const searchUrl = getSearchArticleUrl(subject, page);
	return axios.get(searchUrl).then(response => {
		if (response.status === 200) {
			return response.data;
		}
		return Promise.reject(response);
	}).then(articles => {
		return articles.data;
	}).catch(e => {
		console.log(e);
	});

};

const loadArticleDetail = (id) => {
	const articleUrl = getArticleDetailUrl(id);
	return axios.get(articleUrl).then(response => {
		if (response.status === 200) {
			return response.data;
		}
		return Promise.reject(response);
	}).then(articles => {
		return articles.data.content;
	}).catch(e => {
		console.log(e);
	});
};

export default { loadArticle, loadArticleDetail };