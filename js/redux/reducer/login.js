const LoginActionType = 'LoginAction';
export const LoginAction = (userInfo) => {
	return {
		type: LoginActionType,
		userInfo
	};
};

export const LoginReducer = (state = {}, action) => {
	if (action.type === LoginActionType) {
		return action.userInfo;
	}
	return state;
};