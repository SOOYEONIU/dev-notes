const plusBtnAction = () => { 
    
    const inputValue = document.querySelector('#inputValue');

    if (inputValue.value !== '') {
        const newLi = document.createElement('li');
        const checkBtn = document.createElement('button');
        const newDiv = document.createElement('div');
        const cancelBtn = document.createElement('button');
        cancelBtn.innerText = '삭제';


        newLi.appendChild(checkBtn);
        newLi.appendChild(newDiv);
        newLi.appendChild(cancelBtn);
        console.log(newLi)
        newDiv.textContent = inputValue.value;

        const todoUl = document.querySelector('#todoList');
        todoUl.appendChild(newLi);

        checkBtn.addEventListener('click', () => {
            newLi.classList.toggle('complete');
        })

        cancelBtn.addEventListener('click', () => {
            newLi.remove();
        })
    }
}//plusBtnAction