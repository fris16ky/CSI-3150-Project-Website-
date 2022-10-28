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
var recentReminder01 = "",
  recentReminder02 = "",
  recentReminder03 = "",
  recentReminder04 = "",
  recentReminder05 = "",
  recentReminder06 = "",
  recentReminder07 = "",
  recentReminder08 = "",
  recentReminder09 = "",
  recentReminder10 = "",
  recentReminder11 = "",
  recentReminder12 = "",
  recentReminder13 = "",
  recentReminder14 = "",
  recentReminder15 = "",
  recentReminder16 = "",
  recentReminder17 = "",
  recentReminder18 = "",
  recentReminder19 = "",
  recentReminder20 = "",
  recentReminder21 = "",
  recentReminder22 = "",
  recentReminder23 = "",
  recentReminder24 = "",
  recentReminder25 = "",
  recentReminder26 = "",
  recentReminder27 = "",
  recentReminder28 = "",
  recentReminder29 = "",
  recentReminder30 = "",
  recentReminder31 = "";
var count01 = 0,
  count02 = 0,
  count03 = 0,
  count04 = 0,
  count05 = 0,
  count06 = 0,
  count07 = 0,
  count08 = 0,
  count09 = 0,
  count10 = 0,
  count11 = 0,
  count12 = 0,
  count13 = 0,
  count14 = 0,
  count15 = 0,
  count16 = 0,
  count17 = 0,
  count18 = 0,
  count19 = 0,
  count20 = 0,
  count21 = 0,
  count22 = 0,
  count23 = 0,
  count24 = 0,
  count25 = 0,
  count26 = 0,
  count27 = 0,
  count28 = 0,
  count29 = 0,
  count30 = 0,
  count31 = 0;

