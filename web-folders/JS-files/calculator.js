// Here will be created the calculator logic

let floors = [];

let selectedFloorIndex = 0


const create_floor = document.querySelector(".create_floor");
const floor_Modal = document.querySelector(".floor_Modal");
const floor_Modal_remove = document.querySelector(".floor_Modal_remove");
const floor_formular = document.querySelector("#floor_formular");
const Floor_name = document.querySelector("#Floor_name");

const floor_container = document.querySelector(".floor_container");

create_floor.addEventListener("click", function(){
    floor_Modal.classList.add("show");
})


create_floor.addEventListener("click", function(){
    floor_Modal.classList.add("show");
})

floor_Modal_remove.addEventListener("click", function(){
    floor_Modal.classList.remove("show");
})

floor_formular.addEventListener("submit", function(e){
    e.preventDefault();

    if(Floor_name.value === ""){
        alert("Please fill the input");
        return;
    }

    const newFloor = {
        F_name: Floor_name.value,
        Rooms: []
    }

    floors.push(newFloor)

    Floor_name.value = "";
    floor_Modal.classList.remove("show")

    RenderFloor(floors);
})

function RenderFloor(arr){
    floor_container.innerHTML = "";

    arr.forEach((ele, index) => {
        const Floor = document.createElement("div");
        Floor.classList.add("Floor")
        
        const Floor_head = document.createElement("div");
        Floor_head.classList.add("Floor_head");

        const Floor_title = document.createElement("h4");
        Floor_title.textContent = ele.F_name;

        const DeleteFloor = document.createElement("span");
        DeleteFloor.innerHTML = '<i class="ri-delete-bin-5-line"></i>';

        DeleteFloor.addEventListener("click", function(){
            floors.splice(index, 1);
            RenderFloor(floors)
        })


        floor_container.appendChild(Floor);
        Floor.appendChild(Floor_head);
        Floor_head.appendChild(Floor_title);
        Floor_head.appendChild(DeleteFloor);        
    });
}