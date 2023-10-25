const form = document.getElementById('myForm');
getData();
getDoneData();


form.addEventListener('submit',(e)=>{

    e.preventDefault(); 

    let item = document.getElementById('item');
    let discription = document.getElementById('discription');

    let data = {
        item : item.value,
        discription : discription.value
    }

    axios.post("https://crudcrud.com/api/22af4fc233514146aae33e6ab8f99928/createData", data).then((result) => {
        console.log(result.data);
        // pendingData(result.data);
    }).catch((err) => {
        console.log(err);
    });

    pendingData(data);
   

});


// Function to show the pending data in DOM

function pendingData(obj){
    const parentElem = document.getElementById('pendingList');
    const childElem = document.createElement('li');

    //delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent='      X       ';
    
    deleteBtn.addEventListener('click', (e)=> deleteItem(obj));
    
    //done button
    let doneBtn = document.createElement('button');
    doneBtn.textContent='        √       ';
    doneBtn.addEventListener('click', ()=> {
        doneItem(obj);
    });


    childElem.textContent = obj.item + '     ' + obj.discription +'     ';
    // append items in list of parentElem
    childElem.appendChild(doneBtn);

    childElem.appendChild(deleteBtn);
    
    parentElem.appendChild(childElem);
}

function deleteItem(obj){
    

    axios.delete("https://crudcrud.com/api/22af4fc233514146aae33e6ab8f99928/createData/" + obj._id).then((result)=>
    {  
       // console.log(result);
       console.log("data deleted for " + obj.item);
       })
    .catch((error)=>console.log(error));

    

    // let li = e.target.parentElement;
    // let parentElem = li.parentElement;
    // parentElem.removeChild(li);
}

//Item moved to done list

function doneItem(obj){

    // console.log('done item data ' + obj);
    // deleteItem(e);
    deleteItem(obj);
    let data = {
        item: obj.item,
        discription: obj.discription,
    }

    axios.post("https://crudcrud.com/api/22af4fc233514146aae33e6ab8f99928/doneData", data).then((result) => {
        console.log(result.data);
        doneData(result.data);
        // pendingData(result.data);
    }).catch((err) => {
        console.log(err);
    });

    
  
}


//function to get data form server
function getData(){
    axios.get("https://crudcrud.com/api/22af4fc233514146aae33e6ab8f99928/createData").then((result) => {
        result.data.forEach(element => {
            pendingData(element);        
            console.log(element);
        });
    
   
}).catch((error) => console.log(error));
 }


// get done data
 function getDoneData(){

    axios.get("https://crudcrud.com/api/22af4fc233514146aae33e6ab8f99928/doneData").then((result) => {
        result.data.forEach(element => {
            doneData(element);        
            console.log(element);
        });
    }).catch((err) => {
        console.log(err);
    });

 }


 // done data show

 function doneData(obj){
    
    const parentElem = document.getElementById('doneList');
    const childElem = document.createElement('li');
 

       // Copy the item from the "pendingList" to the "doneList"
    //    const pendingList = document.getElementById('pendingList');
    //    const pendingItems = pendingList.getElementsByTagName('li');
   
    //    for (let i = 0; i < pendingItems.length; i++) {
    //        if (pendingItems[i].textContent.includes(obj.item)) {
    //            pendingList.removeChild(pendingItems[i]);
    //            break;
    //        }
    //    }
    
    childElem.textContent = obj.item + '     ' + obj.discription +'     ';
    // append items in list of parentElem
    
    parentElem.appendChild(childElem);   

 }