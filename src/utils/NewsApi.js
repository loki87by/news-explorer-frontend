import { API_KEY } from './consts/consts';

export const getNews = (keyword) => {
  // *приводим дату в нужный вид
  let date = new Date()
  date.setDate(date.getDate() - 7);
  let month = date.getMonth() + 1;
  let year = date.toString().slice(11, 15);
  let day = date.toString().slice(8, 10);
  let dateNormalizer = year.concat('-').concat(month.toString()).concat('-').concat(day);

  // *настраиваем url запроса
  const BASE_URL = 'http://newsapi.org/v2/everything?' +
    `q=${keyword}&` +
    `from=${dateNormalizer}&` +
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