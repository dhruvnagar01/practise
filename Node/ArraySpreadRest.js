
let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

arr.map(function (element,index){
    if(element == ' '){
        arr[index] = 'empty string';
    }
})
console.log(arr);

