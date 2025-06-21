document.addEventListener("DOMContentLoaded", () => {
  const foil = document.querySelector("select[name='foil']");
  const finish = document.querySelector("select[name='finish']");
  const sleeves = document.querySelector("select[name='sleeves']");
  const deckbox = document.querySelector("select[name='deckbox']");
  const priceDisplay = document.getElementById("price");

  function calculatePrice() {
    let price = 45;

    if (foil.value === "Glossy Foil") price += 8;
    if (foil.value === "Matte Foil") price += 10;

    if (finish.value === "Matte") price += 3;

    if (sleeves.value !== "Black") price += 5;
    if (deckbox.value !== "Black") price += 5;

    priceDisplay.textContent = "Total Price: $" + price;
  }

  [foil, finish, sleeves, deckbox].forEach(el => {
    el.addEventListener("change", calculatePrice);
  });

  calculatePrice();
});
