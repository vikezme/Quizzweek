function submitForm (e) {
  e.preventDefault();
  let name= document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  console.log("form submitted");
}

function myFunction() {
  location.replace("C:\Users\WAP\Desktop\Quizzweek\Quizzweek\quiz.html")
  window.location.replace("C:\Users\WAP\Desktop\Quizzweek\Quizzweek\quiz.html");
}
