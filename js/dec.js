//code is just copied for now. Waiting to finish the styling and such for the actual calendar month before starting the code

//woohoo it's JavaScript time
//I imagine this'll be where I code the functionality of the
//Create and Delete Reminder.
//Will be needing Event Listeners and such for when I click
//on both.
//KEEP IN MIND: His slides/notes will be VERY helpful. I hope

//Idea for JS: we'll need an Event Listener. When someone clicks on the Today part of Create Reminder, pop up a box, same with
//a different box for Future. Different box for Delete a Reminder too
//options for each box: create today: need to check what the current time is? if possible. Or maybe have them input the timezone they're in????
//but for today: the only option will be what time and what the content of the reminder will be. When clicking done, the popup will go away.
//Future: date, time, content.
//Delete: date. Then maybe when the date is selected, if there are reminders, have a selection between them? so you don't have to input
//the specific time... idk
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
//I think I'm going to just copy this code and make new JavaScript files for each new Page (November, December).
//Originally I thought I could use this same one, but then I'd need to make IDs for EVERY day in all 3 months (well, technically not Oct)
//and that would be too time consuming to differentiate. I'll still need to for each month, but having a separate JS will be nice.
//hmm maybe later on, have a check as soon as they load into the page to check which month it is and change the month cal accordingly?
//idk how to do that without an event though.

create_btn.addEventListener("click", (e) => {
  //For now, I'm in the process of changing EVERYTHING. From two creates to one, from one delete (uncoded) to two. So there may be a few errors.
  let reminder = prompt("Please enter your reminder", "Enter Here");
  let time = prompt(
    "What time would you like your reminder?",
    "Format: 00:00 -- Military Time!"
    //I COULD have them write pm or am after? like 00:00, am and then do my calcs from there (whether to say am or pm in return message) -
    //for now, not worrying about functionality - reminders actually popping up on time and everything. Especially the ability to click
    //your reminders to find more info - that seems near impossible to turn user input into string into a working button.
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
    //here is where we want to add text to the current day. Hmm deciphering current day will be hard. I feel like it'll be
    //tedious for future as well (within limits ofc). I envision a lot of if statements until I find a better, more efficient way rofl.
    //will I need to use shit like tbody tr:nth-child(n)? Not sure. They're all under td tags. Could give them ids tho. Like td for 25
    //is td id="25"
    if (counter == 0) {
      day3.textContent += reminder;
    } else {
      day3.textContent += "\n" + reminder;
    }

    //need to add spans to every one next

    //the problem isn't the new line; what we're adding text-wise is the calendar date number. It's almost like we'll need to add a span
    //to every single calendar date, and then access the span by using span id...
  }
  window.confirm(text);
});
