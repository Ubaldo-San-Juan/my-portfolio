const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu hiden
if (navClose) {
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
const baseColorHeader = () => {
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

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
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


// Habilidades
document.addEventListener('DOMContentLoaded', function () {
    // Datos de habilidades
    const skills = [
        {
            title: "Frontend",
            items: [
                { icon: "ri-html5-fill", text: "HTML5" },
                { icon: "ri-css3-line", text: "CSS3" },
                { icon: "ri-javascript-line", text: "JavaScript" },
                { icon: "/assets/img/icons/angular-icon.svg", text: "Angular" }
            ]
        },
        {
            title: "Backend",
            items: [
                
                { icon: "/assets/img/icons/c--4-icon.svg", text: "C#"},
                { icon: "/assets/img/icons/java-icon.svg", text: "Java"},
                { icon: "/assets/img/icons/dotnet-icon.svg", text: ".Net Core"},
                { icon: "/assets/img/icons/spring-boot-icon.svg", text: "Spring Boot"}
            ]
        },
        {
            title: "Bases de datos",
            items: [
                { icon: "/assets/img/icons/mysql-icon.svg", text: "Mysql" },
                { icon: "/assets/img/icons/postgresql-icon.svg", text: "PostgreSQL" },
                { icon: "/assets/img/icons/sql-server-icono.svg", text: "SQLServer" }
            ]
        },
        {
            title: "Control de versiones",
            items: [
                { icon: "/assets/img/icons/git-icon.svg", text: "Git" },
                { icon: "/assets/img/icons/github-icon.svg", text: "GitHub" },
                { icon: "/assets/img/icons/gitlab-icon.svg", text: "GitLab" },
                { icon: "/assets/img/icons/azure-icon.svg", text: "Azure Devops" }
            ]
        },
        {
            title: "Sistemas Operativos",
            items: [
                { icon: "/assets/img/icons/linux-ubuntu-icon.svg", text: "Ubuntu" },
                { icon: "/assets/img/icons/kali-linux-icon.svg", text: "Kali linux" }
            ]
        }
    ];

    const skillsContainer = document.querySelector('.skills__content');

    function renderSkills() {
        skills.forEach(skillGroup => {
            const skillGroupHtml = `
                <div class="skills__group">
                    <h3 class="skills__group-title">${skillGroup.title}</h3>
                    <ul class="skills__list">
                        ${skillGroup.items.map(item => `
                            <li class="skills__item">
                                ${item.icon.startsWith('ri-') ? 
                                    `<i class="${item.icon}"></i>` :
                                    `<i><img src="${item.icon}" alt="" class="skills__icon"></i>`
                                }
                                <span>${item.text}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            skillsContainer.insertAdjacentHTML('beforeend', skillGroupHtml);
        });
    }

    // Renderizar las habilidades al cargar la página
    renderSkills();
});



// Projects
document.addEventListener('DOMContentLoaded', function () {
    // Datos de proyectos con visibilidad de botones
    const projects = [
        {
            title: "La Casa de la Tía",
            date: "Agosto 2024",
            description: "Sitio web oficial del restaurante La Casa de la Tía. Esta plataforma permite a los visitantes explorar el menú, obtener información de contacto y conocer la historia del restaurante, todo en un entorno intuitivo y accesible desde cualquier dispositivo.",
            skills: ["Angular", "HTML", "CSS", "Typescript"],
            githubLink: "",
            projectLink: "https://lacasadelatiahuasca.com/",
            category: "frontend",
            image: "/assets/img/projects/frontend/la-casa-de-la-tia.png",
            showGithub: false,
            showProject: true
        },
        {
            title: "Portafolio web personal",
            date: "Agosto 2024",
            description: "Portafolio web personal diseñado para mostrar mis habilidades en desarrollo de software, con un enfoque en desarrollo web. Incluye proyectos destacados y una presentación clara de mis competencias técnicas.",
            skills: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/Ubaldo-San-Juan/my-portfolio",
            projectLink: "https://ubaldosanjuandev.netlify.app/",
            category: "frontend",
            image: "/assets/img/projects/frontend/my-portfolio.png",
            showGithub: true,
            showProject: true
        },
        {
            title: "Scientific Calculator APP",
            date: "Diciembre 2024",
            description: "Calculadora científica en Angular con operaciones básicas y avanzadas como seno, raíz cuadrada y logaritmos, además de un botón para alternar entre modo claro y oscuro.",
            skills: ["Angular", "HTML", "CSS", "Typescript"],
            githubLink: "https://github.com/Ubaldo-San-Juan/scientific-calculator-app",
            projectLink: "https://scientific-calculator-app-usan.netlify.app",
            category: "frontend",
            image: "/assets/img/projects/frontend/calculator-app.png",
            showGithub: true,
            showProject: true
        },
        {
            title: "Axio - API",
            date: "Julio 2024",
            description: "API REST robusta diseñada para la administración integral de cursos, que abarca el registro de actividades y la gestión de evaluaciones, garantizando un control eficiente del contenido educativo. (Codigo fuente no mostrado debido a políticas de confidencialidad).",
            skills: [".Net Core", "Entity Framework", "PostgreSQL", "Swagger"],
            githubLink: "",
            projectLink: "",
            category: "backend",
            image: "/assets/img/projects/backend/axio-api.png",
            showGithub: false,
            showProject: false
        },
        {
            title: "Sistema Control de clientes",
            date: "Ago 2022 - Oct 2022",
            description: "Aplicación de escritorio esencial para cibercafés y negocios similares, diseñada para gestionar de manera eficiente el cobro a clientes por tiempo de uso, con una interfaz simple y efectiva.",
            skills: ["Java", "Java Swing"],
            githubLink: "https://github.com/Ubaldo-San-Juan/SistemaControlClientes_V1.git",
            projectLink: "https://drive.google.com/file/d/1bSffeCqjlLx-V781fg8-9ZH3L_BP2LHb/view?usp=sharing",
            category: "otros",
            image: "/assets/img/projects/others/control-clientes-tiempo.png",
            showGithub: true,
            showProject: true
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
                            ${project.showGithub ? `<a href="${project.githubLink}" class="projects__item-button" target="_blank">Ver en GitHub</a>` : ''}
                            ${project.showProject ? `<a href="${project.projectLink}" class="projects__item-button" target="_blank">Visitar Proyecto</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', projectItem);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterCategory = this.getAttribute('data-filter');
            renderProjects(filterCategory);
        });
    });

    // Renderizar todos los proyectos al cargar la página
    renderProjects('all');
});
