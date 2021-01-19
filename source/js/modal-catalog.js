const modalLink = document.querySelector(".product__add-to-basket");
const modalPopup = document.querySelector(".modal-catalog");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("visually-hidden");
  });

