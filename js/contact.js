function FocusInput(id) {
    document.querySelector('#' + id).style.border = '2px solid white';
}

function ValidateEmail(mail) {

    let name = document.querySelector('#name').value;
    let user_email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    if (!name) {
        document.querySelector('#name').style.border = '2px solid #ff4f00';
        return (false)
    }
    if (!user_email) {
        document.querySelector('#email').style.border = '2px solid #ff4f00';
        return (false)
    }
    if (!subject) {
        document.querySelector('#subject').style.border = '2px solid #ff4f00';
        return (false)
    }
    if (!message) {
        document.querySelector('#message').style.border = '2px solid #ff4f00';
        return (false)
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    } else {
        alert("You have entered an invalid email address!")
        return (false)
    }
}


// Email JS 

emailjs.init("01kBxkpLUTqlXO1kz");

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let user_email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    ValidateEmail(user_email)

    if (name && user_email && subject && message) {

        // Prepare the email template parameters
        const emailParams = {
            name: name,
            user_email: user_email,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        document.querySelector('.submit').innerHTML = 'Sending...'
        emailjs.send("service_4pjdyzk", "template_q4iw5kn", emailParams)
            .then(function (response) {
                console.log("Email sent successfully", response);
                alert("Email sent successfully!");
                document.querySelector('.contactform').style.display = 'none';
                document.querySelector('.confirmation').style.display = 'flex';
            }, function (error) {
                console.error("Email failed to send", error);
                alert("Email failed to send. Please try again later.");
            });
    }
});

