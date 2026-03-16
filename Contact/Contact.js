const form = document.getElementById("contactForm");
const btnText = document.getElementById("btnText");
const loading = document.getElementById("loading");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){

  e.preventDefault(); // menghentikan redirect

  btnText.style.display = "none";
  loading.style.display = "inline";

  let formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/geocraftnusantara@gmail.com", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {

    loading.style.display = "none";
    btnText.style.display = "inline";

    popup.style.display = "flex";

    form.reset();

  })
  .catch(error => {
    alert("Failed to send message");
  });

});

function closePopup(){
  popup.style.display = "none";
}