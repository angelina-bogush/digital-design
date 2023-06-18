import '../scss/nav.css';
import '../scss/project.css';
import '../scss/task.css';
import '../scss/empty-projects.css';
import { createNav } from './nav'
import { data } from './data'
import { createElement } from './utils'
import { createProject } from './project'
import { createTask } from './task'
import {createEmptyProjects} from './empty-project'

const container = document.querySelector('#app');
const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container');
const emptyProjectsContainer = document.querySelector('.empty-projects-container');
createElement(createNav(data), container);
createElement(createProject(data), projectContainer);
createElement(createProject(data), projectContainer);
createElement(createTask(data), taskContainer);
createElement(createEmptyProjects(), emptyProjectsContainer)




