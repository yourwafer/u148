import React from 'react';
import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';

const {
	View, Text, Button, StyleSheet
} = ReactNative;

class AboutModal extends React.PureComponent {
	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.txt}>
					解释权归作者所有，所有接口使用www.u148.net提供的API，仅做个人学习使用，如果违反有意思吧的使用权，请联系yourwafer@gmail.com，本人会尽快修改.
				</Text>
				<View style={styles.btn}>
					<Button title='关闭' onPress={()=>{
					Navigation.dismissModal({
            animationType: 'slide-down'
					});}} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: 'white',
	},
	btn: {
		backgroundColor: '#00bccd',
		width: 100,
		alignSelf: 'center',
		borderRadius: 3,
		marginTop: 20
	},
	txt: {
		margin: 10
	}
});

export default AboutModal;