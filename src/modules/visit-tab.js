import { order } from './order-now-tab.js'
import { hover } from './social-hover.js'

const visit = () => {
    // initial setup
    window.scrollTo(0,0);
    let container = document.getElementById('content');
    document.body.style.background = "white";
    document.body.style.color = "black";
    let bodyDivOld = document.querySelector('.mainbody');
    container.removeChild(bodyDivOld);

    //create visit menu
    let bodyDivNew = document.createElement('div');
    bodyDivNew.classList.add('mainbody');

    let title = document.createElement('h1');
    title.textContent = '—  MAKE A RESERVATION  —'
    bodyDivNew.appendChild(title);

    let tableButton = document.createElement('div');
    tableButton.classList.add('table-button');
    tableButton.textContent = 'FIND A TABLE';
    bodyDivNew.appendChild(tableButton);

    let br = document.createElement('br');

    let contact = document.createElement('div');
    contact.classList.add('contact');
    let contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Contact';
    contactTitle.classList.add('contact-title');
    contactTitle.appendChild(br);
    let contactNum = document.createElement('a');
    contactNum.textContent = '2079 7897 0336';
    contactNum.appendChild(br.cloneNode());
    let contactEmail = document.createElement('a');
    contactEmail.textContent = 'hello@vedat.co';

    contact.appendChild(contactTitle);
    contact.appendChild(contactNum);
    contact.appendChild(contactEmail);
    bodyDivNew.appendChild(contact);

    let location = document.createElement('div');
    location.classList.add('location');
    let locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location';
    locationTitle.classList.add('location-title');
    locationTitle.appendChild(br.cloneNode());
    let locationAdress = document.createElement('a');
    locationAdress.textContent = '001 Some Street ';
    locationAdress.appendChild(br.cloneNode());
    let locationCity = document.createElement('a');
    locationCity.textContent = 'London, UK, 00000';
    

    location.appendChild(locationTitle);
    location.appendChild(locationAdress);
    location.appendChild(locationCity);
    bodyDivNew.appendChild(location);

    let hours = document.createElement('div');
    hours.classList.add('hours');
    let hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';
    hoursTitle.classList.add('hours-title');
    hoursTitle.appendChild(br.cloneNode());
    let hoursOne = document.createElement('a');
    hoursOne.textContent = 'Mon–Wed  7–11';
    hoursOne.appendChild(br.cloneNode());
    let hoursTwo = document.createElement('a');
    hoursTwo.textContent = 'Thu–Sat  3–12';
    hoursTwo.appendChild(br.cloneNode());
    let hoursThree = document.createElement('a');
    hoursThree.textContent = 'Sun  2–10';
    

    hours.appendChild(hoursTitle);
    hours.appendChild(hoursOne);
    hours.appendChild(hoursTwo);
    hours.appendChild(hoursThree);
    bodyDivNew.appendChild(hours);

    let img = document.createElement('img');
    img.classList.add('drink-img');
    img.src = '../dist/img/drink2.jpg';
    bodyDivNew.appendChild(img);

    let eatButton = document.createElement('div');
    eatButton.classList.add('eat-button');
    eatButton.textContent = 'VIEW FOOD MENU';
    eatButton.addEventListener('click', order);
    bodyDivNew.appendChild(eatButton);

    let seperate = document.createElement('hr');
    seperate.classList.add('thin');

    let titleFooter = document.createElement('a');
    titleFooter.textContent = " —V É D A T 'S— "
    titleFooter.classList.add('title-footer');

    let socialDiv = document.createElement('div');
    socialDiv.classList.add('social-div');
    let twitter = document.createElement('a');
    twitter.classList.add('fab', 'fa-twitter', 'social-nav', 'footer-twitter');
    let instagram = document.createElement('a');
    instagram.classList.add('fab', 'fa-instagram', 'social-nav','footer-instagram');
    

    socialDiv.appendChild(twitter);
    socialDiv.appendChild(instagram);

    bodyDivNew.appendChild(seperate);
    bodyDivNew.appendChild(titleFooter);
    bodyDivNew.appendChild(socialDiv);
    container.appendChild(bodyDivNew);
    hover();
  }
  
  export{visit};