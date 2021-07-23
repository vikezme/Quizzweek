function submitForm (e) {
  e.preventDefault();
  let name= document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  console.log("form submitted");

  window.location.href = "quiz.html";
  
}
