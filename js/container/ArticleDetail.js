import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import ArticleService from '../service/ArticleService';
import template from '../resources/html_tpl';

const { WebView, StyleSheet } = ReactNative;

class ArticleDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { content: this.buildContentWithHtml() };
		ArticleService.loadArticleDetail(props.article.id).then(content => {
			this.setState({ content: this.buildContentWithHtml(content) });
		});
	}

	buildContentWithHtml = (content) => {
		let article = this.props.article;
		const createTime = moment(article.create_time * 1000).format('YYYY-MM-DD');
		return template.replace('{CONTENT}', content)
			.replace('{U_AUTHOR}', `${article.usr.nickname} ${createTime}`)
			.replace('{U_COMMENT}', 1)
			.replace('{TITLE}', article.title);
	}

	render() {
		return (
			<WebView
				style={styles.webView}
				source={{html: this.state.content}}
				scalesPageToFit={true}
				dataDetectorTypes={'none'}
			/>
		);
	}
}

const styles = StyleSheet.create({
	webView: {
		flex: 1
	}
});

const mapState = (state) => {
	return { article: state.article };
};

export default connect(mapState)(ArticleDetail);