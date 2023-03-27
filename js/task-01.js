
const ulEl = document.querySelector("#categories");
console.log("Number of categories: ", ulEl.children.length, '\n\n');

[...ulEl.children].forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.children[1].children.length, '\n\n');
})


