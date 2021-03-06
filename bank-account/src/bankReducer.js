import constants from "./constants";

const initialState = {
	balance: 0
}

const bankReducer = (state = initialState, action) => {
	console.log(action);    // temporarily logging all actions

	switch (action.type) {
		case constants.DEPOSIT_INTO_ACCOUNT:
			return { balance: state.balance + parseFloat(action.amount) }

		case constants.WITHDRAW_FROM_ACCOUNT:
			return { balance: state.balance - parseFloat(action.amount) }

		default:
			return state;
	}
}

export default bankReducer;