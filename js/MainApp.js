import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import store from './redux/store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'u148.ContentList',
		navigatorStyle: {
			navBarHidden: true
		}
	},
	drawer: {
		left: {
			screen: 'u148.Setting'
		}
	}
});