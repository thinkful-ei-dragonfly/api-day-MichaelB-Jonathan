'use strict'

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelb'
  const getItems = function() {
    fetch(`${BASE_URL}/items`)
      .then(response => response.json())
      .then(response => console.log(response));
    return Promise.resolve('A successful response!');
  };
  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    const options = {
      method: 'POST',
      headers: new Headers ({ 'Content-Type': 'application/json' }),
      body: newItem,
    }
    fetch(`${BASE_URL}/items`, options)
      .then(response => response.json())
      .then(response => console.log(response));
    return Promise.resolve('A successful response!');
  };

  return {
    // BASE_URL,
    getItems,
    createItem,
  };
}());
