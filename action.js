const textfeild = document.querySelector("#text-feild");
const listcontainer = document.getElementsByTagName("ul")[0];
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  if (textfeild.value === "") {
    alert("write something");
  } else {
    let li = document.createElement("li");
    li.innerText = textfeild.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    span.classList.add("delete-button");
    li.appendChild(span);
  }
  textfeild.value = "";
  save();
});
listcontainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    save();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    save();
  }
});

function save() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function show() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
show();
