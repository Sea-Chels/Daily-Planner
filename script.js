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


for (let i=0 ; i < totalDays; i++){
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
    dayContainer.innerHTML = `${day[i]}`;
    dayContainer.appendChild(activityContainer);
    calendar.appendChild(dayContainer);
//adds the current day css on the present day
    if (moment().format('D') == (i + 1)){
      dayContainer.classList.add('currentDay');
      weekDay = document.createElement('p');
      weekDay.innerHTML = ``
      dayContainer.append(weekDay);
      // dayContainer.innerHTML = `${i+1} ${moment().format('ddd')}`
    } 
//adds past and future classes
    if(day[i] < moment().format('D')){
      activityContainer.classList.add('past')
    } else if(day[i] > moment().format('D')){
      activityContainer.classList.add('future');
    }

}
currentDay.innerHTML = 'Today is ' + today;

var calendarDayContainer = document.getElementsByClassName('activity-container');
var activityContainerArray = Array.from(calendarDayContainer);

console.log(activityContainerArray[1]);
//--Below is for getting the form input and put it into the divs---------
var activityTime = document.getElementById('activity-time');
var activityName = document.getElementById('activity');
var saveBtn = document.getElementById('save-btn');
var dayOfMonth = document.getElementById('activity-day') ;

var timeValue = '';
var activityValue = '';
var dayValue = '';

saveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    //grab the values of the form and console logs them
    timeValue = activityTime.value ;
    activityValue = activityName.value;
    dayValue = dayOfMonth.value;
    console.log(`I have ${activityValue} at ${timeValue} on the ${dayValue} of this month.`);
    //below adds the activities to the container. 
    newActivity = document.createElement('p');
    newActivity.innerHTML = `${timeValue} - ${activityValue}`;
    activityContainerArray[parseInt(dayValue)-1].appendChild(newActivity);
    if (`${dayValue}` === moment().format('D')){
      timeValue.split(' ');
      // if (timeValue[1] === "pm" ){
      //   if (moment().format('h') < timeValue[0] || moment().format('a') === 'am'){
      //     newActivity.classList.add('past');
      //     console.log('pm is working')
      //   } else{
      //       newActivity.classList.add('future');
      //       console.log('pm else is working')
      //     }
      // };
      // if (timeValue[1] === "am"){
      //   if ((moment().format('h') > timeValue[0] || moment().format('a') === 'pm')){
      //     newActivity.classList.add('future');
      //     console.log('am if is working')
      //   }else{
      //       newActivity.classList.add('past');
      //       console.log('am else is working')
      //     }
      // };
      if (moment().format('h') < timeValue[0] && moment().format('a') < timeValue[1]){
        newActivity.classList.add('future');
      }else if( moment().format('h a') === timeValue) {
        newActivity.classList.add('present');
      } else {
        newActivity.classList.add('past');
      }
     };
// if ('am' < 'pm'){
//   console.log('am is less than pm')
// }else {
//   console.log('pm is less than am ')
// }
});

console.log(moment().format('D'))


//-------copied from w3 schools-------------------------
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
//--------------------------------------------------------------------------------------