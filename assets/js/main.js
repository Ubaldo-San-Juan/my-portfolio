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