//Buttons
const create_btn = document.querySelector(".create_btn button");
const delone_btn = document.querySelector(".delone_btn button");
const delmult_btn = document.querySelector(".delmult_btn button");
const done_btn = document.querySelector(".done_btn button");
const submitOne_btn = document.querySelector(".submitOne_btn button");
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
    count01++;
    //keeping track of whether the user has inputted multiple reminders in one day
    // recentReminder01 = "";
    //don't need this, I'm stupid. It'll overwrite with the current reminder content
    recentReminder01 = reminderContent + ". ";
    console.log(recentReminder01);
    day1.textContent += reminderContent + ". ";
    //assuming that the user would not input punctuation into their reminders.
    //I initially wrote if loops to check, but that cluttered up the code even more, so this will have to do.
  } else if (subDay == 2) {
    count02++;
    recentReminder02 = reminderContent + ". ";
    day2.textContent += reminderContent + ". ";
  } else if (subDay == 3) {
    count03++;
    recentReminder03 = reminderContent + ". ";
    day3.textContent += reminderContent + ". ";
  } else if (subDay == 4) {
    count04++;
    recentReminder04 = reminderContent + ". ";
    day4.textContent += reminderContent + ". ";
  } else if (subDay == 5) {
    count05++;
    recentReminder05 = reminderContent + ". ";
    day5.textContent += reminderContent + ". ";
  } else if (subDay == 6) {
    count06++;
    recentReminder06 = reminderContent + ". ";
    day6.textContent += reminderContent + ". ";
  } else if (subDay == 7) {
    count07++;
    recentReminder07 = reminderContent + ". ";
    day7.textContent += reminderContent + ". ";
  } else if (subDay == 8) {
    count08++;
    recentReminder08 = reminderContent + ". ";
    day8.textContent += reminderContent + ". ";
  } else if (subDay == 9) {
    count09++;
    recentReminder09 = reminderContent + ". ";
    day9.textContent += reminderContent + ". ";
  } else if (subDay == 10) {
    count10++;
    recentReminder10 = reminderContent + ". ";
    day10.textContent += reminderContent + ". ";
  } else if (subDay == 11) {
    count11++;
    recentReminder11 = reminderContent + ". ";
    day11.textContent += reminderContent + ". ";
  } else if (subDay == 12) {
    count12++;
    recentReminder12 = reminderContent + ". ";
    day12.textContent += reminderContent + ". ";
  } else if (subDay == 13) {
    count13++;
    recentReminder13 = reminderContent + ". ";
    day13.textContent += reminderContent + ". ";
  } else if (subDay == 14) {
    count14++;
    recentReminder14 = reminderContent + ". ";
    day14.textContent += reminderContent + ". ";
  } else if (subDay == 15) {
    count15++;
    recentReminder15 = reminderContent + ". ";
    day15.textContent += reminderContent + ". ";
  } else if (subDay == 16) {
    count16++;
    recentReminder16 = reminderContent + ". ";
    day16.textContent += reminderContent + ". ";
  } else if (subDay == 17) {
    count17++;
    recentReminder17 = reminderContent + ". ";
    day17.textContent += reminderContent + ". ";
  } else if (subDay == 18) {
    count18++;
    recentReminder18 = reminderContent + ". ";
    day18.textContent += reminderContent + ". ";
  } else if (subDay == 19) {
    count19++;
    recentReminder19 = reminderContent + ". ";
    day19.textContent += reminderContent + ". ";
  } else if (subDay == 20) {
    count20++;
    recentReminder20 = reminderContent + ". ";
    day20.textContent += reminderContent + ". ";
  } else if (subDay == 21) {
    count21++;
    recentReminder21 = reminderContent + ". ";
    day21.textContent += reminderContent + ". ";
  } else if (subDay == 22) {
    count22++;
    recentReminder22 = reminderContent + ". ";
    day22.textContent += reminderContent + ". ";
  } else if (subDay == 23) {
    count23++;
    recentReminder23 = reminderContent + ". ";
    day23.textContent += reminderContent + ". ";
  } else if (subDay == 24) {
    count24++;
    recentReminder24 = reminderContent + ". ";
    day24.textContent += reminderContent + ". ";
  } else if (subDay == 25) {
    count25++;
    recentReminder25 = reminderContent + ". ";
    day25.textContent += reminderContent + ". ";
    day25.style.color = "red";
  } else if (subDay == 26) {
    count26++;
    recentReminder26 = reminderContent + ". ";
    day26.textContent += reminderContent + ". ";
  } else if (subDay == 27) {
    count27++;
    recentReminder27 = reminderContent + ". ";
    day27.textContent += reminderContent + ". ";
  } else if (subDay == 28) {
    count28++;
    recentReminder28 = reminderContent + ". ";
    day28.textContent += reminderContent + ". ";
  } else if (subDay == 29) {
    count29++;
    recentReminder29 = reminderContent + ". ";
    day29.textContent += reminderContent + ". ";
  } else if (subDay == 30) {
    count30++;
    recentReminder30 = reminderContent + ". ";
    day30.textContent += reminderContent + ". ";
  } else if (subDay == 31) {
    count31++;
    recentReminder31 = reminderContent + ". ";
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
  document.getElementById("userInputDeleteOne").className = "show";
  if (
    document.getElementById("userInputRem").className == "show" ||
    document.getElementById("userInputDeleteAll").className == "show"
  ) {
    //If the user is trying to perform multiple actions at once, only let them do one.
    window.confirm(
      "Please select either Create a Reminder OR Delete a Reminder!"
    );
    document.getElementById("userInputRem").className = "hide";
    document.getElementById("userInputDeleteAll").className = "hide";
    document.getElementById("userInputDeleteOne").className == "hide";
  }
});

