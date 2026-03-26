

window.onload = function(){
    const btn = document.getElementById("loader")
     setTimeout(function(){
        btn.style.display = "none";
    }, 5000);
}
const cell1 = document.getElementById("cell1");
cell1.innerText = "onclick";
cell1.onclick = function () {
  cell1.style.backgroundColor = "pink";
};
const cell2 = document.getElementById("cell2");
cell2.innerText = "ondblclick";
cell2.ondblclick = function () {
  alert("this is a double click function");
};
const cell3 = document.getElementById("cell3");
cell3.innerText = "onmouseover";
cell3.onmouseout = function () {
  cell3.style.backgroundColor = "white";
};
cell3.onmouseover = function () {
  cell3.style.backgroundColor = "blue";
};
const cell4 = document.getElementById("cell4");
cell4.innerText = "onmousedown";
cell4.onmouseup = function () {
  cell4.style.backgroundColor = "green";
};
cell4.onmousedown = function () {
  cell4.style.backgroundColor = "brown";
};
const cell5 = document.getElementById("cell5");
cell5.innerText = "onmousemove";

cell5.onmousemove = function () {
  if (cell5.style.backgroundColor === "red") {
    cell5.style.backgroundColor = "blue";
  } else {
    cell5.style.backgroundColor = "red";
  }
};

const cell6 = document.getElementById("cell6");
cell6.innerText = "onkeydown";
cell6.onkeyup = function () {
  document.body.style.backgroundColor = "white";
};
cell6.onkeydown = function () {
  document.body.style.backgroundColor = "aqua";
};

// const cell7 = document.getElementById("cell7");
// cell7.innerText = "window.onload"


// const events = ["click", "dblclick", "mousemove"];

// let cell = document.getElementsByTagName("td");

// events.forEach((event, index) => {

//     cell[index].addEventListener(event, function () {
//         cell[index].innerText = event;
//         cell[index].style.backgroundColor = "red";
//         console.log(event);
//     });
// });