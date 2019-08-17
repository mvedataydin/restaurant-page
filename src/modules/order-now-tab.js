const order = () => {
  // initial setup
  let container = document.getElementById('content');
  document.body.style.background = "white";
  document.body.style.color = "black";
  let bodyDivOld = document.querySelector('.mainbody');
  bodyDivOld.style.display = 'none';

  // create order-eat menu
  let title = document.createElement('h1');
  title.textContent = '—  ENTRÉES  —'

  container.appendChild(title);

  
  }
  
  export{order};