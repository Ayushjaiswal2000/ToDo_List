    const addButton = document.getElementById('button');
    const inputField = document.getElementById('input');
    const container = document.querySelector('.container');
    let count=0;
    

    addButton.addEventListener('click', function () {
        if (inputField.value !== "") {
            const newDiv = document.createElement('div');
            count++;
            newDiv.className = 'task';
    
            const circle = document.createElement("img");
            circle.className = "circle";
            circle.style.marginRight="20px";
            circle.src = "Images/noun-circle-1203789.png"; 
    
            const textContent = document.createElement("div");
            textContent.textContent = inputField.value;
    
            const removeBtn = document.createElement("button");
            removeBtn.className = "remove";
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft="auto";
    
            newDiv.appendChild(circle);
            newDiv.appendChild(textContent);
            newDiv.appendChild(removeBtn);
    
            container.appendChild(newDiv);
            inputField.value = '';
    
            removeBtn.addEventListener("click", (event) => {
                const clickedButton = event.currentTarget;
                const taskToRemove = clickedButton.parentElement;
                taskToRemove.remove();
                count--;
            });
        }
    });
    

 
