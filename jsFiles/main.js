submitBtn.addEventListener("click", () => {
  if (
    Fname.value == "" ||
    Lname.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    msg.value == ""
  ) {
    alert("Vous devez remplire le formulaire");
  } else {
    alert("Message envoyer avec succé");
  }
});
