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
  let subDay = reminderDate.substring(8, 10);
  //subMonth is now the month in number form (10 = oct, 11 = nov, 12 = dec)
  //input from the input box:
  var reminderContent = document.getElementById("inputRem").value;
  console.log(reminderDate);
  console.log(reminderContent);
  window.confirm("Your reminder has been created!");

  document.body.onload = addElement;
  //now we need to dynamically add spans based on what day they selected.
  function addElement() {
    const newSpan = document.createElement("span");
    //give it content
    const newContent = document.createTextNode(reminderContent);
    //add to newly created span
    newSpan.appendChild(newContent);
    //add newly created element & its content into the DOM
    const currentSpan = document.getElementById("01day");
    newSpan.after(currentSpan);
    console.log(newSpan.outerHTML);
  }

  document.getElementById("userInputRem").className = "hide";
});
