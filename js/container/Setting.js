import React from 'react';
import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import ic_bg from './img/setting.png';
import ic_unlogin from './img/ic_avatar.png';
import ic_setting from './img/ic_settings.png';
import ic_info from './img/ic_info.png';
import ic_star from './img/ic_star.png';

const {
	View, StyleSheet, Image, Text, TouchableOpacity
} = ReactNative;

class SettingItem extends React.PureComponent {
	render() {
		return (
			<TouchableOpacity style={styles.settingRow} activeOpacity={0.7} onPress={this.props.select}>
				<Image style={styles.settingIcon} source={this.props.icon} />
				<Text style={styles.settingTxt}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

class ImageBackground extends React.Component {
	render() {
		const {children, style, imageStyle, imageRef, ...props} = this.props;

		return (
			<View style={style}>
				<Image
					{...props}
					style={[
            {
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
            imageStyle,
          ]}
					ref={imageRef}
				/>
				{children}
			</View>
		);
	}
}

class Setting extends React.Component {

	aboutClick = () => {
		Navigation.showModal({
			screen: 'u148.About',
			title: '版权声明'
		});
	};
	loginClick = () => {
		Navigation.showLightBox({
			screen: 'u148.Login',
			style: {
				backgroundColor: "rgba(0,0,0,0.5)",
				tapBackgroundToDismiss: true
			}
		});
	};

	render() {
		const userInfo = this.props.userInfo;
		const UserIcon = () => {
			if(userInfo.nickname !== undefined){
				return (
					<Image source={{uri: userInfo.icon}} style={styles.loginIcon} />
				);
			}else{
				return (
					<Image source={ic_unlogin} style={styles.loginIcon} />
				);
			}
		};

		const userName = () => {
			if(userInfo.nickname !== undefined){
				return (
					<View style={[styles.loginBtnRow, styles.userNameRow]}>
						<Text style={styles.nameTxt}>{userInfo.nickname}</Text>
					</View>
				);
			}else{
				return (
					<View style={styles.loginBtnRow}>
						<TouchableOpacity style={styles.btnContainer} onPress={this.loginClick}>
							<Text style={styles.btnTxt}>登录</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.btnContainer}>
							<Text style={styles.btnTxt}>注册</Text>
						</TouchableOpacity>
					</View>
				);
			}
		}

		return (
			<ImageBackground style={styles.container} source={ic_bg} imageStyle={styles.imgContainer}>
				<View style={styles.loginContainer}>
					{UserIcon()}
				</View>
				{userName()}
				<SettingItem icon={ic_setting} text={'设置'} />
				<SettingItem icon={ic_star} text={'收藏'} />
				<SettingItem icon={ic_info} text={'关于'} select={this.aboutClick} />
			</ImageBackground>
		);
	}
}
//alignItems center not valid,so give a offset
const offsetLeft = -50;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 330,
		alignItems: 'center'
	},
	imgContainer: {
		width: null, height: null
	},
	loginContainer: {
		alignItems: 'center',
	},
	loginIcon: {
		width: 50,
		height: 50,
		marginLeft: offsetLeft,
		marginTop: 100,
		marginBottom: 15,
		borderRadius: 25
	},
	loginBtnRow: {
		width: 110,
		height: 50,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: offsetLeft,
	},
	userNameRow: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	nameTxt: {
		color: '#294551'
	},
	btnContainer: {
		width: 50,
		height: 30,
		backgroundColor: '#d8d8d8',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnTxt: {
		color: '#294551',
		fontSize: 15
	},
	settingRow: {
		width: 200,
		height: 45,
		marginLeft: offsetLeft,
		marginTop: 15,
		backgroundColor: 'rgba(180,177,177,0.45)',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20
	},
	settingIcon: {
		width: 20,
		height: 20
	},
	settingTxt: {
		color: '#294551',
		fontSize: 19,
		marginLeft: 10
	}
});

const mapState = (state)=>{
	return {
		userInfo: state.userInfo
	};
};
export default connect(mapState)(Setting);