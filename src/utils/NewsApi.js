import { API_KEY, DATE_NORMALIZER } from './consts.js';

export const getNews = (keyword) => {

  // *настраиваем url запроса
  const BASE_URL = 'https://newsapi.org/v2/everything?' +
    `q=${keyword}&` +
    `from=${DATE_NORMALIZER}&` +
    'sortBy=popularity&' +
    `apiKey=${API_KEY}`;

  // *сам запрос
  return fetch(`${BASE_URL}`, {
  method: 'GET'})
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
    .catch((e) => {
      return (e)
    })
}