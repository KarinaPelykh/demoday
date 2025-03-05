function card(data) {
  const { title, imgSrc, flags = [], availability, price } = data;

  let isAvailable = "#63da46";

  switch (availability) {
    case "Skladem":
      isAvailable = "#63da46";
      break;
    case "Momentálně nedostupné":
      isAvailable = "#f24d4d";
      break;
    case "Na objednávku":
      isAvailable = "#e9e9e9";
      break;

    default:
      isAvailable;
      break;
  }

  return `
    <img src="${imgSrc}" alt="${title}"/>
    <div class="product-info">
      <p class="product-title">${title}</p>
      <div class="thumb">
        <div>
          <p class="product" style="color:${isAvailable}">${availability}</p>
          <span class="price">${price} Kč</span>
        </div>
        <button class="button-shopping-cart">
          <svg class="icon-shopping-cart">
            <use href="./assets/img/sprite.svg#shopping-cart"></use>
          </svg>
        </button>
      </div>
      ${
        flags.length > 0
          ? `
      <div class="type-sale">
        ${flags[0] ? `<span class="sale message-alert">${flags[0]}</span>` : ""}
        ${
          flags[1]
            ? `<span class="new-product message-alert">${flags[1]}</span>`
            : ""
        }
      </div>`
          : ""
      }
    </div>
  `;
}

const productList = document.querySelector(".product-list");
const buttonShowMore = document.querySelector(".button-js");
const filter = document.querySelector(".filter");
const activeFilter = document.querySelectorAll(".filter button");

let isFull = false;

function getData(callback, isFull, name) {
  fetch("/assets/src/products.json")
    .then((res) => res.json())
    .then((data) => {
      const productArray = isFull ? data : data.slice(0, 4);
      callback(productArray, name);
    })
    .catch((error) => console.log(error.message));
}

getData(productCard, isFull);

function productCard(data) {
  productList.innerHTML = "";

  data?.forEach((cardInfo) => {
    const newItem = document.createElement("li");

    newItem.classList.add("product-item");

    newItem.innerHTML = card(cardInfo);

    productList.appendChild(newItem);
  });
}

buttonShowMore.addEventListener("click", () => {
  getData(productCard, !isFull);

  buttonShowMore.style.display = "none";
});

//filter
filter.addEventListener("click", (e) => {
  buttonShowMore.style.display = "none";

  if (e.target.nodeName !== "BUTTON") return;

  getData(filterProduct, !isFull, e.target.value);
});

function filterProduct(data, name) {
  const filteredData = data?.filter(({ category }) => name === category);

  productCard(filteredData);
}

activeFilter.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
