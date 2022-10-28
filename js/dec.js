//Getting all day elements so that the user can add their reminders to the spans of each day
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
var day24 = document.getElementById("chrimmyEve");
var day25 = document.getElementById("christmas");
var day26 = document.getElementById("26day");
var day27 = document.getElementById("27day");
var day28 = document.getElementById("28day");
var day29 = document.getElementById("29day");
var day30 = document.getElementById("30day");
var day31 = document.getElementById("nyEve");

//Buttons
const create_btn = document.querySelector(".create_btn button");
const delone_btn = document.querySelector(".delone_btn button");
const delmult_btn = document.querySelector(".delmult_btn button");
const done_btn = document.querySelector(".done_btn button");
const submit_btn = document.querySelector(".submit_btn button");

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

//getting the date and month in order to put accurate reminders on the calendar
const currentDay = new Date();
const currentMonth = new Date();
currentDay.getDate; //integer - 1-31.
currentMonth.getMonth; //integer - 0 for Jan, 11 for Dec
//for get month: when it's being used beyond the scope of this project (i.e. if I'm showing it to people past December)
//I'll need an else statement. If (currentMonth === 9), month is Oct. elif (===10) nov, elif(===11) is dec.
//else (being accessed beyond this year), windows.prompt("Welcome to 2023! Sorry, but this is beyond the scope of this website for
//now, so you will not be able to set any reminders! Apologies for any inconvenience this may cause. ")

create_btn.addEventListener("click", (e) => {
  document.getElementById("userInputRem").className = "show";
  //showing the input box
  //To be honest, this may be all we need to do under the create_btn click.
  //The rest will need to be done with the input from the input boxes.

  //so for the new input way, we'll need two prompts. Month and Day. When the month is entered, we'll have to check
  //if userMonth == "January" or "january".
  //Googling said that this should be better: a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
  //where a is the input string, b is what we want to compare. So, we can put "January" for b
  //either run a for loop thru the months we don't want, and compare array[index] each time

  // for (let i = 0; i < 9; i++) {
  //   //0 thru 8 since there are 9 months we don't want (Jan to sept)
  //   if (
  //     //rn, userInput is a default. Haven't started the new code. Hopefully it'll be simple
  //     userInput.localeCompare(monthArray[i], undefined, {
  //       sensitivity: "base",
  //     }) === 0
  //   ) {
  //     //^^This compares the user inputted month to every month we don't carry, while ignoring case and accents (january and January
  //     //and Jánuary are the same)
  //     //the user is trying to put a reminder for a month we do not allow
  //     windows.prompt(
  //       "Please enter a different month! We currently only support months until the end of the year, sorry!"
  //     );
  //   }
  //mayhaps an else here. If the user is inputting a valid month
  //hmmmm... so the else here is two things.
  //one elif: if userInput.localeCompare("October", etc.) || localeCompare("November") || December,
  //then do the code for that? Or maybe set a value here, like count == 1;
  //^If they input October, November or December (but ignore December for this one; continue) - we need to swap the pages
  //to that. October --> october.html, Nov -> november.html, December -> count == 1;

  //so we can do the actual calculations outside of this loop, and can use count as a parameter.
  //I think that'd be best. Altho, this still is within the onClick method, so maybe it wouldn't be too bad.
  //If possible, get the count working. I'd still like to keep it separate, since I imagine it'll be a fair bit of code.

  //then the else {} would be if the user misspelled or just entered an invalid word altogether.
  //to which, we'd windows.prompt("Sorry, it seems the month you tried to enter is misspelled, or not a month at all!
  //please retry with a correct month, thanks!");
  //}

  //let reminder = prompt("Please enter your reminder", "Enter Here");
  //we want this to be an input box instead of a Windows Prompt. We did this once before I believe. For email and user
  //But the prof sent us a link or two to help with this.

  // let time = prompt(
  //   "What time would you like your reminder?",
  //   "Format: 00:00 -- Military Time!"
  //   //will be getting rid of the time aspect; obselete
  // );
  // let text;
  // // let counter = 0; counter code was from trying to figure out multiple reminders in one day
  // if (reminder == null || reminder == "") {
  //   text = "User cancelled the prompt :(";
  // } else {
  //   if (parseInt(time.substring(0, 2)) <= 11) {
  //     //if reminder is during the day (AM) -- obselete for now; getting rid of time component
  //     text =
  //       "Your reminder is '" +
  //       reminder +
  //       "' at " +
  //       time.substring(0, 5) +
  //       "am today";
  //   } else {
  //     //reminder is in the afternoon
  //     text =
  //       "Your reminder is '" +
  //       reminder +
  //       "' at " +
  //       time.substring(0, 5) +
  //       "pm today";
  //   }

  //   day3.textContent += "\n" + reminder;
  // }
  // window.confirm(text);
  //old code
});

