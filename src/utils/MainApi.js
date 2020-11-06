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
  //*добавление карточки
  export const updateArticle = (cardName, cardLink) => {
    return fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      /*headers: this.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })*/
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }
  //*удаление карточки
  export const articleDelete = (id) => {
    return fetch(`${BASE_URL}/cards/${id}`, {
      method: 'DELETE',
      //headers: this.headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }
