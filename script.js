// Function to handle editing and updating content
function makeEditable(sectionId) {
    var section = document.getElementById(sectionId);
    section.addEventListener("blur", function () {
        var newValue = section.textContent;
        if (newValue) {
            localStorage.setItem(sectionId, newValue); // Store the updated value in localStorage
        }
    });
}
// Load saved data from localStorage
function loadSavedData(sectionId) {
    var section = document.getElementById(sectionId);
    var savedValue = localStorage.getItem(sectionId);
    if (savedValue) {
        section.textContent = savedValue; // Restore the saved value
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Apply to Education and Work Experience sections
    makeEditable("name");
    makeEditable("email");
    makeEditable("education");
    makeEditable("work-experience");
    // Load saved data
    loadSavedData("name");
    loadSavedData("email");
    loadSavedData("education");
    loadSavedData("work-experience");
});
