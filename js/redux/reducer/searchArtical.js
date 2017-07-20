import {SUBJECTS} from '../../config/Constant';
const SearchArticleActionType = 'SearchArticleAction';
export const SearchArticleAction = (subject) => {
	return {
		type: SearchArticleActionType,
		subject,
	};
};
const defaultSubjectName = 'index';
const defaultSubject = (subject) => {
	return {
		subject,
		detail: { ...SUBJECTS[subject] },
	};
};
export const SearchArticleReducer = (state = defaultSubject(defaultSubjectName), action) => {
	if (action.type === SearchArticleActionType) {
		const subjectName = action.subject;
		return defaultSubject(subjectName);
	}
	return state;
};