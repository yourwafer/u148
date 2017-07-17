import React from 'react';
import ReactNative from 'react-native';
let { View, StyleSheet } = ReactNative;

import NavContainer from '../component/NavContainer';
import ArticleList from '../component/ArticalList';

class ContentList extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<NavContainer />
				<ArticleList navigator={this.props.navigator} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	}
});

export default ContentList;