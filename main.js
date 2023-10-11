// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title =123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.forms);
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = `<h3>HELLO</h3>`
headerTitle.style.border = 'solid 3px #000'
headerTitle.style.borderBottom = 'solid 3px #000'

let addItem = document.getElementById('additems');
addItem.style.fontWeight ='bold' 
addItem.style.color='green'
