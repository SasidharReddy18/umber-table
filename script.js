const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchMessage = document.querySelector("#searchMessage");
const restaurantCards = document.querySelectorAll(".restaurant-card");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const term = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  restaurantCards.forEach(function (card) {
    const matches = card.textContent.toLowerCase().includes(term);
    card.hidden = term !== "" && !matches;
    if (!card.hidden) visibleCount++;
  });

  searchMessage.textContent = term
    ? visibleCount + " matching restaurant(s) found."
    : "Showing all restaurants.";
});