// ===== INDIA TOURISM JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoginPage();
    initNavbar();
    initHeroSlider();
    initExplorePage();
    initStatePage();
    initBookingPage();
    initMapPage();
    initAnimations();
});

// ===== LOGIN PAGE =====
function initLoginPage() {
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginToggle && signupToggle) {
        loginToggle.addEventListener('click', () => {
            loginToggle.classList.add('active');
            signupToggle.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });

        signupToggle.addEventListener('click', () => {
            signupToggle.classList.add('active');
            loginToggle.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }

    // Toggle password visibility
    const togglePasswords = document.querySelectorAll('.toggle-password');
    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate login
            showNotification('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Account created successfully!', 'success');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        });
    }

    // Google sign-in buttons
    const googleBtns = document.querySelectorAll('.google-btn');
    googleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showNotification('Signing in with Google...', 'info');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        });
    });
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.hero-dots');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    
    if (!slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('hero-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.hero-dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide]?.classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % totalSlides);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
}

// ===== EXPLORE PAGE =====
function initExplorePage() {
    const statesGrids = {
        north: document.getElementById('northStates'),
        south: document.getElementById('southStates'),
        east: document.getElementById('eastStates'),
        west: document.getElementById('westStates'),
        northeast: document.getElementById('northeastStates'),
        central: document.getElementById('centralStates')
    };

    // Check if we're on explore page
    if (!statesGrids.north) return;

    // Populate states for each region
    if (typeof indiaData !== 'undefined') {
        Object.keys(indiaData.regions).forEach(regionKey => {
            const region = indiaData.regions[regionKey];
            const grid = statesGrids[regionKey];
            
            if (grid) {
                region.states.forEach(stateKey => {
                    const state = indiaData.states[stateKey];
                    if (state) {
                        grid.appendChild(createStateCard(stateKey, state));
                    }
                });
            }
        });
    }

    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const regionSections = document.querySelectorAll('.region-section');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const region = tab.dataset.region;
            regionSections.forEach(section => {
                if (region === 'all' || section.dataset.region === region) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Handle hash navigation
    if (window.location.hash) {
        const region = window.location.hash.substring(1);
        const tab = document.querySelector(`[data-region="${region}"]`);
        if (tab) {
            tab.click();
            const section = document.getElementById(region);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
}

function createStateCard(stateKey, state) {
    const card = document.createElement('div');
    card.classList.add('state-card');
    card.onclick = () => window.location.href = `state.html?state=${stateKey}`;

    card.innerHTML = `
        <div class="state-card-image">
            <img src="${state.image}" alt="${state.name}">
        </div>
        <div class="state-card-content">
            <h3>${state.name}</h3>
            <p>${state.tagline}</p>
            <div class="state-card-meta">
                <span class="places">${state.places?.length || 0} Places</span>
                <span class="rating">
                    <i class="fas fa-star"></i>
                    ${state.rating}
                </span>
            </div>
        </div>
    `;

    return card;
}

// ===== STATE PAGE =====
function initStatePage() {
    const stateHeader = document.getElementById('stateHeader');
    if (!stateHeader) return;

    // Get state from URL
    const urlParams = new URLSearchParams(window.location.search);
    const stateKey = urlParams.get('state');

    if (!stateKey || typeof indiaData === 'undefined' || !indiaData.states[stateKey]) {
        window.location.href = 'explore.html';
        return;
    }

    const state = indiaData.states[stateKey];
    
    // Update header
    stateHeader.style.backgroundImage = `url('${state.image}')`;
    document.getElementById('stateRegion').textContent = indiaData.regions[state.region]?.name || '';
    document.getElementById('stateName').textContent = state.name;
    document.getElementById('stateTagline').textContent = state.tagline;
    document.getElementById('placesCount').textContent = `${state.places?.length || 0} Places`;
    document.getElementById('stateRating').textContent = `${state.rating} Rating`;
    document.getElementById('bestTime').textContent = state.bestTime;
    document.getElementById('breadcrumbState').textContent = state.name;
    
    // Update page title
    document.title = `${state.name} - Incredible India`;

    // Update about section
    document.getElementById('stateDescription').textContent = state.description;

    // Update quick info
    document.getElementById('stateCapital').textContent = state.capital;
    document.getElementById('stateLanguage').textContent = state.language;
    document.getElementById('stateBestTime').textContent = state.bestTime;
    document.getElementById('stateClimate').textContent = state.climate;

    // Populate places
    const placesGrid = document.getElementById('placesGrid');
    if (placesGrid && state.places) {
        state.places.forEach(place => {
            placesGrid.appendChild(createPlaceCard(place));
        });
    }

    // Populate food
    const foodGrid = document.getElementById('foodGrid');
    if (foodGrid && state.food) {
        state.food.forEach(food => {
            foodGrid.appendChild(createFoodCard(food));
        });
    }

    // Populate festivals
    const festivalsGrid = document.getElementById('festivalsGrid');
    if (festivalsGrid && state.festivals) {
        state.festivals.forEach(festival => {
            festivalsGrid.appendChild(createFestivalCard(festival));
        });
    }

    // Populate tips
    const tipsContainer = document.getElementById('tipsContainer');
    if (tipsContainer && state.tips) {
        state.tips.forEach((tip, index) => {
            tipsContainer.appendChild(createTipItem(tip, index));
        });
    }
}

function createPlaceCard(place) {
    const card = document.createElement('div');
    card.classList.add('place-card');
    card.innerHTML = `
        <div class="place-image">
            <img src="${place.image}" alt="${place.name}">
            <span class="place-category">${place.category}</span>
        </div>
        <div class="place-content">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        </div>
    `;
    return card;
}

function createFoodCard(food) {
    const card = document.createElement('div');
    card.classList.add('food-card');
    card.innerHTML = `
        <div class="food-image">
            <img src="${food.image}" alt="${food.name}">
        </div>
        <div class="food-content">
            <h4>${food.name}</h4>
            <p>${food.description}</p>
        </div>
    `;
    return card;
}

function createFestivalCard(festival) {
    const card = document.createElement('div');
    card.classList.add('festival-card');
    card.innerHTML = `
        <div class="festival-icon">
            <i class="${festival.icon}"></i>
        </div>
        <h4>${festival.name}</h4>
        <p>${festival.description}</p>
    `;
    return card;
}

function createTipItem(tip, index) {
    const icons = ['fas fa-calendar-alt', 'fas fa-tshirt', 'fas fa-money-bill', 'fas fa-water', 'fas fa-camera', 'fas fa-bus'];
    const item = document.createElement('div');
    item.classList.add('tip-item');
    item.innerHTML = `
        <div class="tip-icon">
            <i class="${icons[index % icons.length]}"></i>
        </div>
        <div class="tip-content">
            <h4>${tip.title}</h4>
            <p>${tip.text}</p>
        </div>
    `;
    return item;
}

// ===== BOOKING PAGE =====
function initBookingPage() {
    const bookingContainer = document.querySelector('.booking-container');
    if (!bookingContainer) return;

    // Counter buttons
    const counterBtns = document.querySelectorAll('.counter-btn');
    counterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.target);
            let value = parseInt(target.value);
            
            if (btn.classList.contains('plus')) {
                value = Math.min(value + 1, parseInt(target.max) || 10);
            } else {
                value = Math.max(value - 1, parseInt(target.min) || 0);
            }
            
            target.value = value;
        });
    });

    // Set minimum dates
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    if (startDate && endDate) {
        const today = new Date().toISOString().split('T')[0];
        startDate.min = today;
        
        startDate.addEventListener('change', () => {
            endDate.min = startDate.value;
            if (endDate.value && endDate.value < startDate.value) {
                endDate.value = startDate.value;
            }
        });
    }

    // Payment method toggle
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('cardDetails');
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', () => {
            if (cardDetails) {
                cardDetails.style.display = option.value === 'card' ? 'block' : 'none';
            }
        });
    });

    // Package View Details functionality
    const packageBtns = document.querySelectorAll('.package-btn');
    packageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.package-card');
            const image = card.querySelector('.package-image img').src;
            const badge = card.querySelector('.package-badge')?.textContent || 'Popular';
            const title = card.querySelector('h3').textContent;
            const route = card.querySelector('.package-content > p').textContent;
            const duration = card.querySelector('.package-details span:first-child').textContent.trim();
            const rating = card.querySelector('.package-details span:last-child').textContent.trim();
            const price = card.querySelector('.package-price .price').textContent;

            document.getElementById('packageModalImage').src = image;
            document.getElementById('packageModalBadge').textContent = badge;
            document.getElementById('packageModalTitle').textContent = title;
            document.getElementById('packageModalRoute').textContent = route;
            document.getElementById('packageModalDuration').textContent = duration;
            document.getElementById('packageModalRating').textContent = rating + ' Rating';
            document.getElementById('packageModalPrice').textContent = price + ' per person';

            document.getElementById('packageModal').classList.add('active');
        });
    });

    // Package modal close functionality
    const packageModal = document.getElementById('packageModal');
    if (packageModal) {
        const closeBtn = packageModal.querySelector('.modal-close');
        const overlay = packageModal.querySelector('.modal-overlay');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closePackageModal);
        }
        if (overlay) {
            overlay.addEventListener('click', closePackageModal);
        }
    }
}

