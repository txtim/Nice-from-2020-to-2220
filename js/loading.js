timerRandom = Math.random() * (1300 - 350) + 350;

setTimeout(function() {
  let loadingScreen = document.getElementById("loading-page");
  loadingScreen.style.opacity = "0";
  setTimeout(function() {
    loadingScreen.remove();
  }, 1000);
}, timerRandom);
