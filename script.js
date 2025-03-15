// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Align to the top of the section
      });
    }
  });
});

// Dynamic Year Update in Footer
const yearElement = document.querySelector('footer p');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Bryant Herson Diaz. All rights reserved.`;
}

// Form Submission Handling (Example)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Get form data
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate form submission (replace with actual API call)
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset(); // Clear the form
  });
}

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1 // Trigger animation when 10% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add a class to trigger animation
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section); // Observe each section
});