// Close package modal
function closePackageModal() {
    const modal = document.getElementById('packageModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Book the selected package
function bookPackage() {
    closePackageModal();
    // Scroll to booking form
    const bookingContainer = document.querySelector('.booking-container');
    if (bookingContainer) {
        bookingContainer.scrollIntoView({ behavior: 'smooth' });
    }
    showNotification('Package selected! Fill in the booking details below.', 'success');
}

// Booking step navigation
function nextStep(step) {
    const currentContent = document.querySelector('.booking-step-content.active');
    const nextContent = document.getElementById(`step${step}`);
    const currentStep = document.querySelector(`.step.active`);
    const nextStepEl = document.querySelector(`.step[data-step="${step}"]`);
    
    if (step === 3) {
        updateBookingSummary();
    }

    currentContent.classList.remove('active');
    nextContent.classList.add('active');
    
    if (currentStep) currentStep.classList.remove('active');
    if (nextStepEl) nextStepEl.classList.add('active');

    // Mark previous steps as completed
    document.querySelectorAll('.step').forEach(s => {
        if (parseInt(s.dataset.step) < step) {
            s.classList.add('completed');
        }
    });
}

function prevStep(step) {
    const currentContent = document.querySelector('.booking-step-content.active');
    const prevContent = document.getElementById(`step${step}`);
    const steps = document.querySelectorAll('.step');
    
    currentContent.classList.remove('active');
    prevContent.classList.add('active');
    
    steps.forEach(s => {
        s.classList.remove('active');
        if (parseInt(s.dataset.step) === step) {
            s.classList.add('active');
        }
    });
}

function updateBookingSummary() {
    const destination = document.getElementById('destinationState');
    const tripType = document.getElementById('tripType');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const adults = document.getElementById('adults');
    const children = document.getElementById('children');
    const accommodation = document.querySelector('input[name="accommodation"]:checked');

    if (destination && tripType) {
        document.getElementById('summaryDestination').textContent = 
            destination.options[destination.selectedIndex]?.text || '-';
        document.getElementById('summaryTripType').textContent = 
            tripType.options[tripType.selectedIndex]?.text || '-';
    }

    if (startDate && endDate && startDate.value && endDate.value) {
        const start = new Date(startDate.value);
        const end = new Date(endDate.value);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        document.getElementById('summaryDuration').textContent = `${days} Days`;
    }

    if (adults && children) {
        const totalTravelers = parseInt(adults.value) + parseInt(children.value);
        document.getElementById('summaryTravelers').textContent = `${totalTravelers} Travelers`;
    }

    if (accommodation) {
        document.getElementById('summaryAccommodation').textContent = 
            accommodation.value.charAt(0).toUpperCase() + accommodation.value.slice(1);
    }

    // Calculate costs (mock calculation)
    const baseCost = 15000;
    const perPersonCost = parseInt(adults?.value || 1) * baseCost + parseInt(children?.value || 0) * (baseCost * 0.5);
    
    let accommodationMultiplier = 1;
    if (accommodation?.value === 'standard') accommodationMultiplier = 1.5;
    if (accommodation?.value === 'luxury') accommodationMultiplier = 2.5;

    const startDateVal = document.getElementById('startDate')?.value;
    const endDateVal = document.getElementById('endDate')?.value;
    let days = 1;
    if (startDateVal && endDateVal) {
        const start = new Date(startDateVal);
        const end = new Date(endDateVal);
        days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    }

    const packageCost = perPersonCost * days * 0.5;
    const accommodationCost = days * 5000 * accommodationMultiplier;
    const taxes = (packageCost + accommodationCost) * 0.18;
    const total = packageCost + accommodationCost + taxes;

    document.getElementById('packageCost').textContent = `₹${packageCost.toLocaleString()}`;
    document.getElementById('accommodationCost').textContent = `₹${accommodationCost.toLocaleString()}`;
    document.getElementById('taxesCost').textContent = `₹${Math.round(taxes).toLocaleString()}`;
    document.getElementById('totalCost').textContent = `₹${Math.round(total).toLocaleString()}`;
}

function processPayment() {
    showNotification('Processing payment...', 'info');
    
    setTimeout(() => {
        // Generate booking ID
        const bookingId = 'IND-2026-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        document.getElementById('bookingId').textContent = bookingId;
        
        // Move to confirmation step
        nextStep(4);
        showNotification('Payment successful!', 'success');
    }, 2000);
}

// ===== MAP PAGE =====
function initMapPage() {
    const mapContainer = document.getElementById('indiaMap');
    if (!mapContainer) return;

    // Initialize Leaflet map
    const map = L.map('indiaMap').setView([20.5937, 78.9629], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Custom marker icons
    const markerIcons = {
        heritage: L.divIcon({ className: 'custom-marker heritage', html: '<i class="fas fa-landmark"></i>', iconSize: [30, 30] }),
        nature: L.divIcon({ className: 'custom-marker nature', html: '<i class="fas fa-mountain"></i>', iconSize: [30, 30] }),
        beach: L.divIcon({ className: 'custom-marker beach', html: '<i class="fas fa-umbrella-beach"></i>', iconSize: [30, 30] }),
        temple: L.divIcon({ className: 'custom-marker temple', html: '<i class="fas fa-gopuram"></i>', iconSize: [30, 30] }),
        wildlife: L.divIcon({ className: 'custom-marker wildlife', html: '<i class="fas fa-paw"></i>', iconSize: [30, 30] }),
        adventure: L.divIcon({ className: 'custom-marker adventure', html: '<i class="fas fa-hiking"></i>', iconSize: [30, 30] })
    };

    // Add markers
    const markers = [];
    if (typeof indiaData !== 'undefined' && indiaData.mapMarkers) {
        indiaData.mapMarkers.forEach(location => {
            const icon = markerIcons[location.category] || markerIcons.heritage;
            const marker = L.marker([location.lat, location.lng], { icon: icon })
                .addTo(map)
                .on('click', () => showMarkerDetails(location));
            
            marker.bindPopup(`<strong>${location.name}</strong>`);
            marker.category = location.category;
            markers.push(marker);
        });
    }

    // Region navigation buttons
    const regionBtns = document.querySelectorAll('.region-btn');
    regionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lat = parseFloat(btn.dataset.lat);
            const lng = parseFloat(btn.dataset.lng);
            const zoom = parseInt(btn.dataset.zoom);
            map.flyTo([lat, lng], zoom);
        });
    });

    // Filter checkboxes
    const filterChecks = document.querySelectorAll('.filter-check input');
    filterChecks.forEach(check => {
        check.addEventListener('change', () => {
            const activeFilters = Array.from(filterChecks)
                .filter(c => c.checked)
                .map(c => c.value);
            
            markers.forEach(marker => {
                if (activeFilters.includes(marker.category)) {
                    marker.addTo(map);
                } else {
                    marker.remove();
                }
            });
        });
    });

    // Search functionality
    const mapSearch = document.getElementById('mapSearch');
    if (mapSearch) {
        mapSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            if (typeof indiaData !== 'undefined' && indiaData.mapMarkers) {
                const found = indiaData.mapMarkers.find(m => 
                    m.name.toLowerCase().includes(searchTerm)
                );
                if (found) {
                    map.flyTo([found.lat, found.lng], 10);
                }
            }
        });
    }

    // Modal close
    const modal = document.getElementById('destinationModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
}

