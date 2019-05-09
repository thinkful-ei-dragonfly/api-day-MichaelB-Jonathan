'use strict';
/* global store shoppingList */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelb';
  // const BASE_URL = '';
  
  const getItems = function() {
    let error;
    return fetch(`${BASE_URL}/items`)
      .then( response => {
        if (!response.ok) {
          error = { code: response.status };
        }
        return response.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          store.errorMSG = error.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    const options = {
      method: 'POST',
      headers: new Headers ({ 'Content-Type': 'application/json' }),
      body: newItem,
    };
    let error;
    return fetch(`${BASE_URL}/items`, options)
      .then( response => {
        if (!response.ok) {
          error = { code: response.status };
        }
        return response.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          store.errorMSG = error.message;
          return Promise.reject(error);
        }
        return data;
      }).catch(err => shoppingList.render());
  };

  const updateItem = function(id, updateData){
    const options = {
      method: 'PATCH',
      headers: new Headers ({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(updateData),
    };
    let error;
    return fetch(`${BASE_URL}/items/${id}`, options)
      .then( response => {
        if (!response.ok) {
          error = { code: response.status };
        }
        return response.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          store.errorMSG = error.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  const deleteItem = function(id){
    const options = {
      method: 'DELETE',
    };
    let error;
    return fetch(`${BASE_URL}/items/${id}`, options)
      .then( response => {
        if (!response.ok) {
          error = { code: response.status };
        }
        return response.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          store.errorMSG = error.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  return {
    // BASE_URL,
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());
