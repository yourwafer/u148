import { Navigation } from 'react-native-navigation';
import ContentList from './container/ContentList';
import ArticleDetail from './container/ArticleDetail';
import Setting from './container/Setting';
import AboutModal from './container/AboutModal';
import LoginModal from './container/LoginModal';

export default function (store, Provider) {
	Navigation.registerComponent('u148.ContentList', () => ContentList, store, Provider);
	Navigation.registerComponent('u148.ArticleDetail', () => ArticleDetail, store, Provider);
	Navigation.registerComponent('u148.Setting', () => Setting, store, Provider);
	Navigation.registerComponent('u148.About', () => AboutModal);
	Navigation.registerComponent('u148.Login', () => LoginModal, store, Provider);
}
