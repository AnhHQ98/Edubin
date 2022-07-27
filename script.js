// header__bottom
let header_dropdown = document.getElementById("header-dropdown");
let header_btn_bar = document.getElementById("header-btn-bar");

header_btn_bar.addEventListener("click", () => {
  header_dropdown.classList.toggle("hidden");
});
// choose
$(document).ready(function () {
  $(".choose").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev pull-left"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next pull-right"><i class="fa-solid fa-angle-right"></i></button>',
  });
});
// best
$(document).ready(function () {
  $(".best__right").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev pull-left"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next pull-right"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
// feedback
$(document).ready(function () {
  $(".feedback__slide").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
// facilities
let button_video = document.getElementById("btn-video");
let button_video_bg = document.getElementById("btn-id-bg");
button_video.addEventListener("click", () => {
  button_video_bg.classList.remove("hidden");

  button_video_bg.addEventListener("click", () => {
    button_video_bg.classList.add("hidden");
  });
});
// icon
$(document).ready(function () {
  $(".list_icon").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
// Api
let html = "";
var postApi = "https://60d4611a61160900173cb070.mockapi.io/courses";
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `
  <div class="relative mx-2">
      <div class="overflow-hidden">
          <img class="transition-all hover:scale-125 duration-500" src="${post.image}" alt="">
          <span class="absolute top-4 left-4 text-white bg-[#07294e] p-1 rounded-sm">Beginner</span>
          <i class="fa-regular fa-bookmark absolute top-4 right-4 text-xl text-blue-900 px-1 bg-white rounded-sm"></i>
      </div>
      <div class="bg-white p-5">
          <div>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i> ${post.rate} (${post.rate_quantity})
          </div>
          <div class="h-[70px]">
            <h6 class="text-xl text-blue-900 font-bold pb-3">${post.name}</h6>
          </div>
          <div class="pb-3">
              <i class="fa-solid fa-user text-gray-300"></i> ${post.total_enrolled}
              <i class="fa-solid fa-clock text-gray-300 ml-3"></i> ${post.duration}
          </div>
          <div class="flex pb-3">
              <img class="w-[25px] rounded-full mr-2" src="img/student_1.jpg" alt="image">
              <p>by <span class="text-blue-900 font-bold">${post.teacher}</span> in <span class="text-blue-900 font-bold">Languages</span></p>
          </div>
          <div class="flex justify-between py-3">
              <p>${post.price}$</p>
              <p><i class="fa-solid fa-cart-shopping text-yellow-500"></i> ${post.categories}</p>
          </div>
      </div>
      <div class="absolute bottom-[68px] w-full h-[1px] bg-gray-300"></div>
  </div>`;
    });
    document.getElementById("courses-id").innerHTML = htmls.join("");

    $(document).ready(function () {
      $(".courses__slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".slick-prev"),
        nextArrow: $(".slick-next"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      });
    });
  })
  .catch(function (err) {
    console.log(err);
  });
