// Mobile menu toggle
// document.getElementById("mobile-menu-btn").addEventListener("click", () => {
//   const nav = document.querySelector("nav")
//   const menu = nav.querySelector(".hidden.md\\:flex")

//   if (menu.classList.contains("hidden")) {
//     menu.classList.remove("hidden")
//     menu.classList.add(
//       "flex",
//       "flex-col",
//       "absolute",
//       "top-full",
//       "left-0",
//       "w-full",
//       "bg-brand-teal",
//       "p-4",
//       "space-y-2",
//     )
//   } else {
//     menu.classList.add("hidden")
//     menu.classList.remove(
//       "flex",
//       "flex-col",
//       "absolute",
//       "top-full",
//       "left-0",
//       "w-full",
//       "bg-brand-teal",
//       "p-4",
//       "space-y-2",
//     )
//   }
// })

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact form handling
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(this);

    try {
        const response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        const messageBox = document.getElementById('formMessage');

        // Show confirmation message
        messageBox.innerHTML = result;
        messageBox.classList.remove("hidden", "opacity-0");
        messageBox.classList.add("opacity-100");

        // Fade out after 5 seconds
        setTimeout(() => {
            messageBox.classList.remove("opacity-100");
            messageBox.classList.add("opacity-0");
            setTimeout(() => {
                messageBox.innerHTML = "";
                messageBox.classList.add("hidden");
            }, 500); // wait for fade-out
        }, 5000);

        // Clear form if successful
        this.reset();

    } catch (error) {
        console.error('Error:', error);
        const messageBox = document.getElementById('formMessage');
        messageBox.innerHTML = '<span style="color:red;">Error sending message. Please try again.</span>';
        messageBox.classList.remove("hidden", "opacity-0");
        messageBox.classList.add("opacity-100");

        setTimeout(() => {
            messageBox.classList.remove("opacity-100");
            messageBox.classList.add("opacity-0");
            setTimeout(() => {
                messageBox.innerHTML = "";
                messageBox.classList.add("hidden");
            }, 500);
        }, 5000);
    }
});


// Animate elements on scroll
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.animate-on-scroll').forEach(element => {
//     observer.observe(element);
// });

// // Observe elements with animation classes
// document.querySelectorAll('.animate-fade-up, .animate-slide-left').forEach(el => {
//     observer.observe(el);
// });




//   document.addEventListener("DOMContentLoaded", () => {
//     const elements = document.querySelectorAll(".animate-on-scroll");

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate"); // trigger animation
//           observer.unobserve(entry.target); // optional: animate only once
//         }
//       });
//     }, {
//       threshold: 0.2 // trigger when 20% is visible
//     });

//     elements.forEach(el => observer.observe(el));
//   });
 document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll-Y");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // trigger animation
          observer.unobserve(entry.target); // optional: animate only once
        }
      });
    }, {
      threshold: 0.2 // trigger when 20% is visible
    });

    elements.forEach(el => observer.observe(el));
  });


 