//Done button code
done_btn.addEventListener("click", (e) => {
  //Here, we will take the input of month and reminder content from the user.
  //when done is clicked, we will also hide everything, and take the user to the month html page that they set the
  //reminder for. Hmm, actually. What if we windows.prompt saying "Your reminder has been created. Click ok to be
  //transported to that page". Or maybe it won't wait for ok to be clicked to transport. unsure

  //input from month box:
  var reminderDate = document.getElementById("inputDate").value;
  let subMonth = reminderDate.substring(5, 7);
  let subDay = reminderDate.substring(8, 10); //1 to 31. Don't think I need to worry about it getting past the allowed
  //day (i.e. 31 for November)
  //subMonth is now the month in number form (10 = oct, 11 = nov, 12 = dec)
  //input from the input box:
  var reminderContent = document.getElementById("inputRem").value;
  console.log(reminderDate);
  console.log(reminderContent);
  window.confirm("Your reminder has been created!");
  //problem rn: the reminderContent is working, same with the date and its substrings
  //what it's not doing is displaying content to the calendar.
  //day1.textContent += reminderContent + " "; //this works easily, but we want new line!
  if (subDay == 1) {
    day1.textContent += reminderContent + ". ";
  } else if (subDay == 2) {
    day2.textContent += reminderContent + ". ";
  } else if (subDay == 3) {
    day3.textContent += reminderContent + ". ";
  } else if (subDay == 4) {
    day4.textContent += reminderContent + ". ";
  } else if (subDay == 5) {
    day5.textContent += reminderContent + ". ";
  } else if (subDay == 6) {
    day6.textContent += reminderContent + ". ";
  } else if (subDay == 7) {
    day7.textContent += reminderContent + ". ";
  } else if (subDay == 8) {
    day8.textContent += reminderContent + ". ";
  } else if (subDay == 9) {
    day9.textContent += reminderContent + ". ";
  } else if (subDay == 10) {
    day10.textContent += reminderContent + ". ";
  } else if (subDay == 11) {
    day11.textContent += reminderContent + ". ";
  } else if (subDay == 12) {
    day12.textContent += reminderContent + ". ";
  } else if (subDay == 13) {
    day13.textContent += reminderContent + ". ";
  } else if (subDay == 14) {
    day14.textContent += reminderContent + ". ";
  } else if (subDay == 15) {
    day15.textContent += reminderContent + ". ";
  } else if (subDay == 16) {
    day16.textContent += reminderContent + ". ";
  } else if (subDay == 17) {
    day17.textContent += reminderContent + ". ";
  } else if (subDay == 18) {
    day18.textContent += reminderContent + ". ";
  } else if (subDay == 19) {
    day19.textContent += reminderContent + ". ";
  } else if (subDay == 20) {
    day20.textContent += reminderContent + ". ";
  } else if (subDay == 21) {
    day21.textContent += reminderContent + ". ";
  } else if (subDay == 22) {
    day22.textContent += reminderContent + ". ";
  } else if (subDay == 23) {
    day23.textContent += reminderContent + ". ";
  } else if (subDay == 24) {
    day24.textContent += reminderContent + ". ";
  } else if (subDay == 25) {
    day25.textContent += reminderContent + ". ";
    day25.style.color = "red";
  } else if (subDay == 26) {
    day26.textContent += reminderContent + ". ";
  } else if (subDay == 27) {
    day27.textContent += reminderContent + ". ";
  } else if (subDay == 28) {
    day28.textContent += reminderContent + ". ";
  } else if (subDay == 29) {
    day29.textContent += reminderContent + ". ";
  } else if (subDay == 30) {
    day30.textContent += reminderContent + ". ";
  } else if (subDay == 31) {
    day31.textContent += reminderContent + ". ";
    document.getElementById("nye").className = "goldboi";
    day31.style.color = "gold";
  } else {
    window.confirm("There has been an error. Please retry");
  }

  //now we need to dynamically add spans based on what day they selected.
  // function addElement() {
  //   var newSpan = document.createElement("span");
  //   //give it content
  //   //const newContent = document.createTextNode(reminderContent);
  //   //add to newly created span
  //   //newSpan.appendChild(newContent);
  //   newSpan.innerHTML = reminderContent;
  //   //add newly created element & its content into the DOM
  //   var currentSpan = document.getElementById("01day");
  //   currentSpan.appendChild(newSpan);
  //   //currentSpan.after(newSpan);
  //   //document.body.insertBefore(newSpan, currentSpan);
  // }
  //this is a shit show. None of this code works, despite BEING FROM THE PROFESSORS INTERNET HELP

  //document.body.onload = addElement;
  document.getElementById("userInputRem").className = "hide";
});

