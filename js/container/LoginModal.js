import React from 'react';
import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { LoginAction } from '../redux/reducer/login';
import loginService from '../service/UserService';

const {
	View, Text, Button, StyleSheet, TextInput, PixelRatio, TouchableOpacity, Platform
} = ReactNative;

class LoginModal extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = { err: false };
	}

	loginClick = () => {
		if(this.email == undefined || this.password==undefined || this.email=='' || this.password==''){
			this.setState({ err: true });
			return;
		}
		loginService.login(this.email, this.password).then(response => {
			if (response.code === 0) {
				this.props.LoginAction(response.data);
				Navigation.dismissLightBox();
			} else {
				this.setState({ err: true });
			}
		});
	};

	cancelClick=()=>{
		Navigation.dismissLightBox();
	};

	render() {
		let inputBorder = <View />;
		if(Platform.OS.toLocaleLowerCase() == 'ios'){
			inputBorder = <View style={[styles.inputBorder, this.state.err?styles.inputError: {}]} />
		}
		return (
			<View style={styles.container}>
				<Text style={styles.title}>登录</Text>
				<View style={styles.inputRow}>
					<TextInput
						style={styles.inputText}
						placeholder={'邮箱'} keyboardType={'email-address'} placeholderTextColor={'rgba(41,69,81,52)'}
						selectTextOnFocus={true}
						autoFocus={true}
						ref={(c)=>{this.emailInput=c;}}
						onChangeText={(value=>this.email=value)}
					/>
					{inputBorder}
				</View>
				<View style={styles.inputRow}>
					<TextInput
						style={styles.inputText}
						placeholder={'密码'} placeholderTextColor={'rgba(41,69,81,52)'}
						secureTextEntry={true}
						ref={(c)=>{this.passwordInput=c;}}
						onChangeText={(value=>this.password=value)}
					/>
					{inputBorder}
				</View>
				<View style={styles.btnRow}>
					<TouchableOpacity style={[styles.actionBtn]} onPress={this.cancelClick}>
						<Text style={styles.actionBtnTxt}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionBtn} onPress={this.loginClick}>
						<Text style={styles.actionBtnTxt}>Login In</Text>
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
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderColor: 'black',
		marginTop: -8
	},
	inputError: {
		borderColor: 'red'
	},
	btnRow: {
		marginTop: 40,
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	actionBtn: {
		width: 80,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(216,216,216,0.36)',
		borderRadius: 5
	},
	actionBtnTxt: {
		fontSize: 17,
		color: '#294551'
	}
});

export default connect((state) => {
	return state;
}, { LoginAction })(LoginModal);