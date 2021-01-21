let rowCount = 3;
let columnCount = 3;

function addRow() {
  let table = document.querySelector(".table");
  let newRow = document.createElement("tr");

  for (let i = 0; i < columnCount; i++) {
    let newCell = document.createElement("td");
    newRow.appendChild(newCell);
  }

  table.appendChild(newRow);
  rowCount++;
}

function addColumn() {
  let rows = document.querySelectorAll("tr");

  for (let i = 0; i < rowCount; i++) {
    let newCell = document.createElement("td");
    rows[i].appendChild(newCell);
  }
  columnCount++;
}