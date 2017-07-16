import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';

import {loadArticleDetail} from '../service/ArticleService';

const { WebView, StyleSheet } = ReactNative;

class ArticleDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { content: this.buildContentWithHtml() };
		loadArticleDetail(props.articleId).then(content => {
			this.setState({ content: this.buildContentWithHtml(content) });
		});
	}

	buildContentWithHtml = (content) => {
		return `<html><body>${content}</body></html>`;
	}


	render() {
		return (
			<WebView style={styles.webView} source={{html: this.state.content}} />
		);
	}
}

const styles = StyleSheet.create({
	webView: {
		flex: 1
	}
});

export default connect()(ArticleDetail);