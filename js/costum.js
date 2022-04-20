const navSlide = () => {
  const burger = document.querySelector(".menu-js");
  const nav = document.querySelector(".f-nav");
  const navLinks = document.querySelectorAll(".f-nav li");
  const navBtn = document.querySelector("#show");
  


  burger.addEventListener("click",()=>{
    //Toggle nav
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
      link.style.animation = `navLinkFade 1.5s ease forwards ${index / 7}s`;

      }

    });

    //Animate Buttons 
    nav.setAttribute("id", "show");
   
  });

 
}


navSlide();