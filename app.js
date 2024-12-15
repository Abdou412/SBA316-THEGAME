let info = document.querySelector(".info");
let turn = "x";
let array_punch = [];
function win() {
  for (i = 1; i <= 9; i++) {
    array_punch[i] = document.getElementById("punch" + i).innerHTML;
    // crate an if statement to compare the the square

    if (
      array_punch[1] == array_punch[2] &&
      array_punch[1] == array_punch[3] &&
      array_punch[1] !== ""
    ) {
      //   console.log("keep going abdou");

      info.innerHTML = `${array_punch[1]} win`;
      document.getElementById("punch1").style.backgroundColor="blue"
      document.getElementById("punch2").style.backgroundColor = "blue";
      document.getElementById("punch3").style.backgroundColor = "blue";

    } else if (
      array_punch[4] == array_punch[5] &&
      array_punch[4] == array_punch[6] &&
      array_punch[4] !== ""
    ) {
      //   console.log("keep going abdou");
    
    } else if (
      array_punch[7] == array_punch[8] &&
      array_punch[7] == array_punch[9] &&
      array_punch[7] !== ""
    ) {
      //   console.log("keep going abdou");
    } else if (
      array_punch[1] == array_punch[4] &&
      array_punch[1] == array_punch[7] &&
      array_punch[1] !== ""
    ) {
      //   console.log("keep going abdou");
    } else if (
      array_punch[3] == array_punch[6] &&
      array_punch[3] == array_punch[9] &&
      array_punch[3] !== ""
    ) {
      //   console.log("keep going abdou");
    } else if (
      array_punch[2] == array_punch[5] &&
      array_punch[2] == array_punch[8] &&
      array_punch[2] !== ""
    ) {
      //   console.log("keep going abdou");
    } else if (
      array_punch[1] == array_punch[5] &&
      array_punch[1] == array_punch[9] &&
      array_punch[1] !== ""
    ) {
      //   console.log("keep going abdou");
    } else if (
      array_punch[3] == array_punch[5] &&
      array_punch[3] == array_punch[7] &&
      array_punch[3] !== ""
    ) {
      //   console.log("keep going abdou");
    }
  }
}

function play(id) {
  let punch_id = document.getElementById(id);

  if (turn === "x" && punch_id.innerHTML == "") {
    punch_id.innerHTML = "x";
    turn = "o";
    info.innerHTML = "IT IS THE TURN OF 'O'";
  } else if (turn == "o" && punch_id.innerHTML == "") {
    punch_id.innerHTML = "o";
    turn = "x";
    info.innerHTML = "IT IS THE TURN OF 'X'";
  }
  win();
}
