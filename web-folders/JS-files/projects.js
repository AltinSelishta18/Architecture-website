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

function project_filter(arr, Type){
    const filter_project = arr.filter(project =>
        (Type === "All" || project.type.toLowerCase().includes(Type.toLowerCase()))   
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

        const project_info = document.createElement("div");
        project_info.classList.add("project-info")

        const project_info_left = document.createElement("div");
        project_info_left.classList.add("project-info-left")

        const project_info_left_type = document.createElement("p");
        project_info_left_type.textContent = item.type;

        const project_info_left_title = document.createElement("h2");
        project_info_left_title.textContent = item.title;

        const project_info_right = document.createElement("div");
        project_info_right.classList.add("project-info-right")

        const project_year = document.createElement("p");
        project_year.textContent = item.year;


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

        Render_data(filtered)
})

Render_data(projects)


