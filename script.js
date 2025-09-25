 let inputText = document.getElementById('inputText');
let send = document.getElementById('send');
let form = document.getElementById('form');
let ul = document.getElementById('ul');
let darkMode = document.getElementById('dark');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(inputText.value);

    let element = document.createElement('li');
    element.classList.add('li');
    element.innerHTML = `<span>${inputText.value}</span>`;

    let editDelete = document.createElement('div');
    editDelete.classList.add('editDelete');
    element.appendChild(editDelete);

    let spanEdit = document.createElement('span');
    spanEdit.textContent = '✏️';
    editDelete.appendChild(spanEdit);

    let spanDelete = document.createElement('span');
    spanDelete.textContent = '🗑️';
    editDelete.appendChild(spanDelete);

    spanDelete.addEventListener('click', ()=>{
        element.remove();
    });

    if (inputText.value == ''){
        alert('Avval qandaydur vazifa yozing !')
    } else {
        inputText.value = '';
        ul.appendChild(element);
    }
})
// dark
darkMode.addEventListener('click' , () => {
    document.body.classList.toggle("dark");

})


