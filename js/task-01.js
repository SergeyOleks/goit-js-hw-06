const ulEl = document.querySelector("#categories");
const ulElFirstChild = ulEl.children[0];
const ulElSecondChild = ulEl.children[1];
const ulElThirdChild = ulEl.children[2];


console.log("Number of categories: ", ulEl.children.length);
console.log("");
console.log("Category: ", ulElFirstChild.children[0].textContent);
console.log("Elements: ", ulElFirstChild.children[1].children.length);
console.log("");
console.log("Category: ", ulElSecondChild.children[0].textContent);
console.log("Elements: ", ulElSecondChild.children[1].children.length);
console.log("");
console.log("Category: ", ulElThirdChild.children[0].textContent);
console.log("Elements: ", ulElThirdChild.children[1].children.length);