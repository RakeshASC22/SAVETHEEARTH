let button = document.getElementById('signup');
button.addEventListener('click', signupMail);
let host = 'https://smtpjs.com/v3/smtp.js'


function signupMail() {
    console.log('message prepared');
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rak77.man@gmail.com",
        Password : "9524395FF2A649BB03A405820F43FC66C128",
        SecureToken : "6c5df9db-6af7-48d0-abe6-9b353c4f1b1a",
        To : 'savetheearth.asc@gmail.com',
        From : "rak77.man@gmail.com",
        Subject : "Save The Earth!",
        Body : "Thank you for signing up for our weekly newsletter. By signing up you have chosen to inform yourself on what is happening to the planet that you are living on and want to know how to save it. We applaud you!! "
    }).then(
      message => {
        console.log('sent email');
        alert('Check your emails ;)')
      window.location.replace('https://rakeshasc22.github.io/saveTheEarth/index.html');
      }
    );
    };

