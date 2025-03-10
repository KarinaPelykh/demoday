(function () {
const blogList = document.querySelector(".blog-list");

let currentAmountImages = [];

const images = [
  "./assets/img/blog/bill@2x.avif",
  "./assets/img/blog/chart@2x.avif",
  "./assets/img/blog/piggy-bank@2x.avif",
  "./assets/img/blog/watering@2x.avif",
  "./assets/img/blog/sum@2x.avif",
];

function renderImages() {
  blogList.innerHTML = "";

  currentAmountImages.forEach((img) => {
    const li = handleMarkup(img);
    blogList.appendChild(li);
  });
}

function handleMarkup(image) {
  const li = document.createElement("li");
  li.classList.add("blog-list-item");

  li.innerHTML = `
    <img src='${image}' alt="picture of money" />
    <div class="wrapper-blog overlay-block">
      <div>
        <span class="date">20.12.2021</span>
        <h3 class="subtitle-blog">Lorem Ipsum</h3>
        <p class="name-user">
          <svg class="user-icon icon-user">
            <use href="./assets/img/sprite.svg#user-icon"></use>
          </svg>
          Lukáš I 0 Comments
        </p>
      </div>
      <button class="button-overlay">
        <svg>
          <use href="./assets/img/sprite.svg#arrow-right"></use>
        </svg>
      </button>
    </div>`;
  return li;
}

function updateImages() {
  if (window.innerWidth >= 1440) {
    currentAmountImages = images;
  } else if (window.innerWidth >= 768) {
    currentAmountImages = images.slice(0, 4);
  } else {
    currentAmountImages = images.slice(0, 3);
  }

  renderImages();
}

window.addEventListener("resize", updateImages);

updateImages();
})();