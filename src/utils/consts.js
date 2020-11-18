// *текст
export const DEFAULT_PLACEHOLDER = 'Введите тему новости'
export const NEED_KEYWORD = 'Нужно ввести ключевое слово'
export const NOT_FIND = 'К сожалению по вашему запросу ничего не найдено'
export const CONNECTED_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const UNCORRECTED_EMAIL = 'email введен некорректно';
export const SHORT_PASS = 'Пароль слишком короткий';
export const PASS_RULES = 'Пароль может содержать только цифры и латиницу';
export const SHORT_NAME = 'Имя должно быть не менее двух символов';
export const LONG_NAME = 'Имя должно быть не более 30 символов';
export const CONFLICT_ERROR = 'Такой пользователь уже существует';
export const API_KEY = '96fb88023047493688f02442b20eac74';
export const UNAUTHORIZED_ERROR = 'Ошибка: Неправильный логин или пароль';
export const UNKNOWN_ERROR = 'Произошла непредвиденная ошибка. Проверьте интернет-соединение и поробуйте еще раз';
// *ссылки
export const DEFAULT_PICTURE = 'https://cs.pikabu.ru/post_img/big/2013/08/24/1/1377296637_1500370441.png';
// *привeдение даты в нужный вид
let date = new Date()
date.setDate(date.getDate() - 7);
const month = date.getMonth() + 1;
const year = date.toString().slice(11, 15);
const day = date.toString().slice(8, 10);
export const DATE_NORMALIZER = year.concat('-').concat(month.toString()).concat('-').concat(day);
// *регулярки
export const NOT_EMPTY_REQUEST = /\s+/;
export const HTML_UNTAGGER = /<\/?[^>]+(>|$)/g;
export const EMAIL_CHECKER = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
export const PASS_CHECKER = /^[a-zA-Z0-9]{6,30}$/;

