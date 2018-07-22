

var nav = {
  logo: 'img/gslogo.png',
  menu: [
    { name: 'ABOUT', href: '#about', id: 'navAbout', desktopId: 'desktopAbout', selector: document.getElementById('about') },
    { name: 'SKILLS', href: '#skills', id: 'navSkills', desktopId: 'desktopSkills', selector: document.getElementById('skills') },
    { name: 'PROJECTS', href: '#projects', id: 'navProjects', desktopId: 'desktopProjects', selector: document.getElementById('projects') },
    { name: 'EDUCATION', href: '#education', id: 'navEducation', desktopId: 'desktopEducation', selector: document.getElementById('education') },
    { name: 'CONTACT', href: '#contact', id: 'navContact', desktopId: 'desktopContact', selector: document.getElementById('contact') }
  ]
}

var jumbotron = {
  title: 'GREG STEPHENS',
  subtitle: 'FRONT END DEVELOPER'
}

var about = {
  title: 'ABOUT',
  img: 'img/family.jpg',
  text: 'Hello, my name is Greg Stephens and I\'m a Front-End Web Developer from Athens, GA. I pride myself on being creative, easy-going, and driven to grow within my career. I\'m a father to an awesome 2 year old son and a husband to a wonderful wife of 4 years. My interests include spending time with my family, playing music, Georgia Football, Atlanta United Soccer, investing, politics, economics, and creating things.'
}

