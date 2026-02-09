const form = document.getElementById("myForm");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

function showPopup(message, color) {
    popupMessage.innerText = message;
    popup.style.backgroundColor = color;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name.length < 3) {
        showPopup("Name must be at least 3 characters", "red");
        return;
    }

    if (!email.includes("@")) {
        showPopup("Invalid email address", "red");
        return;
    }

    if (phone.length !== 10) {
        showPopup("Phone number must be 10 digits", "red");
        return;
    }

    if (password.length < 6) {
        showPopup("Password must be at least 6 characters", "red");
        return;
    }

    showPopup("Form submitted successfully!", "green");
    form.reset();
});
