document.getElementById("signupForm").addEventListener("submit", function (event) {
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const ageField = document.getElementById("age");

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        alert("Please enter a valid email address.");
        emailField.focus();
        event.preventDefault();
        return;
    }

    // Validate phone number (accepts numbers, spaces, dashes, and parentheses)
    const phoneRegex = /^[0-9 ()+-]+$/;
    if (!phoneRegex.test(phoneField.value)) {
        alert("Please enter a valid phone number.");
        phoneField.focus();
        event.preventDefault();
        return;
    }

    // Validate age (positive numbers only)
    if (ageField.value < 1) {
        alert("Age must be a positive number.");
        ageField.focus();
        event.preventDefault();
        return;
    }
});
