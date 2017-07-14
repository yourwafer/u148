import React from 'react';
import ReactNative from 'react-native';

import {SUBJECTS} from '../config/Constant';
import Icon from './img/icon.png';
import ic_avatar from './img/ic_avatar.png';

let { View, Text, StyleSheet, Image } = ReactNative;

class NavHeader extends React.Component {

	subjectSelect = (subject) => {
		return () =>{

		};
	};

	renderNavItem = () => {
		const items = [];
		for(const subject in SUBJECTS) {
			const item = SUBJECTS[subject];
			items.push((
				<View key={subject} style={styles.activeItem}>
					<Text style={[styles.navItem]} onPress={this.subjectSelect(subject)}>{item.display}</Text>
				</View>
			));
		}
		return items;
	};

	render() {
		return (
			<View style={styles.nav}>
				{this.renderNavItem()}
			</View>
		);
	}
}

class NavContainer extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<CircleIcon />
				<NavHeader />
			</View>
		);
	}
}

class CircleIcon extends React.PureComponent {
	render() {
		return (
			<View style={[styles.iconContainer,styles.alignCenter]}>
				<Image style={styles.icon} source={Icon} />
			</View>
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
	activeItem: {
		borderBottomWidth: 2,
		paddingBottom: 5,
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

export default NavContainer;