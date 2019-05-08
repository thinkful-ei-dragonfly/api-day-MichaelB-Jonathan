/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.createItem('pears')
  .then(response => response.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(response => response.json())
  .then((items) => {
    console.log(items);
  });