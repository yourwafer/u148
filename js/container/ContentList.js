import React from 'react';
import ReactNative from 'react-native';
let { View, StyleSheet } = ReactNative;

import NavContainer from '../component/NavContainer';
import ArticalList from '../component/ArticalList';

class ContentList extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<NavContainer />
				<ArticalList />
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