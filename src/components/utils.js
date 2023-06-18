// export function createElement(tag, options) {
//     let element = document.createElement(tag);
//     Object.keys(options).forEach(key => {
//         element[key] = options[key]
//     });
//     document.body.append(element);
// }
export function createElement(func, container){
const newElem = func;
 container.insertAdjacentHTML('afterbegin', newElem)
}