var skills = {
  title: 'SKILLS',
  skillsList: [
    { name: 'JavaScript', img: 'img/javascript.jpg', alt: 'JavaScript', href: 'https://www.javascript.com' },
    { name: 'HTML', img: 'img/html.jpg', alt: 'HTML', href: 'https://en.wikipedia.org/wiki/HTML5' },
    { name: 'CSS', img: 'img/css.jpg', alt: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' },
    { name: 'Bootstrap', img: 'img/bootstrap.jpg', alt: 'Bootstrap', href: 'http://getbootstrap.com/' },
    { name: 'Git', img: 'img/git.jpg', alt: 'Git', href: 'https://git-scm.com/' },
    { name: 'Illustrator', img: 'img/illustrator.jpg', alt: 'Adobe Illustrator', href: 'http://www.adobe.com/products/illustrator.html' }
  ]
}

var projects = {
  title: 'PROJECTS',
  projectsList: [
    { name: 'ETFInvestorProfile', img: 'img/project-etf.jpg', alt: 'ETF Investor Profile Project', href: 'https://gstephe7.github.io/etf-investor-profile/', description: 'Created a web application that generates an investment portfolio depending on the user’s financial situation. I implemented React.js, CSS, and Bootstrap to create this application. Adobe Illustrator was used to create illustrations.' },
    { name: 'Which Investment Account', img: 'img/project-wia.jpg', alt: 'Which Investment Account Project', href: 'https://gstephe7.github.io/which-investment-account/', description: 'Created a web application that helps users determine the right investment account to open depending on their financial situation. I implemented React.js, CSS, and Bootstrap to create this application. Adobe Illustrator was used to create illustrations. Ads were placed on the app using Google Adsense.' }
  ]
}

var education = {
  title: 'EDUCATION',
  schools: [
    { name: 'Kennesaw State University', degree: "Bachelor\'s in History Education", img: 'img/ksu.jpg', alt: 'Kennesaw State University', href: 'https://www.kennesaw.edu' }
  ]
}

var contact = {
  title: 'CONTACT',
  contactType: [
    { name: 'CELL', address: '678-863-0189', href: 'tel:678-863-0189', icon: 'fa fa-phone' },
    { name: 'EMAIL', address: 'gstephe7@gmail.com', href: 'mailto:gstephe7@gmail.com', icon: 'fa fa-envelope' },
    { name: 'LINKEDIN', address: 'gstephe7', href: 'https://www.linkedin.com/in/gstephe7', icon: 'fa fa-linkedin' },
    { name: 'GITHUB', address: 'gstephe7', href: 'https://www.github.com/gstephe7', icon: 'fa fa-github-alt' },
  ]
}


var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var mobileMenu = document.getElementById('mobileMenu');
var desktopNav = document.getElementById('desktopNavList');
var jumboTitle = document.getElementById('jumboTitle');
var jumboSubtitle = document.getElementById('jumboSubtitle');
var aboutTitle = document.getElementById('aboutTitle');
var aboutImage = document.getElementById('aboutImage');
var aboutText = document.getElementById('aboutText');
var skillsTitle = document.getElementById('skillsTitle');
var skillsList = document.getElementById('skillsList');
var projectsSection = document.getElementById('projects');
var projectsTitle = document.getElementById('projectsTitle');
var educationSection = document.getElementById('education');
var educationTitle = document.getElementById('educationTitle');
var contactSection = document.getElementById('contactList');
var contactTitle = document.getElementById('contactTitle');
var map;
var footer = document.getElementById('footerList')




//////////////////////////////

function displayMenu() {
  mobileMenu.classList.toggle('showMenu');
}

function displayTitle() {
  jumboTitle.classList.add('showTitle');
  jumboSubtitle.classList.add('showTitle');
}

function displaySection(num) {
  for (var item = 0; item < nav.menu.length; item++) {
    nav.menu[item].selector.classList.remove('showSection');
  }
  nav.menu[num].selector.classList.add('showSection');
}

function displayAbout() {
  displaySection(0);
}

function displaySkills() {
  displaySection(1);
}

function displayProjects() {
  displaySection(2);
}

function displayEducation() {
  displaySection(3);
}

function displayContact() {
  displaySection(4);
}



//////////////////////////

function createMenu() {
  for (var i = 0; i < nav.menu.length; i++) {
    var list = document.createElement('li');
    list.className = 'menuItem text-right';
    var menuItem = document.createElement('a');
    menuItem.innerHTML = nav.menu[i].name;
    menuItem.id = nav.menu[i].id;
    menuItem.href = nav.menu[i].href;
    menuItem.className = 'menuItem text-right';
    list.appendChild(menuItem);
    menu.appendChild(list);
  }
}

createMenu();

function createNav() {
  for (var item = 0; item < nav.menu.length; item++) {
    var list = document.createElement('li');
    list.className = 'menuItem';
    var menuItem = document.createElement('a');
    menuItem.innerHTML = nav.menu[item].name;
    menuItem.id = nav.menu[item].desktopId;
    menuItem.href = nav.menu[item].href;
    menuItem.className = 'menuItem text-right';
    desktopNav.appendChild(list);
    list.appendChild(menuItem);
  }
}

createNav();

function createTitle() {
  jumboTitle.innerHTML = jumbotron.title;
  jumboSubtitle.innerHTML = jumbotron.subtitle;
}

createTitle();

function createAbout() {
  aboutTitle.innerHTML = about.title;
  aboutImage.src = about.img;
  aboutText.innerHTML = about.text;
}

createAbout();

function createSkills() {
  skillsTitle.innerHTML = skills.title;
  for (var item = 0; item < skills.skillsList.length; item++) {
    var list = document.createElement('li');
    list.className = 'sectionLogo';
    var skillLink = document.createElement('a');
    skillLink.href = skills.skillsList[item].href;
    skillLink.target = '_blank';
    var logo = document.createElement('img');
    logo.className = 'sectionLogo img-rounded';
    logo.src = skills.skillsList[item].img;
    logo.alt = skills.skillsList[item].alt;
    skillsList.appendChild(list);
    list.appendChild(skillLink);
    skillLink.appendChild(logo);
  }
}

createSkills();

function createProjects() {
  projectsTitle.innerHTML = projects.title;
  for (var item = 0; item < projects.projectsList.length; item++) {

    //Create project elements
    var rowTitle = document.createElement('div');
    rowTitle.className = 'row';
    var colTitle = document.createElement('div');
    colTitle.className = 'col-xs-12';
    var projectLink = document.createElement('a');
    projectLink.href = projects.projectsList[item].href
    projectLink.target = '_blank';
    var projectTitle = document.createElement('h3');
    projectTitle.className = 'sectionSubtitle';
    projectTitle.innerHTML = projects.projectsList[item].name;
    var row = document.createElement('div');
    row.className = 'row';
    var colImg = document.createElement('div');
    colImg.className = 'col-md-5';
    var projectImageLink = document.createElement('a');
    projectImageLink.href = projects.projectsList[item].href;
    projectImageLink.target = '_blank';
    var projectImage = document.createElement('img');
    projectImage.className = 'sectionImage center-block img-rounded';
    projectImage.src = projects.projectsList[item].img;
    projectImage.alt = projects.projectsList[item].alt;
    var colText = document.createElement('div');
    colText.className = 'col-md-7';
    var projectText = document.createElement('p');
    projectText.className = 'sectionText';
    projectText.innerHTML = projects.projectsList[item].description;

    //Append project elements
    projectsSection.appendChild(rowTitle);
    rowTitle.appendChild(colTitle);
    colTitle.appendChild(projectLink);
    projectLink.appendChild(projectTitle);
    projectsSection.appendChild(row);
    row.appendChild(colImg);
    colImg.appendChild(projectImageLink);
    projectImageLink.appendChild(projectImage);
    row.appendChild(colText);
    colText.appendChild(projectText);
  }
}

createProjects();

function createEducation() {
  educationTitle.innerHTML = education.title;
  for (var item = 0; item < education.schools.length; item++) {

    //create education elements
    var row = document.createElement('div');
    row.className = 'row';
    var colImg = document.createElement('div');
    colImg.className = 'col-xs-4';
    var schoolImageLink = document.createElement('a');
    schoolImageLink.href = education.schools[item].href;
    schoolImageLink.target = '_blank';
    var schoolImage = document.createElement('img');
    schoolImage.className = 'sectionSchoolImage center-block';
    schoolImage.src = education.schools[item].img;
    schoolImage.alt = education.schools[item].alt;
    var colText = document.createElement('div');
    colText.className = 'col-xs-8';
    var schoolNameLink = document.createElement('a');
    schoolNameLink.href = education.schools[item].href;
    schoolNameLink.target = '_blank';
    var schoolName = document.createElement('h3');
    schoolName.className = 'sectionSubtitle';
    schoolName.innerHTML = education.schools[item].name;
    var degree = document.createElement('p');
    degree.className = 'sectionText';
    degree.innerHTML = education.schools[item].degree;

    //append education elements
    educationSection.appendChild(row);
    row.appendChild(colImg);
    colImg.appendChild(schoolImageLink);
    schoolImageLink.appendChild(schoolImage);
    row.appendChild(colText);
    colText.appendChild(schoolNameLink);
    schoolNameLink.appendChild(schoolName);
    colText.appendChild(degree);
  }
}

createEducation();

function createContact() {
  contactTitle.innerHTML = contact.title;
  for (var item = 0; item < contact.contactType.length; item++) {
    var list = document.createElement('li');
    list.className = 'sectionText';
    var contactText = document.createElement('p');
    contactText.className = 'sectionText';
    contactText.innerHTML = contact.contactType[item].name + ': ';
    var contactLink = document.createElement('a');
    contactLink.href = contact.contactType[item].href;
    contactLink.target = '_blank';
    contactLink.innerHTML = contact.contactType[item].address;

    contactSection.appendChild(list);
    list.appendChild(contactText);
    contactText.appendChild(contactLink);
  }
}

createContact();

function initMap() {
  var location = {lat: 33.951935, lng: -83.357567};
  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 6
  });
  var marker = new google.maps.Marker({position: location, map: map});
}

