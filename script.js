// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add an event listener to the button
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save the mode to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load the saved mode on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

var tablinked = document.getElementsByClassName("tab-links");
var tabcontented = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablinked of tablinks){
    tablinked.classList.remove("active-link");
  }
  for(tabcontented of tabcontents){
    tabcontented.classList.remove("active-tab");
  }
  Event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
