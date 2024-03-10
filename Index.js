    const addButton = document.getElementById('button');
    const inputField = document.getElementById('input');
    const container = document.querySelector('.container');
    const addedTask = document.querySelector('.addedTask');
    
    let count=0;
    
    

    addButton.addEventListener('click', function () {
        if (inputField.value !== "") {

            
            const newDiv = document.createElement('div');
            count++;
            newDiv.className = 'task';
    
            const circle = document.createElement("img");
            circle.className = "circleImg";
            circle.style.marginRight="20px";
            circle.src = "Images/noun-circle-1203789.png"; 
    
            const textContent = document.createElement("div");
            textContent.textContent = inputField.value;
    
            const removeBtn = document.createElement("button");
            removeBtn.className = "remove";
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft="auto";

            const tick=document.createElement("img");
            tick.src="Images/noun-double-tick-3968145.png";
            tick.style.display="none";
            tick.style.marginLeft="auto";
    
            newDiv.appendChild(circle);
            newDiv.appendChild(textContent);
            newDiv.appendChild(removeBtn);
            newDiv.appendChild(tick);
    
            container.appendChild(newDiv);
            inputField.value = '';
    
            removeBtn.addEventListener("click", (event) => {
                const clickedButton = event.currentTarget;
                const taskToRemove = clickedButton.parentElement;
                taskToRemove.remove();
                count--;
                countIn.textContent=`${count} Task Added`;
            });

            
            let isScaled = true;
            newDiv.addEventListener("click", () => {
                isScaled = !isScaled;
                if (isScaled) {
                    newDiv.style.transform = "scale(1)";
                    newDiv.style.backgroundColor="rgb(203, 226, 233)";
                    removeBtn.style.display="block";
                    tick.style.display="none";
                    

                } else {
                    newDiv.style.transform = "scale(1.05)";
                    newDiv.style.backgroundColor="#ECF87F";
                    removeBtn.style.display="none";
                    tick.style.display="block";
                  
                    
                }

                
            });

            countIn.textContent=`${count} Task Added`;
            
            
        }
    });


    const countIn=document.createElement("div");
    countIn.className="countIn";
    countIn.textContent=`${count} Task Added`;
    addedTask.appendChild(countIn);
    

 
