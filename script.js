const ulItem = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

const addItem = () => {
    let inputItem = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const itemName = document.createElement("span");
    const delButton = document.createElement("button");

    listItem.appendChild(itemName);
    listItem.appendChild(delButton);

    itemName.textContent = inputItem;
    delButton.textContent = "Delete";

    ulItem.appendChild(listItem);

    delButton.addEventListener("click",() => {
        ulItem.removeChild(listItem);
    });

    input.focus();
}