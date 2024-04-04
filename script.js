// Get the "About" link element
var aboutLink = document.getElementById("about-link");

// Event listener for when the "About" link is clicked
aboutLink.addEventListener("click", function(event) {
    // Prevent the default behavior of the link (e.g., scrolling to the section)
    event.preventDefault();

    // Dynamically load your CSS file
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "styles.css";
    document.head.appendChild(cssLink);

    // Dynamically load your JavaScript file
    var scriptTag = document.createElement("script");
    scriptTag.src = "script.js";
    document.body.appendChild(scriptTag);

    // Optionally, you can also load other resources or perform additional actions here
});
