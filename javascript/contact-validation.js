document.getElementById("contactForm").addEventListener("submit", function (e) {

    const fullname = document.getElementById("fullname").value.trim();
    const namePattern = /^[A-Za-z\s]+$/;

    if (fullname.length < 5) {
        alert("Full name must contain at least 5 characters.");
        e.preventDefault();
        return;
    }

    if (!namePattern.test(fullname)) {
        alert("Full name must contain only letters and spaces.");
        e.preventDefault();
        return;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

    if (!emailPattern.test(email)) {
        alert("Email must be valid and end with @e-uvt.ro");
        e.preventDefault();
        return;
    }
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{10}$/;

    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        e.preventDefault();
        return;
    }

    const subject = document.getElementById("subject").value;

    if (subject === "") {
        alert("Please select a subject.");
        e.preventDefault();
        return;
    }
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Message cannot be empty.");
        e.preventDefault();
        return;
    }

    const radioSelected = document.querySelector('input[name="source"]:checked');

    if (!radioSelected) {
        alert("Please select how you heard about me.");
        e.preventDefault();
        return;
    }

    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("Please enter your date of birth.");
        e.preventDefault();
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        e.preventDefault();
        return;
    }

    const ageValue = parseInt(document.getElementById("age").value, 10);

    if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
        alert("Age must be a number between 18 and 60.");
        e.preventDefault();
        return;
    }

    const website = document.getElementById("website").value.trim();

    if (!website) {
        alert("Please enter your website URL.");
        e.preventDefault();
        return;
    }

    if (!website.startsWith("https://")) {
        alert("Website URL must start with https://");
        e.preventDefault();
        return;
    }

    try {
        new URL(website);
    } catch (_) {
        alert("Please enter a valid website URL (e.g. https://example.com).");
        e.preventDefault();
        return;
    }
    const fileInput = document.getElementById("fileUpload");

    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Please attach a file (.pdf or .docx).");
        e.preventDefault();
        return;
    }

    const file = fileInput.files[0];
    const allowedExtensions = [".pdf", ".docx"];
    const fileExtension = "." + file.name.split(".").pop().toLowerCase();
    const maxSizeBytes = 2 * 1024 * 1024;

    if (!allowedExtensions.includes(fileExtension)) {
        alert("Only .pdf or .docx files are allowed.");
        e.preventDefault();
        return;
    }

    if (file.size > maxSizeBytes) {
        alert("File size must not exceed 2 MB.");
        e.preventDefault();
        return;
    }
    const favColor = document.getElementById("favColor").value;

    if (!favColor || favColor === "") {
        alert("Please select a favourite color.");
        e.preventDefault();
        return;
    }
    const confirmed = confirm(
        "All fields are valid.\n\nAre you sure you want to submit the form?"
    );

    if (!confirmed) {
        e.preventDefault();
    }
});