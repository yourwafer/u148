import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import Img from './img/image.jpg';


let { ScrollView, View, StyleSheet, Image, Text } = ReactNative;

class ArticleView extends React.PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={Img}
					/>
				</View>
				<View style={styles.articleContainer}>
					<View style={styles.describeRow}>
						<Text numberOfLines={1} style={styles.textSubject}>
							<Text style={styles.articleType}>[图画]</Text>我已认真阅读并同意该用户协议女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了
						</Text>
					</View>

					<View style={styles.describeRow}>
						<Text numberOfLines={2} style={styles.textDescribe}>
							女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了女孩子如果说“没事”，那就是生气了
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
		axios.get('http://api.u148.net/json/6/1').then(data => {
			console.log(data);
		}).catch(e => {
			console.log(e);
		})
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
				<View style={styles.articleView}>
					<ArticleView />
				</View>
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
		marginTop: 10,
	},
	textSubject: {
		fontSize: 14
	},
	textDescribe: {
		fontSize: 12
	},
	articleView: {
		marginTop: 5
	}
});

const stateMapper = (state) => {
	return {
		articleCondition: state.articleCondition
	}
};

export default connect(stateMapper)(ArticalList);