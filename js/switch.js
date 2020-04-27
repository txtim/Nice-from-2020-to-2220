let loadingScreen = document.getElementById("original-picture");
let switchButton = document.getElementById("switch-button");


switchButton.addEventListener('click', event => {
  clearInterval(myInterval);
  loadingScreen.style.transition = "0s all";
  switchImage(loadingScreen);
});




let myInterval = setInterval(function() {
  if (loadingScreen.style.opacity == "0") {
    loadingScreen.style.opacity = "1";
  } else {
    loadingScreen.style.opacity = "0";
  }
}, 7000);


function switchImage(myElement) {
  if (myElement instanceof HTMLElement) {
    if (myElement.style.opacity == "0") {
      myElement.style.opacity = "1";
    } else {
      myElement.style.opacity = "0";
    }
  }
}