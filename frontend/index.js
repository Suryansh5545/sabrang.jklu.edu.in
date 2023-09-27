const loadingLogo = document.getElementById("loadingLogo");
const blackScreen = document.getElementById("blackScreen");

// Wait for 2 seconds before starting the animation
setTimeout(function () {
    // Add animation class to the logo to make it zoom in
    loadingLogo.classList.add("zoom-in");

    // Wait for the zoom-in animation to complete before redirecting
    setTimeout(function () {
        blackScreen.style.opacity = "1";
        setTimeout(function () {
            window.location.href = "/html/home.html";
        }, 1000);
    }, 1000);
}, 1000);
