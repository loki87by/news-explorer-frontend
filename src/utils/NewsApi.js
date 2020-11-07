export const BASE_URL = 'http://newsapi.org/v2/everything?' +
          `q=${keyword}` +
          `from=${Date.now}&` +
          'sortBy=popularity&' +
          'apiKey=96fb88023047493688f02442b20eac74';

let req = new Request(BASE_URL);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })