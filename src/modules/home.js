export function home() {
  const contentsContainer = document.getElementById("content");
  const divLeft = document.createElement("div");

  const h1El = document.createElement("h1");
  h1El.textContent = "Enjoy Our Delicious Meal";
  h1El.classList.add("hero-headline");
  divLeft.appendChild(h1El);

  const pEl = document.createElement("p");
  pEl.textContent =
    "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet";
  divLeft.appendChild(pEl);

  const bookTableBtn = document.createElement("button");
  bookTableBtn.textContent = "Book a Table";
  divLeft.appendChild(bookTableBtn);

  function createDivWithImg() {
    const divEl = document.createElement("div");
    divEl.classList.add("div-left");
    const imgEl = document.createElement("img");
    imgEl.src =
      "https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg";
    imgEl.alt = "Delicious Meal";
    divEl.appendChild(imgEl);
    contentsContainer.appendChild(divEl);
  }

  contentsContainer.appendChild(divLeft);
  createDivWithImg();
}
