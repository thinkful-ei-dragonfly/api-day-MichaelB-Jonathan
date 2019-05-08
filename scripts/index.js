'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

store.items.push(Item.create('apples'));

api.createItem('pears')
  .then((newItem) => {
    return api.getItems();
  })
  .then((items) => {
    console.log(items);
  });