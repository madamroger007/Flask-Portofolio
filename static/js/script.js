

//** Dark Theme */
// Tooltips
$(document).ready(function () {
  // Get the preferred theme from local storage
  const prefTheme = localStorage.getItem("pref-theme");
  
  // Apply the preferred theme
  if (prefTheme === "dark") {
    $("body").addClass("dark");
  } else if (prefTheme === "light") {
    $("body").removeClass("dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("body").addClass("dark");
  }

  // Initialize tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();
});

// Theme Toggle
$("#theme-toggle").click(function () {
  // Get the current theme state
  const isDarkThemeEnabled = $("body").hasClass("dark");

  // Toggle the theme state
  $("body").toggleClass("dark");

  // Update the local storage preference
  localStorage.setItem("pref-theme", isDarkThemeEnabled ? "light" : "dark");
  
});

//** Loading Icon */
const loadingIcons = $("#loading-icons");

function loading() {
  setTimeout(showPage, 1000);
 
}

function showPage() {
  loadingIcons.show();
}

