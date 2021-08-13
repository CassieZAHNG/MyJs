let val;
val = 'test';
val = document.all[0];
let myClass = document.all[7].id;
val = document.scripts;
let arr = Array.from(val);

arr.forEach(myfunc);
function myfunc(item) {
  console.log(item.getAttribute('src'));
}

// console.log((document.querySelector('h1').textContent = 'world'));
// console.log(document.getElementsByTagName('h1')[0]);
// console.log(val);
let items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

items.forEach(function(item, index) {
  console.log(item);
  item.textContent += `${index}`;
});


