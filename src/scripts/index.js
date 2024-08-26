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
      icon.src = "../../public/icons/sun.svg";
    } else {
      //if already has the darkMode in localStorage
      if (localStorage.getItem("darkMode") === "true") {
        //if darkMode is true
        element.classList.toggle("darkMode");
        icon.src = "../../public/icons/sun.svg";
      } else {//if darkmode is false
        icon.src = "../../public/icons/moon.svg";
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
      icon.src = "../../public/icons/moon.svg";
    } else {
      //if darkMode is false
      element.classList.toggle("darkMode");
      localStorage.setItem("darkMode", true);
      icon.src = "../../public/icons/sun.svg";
    }

    return;
  }

  element.classList.toggle("darkMode");
});


document.addEventListener("DOMContentLoaded", (event) => {
  const userLang = localStorage.getItem("language");

  // Função para carregar o ficheiro JSON
  fetch(`../../public/languages/${userLang}.json`)
      .then(response => response.json())
      .then(data => {
          // Substituir o texto na página com base no JSON carregado
          document.getElementById("introductionText").innerText = data.introductionText;
          document.getElementById("aboutTitle").innerText = data.aboutTitle;
          document.getElementById("letsConnectTitle").innerText = data.letsConnectTitle;
          document.getElementById("projectsTitle").innerText = data.projectsTitle;
          document.getElementById("articlesTitle").innerText = data.articlesTitle;
          document.getElementById("contactTitle").innerText = data.contactTitle;

          //Set texts on the page
          document.getElementById("moreProjectsText").innerText = data.moreProjectsText;
          //moreProjectsText
      })
      .catch(error => console.error('Erro ao carregar o ficheiro JSON:', error));
});