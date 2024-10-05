// script.ts

// Function to handle editing and updating content
function makeEditable(sectionId: string) {
    const section = document.getElementById(sectionId) as HTMLDivElement;
  
    section.addEventListener("blur", function () {
      const newValue = section.textContent;
      if (newValue) {
        localStorage.setItem(sectionId, newValue); // Store the updated value in localStorage
      }
    });
  }
  
  // Load saved data from localStorage
  function loadSavedData(sectionId: string) {
    const section = document.getElementById(sectionId) as HTMLDivElement;
    const savedValue = localStorage.getItem(sectionId);
    if (savedValue) {
      section.textContent = savedValue; // Restore the saved value
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Apply to Education and Work Experience sections
    makeEditable("education");
    makeEditable("work-experience");
  
    // Load saved data
    loadSavedData("education");
    loadSavedData("work-experience");
  });
  