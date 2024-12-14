let info = document.querySelector(".info");
let turn = "x";

function win (){

}


function play(id) {
  let punch_id = document.getElementById(id);

  if (turn === "x" && punch_id.innerHTML == "") {
    punch_id.innerHTML = "x";
    turn = "o";
    info.innerHTML = "IT IS THE TURN OF 'O'";
  } else if (turn == "o" && punch_id.innerHTML == "") {
  punch_id.innerHTML = "o"
  turn= "x"
info.innerHTML = "IT IS THE TURN OF 'X'";
  }
  win ()
}

