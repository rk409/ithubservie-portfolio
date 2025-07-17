// IT Hub Portfolio - JavaScript

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Global animation state
let animationsInitialized = false;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all elements are properly rendered
    setTimeout(() => {
        try {
            initializeAnimations();
            initializeNavigation();
            initializeMobileMenu();
            initializeContactForm();
            initializeScrollEffects();
            initializeParallax();
            initializeTypewriter();
            initializeHoverEffects();
            initializeSmoothScrolling();
            
            // Mark animations as initialized
            animationsInitialized = true;
            
            // Force visibility of cards after a delay
            setTimeout(() => {
                forceCardVisibility();
            }, 2000);
            
        } catch (error) {
            console.error('Animation initialization error:', error);
            // Fallback: ensure all cards are visible
            forceCardVisibility();
        }
    }, 100);
});

// Force visibility of all cards (fallback)
function forceCardVisibility() {
    const cards = document.querySelectorAll('.service-card, .project-card, .tech-item');
    cards.forEach(card => {
        gsap.set(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            visibility: 'visible'
        });
        card.classList.add('card-visible');
    });
}

// Initialize all animations
function initializeAnimations() {
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.7')
        .to('.hero-buttons', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.8');

    // About section animations - FIXED TIMING
    gsap.from('.about-title', {
        scrollTrigger: {
            trigger: '.about-title',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-subtitle', {
        scrollTrigger: {
            trigger: '.about-subtitle',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.about-item', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Services section animations - FIXED TIMING
    gsap.from('.services-title', {
        scrollTrigger: {
            trigger: '.services-title',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.services-subtitle', {
        scrollTrigger: {
            trigger: '.services-subtitle',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // FIXED: Service cards with perfect timing
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
            markers: false,
            onEnter: () => {
                // Ensure cards are visible when triggered
                gsap.set('.service-card', { opacity: 1, y: 0, rotation: 0, scale: 1 });
            }
        },
        opacity: 0,
        y: 100,
        rotation: -15,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        onComplete: () => {
            // Add bounce effect after initial animation
            gsap.to('.service-card', {
                y: -10,
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            // Ensure cards are visible after animation
            gsap.set('.service-card', { clearProps: 'all' });
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.add('card-visible');
            });
        }
    });

    // Projects section animations - FIXED TIMING
    gsap.from('.projects-title', {
        scrollTrigger: {
            trigger: '.projects-title',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.projects-subtitle', {
        scrollTrigger: {
            trigger: '.projects-subtitle',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // FIXED: Project cards with perfect timing
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
            markers: false,
            onEnter: () => {
                // Ensure cards are visible when triggered
                gsap.set('.project-card', { opacity: 1, y: 0, rotationY: 0, scale: 1 });
            }
        },
        opacity: 0,
        y: 80,
        rotationY: 90,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        onComplete: () => {
            // Add wave effect after initial animation
            gsap.to('.project-card', {
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out',
                stagger: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            // Ensure cards are visible after animation
            gsap.set('.project-card', { clearProps: 'all' });
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.add('card-visible');
            });
        }
    });

    // Technology section animations - FIXED TIMING
    gsap.from('.technology-title', {
        scrollTrigger: {
            trigger: '.technology-title',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.technology-subtitle', {
        scrollTrigger: {
            trigger: '.technology-subtitle',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // FIXED: Technology items with perfect timing
    gsap.from('.tech-item', {
        scrollTrigger: {
            trigger: '#technology',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
            markers: false,
            onEnter: () => {
                // Ensure items are visible when triggered
                gsap.set('.tech-item', { opacity: 1, y: 0, scale: 1, rotation: 0 });
            }
        },
        opacity: 0,
        scale: 0,
        rotation: 360,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.3)',
        onComplete: () => {
            // Add floating animation after initial reveal
            gsap.to('.tech-item', {
                y: -5,
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.05,
                yoyo: true,
                repeat: -1
            });
            
            // Add glow effect
            gsap.to('.tech-item', {
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            });
            
            // Ensure items are visible after animation
            gsap.set('.tech-item', { clearProps: 'all' });
            document.querySelectorAll('.tech-item').forEach(item => {
                item.classList.add('card-visible');
            });
        }
    });

    // Contact section animations - FIXED TIMING
    gsap.from('.contact-title', {
        scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.contact-subtitle', {
        scrollTrigger: {
            trigger: '.contact-subtitle',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        x: 30,
        duration: 1,
        ease: 'power3.out'
    });

    // Add enhanced hover animations
    addEnhancedHoverEffects();
    
    // Add fallback animations for better performance
    addFallbackAnimations();
}

// Add enhanced hover effects for cards
function addEnhancedHoverEffects() {
    // Service cards hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                rotationY: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Project cards hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.08,
                rotationY: 10,
                y: -15,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Technology items hover effects
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.1,
                rotation: 5,
                y: -10,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Add fallback animations for better reliability
function addFallbackAnimations() {
    // Ensure all cards are visible even if GSAP fails
    const cards = document.querySelectorAll('.service-card, .project-card, .tech-item');
    
    cards.forEach(card => {
        // Set initial state - HIDDEN until scroll trigger
        gsap.set(card, { 
            opacity: 0, 
            y: 30, 
            scale: 0.8,
            visibility: 'hidden'
        });
        
        // Add intersection observer as fallback
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        visibility: 'visible',
                        duration: 0.6,
                        ease: 'power3.out',
                        onComplete: () => {
                            entry.target.classList.add('card-visible');
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3, // Higher threshold for better timing
            rootMargin: '0px 0px -100px 0px' // More precise trigger point
        });
        
        observer.observe(card);
    });
}

// ENHANCED: Debug function to check animation status
function debugAnimations() {
    console.log('Animation Debug Info:');
    console.log('Animations Initialized:', animationsInitialized);
    
    const cards = document.querySelectorAll('.service-card, .project-card, .tech-item');
    cards.forEach((card, index) => {
        const computedStyle = window.getComputedStyle(card);
        console.log(`Card ${index + 1}:`, {
            opacity: computedStyle.opacity,
            visibility: computedStyle.visibility,
            transform: computedStyle.transform,
            hasVisibleClass: card.classList.contains('card-visible')
        });
    });
}

// Add debug function to window for testing
window.debugAnimations = debugAnimations;

// Initialize navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-gray-900/95', 'backdrop-blur-sm', 'border-b', 'border-gray-800');
        } else {
            navbar.classList.remove('bg-gray-900/95', 'backdrop-blur-sm', 'border-b', 'border-gray-800');
        }
    });

    // Active link highlighting with better detection
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', throttle(updateActiveLink, 100));
    
    // Initial active link check
    updateActiveLink();
}

// Initialize mobile menu with improved functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            isMenuOpen = false;
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && isMenuOpen) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            isMenuOpen = false;
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            isMenuOpen = false;
        }
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.classList.add('loading');
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('loading');
            }, 2000);
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Parallax effect for background shapes
    gsap.to('.floating-shape', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: (i, target) => -target.offsetHeight * 0.5,
        ease: 'none'
    });

    // Smooth reveal animations
    const revealElements = document.querySelectorAll('.service-card, .project-card, .tech-item');
    
    revealElements.forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

// Initialize parallax effects
function initializeParallax() {
    // Parallax for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: (i, target) => -target.offsetHeight * 0.1,
            ease: 'none'
        });
    });
}

