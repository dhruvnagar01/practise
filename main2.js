const form = document.getElementById('my-form');

form.addEventListener('submit', function(e) {
    formData(e, form);
});
// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;

let user = {
   name : 'dhruv',
   email : 'dhruv@tgmail.com'
}

function formData(e, form) {
    e.preventDefault();
   
    
   let data = JSON.stringify(user);
   localStorage.setItem('user',data)
}