export const SUBJECTS =  {
	index: {
		display: '首页',
		value: 0
	},
	image: {
		display: '图画',
		value: 3
	},
	article: {
		display: '文字',
		value: 6
	},
	chandlery: {
		display: '杂粹',
		value: 7
	},
	music: {
		display: '音频',
		value: 5
	},
	flood: {
		display: '漂流',
		value: 8
	},
	market: {
		display: '集市',
		value: 9
	}
};

const u148UrlPrefix = 'http://api.u148.net';
export const getSearchArticleUrl = (subject = 'index', page = 1) => {
	return `${u148UrlPrefix}/json/${SUBJECTS[subject].value}/${page}`;
};
export const getArticleDetailUrl = (id) => {
	return `${u148UrlPrefix}/json/article/${id}`;
};

export const getSubjectByValue = (value) => {
	for(const subject in SUBJECTS) {
		const detail = SUBJECTS[subject];
		if(detail.value === value) {
			return {
				subject,
				...detail
			};
		}
	}
	return {...SUBJECTS['chandlery'], subject: 'chandlery'};
};

export const loginUrl = `${u148UrlPrefix}/json/login`;