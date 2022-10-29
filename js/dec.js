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
//Creating global variables and initializing them to empty string; will later be used to
//keep track of the most recent reminder for each day
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
//Global count variables to keep track of how many reminders the user has set each day
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

//Code for what happens when the user clicks the "Create Reminder" button
create_btn.addEventListener("click", (e) => {
  //showing the input box
  //Only display the create reminder input box if it's the only input being shown
  if (
    document.getElementById("userInputDeleteOne").className == "hide" &&
    document.getElementById("userInputDeleteAll").className == "hide"
  ) {
    document.getElementById("userInputRem").className = "show";
  } else {
    //If the user tries to click on multiple buttons at the same time,
    //Inform them, then hide all inputs
    window.confirm("Please select only one operation at a time!");
    document.getElementById("userInputDeleteOne").className = "hide";
    document.getElementById("userInputDeleteAll").className == "hide";
    document.getElementById("userInputRem").className = "hide";
  }
  //For some reason, despite these checks, Delete All still shows if you click it first, then another button
  //But this manual check gets rid of the problem, although I'm not sure why the other code doesn't.
  if (document.getElementById("userInputDeleteAll").className === "show") {
    document.getElementById("userInputDeleteAll").className = "hide";
  }
});

//Done button code for creating a Reminder
done_btn.addEventListener("click", (e) => {
  //Here, we will take the input of month and reminder content from the user.
  //When done is clicked, we will also hide the user Input block
  //(so the user can't input more reminders unless they click Create Reminder again)

  //input from month box:
  var reminderDate = document.getElementById("inputDate").value;
  let subMonth = reminderDate.substring(5, 7); //should always get 12 for December
  let subDay = reminderDate.substring(8, 10); //1 to 31. Don't think I need to worry about it getting past the allowed day

  //Reminder input from the input box:
  var reminderContent = document.getElementById("inputRem").value;
  //keeping track to make sure that the reminderDate and reminderContent receieved the correct values
  console.log(reminderDate);
  console.log(reminderContent);

  //Making sure the user cannot put in reminders totaling 75 characters in length - otherwise the
  //calendar will stretch vertically and be disproportionate
  if (
    day1.textContent.length >= 75 ||
    day2.textContent.length >= 75 ||
    day3.textContent.length >= 75 ||
    day4.textContent.length >= 75 ||
    day5.textContent.length >= 75 ||
    day6.textContent.length >= 75 ||
    day7.textContent.length >= 75 ||
    day8.textContent.length >= 75 ||
    day9.textContent.length >= 75 ||
    day10.textContent.length >= 75 ||
    day11.textContent.length >= 75 ||
    day12.textContent.length >= 75 ||
    day13.textContent.length >= 75 ||
    day14.textContent.length >= 75 ||
    day15.textContent.length >= 75 ||
    day16.textContent.length >= 75 ||
    day17.textContent.length >= 75 ||
    day18.textContent.length >= 75 ||
    day19.textContent.length >= 75 ||
    day20.textContent.length >= 75 ||
    day21.textContent.length >= 75 ||
    day22.textContent.length >= 75 ||
    day23.textContent.length >= 75 ||
    day24.textContent.length >= 75 ||
    day25.textContent.length >= 75 ||
    day26.textContent.length >= 75 ||
    day27.textContent.length >= 75 ||
    day28.textContent.length >= 75 ||
    day29.textContent.length >= 75 ||
    day30.textContent.length >= 75 ||
    day31.textContent.length >= 75
  ) {
    window.confirm(
      "You have entered too many reminders for this day. Please choose a different day!"
    );
    //The user, for now, is still able to horizontally stretch it, with consecutive characters. However, this case is very rare
  } else if (subDay == 1) {
    count01++;
    //keeping track of whether the user has inputted multiple reminders in one day
    if (reminderContent == "") {
      //the user is trying to enter in nothing; should not be allowed.
      window.confirm("Please include a reminder!");
    } else {
      //The users reminder has content
      //Assuming that the user would not input punctuation to their agenda/reminders, we provide them with one.
      //This also helps differentiate successive reminders, since I could not figure out the dynamically
      //adding new spans for each reminder
      //Chose adding a period regardless instead of more if loops checking for punctuation

      recentReminder01 = reminderContent + ". ";
      //keeping track of the users recently set reminder. Automatically overwrites with new reminders.
      console.log(recentReminder01);
      //logging the users complete reminder
      day1.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 2) {
    count02++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder02 = reminderContent + ". ";
      day2.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 3) {
    count03++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder03 = reminderContent + ". ";
      day3.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 4) {
    count04++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder04 = reminderContent + ". ";
      day4.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 5) {
    count05++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder05 = reminderContent + ". ";
      day5.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 6) {
    count06++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder06 = reminderContent + ". ";
      day6.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 7) {
    count07++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder07 = reminderContent + ". ";
      day7.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 8) {
    count08++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder08 = reminderContent + ". ";
      day8.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 9) {
    count09++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder09 = reminderContent + ". ";
      day9.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 10) {
    count10++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder10 = reminderContent + ". ";
      day10.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 11) {
    count11++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder11 = reminderContent + ". ";
      day11.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 12) {
    count12++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder12 = reminderContent + ". ";
      day12.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 13) {
    count13++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder13 = reminderContent + ". ";
      day13.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 14) {
    count14++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder14 = reminderContent + ". ";
      day14.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 15) {
    count15++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder15 = reminderContent + ". ";
      day15.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 16) {
    count16++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder16 = reminderContent + ". ";
      day16.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 17) {
    count17++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder17 = reminderContent + ". ";
      day17.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 18) {
    count18++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder18 = reminderContent + ". ";
      day18.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 19) {
    count19++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder19 = reminderContent + ". ";
      day19.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 20) {
    count20++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder20 = reminderContent + ". ";
      day20.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 21) {
    count21++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder21 = reminderContent + ". ";
      day21.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 22) {
    count22++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder22 = reminderContent + ". ";
      day22.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 23) {
    count23++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder23 = reminderContent + ". ";
      day23.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 24) {
    count24++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder24 = reminderContent + ". ";
      day24.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 25) {
    count25++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder25 = reminderContent + ". ";
      day25.textContent += reminderContent + ". ";
      day25.style.color = "red";
      window.confirm("Your reminder has been created, Merry Christmas!");
    }
  } else if (subDay == 26) {
    count26++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder26 = reminderContent + ". ";
      day26.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 27) {
    count27++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder27 = reminderContent + ". ";
      day27.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 28) {
    count28++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder28 = reminderContent + ". ";
      day28.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 29) {
    count29++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder29 = reminderContent + ". ";
      day29.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 30) {
    count30++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder30 = reminderContent + ". ";
      day30.textContent += reminderContent + ". ";
      window.confirm("Your reminder has been created!");
    }
  } else if (subDay == 31) {
    count31++;
    if (reminderContent == "") {
      window.confirm("Please include a reminder!");
    } else {
      recentReminder31 = reminderContent + ". ";
      day31.textContent += reminderContent + ". ";
      document.getElementById("nye").className = "goldboi";
      day31.style.color = "gold";
      window.confirm("Your reminder has been created, happy New Years Eve!");
    }
  } else {
    window.confirm("There has been an error. Please retry");
  }

  //Hiding the input block after the reminder has been set (or failed to be set due to empty or another error)
  document.getElementById("userInputRem").className = "hide";
});

