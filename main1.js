var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
    // Delete event
    itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filteritems);

    // Add Item

function addItem(e){
        e.preventDefault();
   
        //get input value
        var newItem = document.getElementById('item').value;
        
        //create element li
        var li = document.createElement('li');
        //add class
        li.className = 'list-group-item';
        console.log(li);

        // add text with input value
        li.appendChild(document.createTextNode(newItem));

        //create del button element
        var deleteBtn = document.createElement('button');
        //add classes to deleteBTN
        deleteBtn.className='btn btn-danger btn-sm float-right delete';

        //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

        // create edit button
        var editBtn = document.createElement('button');
        //add class to button
        editBtn.className='btn btn-edit btn-sm float-right edit';
        //append texxt node
        editBtn.appendChild(document.createTextNode('edit'));
    
    //append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    

    //append li to list
        itemList.appendChild(li);

    }

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//FILTER ITEMS

function filteritems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // GET lis 
    var items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}