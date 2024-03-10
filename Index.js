    const addButton = document.getElementById('button');
    const inputField = document.getElementById('input');
    const container = document.querySelector('.container');
    let count=0;

    addButton.addEventListener('click', function () {
    
        if (inputField.value !== "") {
            const newDiv = document.createElement('div');
            count++;
            newDiv.className = 'task';
            newDiv.textContent = inputField.value;
            const removeBtn=document.createElement("button");
            removeBtn.className="remove";
            removeBtn.textContent="Remove";
            container.appendChild(newDiv);
            removeBtn.style.marginLeft="auto";
            newDiv.appendChild(removeBtn);
            inputField.value = '';


            removeBtn.addEventListener("click", (event) => {
                const clickedButton = event.currentTarget;
                const taskToRemove = clickedButton.parentElement;
                taskToRemove.remove();
                count--;
            });
        }
    });


 
