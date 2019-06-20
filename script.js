var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function checkInput() {
    return input.value;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

function addListAfterClick() {
    if (checkInput() !== "") {
        createListElement();
    }    
}

function addListAfterEnter() {
        if (checkInput() !== "" && event.keyCode === 13) {
            createListElement();
         }
}

function listLength() {
    return listItems.length;
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

for (i = 0; i < listLength(); i++) {
    deleteButton();
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);

ul.onclick = function (event) {
    var target = event.target;
    target.classList.toggle("done");
}
