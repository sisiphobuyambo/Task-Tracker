const taskTrackerContainer = document.getElementById("task-tracker-outer-container")
const taskBoard = document.getElementById("task-board");
const addBtn = document.getElementById("add-task-btn");
const inputField = document.getElementById("task-input-field");
let innerText;
let isChecked = false;
let isEdit = false;

const itemsArray =[]

// FUNCTIONS
const addListItem =(el)=>{  
                            taskBoard.innerHTML += el
                            itemsArray.push(el)
                            inputField.value = ""
                            console.log(itemsArray)
                        }

const checkItem = (el)=>{ if(!isChecked){
                            el.classList.add("line-through");
                            // itemsArray.push(itemsArray.splice(itemsArray.indexOf(), 1)[0])
                            // console.log(itemsArray.indexOf(el.parentElement.parentElement))
                            isChecked = !isChecked;
                         }else{
                            el.classList.remove("line-through");
                            isChecked = !isChecked;}
                        }

const deleteItem =(el)=>{  el.parentElement.parentElement.parentElement.remove()
                        }

// APPEND TASK TO DOM

taskTrackerContainer.addEventListener("click", (e)=>{

    const event = e.target;

    const taskItemHtml = `<div class="task-list-container">
                            <div class="task-item-styling">
                                <label id="check" class="task-item-label">
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


    if(event.id === "add-task-btn"){
       addListItem(taskItemHtml)

    }else if(event.id ==="check"){
        checkItem(event)

    }else if(event.id === "edit"){
        // innerText = event.parentElement.parentElement.children[0].innerText;
        
        
        
        isEdit = true;


    }else if(event.id === "delete"){
        deleteItem(event)
    }
    
}
)



// STRIKETHROUGH TASK ON CHECK
