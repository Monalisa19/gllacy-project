var openFeedbackForm = document.querySelector(".btn-feedback-form");
var modalFeedback = document.querySelector(".feedback-show");
var closeModalFeedback = document.querySelector(".modal-feedback-close");


openFeedbackForm.addEventListener("click", function (e) {
  e.preventDefault();
  modalFeedback.classList.add("feedback-show");
});
closeModalFeedback.addEventListener("click", function () {
  modalFeedback.classList.remove("feedback-show");
});

