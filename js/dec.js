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

//getting the date and month in order to put accurate reminders on the calendar
const currentDay = new Date();
const currentMonth = new Date();
currentDay.getDate; //integer - 1-31.
currentMonth.getMonth; //integer - 0 for Jan, 11 for Dec

create_btn.addEventListener("click", (e) => {
  //so for the new input way, we'll need two prompts. Month and Day. When the month is entered, we'll have to check
  //if userMonth == "January" or "january".
  //Googling said that this should be better: a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
  //where a is the input string, b is what we want to compare. So, we can put "January" for b
  //either run a for loop thru the months we don't want, and compare array[index] each time
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];
  for (let i = 0; i < 9; i++) {
    //0 thru 8 since there are 9 months we don't want (Jan to sept)
    if (
      //rn, userInput is a default. Haven't started the new code. Hopefully it'll be simple
      userInput.localeCompare(monthArray[i], undefined, {
        sensitivity: "base",
      }) === 0
    ) {
      //^^This compares the user inputted month to every month we don't carry, while ignoring case and accents (january and January
      //and Jánuary are the same)
      //the user is trying to put a reminder for a month we do not allow
      windows.prompt(
        "Please enter a different month! We currently only support months until the end of the year, sorry!"
      );
    }
  }

  let reminder = prompt("Please enter your reminder", "Enter Here");
  //we want this to be an input box instead of a Windows Prompt. We did this once before I believe. For email and user
  //But the prof sent us a link or two to help with this.

  // let time = prompt(
  //   "What time would you like your reminder?",
  //   "Format: 00:00 -- Military Time!"
  //   //will be getting rid of the time aspect; obselete
  // );
  let text;
  // let counter = 0; counter code was from trying to figure out multiple reminders in one day
  if (reminder == null || reminder == "") {
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
    } else {
      //reminder is in the afternoon
      text =
        "Your reminder is '" +
        reminder +
        "' at " +
        time.substring(0, 5) +
        "pm today";
    }

    day3.textContent += "\n" + reminder;
  }
  window.confirm(text);
});
