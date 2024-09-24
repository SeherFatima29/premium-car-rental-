const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header-container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-container img", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".range-card", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".location-img img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".location-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".location-content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".location-content .location-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });


  const selectCards=document.querySelectorAll(".select-card");
  selectCards[0].classList.add("show-info")

  const price=["255","455","275","625","395"];
  const priceE1=document.getElementById("select-price");

  function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
            const index = args && args[0].realIndex;
          priceE1.innerText = price[index];
            selectCards.forEach((item) => {
              item.classList.remove("show-info");
            });
 selectCards[index].classList.add("show-info");        
         

  }
}
const swiper=new Swiper(".swiper",{
  loop:true,
  effect:"coverflow",
grabCursor:true,
centeredSlides:true,
slidePreview:"auto",
coverflowEffect: {
         rotate: 0,
         depth: 500,
         modifier: 1,
         scale: 0.75,
         slideShadows: false,
       stretch: -100,
},
 onAny(event, ...args) {
   updateSwiperImage(event, args);
 },
});


ScrollReveal().reveal(".story-card",{
  ...scrollRevealOption,
  interval:500,
}


)
const banner=document.querySelector(".banner-wrapper");
const bannerContent= Array.form(banner.children);
bannerContent.forEach(item =>{
const  duplicateNode=item.cloneNode(true)
duplicateNode.setAttribute("aria-hidden",true);
banner.appendChild(duplicateNode)
})
ScrollReveal().reveal(".download-image img" , {
  ...scrollRevealOption,
  origin:"right",

});
ScrollReveal().reveal(".download-content .section-header" , {
  ...scrollRevealOption,
  delay:500,

});
ScrollReveal().reveal(".download-linka" , {
  ...scrollRevealOption,
 delay:1000,

});


