// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Form validation for contact form
// const contactForm = document.getElementById('newform');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const name = document.querySelector('input[name="name"]').value;
//         const email = document.querySelector('input[name="email"]').value;
//         const message = document.querySelector('textarea[name="message"]').value;

//         if (name && email && message) {
//             alert('Thank you for your message! We will get back to you soon.');
//             this.reset();
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });
// }
