// JavaScript for tab functionality
const tabs = document.querySelectorAll(".tab");
console.log(tabs);
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Remove 'active' class from all content
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add 'active' class to the clicked tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}