import { Navigation } from 'react-native-navigation';
import ContentList from './container/ContentList';

export default function (store, Provider) {
	Navigation.registerComponent('u148.ContentList', () => ContentList, store, Provider);
}
