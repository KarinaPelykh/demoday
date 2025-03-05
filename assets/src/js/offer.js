const offerList = document.querySelector(".offer-list");

const images = [
  {
    img: "./assets/img/currency/funt.jpg",
    name: "Zlaté mince",
    type: "Investiční",
  },
  {
    img: "./assets/img/currency/coin.jpg",
    name: "Zlaté slitky",
    type: "Investiční",
  },
  {
    img: "./assets/img/currency/gold-1.jpg",
    name: "Zlaté mince",
    type: "historické",
  },
  {
    img: "./assets/img/currency/hryvnia.jpg",
    name: "Zlaté mince ČNB",
    type: "Pamětní",
  },
];

let currentAmountImages = [];

function handleMarkup(data) {
  const { img, name, type } = data;

  const li = document.createElement("li");

  li.classList.add("offer-item");

  li.innerHTML = ` 
    <img class="image-funt" src="${img}" />
    <div class="overlay-block offer-overlay">
       <div>
        <span class="text-overlay">${type}</span>
       <p class="suntitle-overlay">${name}</p>
       </div>
    <button class="button-overlay">
    <svg>
    <use href="./assets/img/sprite.svg#arrow-right">
    </use>
    </svg>
    </button>
	</div>
`;

  return li;
}

function renderImages() {
  offerList.innerHTML = "";

  currentAmountImages.forEach((data) => {
    const li = handleMarkup(data);

    offerList.appendChild(li);
  });
}

function updateImages() {
  if (window.innerWidth >= 1920) {
    currentAmountImages = images;
  } else if (window.innerWidth >= 1440) {
    currentAmountImages = images.slice(0, 3);
  } else if (window.innerWidth >= 768) {
    currentAmountImages = images.slice(0, 4);
  } else {
    currentAmountImages = images.slice(0, 2);
  }

  renderImages();
}

window.addEventListener("resize", updateImages);

updateImages();
