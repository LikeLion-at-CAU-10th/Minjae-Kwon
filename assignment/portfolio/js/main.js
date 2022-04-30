document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#welcome', {
    strings: "Welcome to my Portfolio!"
  })
    .pause(1000)
    .go()
    .delete(24)
    .type("Welcome to my Portfolio!")
})

const checkBox = document.querySelector('.checkbox');
const header = document.querySelector('header');
const contact = document.querySelector('.contact');
const skills = document.querySelector('.skills')



checkBox.addEventListener('click', toggleClick);

function toggleClick() {
  header.classList.toggle('dark');
  document.body.classList.toggle('dark');
  contact.classList.toggle('dark');
  skills.classList.toggle('dark');
}

const goToAbout = document.querySelector('#about');
const goToSkills = document.querySelector('#skills');
const goToProjects = document.querySelector('#projects');
const goToContact = document.querySelector('#contact');

goToAbout.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 500
  });
});
goToSkills.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 1050
  });
});
goToContact.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 1050
  });
});