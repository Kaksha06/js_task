// function changebackgroundColor(){
//     document.body.style.backgroundColor="pink";
// }


const table = document.createElement("table");
table.style.border ="1 px solid black";
// const headerRowWrapper = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["Name", "Age", "City"];

headers.forEach(headerText => {
    const th = document.createElement("th");
        th.textContent = headerText;  // Set header text
        // th.style.border = "1px solid black";
        // th.textContent = headerText; // Set header text
  headerRow.appendChild(th); // Append header to the row
})

const tbody = document.createElement("tbody");
 const data = [
    ["John", 25, "New York"],
    ["Alice", 30, "London"],
    ["Bob", 22, "Paris"]
  ];

  data.forEach(rowData => {
  const row = document.createElement("tr"); // Create a new row

  rowData.forEach(cellData => {
    const cell = document.createElement("td"); // Create a new cell (td)
    cell.textContent = cellData; // Set cell data
    cell.style.border = "1px solid black"; // Border around each data cell
    cell.textContent = cellData; // Set cell data
    row.appendChild(cell); // Append the cell to the row
  });

  tbody.appendChild(row); // Append the row to the tbody
});

table.appendChild(tbody);

// Finally, append the table to the document (to the body or a specific container)
document.body.appendChild(table);