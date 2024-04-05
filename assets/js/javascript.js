  /// Start Swiper Logo ///
var swiper = new Swiper(".card-slider", {
    //slidesPerView: 3,
    //spaceBetween: 10,
    loop: true,
    autoplay: {
    delay: 2000,
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        //spaceBetween: 20,
    },
    425: {
        slidesPerView: 3,
        //spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        //spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4
        //spaceBetween: 20,
    },
    1300: {
        slidesPerView: 6,
        spaceBetween: 140,
    },
    },
});
/// Close Swiper Logo ///
/// Start  Swiper Gallery ///
var swiper = new Swiper(".slider-grids", {
    slidesPerView: 4.5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        //spaceBetween: 20,
    },
    425: {
        slidesPerView: 3,
    },
    768: {
        slidesPerView: 4,
        //spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4.5,
        //spaceBetween: 20,
    },
    1300: {
        slidesPerView: 4.5,
        //spaceBetween: 40,
    },
    },
});
/// Close Swiper Gallery ///
/// Open Dropdown Slider ///
var swiper = new Swiper(".drop-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
/// Close Dropdown Slider ///
/// Start Product Thumb Slider ///
var swiper = new Swiper(".thumb-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".thumb-slider2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});
/// Close Product Thumb Slider ///
/// Start Coding Quanity JS ///
const plus = document.querySelector(".plus"),
      minus = document.querySelector(".minus"),
      num = document.querySelector(".num");

  let a = 0;

  plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
  });

  minus.addEventListener("click", ()=>{
    if(a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    }
});
/// Close Coding Quanity JS  ///
/// Start Coding Product Tab ///
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
/// Close Coding Product Tab ///
/// Start P-Page last SLider ///
var swiper = new Swiper(".p-pages-last", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 2000,
    },
  });
/// CLose P-Page last SLider ///