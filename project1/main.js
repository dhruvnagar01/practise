const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
   
    e.preventDefault();

    const name = form.elements['name'];
    const email = form.elements['email'];
    const phone = form.elements['phone'];
    
  
    // if(notes==null){
    //     notesObj = [];
    // }
    // else{
    //    let notesObj = JSON.parse(notes);
    // }

    const user = {
        name : name.value,
        email : email.value,
        phone : phone.value
    };

    // notesObj.push(user)

    localStorage.setItem(user.email, JSON.stringify(user));
    // name.value = "";
    // email.value ="";
    // phone.value = "";

    toshow(user);
});

function toshow(obj){
   const parentElem = document.getElementById('listOfItems');
   const childElem = document.createElement('li');
   var deltebtn = document.createElement('button');
   deltebtn.appendChild(document.createTextNode('Delete'));
   childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone;
   childElem.appendChild(deltebtn);
   parentElem.appendChild(childElem);
   
   // delte button
  deltebtn.addEventListener('click', (e)=>{
        localStorage.removeItem(obj.email);
        var li = e.target.parentElement;
        parentElem.removeChild(li);

  })
    
}

