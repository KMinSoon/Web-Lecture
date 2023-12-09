// ClipBoard

document.querySelector("btnPaste");
btnPaste.addEventListener("click", () => {
    navigator.clipboard.readText()
    .then(value => console.log(value))
})

document.querySelector("btnCopy");
btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText("안녕하세요.")
})

var btnFullScreen = document.querySelector("#btnFullScreen");
btnFullScreen.addEventListener("click", () => {
   toggleFullScreen();
})

function toggleFullScreen() {
     if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
        } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }   

  var btnLocation = document.querySelector("#btnLocation");
  btnLocation.addEventListener("click", () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
function saveData() {
    //localStorage.setItem("chapter7", "Web API");
    sessionStorage.setItem("chapter7", "Web API");
}

function loadData() {
   //var data = localStorage.getItem("chapter7");
   var data =sessionStorage.setItem("chapter7", "Web API");
    console.log(data);
}