 function displaytable(){
    const table = document.getElementById("table-container");

    const rownum= parseInt(document.getElementById("rows").value);
    const colnum = parseInt(document.getElementById("cols").value);

    for(let i=0;i<rownum;i++){
        const row = document.createElement("tr"); 
        for(let j=0;j<colnum;j++){
            const cell = document.createElement("td");
            cell.innerText = (`Row ${i+1}, Column ${j+1}`)
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
 }
// function deleterow(){
//     for(let j=0;j<colnum;j++){
//             const cell = document.createElement("td");
//             row.appendChild(cell);
//     const table = document.getElementById("table-container");
//     const deleteCell = document.createElement("td");
//         const deleteButton = document.createElement("button");
//         deleteButton.innerHTML="delete"
//         deleteButton.onclick = function(){
//             row.remove()
//         };
//     }
//         deleteCell.appendChild(deleteButton);
//         row.appendChild(deleteCell)
// }

function addDeleteButton() {
    // const deleteCell = document.createElement("td");
    // const deleteButton = document.createElement("button");
    // deleteButton.textContent = "Delete";

    // // When the button is clicked, remove the corresponding row
    // deleteButton.onclick = function () {
    //     row.remove();
    // };

    // deleteCell.appendChild(deleteButton);
    // row.appendChild(deleteCell);
 const table = document.getElementById("table-container");
  table.deleteRow(0);

}

 function addrow(){
  const table = document.getElementById("table-container");
    // const colnum = parseInt(document.getElementById("cols").value);  // Get number of columns

    // Insert a new row at the end of the table (last row)
    var row = table.insertRow(0);
    for (let j=0; j<table.rows[1].cells.length; j++) {
        row.insertCell(j);
    }
    console.log("test");
    // const table = document.getElementById("table-container");
    // const tbody = document.createElement("tbody")
    // table.insertRow();
    // const rownum= document.getElementById("rows").value;
    // const colnum = document.getElementById("cols").value;



 }