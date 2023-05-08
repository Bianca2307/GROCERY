const form = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const list = document.querySelector('.grocery-list');
const container = document.querySelector('.grocery-container');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
//*******EVENT LISTENERS */

submitBtn.addEventListener('click', addItems);
clearBtn.addEventListener('click', clearItems);

//********FUNCTIONS */
function addItems(e) {
    e.preventDefault();

    const element = document.createElement('article');
    element.classList.add('grocery-item');

    const value = input.value;

    // const p = document.createElement('p');
    // p.classList.add('title');

    // p.innerHTML = input.value;
    
    // const element = document.createElement('li');
    
    element.innerHTML = `<p class="title">${value} </p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>`

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');


    deleteBtn.addEventListener('click', removeItem);
     editBtn.addEventListener('click', editItem);

    
    //article.appendChild(element);


    list.appendChild(element);

    container.classList.add('show-container');
}

function clearItems() {
    list.innerHTML = '';
}
  
function removeItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //console.log(element);
   // console.log(e.currentTarget);
    list.removeChild(element);
   
    setBackToDefault();
}

function editItem(e) {
    const item = e.currentTarget.parentElement.previousElementSibling.innerHTML;
    input.value = item;
    //console.log(input.value);
    const element = e.currentTarget.parentElement.parentElement;
    console.log(element);
     element.remove();
    
}

function setBackToDefault(){
    input.value = "e.g eggs";
}