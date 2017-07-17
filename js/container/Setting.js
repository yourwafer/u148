import React from 'react';
import ReactNative from 'react-native';
import bg from './img/setting.jpg';

const {
	View, StyleSheet, Image, Text
} = ReactNative;

class Setting extends React.Component {
	render() {
		return (
			<Image source={bg} style={styles.container}>

			</Image>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 330,
		backgroundColor: 'red'
	},

});

export default Setting;