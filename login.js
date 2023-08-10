document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "admin" && password === "admin") {
            window.location.href = "notes.html"; // Redirect to the notes page
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
