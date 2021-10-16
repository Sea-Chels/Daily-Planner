var calendar = document.getElementById('calendar');
var today = moment().format('dddd MMMM Do, YYYY');
var header = document.querySelector('.jumbotron');
var todayHeader = document.getElementById('currentDay');
var day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var weekDay = '';

var dayContainer= '';
var activityContainer = '';
var totalDays = 31;
var newActivity = '';
var activityTime = document.getElementById('activity-time');
var activityName = document.getElementById('activity');
var saveBtn = document.getElementById('save-btn');
var dayOfMonth = document.getElementById('activity-day') ;

var timeValue = '';
var activityValue = '';
var dayValue = '';
var storedActivityArray = [];
var calendarDayContainer = document.getElementsByClassName('activity-container');
var activityContainerArray = Array.from(calendarDayContainer);


for (var i=0 ; i < totalDays; i++){
  //makes sure the month has the correct number of days 
    if(moment().format('MMMM') === 'February'){
      totalDays = 28;
    }
    if(moment().format('MMMM') === 'April'){
      totalDays = 30;
    }
    if(moment().format('MMMM') === 'June'){
      totalDays = 30;
    }
    if(moment().format('MMMM') === 'September'){
      totalDays = 30;
    }
    if(moment().format('MMMM') === 'November'){
      totalDays = 30;
    }
  //creates the calendar days and adds an activity container. 
    dayContainer = document.createElement('div');
    activityContainer = document.createElement('div');
    activityContainer.classList.add('activity-container');
    dayContainer.classList.add('day');
    if (moment().format('D') == (i + 1)){
    dayContainer.innerHTML = `${day[i]} ${moment().format('ddd')}`;} else {
      dayContainer.innerHTML = `${day[i]}`;
    }
    dayContainer.appendChild(activityContainer);
    calendar.appendChild(dayContainer);
//adds the current day css on the present day
    if (moment().format('D') == (i + 1)){
      dayContainer.classList.add('currentDay');
      weekDay = document.createElement('p');
      weekDay.innerHTML = ``
      dayContainer.append(weekDay);

    } 
//adds past and future classes
    if(day[i] < moment().format('D')){
      activityContainer.classList.add('past')
    } else if(day[i] > moment().format('D')){
      activityContainer.classList.add('future');
    }
  };
  var storedActivities = JSON.parse(localStorage.getItem('Stored-Activities'));

  currentDay.innerHTML = 'Today is ' + today;

  var calendarDayContainer = document.getElementsByClassName('activity-container');
  var activityContainerArray = Array.from(calendarDayContainer);

  console.log(storedActivities);

  for (var i=0 ; i < totalDays; i++){
    if (storedActivities !== undefined && storedActivities[i] !==undefined){
        console.log(storedActivities[i].time)
        console.log(storedActivities[i])
         var localStoreAct = document.createElement('p')
        localStoreAct.innerHTML = `${moment().hours(storedActivities[i].time).format('h a')} - ${storedActivities[i].activity}`;
        activityContainerArray[parseInt(storedActivities[i].theDay)-1].appendChild(localStoreAct);
      }};
console.log(storedActivities[1].time)
  // console.log(storedActivities !== undefined)
// console.log(activityContainerArray);
// console.log(storedActivities[0].time);
//--Below is for getting the form input and put it into the divs---------

saveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    //grab the values of the form and console logs them
    timeValue = activityTime.value ;
    activityValue = activityName.value;
    dayValue = dayOfMonth.value;
    //below adds the activities to the container. 
    newActivity = document.createElement('p');
    newActivity.innerHTML = `${moment().hours(timeValue).format('h a')} - ${activityValue}`;
    activityContainerArray[parseInt(dayValue)-1].appendChild(newActivity);
    //---------------------sets the classes on current day to show past present and future-------THIS WORKS NOW
    if (`${dayValue}` === moment().format('D')){
      
      var momentNow = moment();
      var userMoment = moment().hours(timeValue);
      // is before
      if(userMoment.isBefore(momentNow)){
        console.log('in past');
        newActivity.classList.add('past')
      } 
      // is after
      else if (momentNow.isBefore(userMoment)) {
        console.log('in future');
        newActivity.classList.add('future');
      } 
      // current hour
      else {
        console.log('current hour');
        newActivity.classList.add('present');
      }
      
     };
  //--------setting local storage ----------------------
    storedActivityArray.push({
      'time': timeValue, 
      'theDay': dayValue,
      'activity': activityValue
      });
    localStorage.setItem(`Stored-Activities`, JSON.stringify(storedActivityArray));

    //gets rid of the modal so the user knows their information was stored----
    modal.style.display = "none";
});

//-------copied from w3schools-------------------------
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//-------------------------------------------------------------------
// Trying and unsucessfully Retrieving local storage on page load-------------------
// var storedActivities = JSON.parse(localStorage.getItem('Stored-Activities'));

// console.log(storedActivities);
// function init(){
//   for (var i=1 ; i < storedActivities.length; i++){
//     console.log(storedActivities[i].theDay);
//     console.log(storedActivities[i].activity, moment().hours(storedActivities[i].time).format('h a'));

//  
// 

// init();