let info = document.querySelector(".info");
let turn = "x";
function play(id) {
  let punch_id = document.getElementById(id);

  if (turn === "x" && punch_id.innerHTML == "") {
    punch_id.innerHTML = "x";
    turn = "o";
    info.innerHTML = "IT IS THE TURN OF 'O'";
  }
}
