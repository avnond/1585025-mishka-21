const modalLink = document.querySelector(".hit-product__button-buy");
const modalPopup = document.querySelector(".modal-basket");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("visually-hidden");
  });

