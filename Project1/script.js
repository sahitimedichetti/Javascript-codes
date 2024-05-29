
var noon=12;
var partytime;


var showCurrentTime= function(){
    var time= document.getElementById('time');
    var currentTime= new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();

    var meridian="AM";

    //Set hours
    if(hours>=noon)
    {
        meridian="PM";
    }
    if(hours > noon)
    {
        hours=hours-12;
    }
    // Set Minutes
    if(minutes<10)
    {
        minutes="0" + minutes;
    }
    // Set seconds
    if(seconds < 10)
    {
        seconds="0"+ seconds;
    }
    var clockTime= hours + ':' + minutes + ':' + seconds + ' ' + meridian + "!";
    time.innerText=clockTime;

};
/* var updateClock= function(){
    var time= new Date().getHours();
    console.log(time);
    var image="C:/Users/User/Downloads/Project photos/gettogether.jpeg"
    var messageText;
    //const timeSelector= document.getElementById("timeSelector");
    var timeEvent=document.getElementById("timeSpan");
    var displayedImage= document.getElementById("displayedImage");
    
    
    if( time==partytime)
    {
        image="C:/Users/User/Downloads/Project photos/Partyimage.jpeg";
        messageText="Let's party";
        
    }
    else if((time > 9)&& (time <= 12))
    {
        image="C:/Users/User/Downloads/Project photos/workimage.jpeg";
        messageText="Time for work!";

    }
    else if((time > 12)&&(time <= 14))
    {
        image="C:/Users/User/Downloads/Project photos/dinnerimage.jpeg";
        messageText="Stop Working! Eat lunch";
    }
    else if((time > 14)&&(time <= 17))
    {
        image="C:/Users/User/Downloads/Project photos/workimage.jpeg";
        messageText="Time to start again";
    }
    else if((time > 17)&&(time <=20))
    {
        image="C:/Users/User/Downloads/Project photos/chillimage.jpeg";
        messageText = "Time to chill and relax";
      }
      else if ((time > 20)&&(time <=22))
      {
        image = "C:/Users/User/Downloads/Project photos/dinnerimage";
        messageText = "Dinner Time!!!";
    }
    else if((time > 22)&&(time <= 8))
    {
        image= "https://s28489.pcdn.co/wp-content/uploads/2021/06/puppypileDSC_0253.jpg.optimal.jpg";
        messageText="Feeling Sleepy!!";
    }
    else
    {
        image="C:/Users/User/Downloads/Project photos/gettogether.jpeg";
        messageText="Memories$!";
    } 
    //console.log(messageText);
    timeEvent.innerText=messageText;
    //displayedImage.src= image;

    showCurrentTime();
};
updateClock();
*/


showCurrentTime();


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTime");
var displayedImage= document.getElementById("displayedImage"); 
function changeImageDimensions(width, height) {
    displayedImage.width = width;
    displayedImage.height = height;
}

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTime.innerText = "Party Over!";
        partyTime.style.backgroundColor = "#0A8DAB";
        displayedImage.src="C:/Users/User/Downloads/Project photos/Partyimage.jpeg";
        changeImageDimensions(450, 300);
    }
    else
    {
        partytime = -1;
        partyTime.innerText = "It's Party Time!";
        partyTime.style.backgroundColor = "#222";
        
        displayedImage.src="C:/Users/User/Downloads/Project photos/gettogether.jpeg";
        changeImageDimensions(350,500);
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


const timeSelector= document.getElementById("timeSelector");

    //Add and eventListener to dropdown to detect chnages
    timeSelector.addEventListener('change', function()
    {
        const timeRange=timeSelector.value;
        const timeToImageMap={
            "0" :"C:/Users/User/Downloads/Project photos/gettogether.jpeg",
            "1" : "C:/Users/User/Downloads/Project photos/workimage.jpeg",
            "2" : "C:/Users/User/Downloads/Project photos/dinnerimage1.jpeg",
            "3" : "C:/Users/User/Downloads/Project photos/workimage.jpeg",
            "4" : "C:/Users/User/Downloads/Project photos/chillimage.jpeg",
            "5" : "C:/Users/User/Downloads/Project photos/dinnerimage1.jpeg",
            "6" : "https://s28489.pcdn.co/wp-content/uploads/2021/06/puppypileDSC_0253.jpg.optimal.jpg"
        };
        const timeToDimensionsMap = {
            "1": { width: 450, height: 350 }, // Example dimensions
            "2": { width: 450, height: 380 },
            "3": { width: 450, height: 350 },
            "4": { width: 850, height: 480 },
            "5": { width: 450, height: 380 },
            "6": { width: 450, height: 350 }
            
        };
        const imagePath= timeToImageMap[timeRange];
        const dimensions=timeToDimensionsMap[timeRange]; //{width:500, height: 300};
        displayedImage.src= imagePath;
        changeImageDimensions(dimensions.width, dimensions.height);
    });
    




// Activates Wake-Up selector
/*var timeSelector =  document.getElementById("timeSelector");

var wakeUpEvent = function()
{
    wakeuptime = timeSelector.value;
};

timeSelector.addEventListener("change", wakeUpEvent);*/




