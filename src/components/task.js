import { data } from "./data";
export function createTask(data){
    return `<article class="task item">
    <div class="task__content content">
        <div class="task__description-container">
            <p class="task__title title">${data['tasks']['1']['title']}</p>
            <span class="user-avatar task__user-avatar"></span>
        </div>
        <div class="task__description description">
            <div class="task__description-creation description-creation">
                <p class="task__number number">${data['tasks']['1']['number']}</p>
                <p class="task__creator creator">${data['tasks']['1']['creator']}</p>
                <p class="status task__status">Черновик</p>
            </div>
            <p class="task__description-changes description-changes">${data['tasks']['1']['changes']}</p>
        </div>
    </div>
    <button class="task__menu menu"></button>
</article>`
}