import React from 'react';
import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';

const {
	View, Text, Button
} = ReactNative;

class AboutModal extends React.PureComponent {
	render() {
		return (
			<View>
				<Text>
					解释权归作者所有，所有接口使用www.u148.net提供的API，如果违反有意思吧的使用权，请联系yourwafer@gmail.com，本人会尽快修改
				</Text>
				<Button title='关闭' onPress={()=>{
					Navigation.dismissModal({
            animationType: 'slide-down'
					});}} />
			</View>
		);
	}
}
export default AboutModal;