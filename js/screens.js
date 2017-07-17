import { Navigation } from 'react-native-navigation';
import ContentList from './container/ContentList';
import ArticleDetail from './container/ArticleDetail';
import Setting from './container/Setting';
import AboutModal from './container/AboutModal';

export default function (store, Provider) {
	Navigation.registerComponent('u148.ContentList', () => ContentList, store, Provider);
	Navigation.registerComponent('u148.ArticleDetail', () => ArticleDetail, store, Provider);
	Navigation.registerComponent('u148.Setting', () => Setting, store, Provider);
	Navigation.registerComponent('u148.About', () => AboutModal);
}
