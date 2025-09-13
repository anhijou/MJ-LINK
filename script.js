// Mobile menu toggle
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  const nav = document.querySelector("nav")
  const menu = nav.querySelector(".hidden.md\\:flex")

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden")
    menu.classList.add(
      "flex",
      "flex-col",
      "absolute",
      "top-full",
      "left-0",
      "w-full",
      "bg-brand-teal",
      "p-4",
      "space-y-2",
    )
  } else {
    menu.classList.add("hidden")
    menu.classList.remove(
      "flex",
      "flex-col",
      "absolute",
      "top-full",
      "left-0",
      "w-full",
      "bg-brand-teal",
      "p-4",
      "space-y-2",
    )
  }
})

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
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  // Simple validation
  const inputs = this.querySelectorAll("input, textarea")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("border-2", "border-red-500")
      isValid = false
    } else {
      input.classList.remove("border-2", "border-red-500")
    }
  })

  if (isValid) {
    // Simulate form submission
    const button = this.querySelector('button[type="submit"]')
    const originalText = button.textContent

    button.textContent = window.i18n.t("contact.form.sending")
    button.disabled = true

    setTimeout(() => {
      alert(window.i18n.t("contact.form.success"))
      this.reset()
      button.textContent = window.i18n.t("contact.form.submit")
      button.disabled = false
    }, 1500)
  } else {
    alert(window.i18n.t("contact.form.error"))
  }
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.classList.add("shadow-lg")
  } else {
    header.classList.remove("shadow-lg")
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Add CSS animation class
const style = document.createElement("style")
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.8s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Added RTL support styles */
    .rtl {
        direction: rtl;
    }
    
    .rtl .flex {
        flex-direction: row-reverse;
    }
    
    .rtl .text-left {
        text-align: right;
    }
    
    .rtl .text-right {
        text-align: left;
    }
    
    .rtl .space-x-8 > * + * {
        margin-left: 0;
        margin-right: 2rem;
    }
    
    .rtl .space-x-4 > * + * {
        margin-left: 0;
        margin-right: 1rem;
    }
    
    .rtl .space-x-2 > * + * {
        margin-left: 0;
        margin-right: 0.5rem;
    }
`
document.head.appendChild(style)

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-right");
            entry.target.classList.remove("animate-on-load"); // show it
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of the section is visible
    );

    document.querySelectorAll(".animate-on-load").forEach((el) => {
      observer.observe(el);
    });
  });