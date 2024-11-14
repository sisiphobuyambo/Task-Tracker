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

// EVENT LISTENERS

inputField.addEventListener("keyup", e => {
    if(e.code === "NumpadEnter") {
        addListItem(e.target)
    }  
})

filter.addEventListener("change", e => toggleFilter(e) )

taskTrackerContainer.addEventListener("click", (e)=>{
    const event = e.target;
    
    if(event.id === "add-task-btn"){
       addListItem(event)

    }else if(event.id ==="check"){
        checkItem(event)

    }else if(event.id === "delete"){
        deleteItem(event)
    }
}
)

// FUNCTIONS

function addListItem(e){

    if(inputField.value === ""){
        e.disable

    }else{
        const taskItemHtml = `<div class="task-list-container">
                                <div class="task-item-styling">
                                    <ul class="task-item-label">
                                        <li data-id="${++labelId}" id="check"> ${inputField.value} </li>
                                        <span class="checkbox-container"></span>
                                        <i style="display:none;" class="fa-solid fa-check"></i>
                                    </ul>
                                    <i id="delete" class="fa-solid fa-trash"></i>
                                </div>
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

function checkItem(e){

    const itemDetails = itemsArray.find(obj => obj.id === parseInt(e.dataset.id))
    const thirdParentEl = e.parentElement.parentElement.parentElement
    // const itemId = itemDetails.id
    // const itemObjIndex = itemsArray.findIndex(obj => obj.id === parseInt(e.dataset.id))

    if(!itemDetails.isComplete) {
        e.classList.add("line-through");
        e.parentElement.children[2].style.display = "block"
        e.parentElement.children[1].style.borderColor ="rgb(148, 148, 148)"
        thirdParentEl.classList.add("completed")
        itemDetails.isComplete = true;
    } else {
        e.classList.remove("line-through");
        e.parentElement.children[2].style.display = "none"
        e.parentElement.children[1].style.borderColor = "#000"
        thirdParentEl.classList.remove("completed")
        itemDetails.isComplete = false;
    }

}

function deleteItem(e){
    const deleteThirdParent = e.parentElement.parentElement.parentElement
    deleteThirdParent.remove()
}

function toggleFilter(event){
    const optionValue = event.target.value
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
}



