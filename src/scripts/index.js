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

/* addEventListener("load", (event) => {
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
      } else {
        //if darkmode is false
        icon.src = "../../public/icons/moon.svg";
      }
    }
  }
}); */

/* buttonChangeColor.addEventListener("click", () => {
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
}); */

document.addEventListener("DOMContentLoaded", () => {
  const userLang = localStorage.getItem("language");

  // Função para carregar o ficheiro JSON
  fetch(`../../public/languages/${userLang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Substituir o texto na página com base no JSON carregado
      document.getElementById("introductionText").innerText =
        data.introductionText;
      document.getElementById("aboutTitle").innerText = data.aboutTitle;
      document.getElementById("letsConnectTitle").innerText =
        data.letsConnectTitle;
      document.getElementById("projectsTitle").innerText = data.projectsTitle;
      document.getElementById("articlesTitle").innerText = data.articlesTitle;
      document.getElementById("contactTitle").innerText = data.contactTitle;

      //Set texts on the page
      document.getElementById("moreProjectsText").innerText =
        data.moreProjectsText;
      //moreProjectsText
    })
    .catch((error) =>
      console.error("Erro ao carregar o ficheiro JSON:", error)
    );
});

//Function to animate the dots in the MoreProjects link
document.addEventListener("DOMContentLoaded", function () {
  let dotCount = 0;
  let component = document.getElementById("linkAnimation");
  const maxDots = 2;

  function addDot() {
    dotCount++;
    component.textContent = component.textContent + ".";

    if (dotCount >= maxDots + 1) {
      dotCount = 0;
      component.innerHTML = ".";
    }
  }

  let intervalId = setInterval(addDot, 1000); // 2000ms = 2 seconds
});

const downloadButton = document.getElementById("downloadCV");

//Function to download the my cv
downloadButton.addEventListener("click", function () {
  const cvUrl = "../../public/files/cv.pdf"; // Replace with actual path

  // Create a link element
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "francisco-borges-cv.pdf";

  // Append the link to the body
  document.body.appendChild(link);

  // Click the link to trigger the download
  link.click();

  // Remove the link after triggering the download
  document.body.removeChild(link);
});

//Timeline
const timelineData = [
  {
    date: "2018-06",
    title: "Started Learning Basic Programming",
    description: "Started learning basic programming",
    type: "important",
  },
  {
    date: "2020-09",
    title: "Bachelor in IS",
    description: "Started Bachelor of Information Systems @ University of Uminho",
    type: "school"
  },
  {
    date: "2024-09",
    title: "pomoCore",
    description: "Made pomoCore project.",
    type: "project",
  },
  {
    date: "2024-09",
    title: "Masters in IS",
    description: "Started Masters of Information Systems @ University of Uminho",
    type: "school",
  },
];

function createTimeline() {
  const container = document.getElementById("eventsContainer");
  const eventsByYear = {};

  // Get unique years
  timelineData.forEach((event) => {
    const [year, month] = event.date.split("-");
    if (!eventsByYear[year]) {
      eventsByYear[year] = [];
    }
    eventsByYear[year].push({ ...event, month });
  });

  Object.entries(eventsByYear).forEach(([year, events], yearIndex) => {
    // Add year marker
    const yearMarker = document.createElement("div");
    yearMarker.className = "markerContainer";
    yearMarker.innerHTML = `
        <div class="yearMarker"></div>
        <div class="yearLabel">${year}</div>
    `;
    container.appendChild(yearMarker);

    // Add event markers
    events.forEach((event) => {
      const date = new Date(event.date);
      const monthName = date.toLocaleString("default", { month: "short" });

      const markerContainer = document.createElement("div");
      markerContainer.className = "markerContainer";

      const eventElement = document.createElement("div");
      eventElement.className = `${event.type}Event`;

      if (event.isStart) {
        eventElement.classList.add("startPoint");
      }

      if (event.type === "important") {
        const label = document.createElement("div");
        label.className = "importantLabel";
        label.textContent = event.title;
        markerContainer.appendChild(label);
      }

      const dateLabel = document.createElement("div");
      dateLabel.className = "dateLabel";
      dateLabel.textContent = monthName;

      const typeLabel = document.createElement("div");
      typeLabel.className = `${event.type}Label`;
      typeLabel.textContent = event.title;

      const content = document.createElement("div");
      content.className = "eventContent";
      content.innerHTML = `
            <div class="eventTitle">${event.title}</div>
            <div class="eventDescription">${event.description}</div>
        `;

      markerContainer.appendChild(eventElement);
      markerContainer.appendChild(dateLabel);

      if (event.type !== "important") {
        markerContainer.appendChild(typeLabel);
      }

      markerContainer.appendChild(content);
      container.appendChild(markerContainer);
    });
  });

  // Add event listeners
  document
    .querySelectorAll(".importantEvent, .projectEvent, .schoolEvent")
    .forEach((event) => {
      event.addEventListener("mouseenter", function () {
        const content = this.parentElement.querySelector(".eventContent");
        content.classList.add("active");
      });
      event.addEventListener("mouseleave", function () {
        const content = this.parentElement.querySelector(".eventContent");
        content.classList.remove("active");
      });
    });
}

function scroll(offset) {
  const container = document.querySelector(".timeLineWrapper");
  container.scrollLeft += offset;
}

//Create timeline
createTimeline();
