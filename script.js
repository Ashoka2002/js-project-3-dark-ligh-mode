const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// SWITCH THEME DYNAMIACLLY

//Dark Mode
function DarkMode(mode = true) {
  const darkOrLight = mode ? "dark" : "light";
  nav.style.backgroundColor = mode ? "rgb(0 0 0/50%)" : "rgb(255 255 255/50%)";
  textBox.style.backgroundColor = mode ? "rgb(255 255 255/50%)" : "rgb(0 0 0/50%)";
  toggleIcon.children[0].textContent = (mode ? "Dark" : "Light") + "Mode";
  toggleIcon.children[1].classList.remove(`${mode ? "fa-sun" : "fa-moon"}`);
  toggleIcon.children[1].classList.add(`${mode ? "fa-moon" : "fa-sun"}`);
  img1.src = `img/undraw_proud_coder_${darkOrLight}.svg`;
  img2.src = `img/undraw_feeling_proud_${darkOrLight}.svg`;
  img3.src = `img/undraw_conceptual_idea_${darkOrLight}.svg`;
  document.title = `Ashok | ${mode ? "Dark" : "Light"} Mode`;
}

function switchTheme(e) {
  // console.log(document.documentElement);
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    DarkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "Light");
    DarkMode(false);
  }
}

// DARK MODE SWITCH
toggleSwitch.addEventListener("change", switchTheme);

// CHECK LOCALSTORAGE FOR THEME
if (localStorage.getItem("theme") === "dark") {
  toggleSwitch.checked = true;
  document.documentElement.setAttribute("data-theme", "dark");
  DarkMode(true);
}
