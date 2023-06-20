
export function createNav(data) {
  return `<div class="navigation">
    <div class="navigation__container">
        <button class="button navigation__button">${data.buttonsName[0]}</button>
        <button class="button navigation__button">${data.buttonsName[1]}</button>
        <button class="button navigation__button">${data.buttonsName[2]}</button>
        <div class="navigation__user">
            <button class="navigation__user-container">
            <span class="user-avatar navigation__user-avatar"></span>
            <svg class="navigation__user-button"><use xlink:href="#nav"></use>
            </svg>
            <div class="dropdown nav-dropdown">
                    <ul class="dropdown__list nav-dropdown">
                        <li><a class="dropdown__link nav-dropdown">Профиль</a></li>
                        <li><a class="dropdown__link nav-dropdown">Выход</a></li>
                    </ul>
                </div> </button>
        </div>
    </div>
</div>`;
}
export function toggleButton(event) {
  if (event.target.classList.contains("button")) {
    const activeButton = document.querySelector(".button_is_active");
    if (activeButton && activeButton !== event.target) {
      activeButton.classList.remove("button_is_active");
    }
    event.target.classList.add("button_is_active");
  }
}
export function toggleMenuNav(event) {
  if (
    event.target.classList.contains("navigation__user") ||
    event.target.classList.contains("navigation__user-container") ||
    event.target.parentNode.classList.contains("navigation__user-container") ||
    event.target.parentNode.classList.contains("navigation__user-button")
  ) {
    const userMenu = document.querySelector(".navigation__user");
    const menuList = document.querySelector(".dropdown");
    userMenu.classList.toggle("navigation__user_clicked");
    menuList.classList.toggle("dropdown_is_opened");
  }
}
export function closeMenuNav(event) {
  const menuList = document.querySelector(".dropdown");
  if (
    !event.target.classList.contains("navigation__user") &&
    !event.target.classList.contains("navigation__user-container") &&
    !event.target.parentNode.classList.contains("navigation__user-container") &&
    !event.target.parentNode.classList.contains("navigation__user-button") &&
    !event.target.classList.contains('nav-dropdown')
  ) {
    const userMenu = document.querySelector(".navigation__user");
    menuList.classList.remove("dropdown_is_opened");
    userMenu.classList.remove("navigation__user_clicked");
  }
}
