const taskTrackerContainer = document.getElementById("task-tracker-outer-container")
const taskBoard = document.getElementById("task-board");
const addBtn = document.getElementById("add-task-btn");
const inputField = document.getElementById("task-input-field");

const itemsArray =[];
const taskBoardArr = [];
const taskDescription = inputField.value;
let taskId = 0;
let labelId = 0;



taskTrackerContainer.addEventListener("click", (e)=>{
    const event = e.target;
    
    if(event.id === "add-task-btn"){
       addListItem()

    }else if(event.id ==="check"){
        checkItem()

    }else if(event.id === "edit"){
        // isEdit = true;

    }else if(event.id === "delete"){
        deleteItem()
    }
    

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

            // taskBoardArr.push(taskItemHtml)                    
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
        // console.log()

        if(!itemDetails.isComplete){
            event.classList.add("line-through");

            itemsArray.push(itemsArray.splice(itemObjIndex, 1)[0]);
            itemDetails.isComplete = true;

            // console.log(itemsArray)
            console.log(itemObjIndex)

        }else{
            event.classList.remove("line-through");
            itemDetails.isComplete = false;
        }

    }

    function deleteItem(){
        event.parentElement.parentElement.parentElement.remove()
    }

}
)




