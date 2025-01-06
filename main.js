

    (function(){
        emailjs.init("fqONDY3mdWakNhcyG"); // Replace with your EmailJS user ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_gjea4sh", "template_1x7kptq", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset form fields
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    });

