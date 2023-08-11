const buttonChangeColor = document.getElementById("buttonChangeColor");
let darkMode;

//function to check if localStorage is available
//code from https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
function isLocalStorageAvailable() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

addEventListener("load", (event) => {
  var element = document.body;
  let icon = document.getElementById("darkModeEnabler");

  if (isLocalStorageAvailable()) {
    //if localStorage is available
    if (localStorage.getItem("darkMode") === null) {
      //if doesnt have drakMode in localStorage
      localStorage.setItem("darkMode", false);
      icon.src = "./src/icons/moon.svg";
    } else {
      //if already has the darkMode in localStorage
      if (localStorage.getItem("darkMode") === "true") {
        //if darkMode is true
        element.classList.toggle("darkMode");
        icon.src = "./src/icons/sun.svg";
      } else {//if darkmode is false
        icon.src = "./src/icons/moon.svg";
      }
    }
  }
});

buttonChangeColor.addEventListener("click", () => {
  var element = document.body;
  let icon = document.getElementById("darkModeEnabler");

  if (isLocalStorageAvailable()) {
    //if localStorage is available
    if (localStorage.getItem("darkMode") === "true") {
      //if darkMode is true
      element.classList.toggle("darkMode");
      localStorage.setItem("darkMode", false);
      icon.src = "./src/icons/moon.svg";
    } else {
      //if darkMode is false
      element.classList.toggle("darkMode");
      localStorage.setItem("darkMode", true);
      icon.src = "./src/icons/sun.svg";
    }

    return;
  }

  element.classList.toggle("darkMode");
});
