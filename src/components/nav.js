import { createElement } from "./utils.js";
import { data } from "./data.js";
// export function createNavigation(){
//     const navigation = createElement('div', { className: 'navigation' });
//     const container = createElement('div', { className: 'navigation__container' });
//     console.log(container)
//     const projectsButton = createElement('button', { className: 'button', className: 'navigation__button' });
//     const tasksButton = createElement('button', { className: ['button', 'navigation__button'] });
//     const usersButton = createElement('button', { className: ['button', 'navigation__button'] });
//     const userContainer = createElement('div', { className: 'navigation__user-container' });
//     const userAvatar = createElement('img', { className: ['user-avatar', 'navigation__user-avatar'], src: '../images/navigation/nav-user-avatar.svg', alt: '' });
//     const userButton = createElement('button', { className: 'navigation__user-button', textContent: '' });
  
//     container.appendChild(projectsButton);
//     container.appendChild(tasksButton);
//     container.appendChild(usersButton);
//     userContainer.appendChild(userAvatar);
//     userContainer.appendChild(userButton);
//     container.appendChild(userContainer);
//     navigation.appendChild(container);
//     document.body.appendChild(navigation);
//   }

 export function createNav(data){
    return `<div class="navigation">
    <div class="navigation__container">
        <button class="button navigation__button">${data.buttonsName[0]}</button>
        <button class="button navigation__button">${data.buttonsName[1]}</button>
        <button class="button navigation__button">${data.buttonsName[2]}</button>
        <div class="navigation__user">
            <button class="navigation__user-container">
            <span class="user-avatar navigation__user-avatar"></span>
            <svg class="navigation__user-button"><use xlink:href="#user-button"></use>
            </svg>
            <div class="dropdown">
                    <ul class="dropdown__list">
                        <li><a class="dropdown__link">Профиль</a></li>
                        <li><a class="dropdown__link">Выход</a></li>
                    </ul>
                </div>
        </div>
    </div>
</div>`
};
export function toggleButton(event){
    if(event.target.classList.contains('button')){
const activeButton = document.querySelector('.button_is_active');
  if (activeButton && activeButton !== event.target) {
    activeButton.classList.remove('button_is_active');
  }
event.target.classList.add('button_is_active')}
}
export function toggleMenu(event){
    if(event.target.classList.contains('navigation__user-container')){
        const menuList = document.querySelector('.dropdown');
        menuList.classList.toggle('dropdown_is_opened')
    }
}


