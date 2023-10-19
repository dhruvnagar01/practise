const form = document.getElementById('myForm');
window.loadData();


form.addEventListener('submit', function(e) {
   
    e.preventDefault();

    const name = form.elements['name'];
    const email = form.elements['email'];
    const phone = form.elements['phone'];

    const user = {
        name : name.value,
        email : email.value,
        phone : phone.value
    };

    // localStorage.setItem(user.email, JSON.stringify(user));
    axios.post("https://crudcrud.com/api/ae4a964828be4c08b9d42d3ce6ece679/createData", user).then((result) => {
        
        toshow(result.data);
    }).catch((err) => {
     console.log(err);   
    });

    
});

function loadData() {
        axios.get("https://crudcrud.com/api/ae4a964828be4c08b9d42d3ce6ece679/createData").then((result) => {
            result.data.forEach(element => {
                toshow(element);        
                console.log(element);
            });
        
       
    }).catch((error) => console.log(error));

}

function toshow(obj){
      
    
   const parentElem = document.getElementById('listOfItems');
   const childElem = document.createElement('li');

//    DELETE BUTTON
   var deltebtn = document.createElement('button');
   deltebtn.appendChild(document.createTextNode('Delete'));

   childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone;

   childElem.appendChild(deltebtn);

   //EDIT BUTTON
   var editbtn = document.createElement('button');
   editbtn.appendChild(document.createTextNode('edit'));
   childElem.appendChild(editbtn);
    
//    // add both in li
   parentElem.appendChild(childElem);
   
   // delte button function
deltebtn.addEventListener('click', (e)=> {
      e.preventDefault();
  
     axios.delete("https://crudcrud.com/api/ae4a964828be4c08b9d42d3ce6ece679/createData",obj.id).then((result)=>
     {  console.log(result)
        })
     .catch((error)=>console.log(error));
      var li = e.target.parentElement;
      parentElem.removeChild(li);
  
  });


//   editbtn.addEventListener('click', (e)=>{
//     e.preventDefault();

//     let user = localStorage.getItem(obj.email);
//     let userData = JSON.parse(user);
    
//     let name = form.elements['name'];
//     let email = form.elements['email'];
//     let phone = form.elements['phone'];

//     name.value = userData.name;
//     email.value = userData.email;
//     phone.value = userData.phone;
        
//     //deleting list
//     localStorage.removeItem(obj.email);
//       var li = e.target.parentElement;
//       parentElem.removeChild(li);
// });
    
}
