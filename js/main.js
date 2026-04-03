/**
 * ART STUDIO VANJA - Main JavaScript
 * Handles navigation, filters, animations, and interactive features
 */

// ==================== NAVIGATION ====================

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==================== PROJECT FILTERS ====================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-year');

            // Filter projects
            projectCards.forEach(card => {
                const cardYear = card.getAttribute('data-year');

                if (filterValue === 'all' || cardYear === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ==================== PROJECT MODAL ====================

// Project data
const projectData = {
    plesZivota: {
        title: 'Projekat Ples života',
        year: '2020',
        quote: '„živi danas, jer juče je prošlo, a sutra je neizvesno"',
        description: `Projekat izložba „Ples života" predstavlja snažan i poetičan vizuelni narativ o lepoti, energiji i duhu romskog naroda. Kroz seriju grafika izvedenih u tehnici linoreza, umetnica oblikuje autentičnu viziju života koji je ispunjen radošću, muzikom, strastima i dubokom ljudskom povezanošću.

Celokupan opus podeljen je u dva ciklusa – crno-beli i koloristički. Dok crno-beli radovi naglašavaju snagu forme, kontrasta i pokreta, koloristički ciklus uvodi simbolički jezik boja: plava kao sloboda, crvena kao ljubav i zelena kao život.

Polazeći od inspiracije romskom kulturom i tradicijom, umetnica se udaljava od dokumentarnog pristupa i umesto toga gradi umetnički izraz zasnovan na bogatstvu ornamentike, simbola i figuracije.

Kroz ovaj ciklus, figure postaju nosioci životne filozofije – „živi danas, jer juče je prošlo, a sutra je neizvesno". Upravo taj duh slobode, neposrednosti i snažne životne energije prožima čitavu izložbu, pretvarajući svaki rad u vizuelni „ples života".

Izložba je otvorena u Arhivu Vojvodine 2020. godine.`,
        youtubeUrl: 'https://www.youtube.com/watch?v=5bi3dLKQ2Ig&si=dEMVN2xZeHK-wLKr',
        images: [
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-49-591.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-50-202.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-50-697.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-51-156.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-51-590.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-52-035.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-52-521.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-52-965.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-53-296.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-53-657.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-54-094.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-55-311.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-55-748.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-56-234.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-56-736.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-57-220.jpg',
            'images/projects/ples-zivota/viber_image_2026-04-03_11-08-58-859.jpg'
        ]
    },
    decijiSvet: {
        title: 'Projekat Dečiji svet u bojama tradicije',
        year: '2025',
        description: `Projekat „Dečiji svet u bojama tradicije" imao je za cilj da kroz udruženje Art studio Vanja podrži razvoj dečjeg izražavanja, samopouzdanja i osećaja pripadnosti kod dece romske nacionalnosti uzrasta od 7 do 12 godina.

Kroz seriju likovnih radionica održanih u Osnovnoj školi „Jovan Dučić" koje je vodio mladi likovni umetnik, deca su učila osnove crtanja i slikanja, inspirisane romskom kulturom, tradicijom i životom u zajednici.

Kruna projekta bila je izložba dečjih radova, organizovana u Arhivu Vojvodine 12.12.2025. godine, kojom se poslala pozitivna poruka o talentu, vrednosti i lepoti romske dečje kreativnosti.

Projekat podstiče inkluziju, umetnički razvoj i promociju kulturnog nasleđa kroz aktivnu participaciju najmlađih.

Projekat je finansiran od strane Pokrajinskog sekretarijata za socijalnu politiku, demografiju i ravnopravnost polova.`,
        images: [
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-37-420.jpg',
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-37-960.jpg',
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-38-720.jpg',
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-39-046.jpg',
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-39-400.jpg',
            'images/projects/deciji-svet/viber_image_2026-04-03_10-10-39-723.jpg'
        ]
    },
    reljefiSecesije: {
        title: 'Projekat Reljefi secesije – umetnost grada',
        year: '2025',
        description: `Projekat „Reljefi secesije – umetnost grada" bio je inspirisan bogatim arhitektonskim nasleđem Novog Sada i imao je za cilj da udruženje Art studio Vanja kroz savremenu umetničku interpretaciju, osvetli vrednost i lepotu secesijskog stila kao dela kulturnog identiteta grada.

Kroz umetničku sinergiju fotografije i vajarstva, projekat je afirmisao vizuelne umetnike i istovremeno podizao svest o značaju očuvanja arhitektonske baštine.

Glavni cilj projekta bio je da putem savremenog umetničkog izraza podstakne interesovanje građana za arhitektonsko nasleđe Novog Sada i da podigne svest o značaju očuvanja secesijske arhitekture.

Ključni element održivosti je Instagram digitalni katalog, koji ostaje javan i aktivno se koristi za dalje promovisanje arhitektonskog nasleđa Novog Sada i afirmaciju lokalnih vizuelnih umetnika.

Projekat je finansiran od strane gradske uprave za kulturu Novog Sada za savremeno stvaralaštvo 2025. godine.`,
        instagramUrl: 'https://www.instagram.com/reljefi.secesije',
        images: [
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-14-003.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-14-526.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-14-897.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-15-192.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-15-501.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-16-395.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-16-867.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-17-238.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-17-558.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-17-894.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-18-198.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-18-517.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-18-813.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-19-110.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-19-876.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-20-214.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-20-571.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-21-036.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-21-502.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-21-829.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-22-173.jpg',
            'images/projects/reljefi-secesije/viber_image_2026-04-03_11-21-22-490.jpg'
        ]
    },
    vizantija: {
        title: 'Projekat Vizantija Novog Doba',
        subtitle: 'Umetnost koja progovara bojama duše',
        year: '2024',
        quote: '„Nije strašno biti sam, strašno je ne videti lepotu samoće."',
        description: `Postoje umetnička dela koja vas ne ostavljaju ravnodušnim. Ona koja vas ne pozivaju samo da gledate, već da osetite, da proživite njihovu poruku. Takva je i izložba „Vizantija – Novo Doba" umetnice Vanje Ignjac Đukić.

Vanja Ignjac Đukić, umetnica koja već godinama aktivno izlaže u Srbiji i inostranstvu, kroz ovaj ciklus povezuje večne vrednosti Vizantije sa savremenim čovekom. U svetu ubrzanih promena, njena dela postaju poziv na zaustavljanje i unutrašnje preispitivanje.

Izložba je prožeta simbolikom četiri boje:

**Plava boja: Sloboda detinjstva**
Detinjstvo je simbol bezbrižnosti i čistoće, koji nas prati i kroz život, skriven duboko u nama.

**Crvena boja: Ljubav kao suština života**
U vremenu kada često gubimo kontakt sa sobom, ova boja podseća da je ljubav prema sebi temelj svakog zdravog odnosa.

**Crna boja: Anksioznost savremenog doba**
Crna u Vanjinim slikama nije praznina — ona je podsetnik na sve ono o čemu ćutimo, na borbe koje vodimo u tišini.

**Zlatna boja: Večnost i suština**
Kao svetlost koja prožima tamu, zlatna boja u Vanjinim delima nosi veru da istinske vrednosti nikada ne nestaju.

U svetu površnosti, ona nas vraća onome što je suštinski važno — iskrenim emocijama, ljubavi, razumevanju i slobodi biti svoj.`,
        youtubeUrl: 'https://www.youtube.com/watch?v=rU4sqBiRKuk',
        images: [
            'images/projects/vizantija/503607739_1239984691470916_4151412287843451661_n.jpg',
            'images/projects/vizantija/503758832_1239988854803833_29673900684824038_n.jpg',
            'images/projects/vizantija/504005088_1239985804804138_1124844065659062124_n.jpg',
            'images/projects/vizantija/504148586_1239984501470935_3119097937971592949_n.jpg',
            'images/projects/vizantija/504443574_1239987724803946_7248700253215256070_n.jpg',
            'images/projects/vizantija/504674311_1239986661470719_8839741742942941784_n.jpg',
            'images/projects/vizantija/504747416_1239989021470483_5959543126837714753_n.jpg',
            'images/projects/vizantija/Agape-2.jpg',
            'images/projects/vizantija/Agapije.jpg',
            'images/projects/vizantija/Vasilije-2.jpg',
            'images/projects/vizantija/Vizantija-2.jpg',
            'images/projects/vizantija/Vizantije-2.jpg',
            'images/projects/vizantija/Gala-2.jpg',
            'images/projects/vizantija/Georgije-2.jpg',
            'images/projects/vizantija/Grigorije.jpg',
            'images/projects/vizantija/Dimitra-2.jpg',
            'images/projects/vizantija/Dimitrije.jpg',
            'images/projects/vizantija/Doroteja-2.jpg',
            'images/projects/vizantija/Konstantin.jpg',
            'images/projects/vizantija/Liberta.jpg',
            'images/projects/vizantija/Luka-2.jpg',
            'images/projects/vizantija/Marija Magdalena-2.jpg',
            'images/projects/vizantija/Melanholija-2.jpg',
            'images/projects/vizantija/Mina.jpg',
            'images/projects/vizantija/Petar.jpg',
            'images/projects/vizantija/Petra-2.jpg',
            'images/projects/vizantija/Simeon-2.jpg'
        ]
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    if (!project) return;

    // Build quote HTML
    let quoteHTML = '';
    if (project.quote) {
        quoteHTML = `
            <div style="margin: 2rem 0; padding: 1.5rem; background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(184, 134, 11, 0.1)); border-left: 4px solid var(--primary-color); border-radius: 5px;">
                <p style="font-family: 'Playfair Display', serif; font-size: 1.2rem; font-style: italic; color: var(--primary-color); margin: 0;">${project.quote}</p>
            </div>
        `;
    }

    // Build subtitle HTML
    let subtitleHTML = '';
    if (project.subtitle) {
        subtitleHTML = `<h3 style="color: var(--secondary-color); margin-bottom: 1rem; font-weight: 400;">${project.subtitle}</h3>`;
    }

    // Build modal content
    let imagesHTML = '';
    if (project.images && project.images.length > 0) {
        imagesHTML = `
            <div class="modal-gallery" style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Galerija</h3>
                <div class="project-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${project.images.map((img, index) => `
                        <div class="project-gallery-item" data-index="${index}" style="position: relative; border-radius: 8px; overflow: hidden; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'">
                            <img src="${img}" alt="${project.title}" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Build YouTube HTML
    let youtubeHTML = '';
    if (project.youtubeUrl) {
        youtubeHTML = `
            <div style="margin: 2rem 0; text-align: center;">
                <a href="${project.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: linear-gradient(135deg, #8B4513, #B8860B); color: white; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 1.05rem; transition: transform 0.3s ease, box-shadow 0.3s ease; border: none;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(139, 69, 19, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Pogledajte intervju na YouTube</span>
                </a>
            </div>
        `;
    }

    // Build Instagram embed HTML
    let instagramHTML = '';
    if (project.instagramUrl) {
        instagramHTML = `
            <div style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Pratite projekat na Instagram-u</h3>
                <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, rgba(139, 69, 19, 0.05), rgba(184, 134, 11, 0.05)); border-radius: 8px;">
                    <a href="${project.instagramUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; background: linear-gradient(135deg, #8B4513, #B8860B); color: white; text-decoration: none; border-radius: 25px; font-weight: 600; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(139, 69, 19, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>Posetite @reljefi.secesije</span>
                    </a>
                    <p style="margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">Digitalni katalog sa fotografijama i video-sadržajima o secesijskoj arhitekturi Novog Sada</p>
                </div>
            </div>
        `;
    }

    let objectivesHTML = '';
    if (project.objectives && project.objectives.length > 0) {
        objectivesHTML = `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Ciljevi projekta</h3>
                <ul style="list-style: disc; margin-left: 2rem; color: var(--text-light);">
                    ${project.objectives.map(obj => `<li style="margin-bottom: 0.5rem;">${obj}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    let resultsHTML = '';
    if (project.results && project.results.length > 0) {
        resultsHTML = `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Rezultati</h3>
                <ul style="list-style: disc; margin-left: 2rem; color: var(--text-light);">
                    ${project.results.map(res => `<li style="margin-bottom: 0.5rem;">${res}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${project.title}</h2>
        ${subtitleHTML}
        <span style="display: inline-block; background-color: var(--primary-color); color: white; padding: 5px 15px; border-radius: 20px; margin-bottom: 1rem;">${project.year}</span>
        ${quoteHTML}
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">O projektu</h3>
            <p style="color: var(--text-light); line-height: 1.8; white-space: pre-line;">${project.description}</p>
        </div>
        ${objectivesHTML}
        ${resultsHTML}
        ${imagesHTML}
        ${youtubeHTML}
        ${instagramHTML}
    `;

    // Reset scroll before showing modal
    modal.scrollTop = 0;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Ensure scroll is at top after modal opens
    requestAnimationFrame(() => {
        modal.scrollTop = 0;
        window.scrollTo(0, 0);
    });
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
const modal = document.getElementById('projectModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ==================== CONTACT FORM ====================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Hvala vam! Vaša poruka je uspešno poslata. Odgovorićemo vam u najkraćem mogućem roku.';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
        }, 1000);

        /*
        // Example: Actual form submission to server
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Hvala vam! Vaša poruka je uspešno poslata.';
            contactForm.reset();
        })
        .catch(error => {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Došlo je do greške. Molimo pokušajte ponovo.';
        });
        */
    });
}

// ==================== STATS COUNTER ANIMATION ====================

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for stats animation
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================

const revealElements = document.querySelectorAll('.mission-card, .project-card, .vmv-card, .activity-item');

if (revealElements.length > 0) {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => revealObserver.observe(element));
}

// ==================== LAZY LOADING IMAGES ====================

const lazyImages = document.querySelectorAll('img[data-src]');

if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== PAGE LOAD ANIMATION ====================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== GALLERY TOGGLE ====================

function toggleGallery() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    const toggleBtn = document.getElementById('galleryToggleBtn');
    const toggleText = document.getElementById('galleryToggleText');
    const toggleIcon = document.getElementById('galleryToggleIcon');

    if (hiddenItems.length > 0 && hiddenItems[0].style.display === 'block') {
        // Hide items
        hiddenItems.forEach(item => {
            item.style.display = 'none';
            item.classList.add('hidden');
        });
        toggleText.textContent = 'Prikaži sve fotografije (18)';
        toggleBtn.classList.remove('active');
    } else {
        // Show items
        hiddenItems.forEach(item => {
            item.style.display = 'block';
            item.classList.remove('hidden');
        });
        toggleText.textContent = 'Prikaži manje';
        toggleBtn.classList.add('active');

        // Scroll to first hidden image smoothly
        if (hiddenItems.length > 0) {
            setTimeout(() => {
                hiddenItems[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }
}

// ==================== LIGHTBOX GALLERY ====================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

if (lightbox) {
    let currentIndex = 0;
    let images = [];
    let currentGalleryType = null;

    function updateImages(galleryType) {
        currentGalleryType = galleryType;
        let galleryItems;

        if (galleryType === 'project') {
            galleryItems = document.querySelectorAll('.project-gallery-item');
        } else {
            galleryItems = document.querySelectorAll('.gallery-item');
        }

        images = Array.from(galleryItems).map(item => item.querySelector('img').src);
    }

    function openLightbox(index, galleryType) {
        updateImages(galleryType);
        currentIndex = index;
        lightboxImage.src = images[currentIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCounter();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex];
        updateCounter();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex];
        updateCounter();
    }

    function updateCounter() {
        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
        }
    }

    // Event listeners - use event delegation for both gallery types
    document.addEventListener('click', (e) => {
        // Check for workshop gallery items
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const index = parseInt(galleryItem.getAttribute('data-index'));
            openLightbox(index, 'workshop');
            return;
        }

        // Check for project gallery items
        const projectGalleryItem = e.target.closest('.project-gallery-item');
        if (projectGalleryItem) {
            const index = parseInt(projectGalleryItem.getAttribute('data-index'));
            openLightbox(index, 'project');
            return;
        }
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            showNextImage();
        }
        if (touchEndX > touchStartX + 50) {
            showPrevImage();
        }
    }
}

// ==================== UTILITIES ====================

// Log message for development
console.log('ART STUDIO VANJA - Website loaded successfully');
