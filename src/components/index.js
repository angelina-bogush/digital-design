import "@/fonts/font.scss";
import "@/scss/nav.scss";
import "@/scss/project.scss";
import "@/scss/task.scss";
import "@/scss/empty-projects.scss";
import '@/scss/api.scss'
import "@/images/icons/nav.svg";
import "@/images/icons/project-menu.svg";
import { createNav, toggleButton, toggleMenuNav, closeMenuNav } from "./nav";
import { data } from "./data";
import { createElement } from "./utils";
import { createProject, toggleMenuProject, closeMenuProject } from "./project";
import { createTask, toggleMenuTask, closeMenuTask } from "./task";
import { createEmptyProjects } from "./empty-project";
import '@/components/api.js'
function createPage(){
const container = document.querySelector("#app");
const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");
const emptyProjectsContainer = document.querySelector(
  ".empty-projects-container"
);
createElement(createNav(data), container);
createElement(createProject(data), projectContainer);
createElement(createTask(data), taskContainer);
createElement(createEmptyProjects(), emptyProjectsContainer);
document.addEventListener("click", (event) => {
  toggleButton(event);
  toggleMenuNav(event);
  toggleMenuProject(event);
  toggleMenuTask(event);
  closeMenuNav(event);
  closeMenuProject(event);
  closeMenuTask(event);
});
}
createPage()