submitOne_btn.addEventListener("click", (e) => {
  //so the idea I had for this: declare a global variable (var) set to the most recent textContent

  //this is code for when the user picks out which day they want to remove the most recent reminder
  //input from month box:
  var delRecent = document.getElementById("deleteOneDate").value;
  let subMonth = delRecent.substring(5, 7);
  //I don't think I need subMonth ngl
  let subDay = delRecent.substring(8, 10); //1 to 31. Don't think I need to worry about it getting past the allowed
  //day (i.e. 31 for November)

  console.log(delRecent);
  //problem rn: the reminderContent is working, same with the date and its substrings
  //what it's not doing is displaying content to the calendar.
  //day1.textContent += reminderContent + " "; //this works easily, but we want new line!
  if (subDay == 1) {
    //assuming that our grabRecentReminder code works, we just need to run .replace
    //so, if any of the counts === 0 (we dont want it to run if count == "0"), then there's no reminder, so we
    //tell the user such.
    if (count01 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder01 + " Will be removed");
      day1.textContent = day1.textContent.replace(recentReminder01, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 2) {
    if (count02 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder02 + " Will be removed");
      day2.textContent = day2.textContent.replace(recentReminder02, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 3) {
    if (count03 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder03 + " Will be removed");
      day3.textContent = day3.textContent.replace(recentReminder03, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 4) {
    if (count04 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder04 + " Will be removed");
      day4.textContent = day4.textContent.replace(recentReminder04, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 5) {
    if (count05 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder05 + " Will be removed");
      day5.textContent = day5.textContent.replace(recentReminder05, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 6) {
    if (count06 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder06 + " Will be removed");
      day6.textContent = day6.textContent.replace(recentReminder06, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 7) {
    if (count07 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder07 + " Will be removed");
      day7.textContent = day7.textContent.replace(recentReminder07, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 8) {
    if (count08 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder08 + " Will be removed");
      day8.textContent = day8.textContent.replace(recentReminder08, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 9) {
    if (count09 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder09 + " Will be removed");
      day9.textContent = day9.textContent.replace(recentReminder09, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 10) {
    if (count10 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder10 + " Will be removed");
      day10.textContent = day10.textContent.replace(recentReminder10, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 11) {
    if (count11 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder11 + " Will be removed");
      day11.textContent = day11.textContent.replace(recentReminder11, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 12) {
    if (count12 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder12 + " Will be removed");
      day12.textContent = day12.textContent.replace(recentReminder12, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 13) {
    if (count13 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder13 + " Will be removed");
      day13.textContent = day13.textContent.replace(recentReminder13, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 14) {
    if (count14 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder14 + " Will be removed");
      day14.textContent = day14.textContent.replace(recentReminder14, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 15) {
    if (count15 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder15);
      day15.textContent = day15.textContent.replace(recentReminder15, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 16) {
    if (count16 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder16 + " Will be removed");
      day16.textContent = day16.textContent.replace(recentReminder16, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 17) {
    if (count17 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder17 + " Will be removed");
      day17.textContent = day17.textContent.replace(recentReminder17, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 18) {
    if (count18 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder18 + " Will be removed");
      day18.textContent = day18.textContent.replace(recentReminder18, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 19) {
    if (count19 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder19 + " Will be removed");
      day19.textContent = day19.textContent.replace(recentReminder19, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 20) {
    if (count20 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder20 + " Will be removed");
      day20.textContent = day20.textContent.replace(recentReminder20, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 21) {
    if (count21 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder21 + " Will be removed");
      day21.textContent = day21.textContent.replace(recentReminder21, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 22) {
    if (count22 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder22 + " Will be removed");
      day22.textContent = day22.textContent.replace(recentReminder22, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 23) {
    if (count23 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder23 + " Will be removed");
      day23.textContent = day23.textContent.replace(recentReminder23, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 24) {
    if (count24 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder24 + " Will be removed");
      day24.textContent = day24.textContent.replace(recentReminder24, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 25) {
    if (count25 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder25 + " Will be removed");
      day25.textContent = day25.textContent.replace(recentReminder25, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 26) {
    if (count26 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder26 + " Will be removed");
      day26.textContent = day26.textContent.replace(recentReminder26, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 27) {
    if (count27 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder27 + " Will be removed");
      day27.textContent = day27.textContent.replace(recentReminder27, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 28) {
    if (count28 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder28 + " Will be removed");
      day28.textContent = day28.textContent.replace(recentReminder28, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 29) {
    if (count29 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder29 + " Will be removed");
      day29.textContent = day29.textContent.replace(recentReminder29, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 30) {
    if (count30 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder30 + " Will be removed");
      day30.textContent = day30.textContent.replace(recentReminder30, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 31) {
    if (count31 === 0) {
      //then we have no reminders
      window.confirm("This day does not have a reminder!");
    } else {
      //we have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder31 + " Will be removed");
      day31.textContent = day31.textContent.replace(recentReminder31, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else {
    window.prompt("There has been an error. Please retry");
  }

  //hide delete prompt after it's been used
  document.getElementById("userInputDeleteOne").className = "hide";
});

delmult_btn.addEventListener("click", (e) => {
  //add code for an input date; same as before.
  //They'll select the date for the nuke, then that day.textContent = "";
  //might need to do another 31 if loops to determine which day it'll be.
  document.getElementById("userInputDeleteAll").className = "show";
  if (
    document.getElementById("userInputRem").className == "show" ||
    document.getElementById("userInputDeleteOne").className == "show"
  ) {
    //If the user is trying to perform multiple actions at once, only let them do one.
    window.confirm(
      "Please select either Create a Reminder OR Delete a Reminder!"
    );
    document.getElementById("userInputRem").className = "hide";
    document.getElementById("userInputDeleteAll").className = "hide";
    document.getElementById("userInputDeleteOne").className == "hide";
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
  document.getElementById("userInputDeleteAll").className = "hide";
});
