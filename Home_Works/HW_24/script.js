const modal = document.getElementById("modal");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const modalBody = document.getElementById("modalBody");
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");

openButton.addEventListener("click", () => {
    modal.classList.remove("modal-hidden"); // Показываем содержимое перед открытием
    modal.showModal();
});

closeButton.addEventListener("click", () => {
    modal.returnValue = null;
    modal.close();
    modal.classList.add("modal-hidden");
});

confirmButton.addEventListener("click", () => {
   modal.close("confirmed");
   modal.classList.add("modal-hidden");
});

cancelButton.addEventListener("click", () => {
    modal.close("canceled");
    modal.classList.add("modal-hidden");
 });

 modal.addEventListener("close", () => {
    if (modal.returnValue === "confirmed") {
        alert("Данные сохранены"); 
    } else if (modal.returnValue === "canceled") {
       alert("Данные не сохранены");
    }
 });

 modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.returnValue = null;
        modal.close();
        modal.classList.add("modal-hidden");
    }
});