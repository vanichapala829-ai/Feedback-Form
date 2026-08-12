function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    let isValid = true;

    if (name === "") {
        nameError.innerText = "Please enter your full name.";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.innerText = "Please enter your email address.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerText = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.innerText = "Feedback message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('thankYouCard').style.display = 'block';
    }

    return isValid;
}

function resetForm() {
    document.getElementById('feedbackForm').reset();
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('thankYouCard').style.display = 'none';
}