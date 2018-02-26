function drawGrid(size) {
  for (y = 0; y < size; y++) {
    for (x = 0; x < size; x++) {
      let div = document.createElement("div");
      let cellSize = 320 / size;
      div.style.width     = cellSize + "px";
      div.style.height    = cellSize + "px";
      div.style.float     = "left";
      div.style.border    = "1px solid black";
      div.style.boxSizing = "border-box";
      document.getElementById("container").appendChild(div);
      div.addEventListener('mouseover', changeColor);
    }
  }
}

function changeColor(e) {
  e.target.style.background = "black";
}

function deleteCells() {
  let cells = document.getElementById("container");
  while (cells.hasChildNodes()) {
    cells.removeChild(cells.lastChild); 
  }
  let size = prompt("Input grid size:");
  drawGrid(size);
}

drawGrid(16);
