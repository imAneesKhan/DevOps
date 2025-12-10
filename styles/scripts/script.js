console.log("DevOps Project Loaded Successfully");

// Select the button on the index page
const button = document.getElementById('alertButton');

// If the button exists, add a click event
if(button) {
    button.addEventListener('click', function() {
        alert("JavaScript is connected! Ready for Git operations.");
    });
}