import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { SUBJECTS } from '../config/Constant';
import Icon from './img/icon.png';
import { SearchArticleAction } from '../redux/reducer/searchArtical';

let { View, Text, StyleSheet, Image, TouchableHighlight } = ReactNative;

class NavHeader extends React.Component {

	subjectSelect = (subject) => {
		return () => {
			this.props.select(subject);
		};
	};

	renderNavItem = (activeSubject) => {
		const items = [];
		for (const subject in SUBJECTS) {
			const item = SUBJECTS[subject];
			items.push((
				<View key={subject}
				      style={subject==activeSubject?[styles.activeItem, styles.navItemContainer]:[styles.navItemContainer]}>
					<Text style={[styles.navItem]} onPress={this.subjectSelect(subject)}>{item.display}</Text>
				</View>
			));
		}
		return items;
	};

	render() {
		return (
			<View style={styles.nav}>
				{this.renderNavItem(this.props.active)}
			</View>
		);
	}
}

class NavContainer extends React.Component {

	startSetting = () => {
		this.props.navigator.toggleDrawer({
			side: 'left',
			animated: true
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<CircleIcon setting={this.startSetting} />
				<NavHeader active={this.props.articleCondition.subject} select={this.props.SearchArticleAction} />
			</View>
		);
	}
}

class CircleIcon extends React.PureComponent {
	render() {
		return (
			<TouchableHighlight onPress={()=>{this.props.setting&&this.props.setting()}} activeOpacity={.8} underlayColor={'white'}>
				<View style={[styles.iconContainer,styles.alignCenter]}>
					<Image style={styles.icon} source={Icon} />
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 65,
		backgroundColor: '#ff9900',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 15
	},
	nav: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 5
	},
	alignCenter: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	navItem: {
		color: 'black',
		fontSize: 13
	},
	navItemContainer: {
		paddingBottom: 5,
	},
	activeItem: {
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	},
	iconContainer: {
		width: 30,
		height: 30,
		borderRadius: 25,
		backgroundColor: 'white'
	},
	icon: {
		width: 18,
		height: 18,
	}
});

const stateMapper = (state) => {
	return {
		articleCondition: state.articleCondition
	}
};

export default connect(stateMapper, { SearchArticleAction })(NavContainer);