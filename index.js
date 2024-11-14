const taskTrackerContainer = document.getElementById("task-tracker-outer-container")
const taskBoard = document.getElementById("task-board");
const addBtn = document.getElementById("add-task-btn");
const inputField = document.getElementById("task-input-field");
const filter = document.querySelector(".filter");

const itemsArray =[];
const taskBoardArr = [];
const taskDescription = inputField.value;
let taskId = 0;
let labelId = 0;

filter.addEventListener("change", e =>{
    const optionValue = e.target.value
    const tasks = taskBoard.children

      for (const child of tasks) {
        switch (optionValue) {
            case "all":
                child.style.display = "block";
                break;
            case "completed":
                if (child.classList.contains("completed")){
                    child.style.display = "block";
                } else {
                    child.style.display = "none";
                }
                break;
            case "pending":
                if (!child.classList.contains("completed")) {
                    child.style.display = "block";
                } else {
                    child.style.display = "none";
                }
        }
    }

})


taskTrackerContainer.addEventListener("click", (e)=>{
    const event = e.target;
    
    if(event.id === "add-task-btn"){
       addListItem()

    }else if(event.id ==="check"){
        checkItem()

    }else if(event.id === "delete"){
        deleteItem()
    }
    
// Filter Event




// FUNCTIONS

    function addListItem(){

        if(inputField.value === ""){
            event.disable
   
        }else{
            const taskItemHtml = `<div class="task-list-container">
                                    <div class="task-item-styling">
                                        <ul class="task-item-label">
                                            <li data-id="${++labelId}" id="check" type="checkbox"> ${inputField.value} </li>
                                            <span class="checkbox-container"></span>
                                        </ul>
                                        <div class="task-icons">
                                            <i id="edit" class="fa-solid fa-pencil"></i>
                                            <i id="delete" class="fa-solid fa-trash"></i>
                                        </div>
                                    </div>
                                    <hr>
                                </div>`

                  
            taskBoard.innerHTML += taskItemHtml
            inputField.value = ""

            const listItemDetails = {
                id: ++taskId,
                description: taskDescription,
                isComplete: false
            }

            itemsArray.push(listItemDetails)


        }
    }

    function checkItem(){

        const itemDetails = itemsArray.find(obj => obj.id === parseInt(event.dataset.id))
        const itemId = itemDetails.id
        const itemObjIndex = itemsArray.findIndex(obj => obj.id === parseInt(event.dataset.id))

        if(!itemDetails.isComplete){
            event.classList.add("line-through");
            event.parentElement.parentElement.parentElement.classList.add("completed")
            itemDetails.isComplete = true;


        }else{
            event.classList.remove("line-through");
            event.parentElement.parentElement.parentElement.classList.remove("pending")
            itemDetails.isComplete = false;
        }

    }

    function deleteItem(){
        event.parentElement.parentElement.parentElement.remove()
    }

}
)




