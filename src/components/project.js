
export function createProject(data) {
  return ` <article class="project item">
    <div class="project__content content">
    <p class="project__title title">${data.projects["1"]["name"]}</p>
    <div class="project__description description">
        <div class="project__description-creation description-creation">
            <p class="project__number number">#${data.projects["1"]["number"]}</p>
            <p class="project__creator creator">${data.projects["1"]["creator"]}</p>
        </div>
        <p class="project__description-changes description-changes">${data.projects["1"]["changes"]}</p>
    </div>
</div>
<button class="project__menu menu" data-dropdown="menu-1">
    <svg class="menu-image"><use xlink:href="#project-menu"></use></svg>
    <div class="project-dropdown project-dropdown-opened">
                    <ul class="dropdown__list project-dropdown-opened">
                        <li><a class="dropdown__link project-dropdown__link project-dropdown-opened">Редактировать</a></li>
                        <li><a class="dropdown__link project-dropdown__link project-dropdown-opened"><span class="project-dropdown-opened">Удалить</span></a></li>
                    </ul>
    </div>
    </button> 
</article>`;
}
export function closeMenuProject(event){
  if(!event.target.classList.contains("project__menu") && !event.target.parentNode.classList.contains("project__menu") && !event.target.classList.contains("project-dropdown-opened")){
    const dropdown = document.querySelector(".project-dropdown");
    const menuButton = document.querySelector(".project__menu");
    dropdown.classList.remove("dropdown_is_opened");
    menuButton.classList.remove("menu_clicked");
  }
}
export function toggleMenuProject(event) {
  if ( event.target.classList.contains("project__menu") || event.target.parentNode.classList.contains("project__menu")) {
    const dropdown = document.querySelector(".project-dropdown");
    const menuButton = event.target.closest(".menu");
    menuButton.classList.toggle("menu_clicked");
    dropdown.classList.toggle("dropdown_is_opened")
  }
}