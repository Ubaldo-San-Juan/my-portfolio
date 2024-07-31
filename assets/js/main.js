const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show menu
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu hiden
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu when an item is clicked
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Change header color
const baseColorHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('baseColorHeader') : header.classList.remove('baseColorHeader')
}
window.addEventListener('scroll', baseColorHeader)

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_0z2t7ol', 'template_jtykmpi', '#contact-form', 'cn1Fc33zKEB27qvic')
    .then(() => {
        contactMessage.textContent = 'El mensaje ha sido enviado exitosamente ✅'
        
        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000);

        // Clean inputs
        contactForm.reset()
    }), () => {
        contactMessage.textContent = 'El mensaje no se envió corrobora tus datos ❌'
    }
}

contactForm.addEventListener('submit', sendEmail)


// Scroll section active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// Scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
    reset: true
})

sr.reveal(`.home__data, .home__social`)


// Projects
document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos
    const projects = [
        {
            title: "La Casa de la Tía",
            date: "Agosto 2024",
            description: "Sitio web oficial del restaurante llamado La Casa de la Tía",
            skills: ["Angular", "HTML", "CSS", "Typescript"],
            githubLink: "https://github.com/user/trackify",
            projectLink: "https://lacasadelatiahuasca.com/",
            category: "frontend",
            image: "/assets/img/projects/frontend/la-casa-de-la-tia.png"
        },
        {
            title: "Portafolio web personal",
            date: "Agosto 2024",
            description: "Developed a full-stack web application that allows users to search for, play, and pause...",
            skills: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/user/podstream",
            projectLink: "https://podstream.example.com",
            category: "frontend",
            image: "/assets/img/projects/frontend/my-portfolio.png"
        },
        {
            title: "Axio - API",
            date: "Julio 2024",
            description: "Developed a RESTful API using Node.js and Express for managing data...",
            skills: [".Net Core", "Entity Framework", "PostgreSQL", "Swagger"],
            githubLink: "https://github.com/user/api-backend",
            projectLink: "https://api-backend.example.com",
            category: "backend",
            image: "/assets/img/projects/backend/axio-api.png"
        },
        {
            title: "Desktop App",
            date: "Aug 2023 - Oct 2023",
            description: "Aplicación de escritorio indispensable para cibercafés y negocios similares, diseñada para gestionar el cobro de tiempos de uso de manera eficiente y sencilla.",
            skills: ["Java", "Java Swing"],
            githubLink: "https://github.com/Ubaldo-San-Juan/SistemaControlClientes_V1",
            projectLink: "https://desktop-app.example.com",
            category: "otros",
            image: "/assets/img/projects/others/control-clientes-tiempo.png"
        }
    ];

    const projectsContainer = document.querySelector('.projects__content');
    const filterButtons = document.querySelectorAll('.projects__filter-btn');

    function renderProjects(category) {
        projectsContainer.innerHTML = ''; // Limpiar contenedor de proyectos
        const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

        filteredProjects.forEach(project => {
            const projectItem = `
                <div class="projects__item" data-category="${project.category}">
                    <img src="${project.image}" alt="${project.title} Project" class="projects__img">
                    <div class="projects__item-info">
                        <h3 class="projects__item-title">${project.title}</h3>
                        <span class="projects__item-date">${project.date}</span>
                        <p class="projects__item-description">${project.description}</p>
                        <div class="projects__item-skills">
                            ${project.skills.map(skill => `<span>${skill}</span>`).join('')}
                        </div>
                        <div class="projects__item-buttons">
                            <a href="${project.githubLink}" class="projects__item-button" target="_blank">Ver en GitHub</a>
                            <a href="${project.projectLink}" class="projects__item-button" target="_blank">Visitar Proyecto</a>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', projectItem);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterCategory = this.getAttribute('data-filter');
            renderProjects(filterCategory);
        });
    });

    // Renderizar todos los proyectos al cargar la página
    renderProjects('all');
});