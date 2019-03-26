var openFeedbackForm = document.querySelector(".btn-feedback-form");
var modalFeedback = document.querySelector(".modal-feedback");
var closeModalFeedback = document.querySelector(".modal-feedback-close");
var ESC = 27;


openFeedbackForm.addEventListener("click", function (e) {
  e.preventDefault();
  modalFeedback.classList.add("feedback-show");
});
closeModalFeedback.addEventListener("click", function () {
  modalFeedback.classList.remove("feedback-show");
});
document.addEventListener("keydown", function (e){
  if(e.keyCode === ESC){
    modalFeedback.classList.remove("modal-feedback");
    closeModalFeedback.classList.remove("modal-feedback");
  }
})

