 // --- Mobile menu functionality ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const header = document.getElementById('mainHeader');

    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', function() {
        if (!isMenuOpen) {
            mobileMenu.classList.add('active');
            mobileMenuBtn.innerHTML = '<i class="bi bi-square"></i>';
            document.body.style.overflow = 'hidden';
            isMenuOpen = true;
        } else {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="bi bi-grid"></i>';
            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="bi bi-grid"></i>';
            document.body.style.overflow = '';
            isMenuOpen = false;
        });
    });

    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="bi bi-grid"></i>';
            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    });

    // --- Header background on scroll ---
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Animation for feature cards on scroll ---
    const featureCards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    featureCards.forEach(card => {
        observer.observe(card);
    });

    // --- FAQ accordion functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            if (!isActive) {
                item.classList.toggle('active');
            }
        });
    });

    // --- LENIS SMOOTH SCROLL SETUP ---
    const lenis = new Lenis();

    // Link Lenis to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            lenis.scrollTo(anchor.getAttribute('href'));
        });
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    // --- Scroll Animation Logic ---
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => scrollObserver.observe(el));