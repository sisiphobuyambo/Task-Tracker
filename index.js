const taskTrackerContainer = document.getElementById("task-tracker-outer-container")
const taskBoard = document.getElementById("task-board");
const addBtn = document.getElementById("add-task-btn");
const inputField = document.getElementById("task-input-field");
let isChecked = false;
let isEdit = false;

const itemsArray =[]
let nextTaskId = 0;
let labelId = 0;


// APPEND TASK TO DOM

taskTrackerContainer.addEventListener("click", (e)=>{

    const event = e.target;
    let taskDescription = inputField.value;
          

    if(event.id === "add-task-btn"){
       addListItem()

    }else if(event.id ==="check"){
        checkItem()

    }else if(event.id === "edit"){
        isEdit = true;

    }else if(event.id === "delete"){
        deleteItem(event)
    }
    


// FUNCTIONS

    function addListItem(){

        if(inputField.value === ""){
            event.disable

        }else{

            const taskItemHtml = `<div class="task-list-container">
                                    <div class="task-item-styling">
                                        <label data-id="${++labelId}" id="check" class="task-item-label">
                                            <input type="checkbox"> ${inputField.value}
                                            <span class="checkbox-container"></span>
                                        </label>
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
                id: ++nextTaskId,
                description: taskDescription,
                isComplete: false
            }

            itemsArray.push(listItemDetails)
        }
    }

    function checkItem(){

        const itemDetails = itemsArray.find(obj => obj.id === parseInt(event.dataset.id))

        if(!itemDetails.isComplete){
            event.classList.add("line-through");
            itemDetails.isComplete = true;
        }else{
            event.classList.remove("line-through");
            itemDetails.isComplete = false;
        }

    }

    function deleteItem(el){
        el.parentElement.parentElement.parentElement.remove()
    }

}
)


