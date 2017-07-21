import React from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import NavContainer from '../component/NavContainer';
import ArticleList from '../component/ArticalList';
import { SUBJECTS } from '../config/Constant';

let { View, StyleSheet, Text } = ReactNative;

class ContentList extends React.Component {

	state = {subject: 'index'};

	startSetting = () => {
		this.props.navigator.toggleDrawer({
			side: 'left',
			animated: true
		});
	};

	select = (subject) => {
		let index = 0;
		let preIndex = 0;
		let selectIndex = 0;
		for (const name in SUBJECTS) {
			if (name == subject) {
				selectIndex = index;
			}
			if(name == this.state.subject) {
				preIndex = index;
			}
			index += 1;
		}
		requestAnimationFrame(() => {
			this.swiper.scrollBy(selectIndex - preIndex);
		});
		this.setState({ subject });
	};

	scrollTab = (select) => {
		let index = 0;
		for (const name in SUBJECTS) {
			if(index === select) {
				this.setState({ subject: name });
				return;
			}
			index += 1;
		}
	};

	render() {
		const tabs = [];
		for (const name in SUBJECTS) {
			tabs.push((
				<View key={name} style={styles.slide}>
					<ArticleList navigator={this.props.navigator} subject={name} />
				</View>
			));
		}

		return (
			<View style={styles.container}>
				<NavContainer startSetting={this.startSetting} subject={this.state.subject} select={this.select} />
				<Swiper
					ref={e=>{this.swiper=e;}}
					loadMinimal={true}
					loadMinimalSize={2}
					loop={false}
					onMomentumScrollEnd = {(e, state, context) => {
						this.scrollTab(state.index);
					}}
				>
					{tabs}
				</Swiper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF'
	},
	slide: {
		flex: 1
	}
});

export default ContentList;