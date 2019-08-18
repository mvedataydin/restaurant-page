const hover = () => {

  let twitter = document.querySelector('.fa-twitter');
  twitter.addEventListener('mouseenter', function(){
    instagram.classList.add('social-hovered');
    twitter.classList.remove('social-hovered');
  });
  twitter.addEventListener('mouseleave', function(){
    instagram.classList.remove('social-hovered');
    twitter.classList.remove('social-hovered');
  });

  let instagram = document.querySelector('.fa-instagram')
  instagram.addEventListener('mouseenter', function(){
    twitter.classList.add('social-hovered');
    instagram.classList.remove('social-hovered');
  });
  instagram.addEventListener('mouseleave', function(){
    twitter.classList.remove('social-hovered');
    instagram.classList.remove('social-hovered');
  });
  if(document.querySelector('.footer-twitter') != null && document.querySelector('.footer-instagram') != null){
  let twitterFooter = document.querySelector('.footer-twitter');
  let instagramFooter = document.querySelector('.footer-instagram');
  twitterFooter.addEventListener('mouseenter', function(){
    instagramFooter.classList.add('social-hovered');
    twitterFooter.classList.remove('social-hovered');
  });
  twitterFooter.addEventListener('mouseleave', function(){
    instagramFooter.classList.remove('social-hovered');
    twitterFooter.classList.remove('social-hovered');
  });
  
  instagramFooter.addEventListener('mouseenter', function(){
    twitterFooter.classList.add('social-hovered');
    instagramFooter.classList.remove('social-hovered');
  });
  instagramFooter.addEventListener('mouseleave', function(){
    twitterFooter.classList.remove('social-hovered');
    instagramFooter.classList.remove('social-hovered');
  });
  }
}

export{hover};