function showMarkerDetails(location) {
    const modal = document.getElementById('destinationModal');
    const selectedPlace = document.getElementById('selectedPlace');
    
    if (modal) {
        document.getElementById('modalImage').src = location.image;
        document.getElementById('modalCategory').textContent = location.category;
        document.getElementById('modalTitle').textContent = location.name;
        document.getElementById('modalDescription').textContent = location.description;
        document.getElementById('modalLocation').textContent = location.state;
        document.getElementById('modalRating').textContent = location.rating + ' Rating';
        document.getElementById('modalBestTime').textContent = location.bestTime;
        document.getElementById('modalExplore').href = `state.html?state=${location.state}`;
        
        modal.classList.add('active');
    }

    if (selectedPlace) {
        selectedPlace.querySelector('.place-preview').innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center;">
                <img src="${location.image}" alt="${location.name}" style="width: 80px; height: 60px; border-radius: 8px; object-fit: cover;">
                <div>
                    <h4 style="margin: 0 0 5px; font-size: 1rem;">${location.name}</h4>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-gray);">${location.category}</p>
                </div>
            </div>
        `;
    }
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.region-card, .destination-card, .experience-card, .testimonial-card, .state-card, .place-card, .food-card, .package-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .custom-marker {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .custom-marker.heritage { background: #e74c3c; }
        .custom-marker.nature { background: #27ae60; }
        .custom-marker.beach { background: #3498db; }
        .custom-marker.temple { background: #f39c12; }
        .custom-marker.wildlife { background: #9b59b6; }
        .custom-marker.adventure { background: #1abc9c; }
        
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        }
        
        .notification.success { background: linear-gradient(135deg, #27ae60, #2ecc71); }
        .notification.error { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .notification.info { background: linear-gradient(135deg, #4FC3F7, #0288D1); }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Make functions globally accessible
window.nextStep = nextStep;
window.prevStep = prevStep;
window.processPayment = processPayment;
