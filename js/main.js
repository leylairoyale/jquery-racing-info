// JavaScript Promise
// A Promise is an objcect that represents the eventual
// completion or failure of an asynchronous operation.

let myFirstPromise = new Promise((resolve, reject) =>{
// We'll call resolve(...), when what we're doing asynchronistically is solved. 
// We will also call reject if that fails. 
    setTimeout(function(){
        resolve("Yes! we have no bananas!");
    }, 250)
    // reject("whoops nada is here.")
})

myFirstPromise.then((Successmessage) => {
    // put the success message here
    console.log('Yay we have nanannerrs' + Successmessage);
}).catch((FailMessage) => {
    console.log("WE don't have no grapes")
})

// the below function takes in a url and returns the promise function.
// in the promise below, when you load it and it loads successfullly
// in the console. 
function myAsyncFunc(url) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url);
        xhttp.onload = () => resolve(xhttp.responseText)
        xhttp.onerror = () => reject(xhttp.statusText);
        console.log("working on it...")
        xhttp.send()

    })
}
// below is like once the image is loaded it will log 

// This example works!
 console.log(myAsyncFunc('https://images.unsplash.com/photo-1530407260652-b9c3e693a9c3').then(() => { 
     console.log("we got that snaake")
 })
 )
// This example does not work.
console.log(myAsyncFunc('http://bitch.bitch').then( () => {
    console.log("we gotchus")
    })
    .catch(() => {
        console.log("it don't work anymore.")
    })
)

// Switch statement example:
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      console.log(day)
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default: 
        console.log("Time is a social construct.")
  }

//   DOM - Document Object Model
document.getElementById('hhboy').innerText = "i enjoy smelling flowers in javascript"

function changeColor() {
    $('body').css('background-color', "blue")
}

// this is the JS version of submitting a form
function onSubmit() {
    let name = $("#submit-form input[name=full-name").val()
    console.log(name)
}

$.get("https://ergast.com/api/f1/2019/5/driverStandings.json", function (data){
    console.log(data)
})