import React from 'react';
import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';

const {
	View, Text, Button, StyleSheet, TextInput, PixelRatio, TouchableOpacity
} = ReactNative;

class LoginModal extends React.PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>登录</Text>
				<View style={styles.inputRow}>
					<TextInput
						style={styles.inputText}
						placeholder={'邮箱'} keyboardType={'email-address'} placeholderTextColor={'rgba(41,69,81,52)'} selectTextOnFocus={true}
					/>
					<View style={styles.inputBorder} />
				</View>
				<View style={styles.inputRow}>
					<TextInput
						style={styles.inputText}
						placeholder={'密码'} placeholderTextColor={'rgba(41,69,81,52)'} secureTextEntry={true}
					/>
					<View style={styles.inputBorder} />
				</View>
				<View style={styles.btnRow}>
					<TouchableOpacity style={[styles.actionBtn]}>
						<Text style={styles.actionBtnTxt}>取消</Text>
					</TouchableOpacity>
					<View style={styles.btnSep} />
					<TouchableOpacity style={styles.actionBtn}>
						<Text style={styles.actionBtnTxt}>确定</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 330,
		height: 300,
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
		alignItems: 'center'
	},
	title: {
		fontSize: 19,
		margin: 15,
		color: '#294551'
	},
	inputRow: {
		marginTop: 15,
		alignItems: 'center'
	},
	inputText: {
		width: 230,
		height: 40,
		fontSize: 17
	},
	inputBorder: {
		width: 235,
		height: 6,
		borderBottomWidth: 2,
		borderBottomColor: 'black',
		borderRightWidth: 1,
		borderRightColor: 'black',
		borderLeftWidth: 1,
		borderLeftColor: 'black',
		marginTop: -8
	},
	btnRow: {
		marginTop: 40,
		borderTopWidth: 1/PixelRatio.get(),
		borderBottomWidth: 1/PixelRatio.get(),
		alignSelf: 'stretch',
		flexDirection: 'row',
	},
	btnSep: {
		borderRightWidth: 1/PixelRatio.get()
	},
	actionBtn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 60
	},
	actionBtnTxt: {
		fontSize: 19
	}
});

export default LoginModal;