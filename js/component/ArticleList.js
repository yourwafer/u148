import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import ArticleService from '../service/ArticleService';
import { getSubjectByValue } from '../config/Constant';
import { SelectArticleAction } from '../redux/reducer/selectArtical';
import ic_loading from './img/loading.gif';
import ic_complete from './img/complete.png';


let { FlatList, View, StyleSheet, Image, Text, TouchableHighlight } = ReactNative;

class ArticleView extends React.PureComponent {

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

class ArticleList extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = { articles: [], page: 1 };
		requestAnimationFrame(() => {
			this._refresh();
		});
	}

	// componentDidMount() {
	// 	this._refresh();
	// }
	//
	// componentWillReceiveProps(nextProps) {
	// 	this._refresh(1, nextProps.subject);
	// }

	articleSelect = (article) => {
		this.props.SelectArticleAction(article);
		this.props.navigator.push({
			screen: 'u148.ArticleDetail'
		});
	};

	_renderItem = ({ item }) => {
		const article = item;
		return (
			<View style={styles.articleView}>
				<ArticleView article={article} select={this.articleSelect} />
			</View>
		);
	};

	addToSet = (ori, data) => {
		const ids = ori.map((item) => item.id);
		data.forEach(item => {
			if(ids.indexOf(item.id) < 0){
				ori.push(item);
			}
		});
		return ori;
	};

	_refresh = (page = this.state.page, subject = this.props.subject) => {
		ArticleService.loadArticle(subject, page).then(articlesData => {
			const end = articlesData.pageNo >= articlesData.pageMax;
			if (articlesData.pageNo !== 1) {
				this.setState({ articles: this.addToSet([...this.state.articles], articlesData.data), page: articlesData.pageNo, end });
			} else {
				this.firstRender = true;
				this.setState({ articles: articlesData.data, page: articlesData.pageNo, end });
			}
		});
	};

	_end_next_page = () => {
		if(this.firstRender){
			this._refresh(this.state.page + 1);
		}
	};

	_footerComponent = () => {
		if (this.state.end) {
			return (
				<View style={styles.loadingView}>
					<Text>没啦，去看看别的吧</Text>
					<Image style={styles.complete} source={ic_complete} />
				</View>
			);
		} else {
			return (
				<View style={styles.loadingView}>
					<Text>客官稍候，马上就来...</Text>
					<Image style={styles.loading} source={ic_loading} />
				</View>
			);
		}
	};

	_itemLayout = (data, index) => (
		{length: 90, offset: 90 * index, index}
	);

	render() {

		return (
			<FlatList
				data={this.state.articles}
				extraData={this.state}
				keyExtractor={(article)=>{return article.id;}}
				renderItem={this._renderItem}
				onRefresh={()=>{this._refresh(1)}}
				refreshing={false}
				onEndReached={this._end_next_page}
				onEndReachedThreshold={0.1}
				initialNumToRender={7}
				ListFooterComponent={this._footerComponent}
				getItemLayout={this._itemLayout}
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
	},
	loadingView: {
		flexDirection: 'row',
		paddingLeft: 50,
		alignItems: 'baseline'
	},
	loading: {
		width: 50,
		height: 50
	},
	complete: {
		width: 100,
		height: 100
	}
});
const def = {};
const stateMapper = (state) => {
	return def;
};

export default connect(stateMapper, { SelectArticleAction })(ArticleList);