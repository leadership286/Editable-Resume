// Function to handle the editable text
function makeEditable(elementId) {
    var element = document.getElementById(elementId);
    // When the user clicks, convert text to input
    element.addEventListener('click', function () {
        var currentText = element.textContent || '';
        var input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.width = "".concat(element.offsetWidth, "px");
        element.replaceWith(input);
        input.focus();
        // On losing focus, save the changes
        input.addEventListener('blur', function () {
            element.textContent = input.value;
            input.replaceWith(element); // Switch back to text view
        });
        // Allow pressing 'Enter' to save changes
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                element.textContent = input.value;
                input.replaceWith(element);
            }
        });
    });
}
// Apply editable functionality to resume sections
makeEditable('name');
makeEditable('education');
makeEditable('experience');
