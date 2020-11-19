export const BASE_URL = 'http://api.diplom.students.nomoreparties.co';
// *рега
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
      if (res.status === 201) {
        return res.json();
      }
      if (res.status === 409) {
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      }
    }
    catch (err) {
      return err;
    }
    })
  .catch ((err) => {
    return Promise.reject(err);
  })
}

// *вход
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
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
      return data.token
    })
  .catch ((err) => {
    return Promise.reject(err);
  })
}

// *подгрузка данных
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

// *получение сохраненных карточек
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
}

  // *добавление карточки
  export const updateArticle = (token, keyword, article) => {
    const { title, text, date, source, link, image } = article;
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
      body: JSON.stringify({ keyword, title, text, date, source, link, image })
    })
    .then((res) => {
      try {
        if (res.status === 201) {
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
    .then((res) => {
      let oldArticles = JSON.parse(localStorage.getItem('articles'))
      let updateArticles = [...oldArticles, res]
      let last = updateArticles.reverse()[0]
      updateArticles.reverse()
      let result = JSON.stringify(updateArticles);
      localStorage.setItem('articles', result);
      return last})
    .catch ((err) => {return Promise.reject(err)})
  }


  //*удаление карточки
  export const deleteArticle = (token, id) => {
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
    .then((res) => {
      let oldArticles = JSON.parse(localStorage.getItem('articles'))
      let updateArticles = oldArticles.filter((item) => {
        return item._id !== id
      })
      let result = JSON.stringify(updateArticles);
      localStorage.removeItem('articles')
      localStorage.setItem('articles', result)
    })
    .catch ((err) => {return Promise.reject(err)})
  }
