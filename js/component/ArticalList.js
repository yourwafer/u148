import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import ArticleService from '../service/ArticleService';
import { getSubjectByValue } from '../config/Constant';
import { SelectArticleAction } from '../redux/reducer/selectArtical';


let { FlatList, View, StyleSheet, Image, Text, TouchableHighlight } = ReactNative;

class ArticleView extends React.Component {

	selectArticle = (articleId) => {
		return () => {
			this.props.select(articleId);
		}
	};

	render() {
		const article = this.props.article;
		return (
			<TouchableHighlight onPress={this.selectArticle(article)} activeOpacity={.7} underlayColor={'white'}>
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={{uri: article.pic_mid}}
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
			</TouchableHighlight>
		);
	}
}

class ArticleList extends React.Component {

	constructor(props) {
		super(props);
		this.state = { articles: [], page: 1 };
	}

	componentDidMount() {
		this._refresh();
	}

	componentWillReceiveProps(nextProps) {
		this._refresh(1, nextProps.articleCondition.subject);
	}

	articleSelect = (article) => {
		this.props.SelectArticleAction(article);
		this.props.navigator.push({
			screen: 'u148.ArticleDetail'
		});
	};

	_renderItem = ({ item }) => {
		const article = item;
		return (
			<View key={article.id*1000 + article.uid} style={styles.articleView}>
				<ArticleView article={article} select={this.articleSelect} />
			</View>
		);
	};

	_refresh = (page = this.state.page, subject = this.props.articleCondition.subject) => {
		ArticleService.loadArticle(subject, page).then(articlesData => {
			this.setState({ articles: articlesData.data, page: articlesData.pageNo });
		});
	};

	render() {

		return (
			<FlatList
				data={this.state.articles}
				extraData={this.state}
				keyExtractor={(article)=>article.id}
				renderItem={this._renderItem}
				onRefresh={()=>{this._refresh()}}
				refreshing={false}
			/>
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

export default connect(stateMapper, { SelectArticleAction })(ArticleList);