function createFooter() {
  for (var item = 0; item < contact.contactType.length; item++) {
    var list = document.createElement('li');
    list.className = 'footerText';
    var iconLink = document.createElement('a');
    iconLink.className = 'footerText';
    iconLink.href = contact.contactType[item].href;
    iconLink.target = "_blank";
    var icon = document.createElement('i');
    icon.className = contact.contactType[item].icon;

    footer.appendChild(list);
    list.appendChild(iconLink);
    iconLink.appendChild(icon);
  }
}

createFooter();

var navAbout = document.getElementById('navAbout');
var navSkills = document.getElementById('navSkills');
var navProjects = document.getElementById('navProjects');
var navEducation = document.getElementById('navEducation');
var navContact = document.getElementById('navContact');
var desktopAbout = document.getElementById('desktopAbout');
var desktopSkills = document.getElementById('desktopSkills');
var desktopProjects = document.getElementById('desktopProjects');
var desktopEducation = document.getElementById('desktopEducation');
var desktopContact = document.getElementById('desktopContact');

menuBtn.addEventListener('click', displayMenu);
mobileMenu.addEventListener('click', displayMenu);
navAbout.addEventListener('click', displayAbout);
navSkills.addEventListener('click', displaySkills);
navProjects.addEventListener('click', displayProjects);
navEducation.addEventListener('click', displayEducation);
navContact.addEventListener('click', displayContact);
desktopAbout.addEventListener('click', displayAbout);
desktopSkills.addEventListener('click', displaySkills);
desktopProjects.addEventListener('click', displayProjects);
desktopEducation.addEventListener('click', displayEducation);
desktopContact.addEventListener('click', displayContact);
window.addEventListener('load', displayTitle);

nav.menu[0].selector.classList.add('showSection');
