const input = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const dark_theme = "dark";
const light_theme = "light";

// Colour image
const imageColour = function (colour) {
  image1.src = `img/undraw_proud_coder_${colour}.svg`;
  image2.src = `img/undraw_feeling_proud_${colour}.svg`;
  image3.src = `img/undraw_conceptual_idea_${colour}.svg`;
};

const toggleDarkLightMode = function (isDarkMode) {
  nav.style.backgroundColor = isDarkMode
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDarkMode
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDarkMode ? "Dark Mode" : "Light Mode";
  isDarkMode
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDarkMode ? imageColour(dark_theme) : imageColour(light_theme);
};

// Switch function
const changeMode = function (event) {
  if (event.target.checked) {
    toggleDarkLightMode(true);
    document.documentElement.setAttribute("data-theme", dark_theme);
    localStorage.setItem("theme", dark_theme);
  } else {
    toggleDarkLightMode(false);
    document.documentElement.setAttribute("data-theme", light_theme);
    localStorage.setItem("theme", light_theme);
  }
};
// adding event listener to the input
input.addEventListener("change", changeMode);

// check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === dark_theme) {
    input.checked = true;
    toggleDarkLightMode();
  }
}