delone_btn.addEventListener("click", (e) => {
  //delete code time! unsure how to do this as of now. Might not be able to delete only one.
  //maybe deal with reminderContent's length? And delete things that long? or simply
  //repaste with a substring up until the end length - the most recent reminder length?
  //either way, do this one last, if at all.
});

delmult_btn.addEventListener("click", (e) => {
  //add code for an input date; same as before.
  //They'll select the date for the nuke, then that day.textContent = "";
  //might need to do another 31 if loops to determine which day it'll be.
  document.getElementById("userInputDelete").className = "show";
  if (document.getElementById("userInputRem").className == "show") {
    window.confirm(
      "Please select either Create a Reminder OR Delete a Reminder!"
    );
    document.getElementById("userInputRem").className = "hide";
    document.getElementById("userInputDelete").className = "hide";
  }
});

submit_btn.addEventListener("click", (e) => {
  //this is code for when the user picks out which day they want to remove all reminders
  //input from month box:
  var delAll = document.getElementById("deleteDate").value;
  let subMonth = delAll.substring(5, 7);
  let subDay = delAll.substring(8, 10); //1 to 31. Don't think I need to worry about it getting past the allowed
  //day (i.e. 31 for November)
  //subMonth is now the month in number form (10 = oct, 11 = nov, 12 = dec)
  //input from the input box:

  // if (subMonth == 10) {
  //   window.location.href = "./october.html";
  // }
  //^^ This works! Now, need to figure out some things. Do we let users create and delete reminders of other months
  //from this page? Probably shouldn't, right?
  //so maybe add the navigation arrows. Previous Month, Next Month (null for December). And change the scope of the dates
  //to only the current month.

  console.log(delAll);
  //problem rn: the reminderContent is working, same with the date and its substrings
  //what it's not doing is displaying content to the calendar.
  //day1.textContent += reminderContent + " "; //this works easily, but we want new line!
  if (subDay == 1) {
    if (day1.textContent == "") {
      //if the date currently does not have any reminders to remove, do not proceed
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      //the date DOES have reminders to remove; remove them.
      //We also want to display to the user that we have removed the reminders
      day1.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 2) {
    if (day2.textContent == "") {
      window.confirm("This day does not have a reminder!");
    } else {
      day2.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 3) {
    if (day3.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day3.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 4) {
    if (day4.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day4.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 5) {
    if (day5.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day5.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 6) {
    if (day6.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day6.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 7) {
    if (day7.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day7.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 8) {
    if (day8.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day8.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 9) {
    if (day9.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day9.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 10) {
    if (day10.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day10.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 11) {
    if (day11.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day11.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 12) {
    if (day12.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day12.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 13) {
    if (day13.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day13.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 14) {
    if (day14.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day14.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 15) {
    if (day15.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day15.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 16) {
    if (day16.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day16.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 17) {
    if (day17.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day17.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 18) {
    if (day18.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day18.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 19) {
    if (day19.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day19.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 20) {
    if (day20.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day20.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 21) {
    if (day21.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day21.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 22) {
    if (day22.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day22.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 23) {
    if (day23.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day23.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 24) {
    if (day24.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day24.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 25) {
    if (day25.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day25.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 26) {
    if (day26.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day26.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 27) {
    if (day27.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day27.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 28) {
    if (day28.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day28.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 29) {
    if (day29.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day29.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 30) {
    if (day30.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day30.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else if (subDay == 31) {
    if (day31.textContent == "") {
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      day31.textContent = "";
      window.confirm(
        "All reminders have been removed on " + subMonth + "/" + subDay
      );
    }
  } else {
    window.prompt("There has been an error. Please retry");
  }

  //hide delete prompt after it's been used
  document.getElementById("userInputDelete").className = "hide";
});
