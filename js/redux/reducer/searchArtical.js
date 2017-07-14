import {SUBJECTS} from '../../config/Constant';
const SearchArticleActionType = 'SearchArticleAction';
export const SearchArticleAction = (subject, page = 1) => {
	return {
		type: SearchArticleActionType,
		subject,
		page
	};
};
const defaultSubjectName = 'index';
const defaultSubject = (subject, page = 1) => {
	return {
		subject,
		detail: { ...SUBJECTS[subject] },
		page
	};
};
export const SearchArticleReducer = (state = defaultSubject(defaultSubjectName), action) => {
	if (action.type === SearchArticleActionType) {
		const subjectName = action.subject;
		return defaultSubject(subjectName);
	}
	return state;
};