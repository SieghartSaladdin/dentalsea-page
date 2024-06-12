// Navbar Responsive
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if(mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle('openNav');

        closeBtnIcon.classList.toggle(arrowLeftClass);
        closeBtnIcon.classList.toggle(arrowRightClass);
    }
})

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// Scroll Reveal animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 300
})

// Pilih semua bagian dan tautan navigasi untuk desktop dan mobile
let sections = document.querySelectorAll('section');
let navLinksDesktop = document.querySelectorAll('#nav-desktop ul li a');
let navLinksMobile = document.querySelectorAll('#nav-mobile ul li a');
let navDesktop = document.getElementById('nav-desktop');

// Tentukan titik di mana navigasi berubah menjadi fixed
let stickyPoint = navDesktop.offsetTop + navDesktop.offsetHeight;

// Fungsi untuk mengatur nav link aktif berdasarkan scroll
function setNavActive() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            // Update nav links for desktop
            navLinksDesktop.forEach(link => {
                link.classList.remove('active');
                let desktopLink = document.querySelector('#nav-desktop a[href*=' + id + ']');
                if (desktopLink) desktopLink.classList.add('active');
            });

            // Update nav links for mobile
            navLinksMobile.forEach(link => {
                link.classList.remove('active');
                let mobileLink = document.querySelector('#nav-mobile a[href*=' + id + ']');
                if (mobileLink) mobileLink.classList.add('active');
            });
        }
    });
}

// Fungsi untuk mengatur kelas fixed pada navigasi
function setStickyNav() {
    if (window.scrollY > stickyPoint) {
        navDesktop.classList.add('fixed');
    } else {
        navDesktop.classList.remove('fixed');
    }
}

// Event listener untuk scroll
window.onscroll = function() {
    setNavActive();
    setStickyNav();
};

// Fungsi untuk menyesuaikan posisi scroll dengan offset
function scrollToElement(element, offset = 0) {
    window.scrollTo({
        behavior: 'smooth', // animasi smooth scroll
        top: element.offsetTop - offset // menyesuaikan posisi scroll dengan offset
    });
}

// Menangani klik pada tautan di kedua navigasi
document.querySelectorAll('#nav-desktop a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // menghentikan perilaku bawaan dari tautan

        // Mendapatkan elemen tujuan berdasarkan atribut href tautan
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Menyesuaikan posisi scroll dengan offset
            const offset = 135; // ganti nilai offset sesuai kebutuhan Anda
            scrollToElement(target, offset);
        }
    });
});

// Menangani klik pada tautan di kedua navigasi
document.querySelectorAll('#nav-mobile a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // menghentikan perilaku bawaan dari tautan

        // Mendapatkan elemen tujuan berdasarkan atribut href tautan
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Menyesuaikan posisi scroll dengan offset
            const offset = 50; // ganti nilai offset sesuai kebutuhan Anda
            scrollToElement(target, offset);
        }
    });
});



// Hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img', {origin: 'right'});


// Steps
sr.reveal('.steps__step', {origin: 'top', interval: '300'});

// About
sr.reveal('.about__text', {origin: 'top'});
sr.reveal('.about__img', {origin: 'right'});

// Services
sr.reveal('.services', {origin: 'top'});
sr.reveal('.services__top', {origin: 'top'});
sr.reveal('.services__item', {delay: 600, distance: '100px', interval: 100, origin: 'bottom'});

// Appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// Blogbeach
sr.reveal('.blog__title');
sr.reveal('.blog__subtitle');
sr.reveal('.blog__item', {delay: 600, distance: '100px', interval: 100, origin: 'bottom'});

// Team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// Newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// Footer
sr.reveal('.footer__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
}); 
