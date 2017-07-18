const SelectArticleActionType = 'SelectArticleAction';

export const SelectArticleAction = (article) => {
	return {
		type: SelectArticleActionType,
		article
	};
};
const defaultSubject = (article = { id: 141810 }) => {
	return article;

};
export const SelectArticleReducer = (state = defaultSubject(), action) => {
	if (action.type === SelectArticleActionType) {
		return action.article;
	}
	return state;
};