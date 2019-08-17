const createDom = () => {
  //get main div
  let container = document.getElementById('content');

  // create header
  let headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  

  // create title(brand-logo)
  let leftDiv = document.createElement('div');
  leftDiv.classList.add('left');
  headerDiv.appendChild(leftDiv);

  let h1Title = document.createElement('h1');
  h1Title.textContent = "V É D A T 'S";
  leftDiv.appendChild(h1Title);

  // create top right tabs
  let rightDiv = document.createElement('div');
  rightDiv.classList.add('right');
  headerDiv.appendChild(rightDiv);

  let orderTab = document.createElement('a');
  orderTab.classList.add('hover-color','right-nav');
  orderTab.textContent = 'Order Now';
  rightDiv.appendChild(orderTab);

  let homeTab = document.createElement('a');
  homeTab.classList.add('hover-color','right-nav');
  homeTab.textContent = 'Home';
  rightDiv.appendChild(homeTab);

  let galleryTab = document.createElement('a');
  galleryTab.classList.add('hover-color','right-nav');
  galleryTab.textContent = 'Gallery';
  rightDiv.appendChild(galleryTab);

  let storyTab = document.createElement('a');
  storyTab.classList.add('hover-color','right-nav');
  storyTab.textContent = 'Story';
  rightDiv.appendChild(storyTab);

  let visitTab = document.createElement('a');
  visitTab.classList.add('hover-color','right-nav');
  visitTab.textContent = 'Visit';
  rightDiv.appendChild(visitTab);

  let twitterTab = document.createElement('i');
  twitterTab.classList.add('fab', 'fa-twitter', 'social-nav');
  rightDiv.appendChild(twitterTab);

  let instagramTab = document.createElement('i');
  instagramTab.classList.add('fab', 'fa-instagram', 'social-nav');
  rightDiv.appendChild(instagramTab);

  //create mainbody(center)
  let bodyDiv = document.createElement('div');
  bodyDiv.classList.add('mainbody');
  
  let adressText = document.createElement('p');
  adressText.classList.add('adress');
  adressText.textContent = '123 Fake Street — Seattle, WA — 206-555-7890'
  bodyDiv.appendChild(adressText);

  let eatTabMid = document.createElement('a');
  eatTabMid.classList.add('mid-nav');
  eatTabMid.textContent = 'EAT';
  bodyDiv.appendChild(eatTabMid);
  
  let drinkTabMid = document.createElement('a');
  drinkTabMid.classList.add('mid-nav');
  drinkTabMid.textContent = 'DRINK';
  bodyDiv.appendChild(drinkTabMid);

  let visitTabMid = document.createElement('a');
  visitTabMid.classList.add('mid-nav');
  visitTabMid.textContent = 'VISIT';
  bodyDiv.appendChild(visitTabMid);

  // append header and body divs to container div
  container.appendChild(headerDiv);
  container.appendChild(bodyDiv);



}

export{ createDom};