// Initialize typewriter effect
function initializeTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #3b82f6';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        // Start typewriter effect when element is in view
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => typeWriter()
        });
    });
}

// Initialize hover effects
function initializeHoverEffects() {
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.service-card, .project-card, .tech-item, button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('translate-x-full');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                }
                
                // Calculate target position with offset for fixed navbar
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20; // 20px extra padding
                
                // Try GSAP first, fallback to native smooth scroll
                try {
                    gsap.to(window, {
                        duration: 0.3,
                        scrollTo: {
                            y: targetPosition,
                            autoKill: false
                        },
                        ease: 'power3.inOut',
                        onComplete: () => {
                            // Update URL hash
                            history.pushState(null, null, href);
                            
                            // Trigger any animations that might be needed
                            const sectionId = href.substring(1);
                            const section = document.getElementById(sectionId);
                            if (section) {
                                // Force trigger animations if section is in view
                                const rect = section.getBoundingClientRect();
                                if (rect.top < window.innerHeight && rect.bottom > 0) {
                                    // Section is in view, trigger animations
                                    triggerSectionAnimations(sectionId);
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.warn('GSAP scrollTo failed, using fallback:', error);
                    // Fallback to native smooth scroll
                    smoothScrollTo(targetPosition, 1200);
                    
                    // Update URL hash
                    setTimeout(() => {
                        history.pushState(null, null, href);
                    }, 1200);
                }
            } else {
                console.warn('Target element not found:', href);
            }
        });
    });
    
    // Handle direct URL hash navigation
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                try {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: targetPosition,
                            autoKill: false
                        },
                        ease: 'power3.inOut'
                    });
                } catch (error) {
                    console.warn('GSAP scrollTo failed for hash navigation, using fallback:', error);
                    smoothScrollTo(targetPosition, 1000);
                }
            }
        }, 100);
    }
}

// Fallback smooth scroll function
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// Function to trigger section animations
function triggerSectionAnimations(sectionId) {
    switch(sectionId) {
        case 'services':
            // Trigger service card animations
            gsap.from('.service-card', {
                opacity: 0,
                y: 100,
                rotation: -15,
                scale: 0.8,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });
            break;
        case 'projects':
            // Trigger project card animations
            gsap.from('.project-card', {
                opacity: 0,
                y: 80,
                rotationY: 90,
                scale: 0.9,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out'
            });
            break;
        case 'technology':
            // Trigger technology item animations
            gsap.from('.tech-item', {
                opacity: 0,
                scale: 0,
                rotation: 360,
                y: 50,
                duration: 0.8,
                stagger: 0.1,
                ease: 'elastic.out(1, 0.3)'
            });
            break;
    }
}

// Add loading animation
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate page elements
    gsap.from('body', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left z-50';
    progressBar.style.transform = 'scaleX(0)';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        gsap.to(progressBar, {
            scaleX: scrollPercent,
            duration: 0.1,
            ease: 'none'
        });
    });
}

// Initialize scroll progress
createScrollProgress();

// Add cursor trail effect
function createCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 opacity-50';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Initialize cursor trail (optional - can be disabled for performance)
// createCursorTrail();

// Add particle effect to hero section
function createParticles() {
    const heroSection = document.getElementById('home');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-blue-400/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        heroSection.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
            y: -100,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            ease: 'none',
            delay: Math.random() * 5
        });
    }
}

// Initialize particles
createParticles();

// Add intersection observer for performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe elements for performance optimization
document.querySelectorAll('.service-card, .project-card, .tech-item').forEach(el => {
    observer.observe(el);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (!mobileMenu.classList.contains('translate-x-full')) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
            console.log('Swipe up detected');
        } else {
            // Swipe down
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll event handling
}, 16)); // ~60fps

// Add error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Add unload handling
window.addEventListener('beforeunload', () => {
    // Clean up any ongoing animations
    gsap.killTweensOf('*');
});

// Export functions for potential external use
window.ITHubPortfolio = {
    initializeAnimations,
    initializeNavigation,
    initializeMobileMenu,
    initializeContactForm,
    showNotification
}; 