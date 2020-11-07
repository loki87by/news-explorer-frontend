export const BASE_URL = 'http://api.diplom.students.nomoreparties.co/';
export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
  .then((res) => {
    try {
      if(res.ok) {
        return res.json();
      }
    } catch(e) {
      return (e)
    }
  })
}

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    try {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 400) {
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      }
      if (res.status === 401) {
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      }
    }
    catch (err) {
      return err;
    }
  })
  .catch ((err) => {return Promise.reject(err)})
  .then((data) => {
    try{
      if(data.token) {
          localStorage.setItem('jwt', data.token);
      }
      return data
    }
      catch (err){
        return Promise.reject(err);
    }
  })
  .catch(err => console.log(err))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    })
  .then(res => res.json())
  .then(data => data)
  .catch((err) => {
    console.log(err);
  })
}

  //*получение сохраненных карточек
  export const getArticles = (token) => {
    return fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    })
    .catch ((err) => {return Promise.reject(err)})
    .then((data) => {
      console.log(data);})
      /*try{
        if(data.articles) {
          let news = JSON.parse(localStorage.getItem('articles'))
          } let articles = JSON.stringify(news.?push(data.articles));
          // or localStorage.removeItem('articles'); and next
            localStorage.setItem('articles', articles);
        }
        return data
      }
        catch (err){
          return Promise.reject(err);
      }
    })*/
    .catch(err => console.log(err))
  }

  //*добавление карточки
  export const updateArticle = (token, keyword, article) => {
    const { title, description, publishedAt, source, url, urlToImage } = article;
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: description,
        date: publishedAt,
        source: source.name,
        link: url,
        image: urlToImage
      })
    })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
        if (res.status === 401) {
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
      }
      catch (err) {
        return err;
      }
    })
    .catch ((err) => {return Promise.reject(err)})
    .then((data) => {
      console.log(data);})
      /*try{
        if(data.articles) {
          if (!localStorage.getItem('articles')) {
            let news = []
          } else {
            let news = JSON.parse(localStorage.getItem('articles'))
          } let articles = JSON.stringify(news.push(data.articles));
            localStorage.setItem('articles', articles);
        }
        return data
      }
        catch (err){
          return Promise.reject(err);
      }
    })*/
    .catch(err => console.log(err))
  }

  //*удаление карточки
  export const articleDelete = (id, token) => {
    return fetch(`${BASE_URL}/articles/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    })
    .catch ((err) => {return Promise.reject(err)})
    .then((data) => {
      console.log(data);})
      /*try{
        if(data.articles) {
          let news = JSON.parse(localStorage.getItem('articles'))
          } let articles = JSON.stringify(news.?push(data.articles));
          // or localStorage.removeItem('articles'); and next
            localStorage.setItem('articles', articles);
        }
        return data
      }
        catch (err){
          return Promise.reject(err);
      }
    })*/
    .catch(err => console.log(err))
  }
