document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle (Dark / Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    document.documentElement.setAttribute('data-theme', storedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    });

    // 2. Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Navbar Scroll Appearance
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Expandable Project Case Studies
    const toggleButtons = document.querySelectorAll('.btn-toggle-case-study');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const isExpanded = btn.classList.contains('active');

            // Optional: Close active case studies before expanding another
            document.querySelectorAll('.case-study-content').forEach(content => {
                content.style.maxHeight = null;
            });
            document.querySelectorAll('.btn-toggle-case-study').forEach(b => {
                b.classList.remove('active');
                b.innerHTML = 'View Case Study <span class="toggle-icon">↓</span>';
            });

            if (!isExpanded) {
                btn.classList.add('active');
                btn.innerHTML = 'Hide Case Study <span class="toggle-icon">↑</span>';
                targetContent.style.maxHeight = targetContent.scrollHeight + "px";
            }
        });
    });

    // 5. Scroll Reveal Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => revealObserver.observe(el));

    // 6. Contact Form Placeholder Integration Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const action = contactForm.getAttribute('action');
            if (action.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                formStatus.style.color = '#22D3EE';
                formStatus.innerText = 'Form submission ready! Replace YOUR_FORM_ID in index.html with your Formspree/Web3Forms endpoint to activate.';
            }
        });
    }
});