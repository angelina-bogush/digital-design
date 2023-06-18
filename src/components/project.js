import { data } from "./data";
export function createProject(data){
    return ` <article class="project item">
    <div class="project__content content">
    <p class="project__title title">${data.projects['1']['name']}</p>
    <div class="project__description description">
        <div class="project__description-creation description-creation">
            <p class="project__number number">#${data.projects['1']['number']}</p>
            <p class="project__creator creator">${data.projects['1']['creator']}</p>
        </div>
        <p class="project__description-changes description-changes">${data.projects['1']['changes']}</p>
    </div>
</div>
<button class="project__menu menu">
    <svg class="menu-image"><use xlink:href="#menu"></use></svg>
    </button> 
</article>`
}