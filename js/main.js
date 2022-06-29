window.addEventListener("load", (event) => {
  for (var i = 0; i < 400; i++) {
    let board = document.createElement("div");
    board.className = "box";
    document.getElementById("board").appendChild(board);
  }
});
