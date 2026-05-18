let floors = [];

const create_floor = document.querySelector(".create_floor");
const floor_Modal = document.querySelector(".floor_Modal");
const floor_Modal_remove = document.querySelector(".floor_Modal_remove");
const floor_formular = document.querySelector("#floor_formular");
const Floor_name = document.querySelector("#Floor_name");

const floor_container = document.querySelector(".floor_container");

const Room_modal = document.querySelector(".Room_modal");
const Room_modal_remove = document.querySelector(".Room_modal_remove");

const room_formular = document.querySelector(".room_formular");
const room_name = document.querySelector("#room_name");
const room_area = document.querySelector("#room_area");

const Floors_counter = document.querySelector("#Floors-counter");
const Room_counter = document.querySelector("#Room-counter");
const total_counter = document.querySelector("#total-counter"); 

let selectedFloorIndex = null;

const room_calculations_display = document.querySelector(".room-calculations-display");
let pricePerm2 = 25;

const Estimated_Price = document.querySelector("#Estimated_Price");


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

    Update_counter();

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
        DeleteFloor.style.color = "red";

        const Room_container = document.createElement("div");
        Room_container.classList.add("Room_container");

        const Room_head = document.createElement("div");
        Room_head.classList.add("Room_head");

        const Create_room = document.createElement("button");
        Create_room.classList.add("Create_room_btn");
        Create_room.textContent = "+ ADD ROOM";

        const Hide_floor = document.createElement("span");
        Hide_floor.classList.add("hide_floor");
        Hide_floor.innerHTML = '<i class="ri-eye-off-fill"></i>';

        const Rooms = document.createElement("div");
        Rooms.classList.add("Rooms");


        RenderRooms(ele.Rooms, Rooms);

        Hide_floor.addEventListener("click", function(){
            Rooms.classList.toggle("HIDE");
        });

        Create_room.addEventListener("click", function(){
            Room_modal.classList.add("show");

            selectedFloorIndex = index;
        });

        DeleteFloor.addEventListener("click", function(){
            floors.splice(index, 1);
            Update_UI();
        });

        floor_container.appendChild(Floor);
        Floor.appendChild(Floor_head);
        Floor.appendChild(Room_container);

        Room_container.appendChild(Room_head);
        Room_container.appendChild(Rooms);

        Room_head.appendChild(Create_room);
        Room_head.appendChild(Hide_floor);

        Floor_head.appendChild(Floor_title);
        Floor_head.appendChild(DeleteFloor);
    });

}

Room_modal_remove.addEventListener("click", function(){
    Room_modal.classList.remove("show")
})

room_formular.addEventListener("submit", function(e){
    e.preventDefault();

    if(room_name.value === "" || room_area.value === ""){
        alert("Please fill the Input fields");
        return;
    }

    const newRoom = {
        R_name: room_name.value,
        R_area: Number(room_area.value)
    }

    if(selectedFloorIndex === null) return;

    floors[selectedFloorIndex].Rooms.push(newRoom);
    selectedFloorIndex = null;

    Update_UI();

    room_name.value = "";
    room_area.value = "";

    Room_modal.classList.remove("show");

});

function RenderRooms(RoomsArray, RoomsContainer){
    RoomsContainer.innerHTML = "";

    RoomsArray.forEach((room, Index) =>{
        const room_card = document.createElement("div");
        room_card.classList.add("room_card");

        const roomName = document.createElement("p");
        roomName.textContent = room.R_name;

        const roomArea = document.createElement("p");
        roomArea.textContent = room.R_area + " m²";

        const DeleteRoom = document.createElement("span");
        DeleteRoom.classList.add("DeleteRoom");
        DeleteRoom.innerHTML = '<i class="ri-delete-bin-5-line"></i>';
        DeleteRoom.style.color = "red";

        DeleteRoom.addEventListener("click", function(){
            RoomsArray.splice(Index, 1);
            Update_UI()
        });

        room_card.appendChild(roomName);
        room_card.appendChild(roomArea);
        room_card.appendChild(DeleteRoom);

        RoomsContainer.appendChild(room_card);
    })
};

function Update_counter(){
    Floors_counter.textContent = floors.length;

    const total_rooms = floors.reduce((total, floor) =>{
        return total + floor.Rooms.length;
    }, 0);

    Room_counter.textContent = total_rooms;

    const total_area = floors.reduce((total, floor) => {
        return total + floor.Rooms.reduce((sum, room) => {
            return sum + room.R_area;
        }, 0);
    }, 0);

    total_counter.textContent = total_area  + "m²";
}

function RenderRoomCalculations(Rooms){
    room_calculations_display.innerHTML = "";

    let total = 0;

    Rooms.forEach(room =>{
        let totalPrice = room.R_area * pricePerm2;
        total += totalPrice;
        const ROOM_calculation_card = document.createElement("div");
        ROOM_calculation_card.classList.add("Room-calc-card");

        ROOM_calculation_card.innerHTML = `
            <h5>${room.R_name}</h5>
            <h5>${totalPrice}€</h5>
        `

        room_calculations_display.appendChild(ROOM_calculation_card);
    })

    Estimated_Price.textContent = total + "€";
}

function Update_UI(){
    RenderFloor(floors);
    Update_counter();
    const allRooms = floors.flatMap(f => f.Rooms);
    RenderRoomCalculations(allRooms);
}



