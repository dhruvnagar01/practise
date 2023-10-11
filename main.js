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

// get elementByclassname

// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent='Hello Item 2';
// item[1].style.background='yellow';
// item[2].style.background='green';

// for(var i=0; i<item.length;i++){
//     item[i].style.fontWeight ='bold';
// }

// GetElementByTagName

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent ='Hello Item 2';
li[1].style.background='yellow';
li[2].style.background='green';

for(var i=0; i<li.length;i++){
    li[i].style.fontWeight ='bold';
}