import { Navigation } from 'react-native-navigation';
import ContentList from './container/ContentList';
import ArticleDetail from './container/ArticleDetail';

export default function (store, Provider) {
	Navigation.registerComponent('u148.ContentList', () => ContentList, store, Provider);
	Navigation.registerComponent('u148.ArticleDetail', () => ArticleDetail, store, Provider);
}
