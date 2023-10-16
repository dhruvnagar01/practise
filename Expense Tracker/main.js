// Add data in Local Storage
let addBtn = document.getElementById('add-btn');
showData();
addBtn.addEventListener('click', function (e) {

    let addCategory = document.getElementById('category-select');
    let addAmount = document.getElementById('amount-input');
    let addDiscription =  document.getElementById('disciption');

    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let data = {
        category : addCategory.value,
        amount : addAmount.value,
        discription : addDiscription.value
    }

    notesObj.push(data);

    localStorage.setItem('notes', JSON.stringify(notesObj));

    addCategory.value = '';
    addAmount.value = '';
    addDiscription.value = '';
    showData();
});


// FUNCTION TO SHOW THE ITEM LIST 
function showData() {
    let notes =  localStorage.getItem('notes');

    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }

    // add item in list

    let parentElem = document.getElementById('tfoot');

    let html ="";
    notesObj.forEach(function (element, index) {
        html  += `<tr> 
        <td>${element.category}</td>
        <td>${element.amount}</td>
        <td>${element.discription}</td>
        <td><button onclick="editData(${index})">Edit</button></td>
        <td><button id="${index}" onclick="deleteData(this.id)">Delete</button></td>
        </tr>`;   
    });

    if(notesObj != 0){
    parentElem.innerHTML = html;
    }
    else {
        parentElem.innerHTML = 'No expenses.'
    }
}

// DELETE THE ITEM FORM LIST

function deleteData(index) {
    // alert("data deleted");
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));

    showData();
}


// EDIT ITEM DATA 

function editData(index) {

    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let addCategory = document.getElementById('category-select');
    let addAmount = document.getElementById('amount-input');
    let addDiscription =  document.getElementById('disciption');

    addCategory.value = notesObj[index].category;
    addAmount.value = notesObj[index].amount;
    addDiscription.value = notesObj[index].discription;

    deleteData(index);

    

}