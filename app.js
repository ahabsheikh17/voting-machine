var input = document.getElementById("input");
var list = document.getElementById("list");

function add() {
  if (input.value === "") {
    alert("Enter Any Word");
  } else {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";

    var num = 0;
    var p = document.createElement("p");
    li.appendChild(p);
    li.addEventListener("click", () => {
      num++;
      p.innerHTML = `( ${num} )`;
    });
  }
}