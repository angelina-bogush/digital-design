
export function createElement(func, container) {
  const newElem = func;
  container.insertAdjacentHTML("afterbegin", newElem);
}