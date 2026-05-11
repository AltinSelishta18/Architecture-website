// Projects file JavaScript code

import { projects } from "./Projects-data.js";

const hamburger = document.getElementById("hamburger");
const Projects_nav = document.querySelector(".projects-nav");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("open");
    Projects_nav.classList.toggle("showMenu")
})

// Here will be created the logic for the projects filtration

const Type = document.getElementById("search"); 
const PROJECTS = document.getElementById("PROJECTS");

function project_filter(arr, value){
    const filter_project = arr.filter(project =>
        (value === "All" || project.type.toLowerCase().includes(value.toLowerCase()))   
    );

    return filter_project

}

function Render_data(arr){
    PROJECTS.innerHTML = "";

    arr.forEach(item => {

        // Here is created the project_details container
        const project_box = document.createElement("div");
        project_box.classList.add("project_box");

        // Here is created the image which will contain the image of the project
        const project_image = document.createElement("img");
        project_image.classList.add("project_img");
        project_image.src = item.img;

        // This line helps the event delegation to find about which object is pulling the trigger
        project_image.dataset.id = item.id;


        // Project_info is the container where will be the project's basic info
        const project_info = document.createElement("div");
        project_info.classList.add("project-info")

        //Project_info_left will contain the type and the title of the project
        const project_info_left = document.createElement("div");
        project_info_left.classList.add("project-info-left")

        const project_info_left_type = document.createElement("p");
        project_info_left_type.textContent = item.type;

        const project_info_left_title = document.createElement("h2");
        project_info_left_title.textContent = item.title;

        // project_info_right will contain the year when the project was created
        const project_info_right = document.createElement("div");
        project_info_right.classList.add("project-info-right")

        const project_year = document.createElement("p");
        project_year.textContent = item.year;

        //Projects_modal

        
        PROJECTS.appendChild(project_box);

        project_box.appendChild(project_image);
        project_box.appendChild(project_info);

        project_info.appendChild(project_info_left);
        project_info_left.appendChild(project_info_left_type);
        project_info_left.appendChild(project_info_left_title);

        project_info.appendChild(project_info_right);
        project_info_right.appendChild(project_year);


    });
}

Type.addEventListener("change", function(){
        const value = Type.value;

        const filtered = project_filter(projects, value);

        PROJECTS.innerHTML = "";

        if(filtered.length === 0){
            const noResult =  document.createElement("p");
            noResult.classList.add("noResult")
            noResult.textContent = "Nuk ka asnjë Rezultat...";

            PROJECTS.appendChild(noResult);
            return;
        }

        Render_data(filtered)
})

Render_data(projects)


// Event Delegation used to make the modal call dynamic

const project_Modal = document.createElement("div");
project_Modal.classList.add("project_Modal")
document.body.appendChild(project_Modal)

PROJECTS.addEventListener("click", function(e){
    const box = e.target.closest(".project_box");
    
    if(!box) return;

    const imageId = box.querySelector(".project_img").dataset.id;

    const SelectedProject = projects.find(project => project.id == imageId);

    project_Modal.innerHTML = `
    <h2>${SelectedProject.title}</h2>
    `

    project_Modal.classList.add("showModal");

})




