import { visit } from './visit-tab.js'
import { hover } from './social-hover.js'

const order = () => {
  // initial setup
  window.scrollTo(0,0);
  let container = document.getElementById('content');
  document.body.style.background = "white";
  document.body.style.color = "black";
  let bodyDivOld = document.querySelector('.mainbody');
  container.removeChild(bodyDivOld);
  

  // create order-eat menu
  let bodyDivNew = document.createElement('div');
  bodyDivNew.classList.add('mainbody');

  let title = document.createElement('h1');
  title.textContent = '—  ENTRÉES  —'
  bodyDivNew.appendChild(title);

  let emText = document.createElement('em');
  emText.textContent = 'Potenti nullam ac tortor vitae';
  bodyDivNew.appendChild(emText);

  let br = document.createElement('br');
  let foodsContainer = document.createElement('div');

  let foodOne = document.createElement('p');
  foodOne.textContent = " —  Hors d'oeuvres  — "
  foodOne.appendChild(br);
  foodOne.innerHTML += 'Goat cheese crostini with fig-olive tapenade';
  foodOne.appendChild(br.cloneNode());
  foodOne.innerHTML += '$22';
  
  let foodTwo = document.createElement('p');
  foodTwo.textContent = ' —  Amuse-bouche  — '
  foodTwo.appendChild(br.cloneNode());
  foodTwo.innerHTML += 'Sweet potato chips with goat cheese and caviar';
  foodTwo.appendChild(br.cloneNode());
  foodTwo.innerHTML += '$24';

  let foodThree = document.createElement('p');
  foodThree.textContent = ' —  Bouillabaisse  — '
  foodThree.appendChild(br.cloneNode());
  foodThree.innerHTML += 'dolor sit amet, consectetur';
  foodThree.appendChild(br.cloneNode());
  foodThree.innerHTML += '$27';

  let foodFour = document.createElement('p');
  foodFour.textContent = ' —  Lorém ipsum  — '
  foodFour.appendChild(br.cloneNode());
  foodFour.innerHTML += ' ut labore, et dolore ';
  foodFour.appendChild(br.cloneNode());
  foodFour.innerHTML += '$11';
  

  // dessert image
  let dessertsContainer = document.createElement('div');
  let img = document.createElement('img');
  img.classList.add('dessert-img');
  img.src = '../dist/img/dessert.jpg';

  //dessert menu
  dessertsContainer.appendChild(img);
  let titleDessert = document.createElement('h1');
  titleDessert.textContent = '—  DESSERT  —'
  dessertsContainer.appendChild(titleDessert);

  let emTextDessert = document.createElement('em');
  emTextDessert.textContent = 'Culpa qui officia deserunt mollit ';
  dessertsContainer.appendChild(emTextDessert);

  let dessertOne = document.createElement('p');
  dessertOne.textContent = ' —  Duis aute  — '
  dessertOne.appendChild(br);
  dessertOne.innerHTML += 'laboris, nisi ut, aliquip';
  dessertOne.appendChild(br.cloneNode());
  dessertOne.innerHTML += '$12';

  let dessertTwo = document.createElement('p');
  dessertTwo.textContent = ' —  Lemon Meringue Pie  — '
  dessertTwo.appendChild(br);
  dessertTwo.innerHTML += 'limoncello blueberry coulis, candied lemon';
  dessertTwo.appendChild(br.cloneNode());
  dessertTwo.innerHTML += '$12';

  let dessertThree = document.createElement('p');
  dessertThree.textContent = ' —  Applé vel   — '
  dessertThree.appendChild(br);
  dessertThree.innerHTML += 'nullam, ac tortor vitae, purus ';
  dessertThree.appendChild(br.cloneNode());
  dessertThree.innerHTML += '$9';

  let dessertFour = document.createElement('p');
  dessertFour.textContent = ' —  Gravida arcu  — '
  dessertFour.appendChild(br);
  dessertFour.innerHTML += 'eu tincidunt tortor, aliquam nulla, facilisi ';
  dessertFour.appendChild(br.cloneNode());
  dessertFour.innerHTML += '$8';


  // appending in a row
  foodsContainer.appendChild(foodOne);
  foodsContainer.appendChild(foodTwo);
  foodsContainer.appendChild(foodThree);
  foodsContainer.appendChild(foodFour);

  dessertsContainer.appendChild(dessertOne);
  dessertsContainer.appendChild(dessertTwo);
  dessertsContainer.appendChild(dessertThree);
  dessertsContainer.appendChild(dessertFour);

  let reservationButton = document.createElement('div');
  reservationButton.classList.add('res-button');
  reservationButton.textContent = 'MAKE A RESERVATION';
  reservationButton.addEventListener('click', visit);

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
  instagram.classList.add('fab', 'fa-instagram', 'social-nav', 'footer-instagram');
  

  socialDiv.appendChild(twitter);
  socialDiv.appendChild(instagram);


  bodyDivNew.appendChild(foodsContainer);
  bodyDivNew.appendChild(dessertsContainer);
  bodyDivNew.appendChild(reservationButton);
  bodyDivNew.appendChild(seperate);
  bodyDivNew.appendChild(titleFooter);
  bodyDivNew.appendChild(socialDiv);
  container.appendChild(bodyDivNew);
  hover();
  }
  
  export{order};