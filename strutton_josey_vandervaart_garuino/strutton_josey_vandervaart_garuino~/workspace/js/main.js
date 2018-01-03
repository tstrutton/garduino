(function(){
  //console.log('Hello World!');
  var mobileMenu = document.querySelector('#mobileNav');
  var menuOpen = document.querySelector('#menu_icon');
  var menuExit = document.querySelector('#menu_close_icon');
  var logo = document.querySelector('#logo');
  var screenWidth = window.innerWidth;
  var desktopMenu = document.querySelector('#mainNav');
  var questions = document.querySelectorAll('.clicker');
  var answer = document.querySelectorAll('.answers');


  function toggleMenu(){
      mobileMenu.classList.toggle('hide');
  }

  function toggleMobile(){
      if(screenWidth >= 768){
          //console.log('hi');
          logo.src="images/logo_white.png";
          //console.log(logo.src);

      }

      if(screenWidth >= 1200){
          menuOpen.classList.toggle('hide');
          desktopMenu.classList.toggle('hide');
      }
  }

  for(var i = 0; i < questions.length; i++) {
    console.log("Looping...");
    questions[i].addEventListener('click', function(){
      var clicked = this.getAttribute('id');
      console.log(clicked);

      ///////////////////////////////////////////////

      var child = document.getElementById(clicked).getElementsByClassName("answers")[0];
      
      //console.log(child);
      child.classList.toggle('show');


    }, false);




}


  menuOpen.addEventListener('click', toggleMenu, false);
  menuExit.addEventListener('click', toggleMenu, false);
  window.addEventListener('load', toggleMobile, false);

})();
