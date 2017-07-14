import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import ArticleService from '../service/ArticleService';
import  { getSubjectByValue } from '../config/Constant';


let { ScrollView, View, StyleSheet, Image, Text } = ReactNative;

class ArticleView extends React.PureComponent {
	render() {
		const article = this.props.article;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{url: article.pic_mid}}
					/>
				</View>
				<View style={styles.articleContainer}>
					<View style={styles.describeRow}>
						<Text numberOfLines={1} style={styles.textSubject}>
							<Text style={styles.articleType}>[{getSubjectByValue(article.category).display}]</Text>{article.title}
						</Text>
					</View>

					<View style={styles.describeRow}>
						<Text numberOfLines={2} style={styles.textDescribe}>
							{article.summary}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

class ArticalList extends React.Component {

	constructor(props) {
		super(props);
		this.state = { articles: [] };
		ArticleService.loadArticle(props.subject, props.page).then(articlesData => {
			const more = articlesData.pageMax > props.page;
			this.setState({ articles: articlesData.data, more });
		});
	}

	render() {

		return (
			<ScrollView>
				{
					this.state.articles.map(article => {
						return (
							<View key={article.id*1000 + article.uid} style={styles.articleView}>
								<ArticleView article={article} />
							</View>
						);
					})
				}
			</ScrollView>
		);
	}
}

const imageSize = { width: 120, height: 80 };

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5
	},
	imageContainer: {
		...imageSize,
		borderRadius: 2,
		overflow: 'hidden'
	},
	image: {
		resizeMode: 'cover',
		...imageSize
	},
	articleContainer: {
		flex: 1,
		marginLeft: 8
	},
	articleType: {
		color: '#ff9900'
	},
	describeRow: {
		flexDirection: 'row',
		marginTop: 6,
	},
	textSubject: {
		fontSize: 14
	},
	textDescribe: {
		fontSize: 12
	},
	articleView: {
		marginTop: 2
	}
});

const stateMapper = (state) => {
	return {
		articleCondition: state.articleCondition
	}
};

export default connect(stateMapper)(ArticalList);