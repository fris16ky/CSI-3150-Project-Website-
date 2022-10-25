var day1 = document.getElementById("01day");
var day2 = document.getElementById("02day");
var day3 = document.getElementById("03day");
var day4 = document.getElementById("04day");
var day5 = document.getElementById("05day");
var day6 = document.getElementById("06day");
var day7 = document.getElementById("07day");
var day8 = document.getElementById("08day");
var day9 = document.getElementById("09day");
var day10 = document.getElementById("10day");
var day11 = document.getElementById("11day");
var day12 = document.getElementById("12day");
var day13 = document.getElementById("13day");
var day14 = document.getElementById("14day");
var day15 = document.getElementById("15day");
var day16 = document.getElementById("16day");
var day17 = document.getElementById("17day");
var day18 = document.getElementById("18day");
var day19 = document.getElementById("19day");
var day20 = document.getElementById("20day");
var day21 = document.getElementById("21day");
var day22 = document.getElementById("22day");
var day23 = document.getElementById("23day");
var day24 = document.getElementById("24day");
var day25 = document.getElementById("25day");
var day26 = document.getElementById("26day");
var day27 = document.getElementById("27day");
var day28 = document.getElementById("28day");
var day29 = document.getElementById("29day");
var day30 = document.getElementById("30day");
var day31 = document.getElementById("31day");
//These names will be changing. i.e. 31day will be NYeve, 25day will be chrimmy, etc.
const create_btn = document.querySelector(".create_btn button");
const delone_btn = document.querySelector(".delone_btn button");
const delmult_btn = document.querySelector(".delmult_btn button");

create_btn.addEventListener("click", (e) => {
  let reminder = prompt("Please enter your reminder", "Enter Here");
  let time = prompt(
    "What time would you like your reminder?",
    "Format: 00:00 -- Military Time!"
    //will be getting rid of the time aspect; obselete
  );
  let text;
  let counter = 0;
  if (reminder == null || reminder == "" || time == null || time == "") {
    text = "User cancelled the prompt :(";
  } else {
    if (parseInt(time.substring(0, 2)) <= 11) {
      //if reminder is during the day (AM) -- obselete for now; getting rid of time component
      text =
        "Your reminder is '" +
        reminder +
        "' at " +
        time.substring(0, 5) +
        "am today";
      counter++;
    } else {
      //reminder is in the afternoon
      text =
        "Your reminder is '" +
        reminder +
        "' at " +
        time.substring(0, 5) +
        "pm today";
      counter++;
    }

    if (counter == 0) {
      day3.textContent += reminder;
    } else {
      day3.textContent += "\n" + reminder;
    }
  }
  window.confirm(text);
});
