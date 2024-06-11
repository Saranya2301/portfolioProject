const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    
    console.log("Form Submitted");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    Email.send({
        SecureToken: "e61ebf6d-cf83-4cbe-a6f6-07b071e7dac8",
        To: 'sarant23jan@gmail.com',
        From: "sarant23jan@gmail.com",
        Subject: "Contact info",
        Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message,
    }).then(
        response => {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully: " + response);
        }
    ).catch(
        error => {
            console.error("Failed to send email:", error);
            alert("Failed to send email: " + error);
        }
    );
});



document.addEventListener('DOMContentLoaded', function() {
    async function setRandomBackground() {
        const apiKey = '44292515-17ffc79f96dfee0b0deaf4e1c'; 
        const query = 'forest, plain,black images';
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=20&order=latest`;

        try {
            console.log('Fetching random image...');
            const response = await fetch(url);
            const data = await response.json();
            console.log('Fetch response:', data);

            if (data.hits.length > 0) {
                const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
                document.getElementById('hero').style.backgroundImage = `url(${randomImage})`;
                document.getElementById('hero').style.backgroundSize = 'cover';
                document.getElementById('hero').style.backgroundPosition = 'center';
                console.log('Background image set:', randomImage);
            } else {
                console.error('No images found.');
            }
        } catch (error) {
            console.error('Error fetching the random image:', error);
        }
    }

    setRandomBackground();
});