delone_btn.addEventListener("click", (e) => {
  //Deleting the user's recently added reminder
  if (
    document.getElementById("userInputRem").className == "hide" &&
    document.getElementById("userInputDeleteAll").className == "hide"
  ) {
    document.getElementById("userInputDeleteOne").className = "show";
  } else {
    //If the user tries to click on multiple buttons at the same time,
    //Inform them, then hide all inputs
    document.getElementById("userInputDeleteOne").className = "hide";
    document.getElementById("userInputDeleteAll").className == "hide";
    document.getElementById("userInputRem").className = "hide";
    window.confirm("Please select only one operation at a time!");
  }
  //Manual check for Delete All since it seems to ignore my code
  if (document.getElementById("userInputDeleteAll").className === "show") {
    document.getElementById("userInputDeleteAll").className = "hide";
  }
});

submitOne_btn.addEventListener("click", (e) => {
  //The user has picked and submitted which day they want to remove a reminder (cannot be null)
  //input from month box:
  var delRecent = document.getElementById("deleteOneDate").value;
  let subDay = delRecent.substring(8, 10);
  console.log(delRecent);
  //Checking which day the user inputted
  if (subDay == 1) {
    if (count01 === 0) {
      //If the user has not set a reminder for this day (count is 0)
      window.confirm("This day does not have a reminder!");
    } else {
      //We have reminders, replace the most recent with empty quotes ""
      console.log(recentReminder01 + " Will be removed");
      //Logging every removed reminder
      day1.textContent = day1.textContent.replace(recentReminder01, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 2) {
    if (count02 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder02 + " Will be removed");
      day2.textContent = day2.textContent.replace(recentReminder02, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 3) {
    if (count03 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder03 + " Will be removed");
      day3.textContent = day3.textContent.replace(recentReminder03, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 4) {
    if (count04 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder04 + " Will be removed");
      day4.textContent = day4.textContent.replace(recentReminder04, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 5) {
    if (count05 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder05 + " Will be removed");
      day5.textContent = day5.textContent.replace(recentReminder05, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 6) {
    if (count06 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder06 + " Will be removed");
      day6.textContent = day6.textContent.replace(recentReminder06, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 7) {
    if (count07 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder07 + " Will be removed");
      day7.textContent = day7.textContent.replace(recentReminder07, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 8) {
    if (count08 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder08 + " Will be removed");
      day8.textContent = day8.textContent.replace(recentReminder08, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 9) {
    if (count09 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
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
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder11 + " Will be removed");
      day11.textContent = day11.textContent.replace(recentReminder11, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 12) {
    if (count12 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder12 + " Will be removed");
      day12.textContent = day12.textContent.replace(recentReminder12, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 13) {
    if (count13 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder13 + " Will be removed");
      day13.textContent = day13.textContent.replace(recentReminder13, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 14) {
    if (count14 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder14 + " Will be removed");
      day14.textContent = day14.textContent.replace(recentReminder14, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 15) {
    if (count15 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder15);
      day15.textContent = day15.textContent.replace(recentReminder15, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 16) {
    if (count16 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder16 + " Will be removed");
      day16.textContent = day16.textContent.replace(recentReminder16, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 17) {
    if (count17 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder17 + " Will be removed");
      day17.textContent = day17.textContent.replace(recentReminder17, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 18) {
    if (count18 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder18 + " Will be removed");
      day18.textContent = day18.textContent.replace(recentReminder18, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 19) {
    if (count19 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
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
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder21 + " Will be removed");
      day21.textContent = day21.textContent.replace(recentReminder21, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 22) {
    if (count22 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder22 + " Will be removed");
      day22.textContent = day22.textContent.replace(recentReminder22, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 23) {
    if (count23 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder23 + " Will be removed");
      day23.textContent = day23.textContent.replace(recentReminder23, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 24) {
    if (count24 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder24 + " Will be removed");
      day24.textContent = day24.textContent.replace(recentReminder24, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 25) {
    if (count25 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder25 + " Will be removed");
      day25.textContent = day25.textContent.replace(recentReminder25, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 26) {
    if (count26 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder26 + " Will be removed");
      day26.textContent = day26.textContent.replace(recentReminder26, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 27) {
    if (count27 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder27 + " Will be removed");
      day27.textContent = day27.textContent.replace(recentReminder27, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 28) {
    if (count28 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder28 + " Will be removed");
      day28.textContent = day28.textContent.replace(recentReminder28, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else if (subDay == 29) {
    if (count29 === 0) {
      window.confirm("This day does not have a reminder!");
    } else {
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
      window.confirm("This day does not have a reminder!");
    } else {
      console.log(recentReminder31 + " Will be removed");
      day31.textContent = day31.textContent.replace(recentReminder31, "");
      window.confirm("The most recent reminder has been deleted!");
    }
  } else {
    window.prompt("There has been an error. Please retry");
  }

  //Hide delete prompt after it's been used
  document.getElementById("userInputDeleteOne").className = "hide";
});

delmult_btn.addEventListener("click", (e) => {
  //Deleting all reminders from one day
  //Making sure this is the only input button that has been pressed
  if (
    document.getElementById("userInputDeleteOne").className == "hide" &&
    document.getElementById("userInputRem").className == "hide"
  ) {
    document.getElementById("userInputDeleteAll").className = "show";
  } else {
    //If the user tries to click on multiple buttons at the same time,
    //Inform them, then hide all inputs
    window.confirm("Please select only one operation at a time!");
    document.getElementById("userInputDeleteOne").className = "hide";
    document.getElementById("userInputDeleteAll").className == "hide";
    document.getElementById("userInputRem").className = "hide";
  }
});

submit_btn.addEventListener("click", (e) => {
  //input from month box:
  var delAll = document.getElementById("deleteDate").value;
  let subMonth = delAll.substring(5, 7);
  let subDay = delAll.substring(8, 10);
  console.log(delAll);

  if (subDay == 1) {
    if (day1.textContent == "") {
      //If the date currently does not have any reminders to remove, do not proceed
      window.confirm("This day does not have a reminder!");
      stop;
    } else {
      //The date DOES have reminders to remove; remove them.
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

  //Hide delete prompt after it's been used
  document.getElementById("userInputDeleteAll").className = "hide";
});
