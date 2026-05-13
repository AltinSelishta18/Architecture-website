let floors = [];

let selectedFloorIndex = 0;

const create_floor = document.querySelector(".create_floor");
const floor_Modal = document.querySelector(".floor_Modal");
const floor_Modal_remove = document.querySelector(".floor_Modal_remove");
const floor_formular = document.querySelector("#floor_formular");
const Floor_name = document.querySelector("#Floor_name");

const floor_container = document.querySelector(".floor_container");

const Room_modal = document.querySelector(".Room_modal");
const Room_modal_remove = document.querySelector(".Room_modal_remove");

create_floor.addEventListener("click", function(){
    floor_Modal.classList.add("show");
});

floor_Modal_remove.addEventListener("click", function(){
    floor_Modal.classList.remove("show");
});

floor_formular.addEventListener("submit", function(e){
    e.preventDefault();

    if(Floor_name.value === ""){
        alert("Please fill the input");
        return;
    }

    const newFloor = {
        F_name: Floor_name.value,
        Rooms: []
    };

    floors.push(newFloor);

    Floor_name.value = "";
    floor_Modal.classList.remove("show");

    RenderFloor(floors);
});

function RenderFloor(arr){
    floor_container.innerHTML = "";

    arr.forEach((ele, index) => {
        const Floor = document.createElement("div");
        Floor.classList.add("Floor");

        const Floor_head = document.createElement("div");
        Floor_head.classList.add("Floor_head");

        const Floor_title = document.createElement("h4");
        Floor_title.textContent = ele.F_name;

        const DeleteFloor = document.createElement("span");
        DeleteFloor.innerHTML = '<i class="ri-delete-bin-5-line"></i>';

        const Room_container = document.createElement("div");
        Room_container.classList.add("Room_container");

        const Room_head = document.createElement("div");
        Room_head.classList.add("Room_head");

        const Create_room = document.createElement("button");
        Create_room.classList.add("Create_room_btn");
        Create_room.textContent = "+ ADD ROOM";

        Create_room.addEventListener("click", function(){
            Room_modal.classList.add("show");
        });

        const Rooms = document.createElement("div");
        Rooms.classList.add("Rooms");

        DeleteFloor.addEventListener("click", function(){
            floors.splice(index, 1);
            RenderFloor(floors);
        });

        floor_container.appendChild(Floor);
        Floor.appendChild(Floor_head);
        Floor.appendChild(Room_container);
        Room_container.appendChild(Room_head);
        Room_container.appendChild(Rooms);
        Room_head.appendChild(Create_room);
        Floor_head.appendChild(Floor_title);
        Floor_head.appendChild(DeleteFloor);
    });
}

Room_modal_remove.addEventListener("click", function(){
    Room_modal.classList.remove("show");
});