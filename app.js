let info = document.querySelector(".info");
let turn = "x";
let array_punch = [];
function win() {
  for (i = 1; i < 10; i++) {
    array_punch[i] = document.getElementById("punch" + i).innerHTML;
    // crate an if statement to compare the the square
  }
  if (
    array_punch[1] == array_punch[2] &&
    array_punch[2] == array_punch[3] &&
    array_punch[1] !== ""
  ) {
    //   console.log("keep going abdou");

    info.innerHTML = `${array_punch[1]} WIN`;
    document.getElementById("punch1").style.backgroundColor = "white";
    document.getElementById("punch2").style.backgroundColor = "white";
    document.getElementById("punch3").style.backgroundColor = "white";
  } else if (
    array_punch[4] == array_punch[5] &&
    array_punch[5] == array_punch[6] &&
    array_punch[6] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[4]} WIN`;
    document.getElementById("punch4").style.backgroundColor = "white";
    document.getElementById("punch5").style.backgroundColor = "white";
    document.getElementById("punch6").style.backgroundColor = "white";
  } else if (
    array_punch[7] == array_punch[8] &&
    array_punch[8] == array_punch[9] &&
    array_punch[7] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[7]} WIN`;
    document.getElementById("punch7").style.backgroundColor = "white";
    document.getElementById("punch8").style.backgroundColor = "white";
    document.getElementById("punch9").style.backgroundColor = "white";
  } else if (
    array_punch[1] == array_punch[4] &&
    array_punch[1] == array_punch[7] &&
    array_punch[1] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[1]} WIN`;
    document.getElementById("punch1").style.backgroundColor = "white";
    document.getElementById("punch4").style.backgroundColor = "white";
    document.getElementById("punch7").style.backgroundColor = "white";
  } else if (
    array_punch[3] == array_punch[6] &&
    array_punch[3] == array_punch[9] &&
    array_punch[3] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[3]} WIN`;
    document.getElementById("punch3").style.backgroundColor = "white";
    document.getElementById("punch6").style.backgroundColor = "white";
    document.getElementById("punch9").style.backgroundColor = "white";
  } else if (
    array_punch[2] == array_punch[5] &&
    array_punch[2] == array_punch[8] &&
    array_punch[2] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[2]} WIN`;
    document.getElementById("punch2").style.backgroundColor = "white";
    document.getElementById("punch5").style.backgroundColor = "white";
    document.getElementById("punch8").style.backgroundColor = "white";
  } else if (
    array_punch[1] == array_punch[5] &&
    array_punch[1] == array_punch[9] &&
    array_punch[1] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[1]} WIN`;
    document.getElementById("punch1").style.backgroundColor = "white";
    document.getElementById("punch5").style.backgroundColor = "white";
    document.getElementById("punch9").style.backgroundColor = "white";
  } else if (
    array_punch[3] == array_punch[5] &&
    array_punch[3] == array_punch[7] &&
    array_punch[3] !== ""
  ) {
    //   console.log("keep going abdou");
    info.innerHTML = `${array_punch[3]} WIN`;
    document.getElementById("punch3").style.backgroundColor = "white";
    document.getElementById("punch5").style.backgroundColor = "white";
    document.getElementById("punch7").style.backgroundColor = "white";
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

const button = document.createElement("button");
button.textContent = "RESTART GAME";
button.id = "mybutton";
const button_div = document.getElementById("button_div");
button_div.appendChild(button);

function refreshpage() {
  location.reload();
}

document.getElementById("mybutton").addEventListener("click",refreshpage)



