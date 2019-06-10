export const SAVE_NEWS = 'SAVE_NEWS';
export const INCREMENT = 'INCREMENT';

const API_KEY = '';
// get your API_KEY from https://newsapi.org/register

export const requestNews = site => {
	console.log('fetch for  : ', site);
	return dispatch => {
		fetch(
			`https://newsapi.org/v2/top-headlines?sources=${site}&apiKey=${API_KEY}`
		)
			.then(res => res.json())
			.then(json => dispatch(saveNewsInStore(json)))

		// setTimeout(() => {
		// 	dispatch(saveNewsInStore('news'));
		// }, 3000);
	};
};

const saveNewsInStore = news => {
	return {
		type: SAVE_NEWS,
		payload: news,
	};
};

export const increment = () => {
	return {
		type: INCREMENT
	}
}
