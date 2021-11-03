//-------copied from w3schools-------------------------
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }

btn.onclick = ()=>{
    localStorage.clear();
    location.reload();
}

var chosenBlock = ''
var sectionContainer = document.getElementById("section-container");
var saveBtn = document.getElementById('save-btn');
var activityName = document.getElementById('activity');
var activityBlocks = document.getElementsByClassName("activity-block")
var blockActivityContainer = ''
var activity = ''
var activityValue = ''

sectionContainer.addEventListener("click", (e)=>{
e.preventDefault();
chosenBlock = e.target.getAttribute('value');
console.log(chosenBlock)
modal.style.display = "block";
})

var storedActivities = JSON.parse(localStorage.getItem('Stored-Activities'));
var storedActivityArray = [];

saveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    //grab the values of the form and console logs them
    activityValue = activityName.value;
    blockActivityContainer = document.getElementById(`${chosenBlock}`);
    activity = document.createElement('p')
    activity.innerHTML = `${activityValue}`
    blockActivityContainer.appendChild(activity);   

  //--------setting local storage ----------------------
    storedActivityArray.push({
      'time': chosenBlock, 
      'activity': activityValue
      });
    localStorage.setItem(`Stored-Activities`, JSON.stringify(storedActivityArray));

    modal.style.display = "none";
    chosenBlock = ''
});

var sections = document.getElementsByClassName('section')
var sectionsArray = Array.from(sections)

function onPageLoad () {
    for( var i =0; i<sectionsArray.length; i++){
        var time = sectionsArray[i].getAttribute('value');
        var momentNow = moment();
        var userMoment = moment().hours(time);
    
         //is past
         if(userMoment.isBefore(momentNow)){
            console.log('in past');
            sectionsArray[i].classList.add('past')
          } 
          // is future
          else if (momentNow.isBefore(userMoment)) {
            console.log('in future');
            sectionsArray[i].classList.add('future');
          } 
          // current hour
          else {
            console.log('current hour');
            sectionsArray[i].classList.add('present');
          }
    }
if (storedActivities){
    for (var i=0; i<storedActivities.length; i++){
        if(storedActivities[i].time !== undefined && storedActivities[i].time !== null){
            var localStoreAct = document.createElement('p')
            blockActivityContainer = document.getElementById(`${storedActivities[i].time}`);
            localStoreAct.innerHTML = `${storedActivities[i].activity}`
            blockActivityContainer.appendChild(localStoreAct);

        }else{
            console.log('You have no saved activities!')
        }
    }
}

}

// var clearBlockX = document.getElementsByClassName('span-tip');
// var clearBlockXArray = Array.from(clearBlockX);

// for(var i=0; i<clearBlockXArray.length; i++){
// clearBlockX[i].addEventListener("click", e => {
//     e.preventDefault();
//     clearBlock = e.target;
//     var blocks = document.getElementsByClassName('activity-blocks')
//     var blockArray = Array.from(blocks)
//     console.log(clearBlock)
//     // blockArray[clearBlock].innerHTML = '';
// })
// }




onPageLoad ();

//honestly I'm salty because I restarted this project just to get rid of an incomplete. I hate myself
