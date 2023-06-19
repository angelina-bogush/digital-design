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
                <p class="task__number number">#${data['tasks']['1']['number']}</p>
                <p class="task__creator creator">${data['tasks']['1']['creator']}</p>
                <p class="status task__status">Черновик</p>
            </div>
            <p class="task__description-changes description-changes">${data['tasks']['1']['changes']}</p>
        </div>
    </div>
    <button class="task__menu menu" data-dropdown="menu-2">
    <svg class="menu-image"><use xlink:href="#menu"></use></svg>
    <div class="project-dropdown task-dropdown" id='menu-2'>
                    <ul class="dropdown__list">
                        <li><a class="dropdown__link project-dropdown__link">Редактировать</a></li>
                        <li><a class="dropdown__link project-dropdown__link"><span>Удалить</span></a></li>
                    </ul>
    </div>
    </button>
</article>`
}
export function toggleMenuTask(event){
    if(event.target.classList.contains('task__menu') || event.target.parentNode.classList.contains('task__menu')){
        const dropdown = document.querySelector('.task-dropdown');
        const menuButton = event.target.closest('.menu');
        menuButton.classList.toggle('menu_clicked');
       dropdown.classList.toggle('dropdown_is_opened')
       dropdown.addEventListener('mouseleave', function(){
        dropdown.classList.remove('dropdown_is_opened');
    })
    }}