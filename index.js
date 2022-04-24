var numofdrum = document.querySelectorAll(".drum").length;

//click detector
for (var i = 0; i < numofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;

    makesound(button);

    annimation(button);
  });
}

//key press listener

document.addEventListener("keydown", function (event) {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      annimation(key);
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      annimation(key);
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      annimation(key);
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      annimation(key);
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      annimation(key);
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      annimation(key);
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      annimation(key);
      break;

    default:
      console.log(button);
      break;
  }
}


function annimation(key){
    var active = document.querySelector("." + key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
}