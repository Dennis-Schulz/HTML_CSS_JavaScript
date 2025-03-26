const root = document.querySelector("#root");
let slider_index = 0;
const images = [
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
  "https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg",
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
frame.classList.add("frame");
cards.classList.add("cards");
for (let i = 0; i < images.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${images[i]}")`;
  cards.append(card);
}
frame.append(cards);
root.append(frame);

function create_rounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement("button");
    if (i === 0) {
      button.classList.add("active");
    }
    container.append(button);
    button.addEventListener("click", function () {
      slider_index = i;
      cards.style.left = `${-1 * slider_index * 500}px`;
      const all_buttons = button.parentElement.children;
      for (let j = 0; j < all_buttons.length; j++) {
        all_buttons[j].classList.remove("active");
      }
      button.classList.add("active");
    });
  }
  frame.append(container);
}

function goLeft() {
  slider_index--;
  if (slider_index < 0) {
    slider_index = images.length - 1;
  }
  cards.style.left = `${-1 * slider_index * 500}px`;
  const all_buttons = document.querySelector(".rounds").children;
  for (let j = 0; j < all_buttons.length; j++) {
    all_buttons[j].classList.remove("active");
  }
  all_buttons[slider_index].classList.add("active");
}

function goRight() {
  slider_index++;
  if (slider_index > images.length - 1) {
    slider_index = 0;
  }
  cards.style.left = `${-1 * slider_index * 500}px`;
  const all_buttons = document.querySelector(".rounds").children;
  for (let j = 0; j < all_buttons.length; j++) {
    all_buttons[j].classList.remove("active");
  }
  all_buttons[slider_index].classList.add("active");
}

const triggers = document.createElement("div");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");

leftBtn.textContent = "<";
rightBtn.textContent = ">";
triggers.classList.add("trigger");
triggers.append(leftBtn, rightBtn);
frame.prepend(triggers);
leftBtn.addEventListener("click", goLeft);
rightBtn.addEventListener("click", goRight);

create_rounds();