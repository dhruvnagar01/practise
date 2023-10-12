const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
   
    e.preventDefault();

    const name = form.elements['name'];
    const email = form.elements['email'];
    const phone = form.elements['phone'];
    
    let notes = localStorage.getItem('user');
    let notesObj;

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

    localStorage.setItem('user', JSON.stringify(user));
    // name.value = "";
    // email.value ="";
    // phone.value = "";

    toshow();
});

function toshow(){
    const notes = localStorage.getItem('user');

    
    const formData = JSON.parse(notes);
    const display =  document.getElementById('output');

       display.textContent = `Name : ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`;
    
    
}

