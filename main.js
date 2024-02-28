let formInput = document.querySelector(".formInput");
let name = document.querySelector("#name");
let mobileNo = document.querySelector("#mobileNo");
let emailId = document.querySelector("#emailId");
let password = document.querySelector("#password");
let conformPasswrd = document.querySelector("#conformPasswrd");
let showSpan = document.querySelector(".showSpan");
let eyeIcon = document.querySelector("#eyeIcon");
let eyeIcon2 = document.querySelector("#eyeIcon2");
let model = document.querySelector(".model");

function formSubmit() {
  // name validation ======
  if (name.value == "") {
    document.querySelector("#name").classList.add("error");
    document.querySelector("#name").classList.remove("success");
    document.querySelector("#nameSpan").innerHTML = "Plese Enter Your Name*";
    return false;
  }
  if (name.value.length < 3 || name.value.length > 25) {
    document.querySelector("#name").classList.add("error");
    document.querySelector("#name").classList.remove("success");
    document.querySelector("#nameSpan").innerHTML =
      "Name must be between 3 and 25 characters*";
    return false;
  } else {
    document.querySelector("#name").classList.add("success");
    document.querySelector("#name").classList.remove("error");
    document.querySelector("#nameSpan").innerHTML = "";
  }

  // mobile no validation ======
  if (mobileNo.value == "") {
    document.querySelector("#mobileNo").classList.add("error");
    document.querySelector("#mobileNo").classList.remove("success");
    document.querySelector("#mobileSpan").innerHTML =
      "Plese Enter Your Mobile No*";
    return false;
  }
  let mobValue = /^[1-9]\d{9}$/;
  if (mobileNo.value.match(mobValue)) {
    document.querySelector("#mobileNo").classList.add("success");
    document.querySelector("#mobileNo").classList.remove("error");
    document.querySelector("#mobileSpan").innerHTML = "";
  } else {
    document.querySelector("#mobileNo").classList.add("error");
    document.querySelector("#mobileNo").classList.remove("success");
    document.querySelector("#mobileSpan").innerHTML =
      "Plese Enter Valid Mobile No*";
    return false;
  }

  // email id validation ======
  if (emailId.value == "") {
    document.querySelector("#emailId").classList.add("error");
    document.querySelector("#emailId").classList.remove("success");
    document.querySelector("#emailIdSpan").innerHTML =
      "Plese Enter Your Email Id*";
    return false;
  }
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailId.value.match(validRegex)) {
    document.querySelector("#emailId").classList.add("success");
    document.querySelector("#emailId").classList.remove("error");
    document.querySelector("#emailIdSpan").innerHTML = "";
  } else {
    document.querySelector("#emailId").classList.add("error");
    document.querySelector("#emailId").classList.remove("success");
    document.querySelector("#emailIdSpan").innerHTML =
      "Plese Enter Valid Email ID*";
  }

  // password validation ======
  if (password.value == "") {
    document.querySelector("#password").classList.add("error");
    document.querySelector("#password").classList.remove("success");
    document.querySelector("#passwordSpan").innerHTML = "Plese Enter Password*";
    return false;
  }
  if (password.value.length < 6 || password.value.length > 10) {
    document.querySelector("#password").classList.add("error");
    document.querySelector("#password").classList.remove("success");
    document.querySelector("#passwordSpan").innerHTML =
      "Name must be between 6 and 10 characters*";
    return false;
  } else {
    document.querySelector("#password").classList.add("success");
    document.querySelector("#password").classList.remove("error");
    document.querySelector("#passwordSpan").innerHTML = "";
  }

  // conform password validation ======
  if (conformPasswrd.value == "") {
    document.querySelector("#conformPasswrd").classList.add("error");
    document.querySelector("#conformPasswrd").classList.remove("success");
    document.querySelector("#conPasswrdSpan").innerHTML =
      "Plese Enter Password Again*";
    return false;
  }
  if (conformPasswrd.value.match(password.value)) {
    document.querySelector("#conformPasswrd").classList.add("success");
    document.querySelector("#conformPasswrd").classList.remove("error");
    document.querySelector("#conPasswrdSpan").innerHTML = "";
  } else {
    document.querySelector("#conformPasswrd").classList.add("error");
    document.querySelector("#conformPasswrd").classList.remove("success");
    document.querySelector("#conPasswrdSpan").innerHTML = "Not Macth Password*";
    return false;
  }

  model.style.display = "block";
  setTimeout(function(){
    model.style.display = "none";
 }, 2000);


  name.value = "";
  mobileNo.value = "";
  emailId.value = "";
  password.value = "";
  conformPasswrd.value = "";



  document.querySelector("#name").classList.remove("success");
  document.querySelector("#mobileNo").classList.remove("success");
  document.querySelector("#emailId").classList.remove("success");
  document.querySelector("#password").classList.remove("success");
  document.querySelector("#conformPasswrd").classList.remove("success");


}

// passwrd input attribute =====

function changeAtrr() {
  // console.log("abcd");

  eyeIcon.classList.toggle("bi-eye-fill");
  eyeIcon.classList.toggle("bi-eye-slash-fill");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function changeAtrr2() {
  eyeIcon2.classList.toggle("bi-eye-fill");
  eyeIcon2.classList.toggle("bi-eye-slash-fill");

  if (conformPasswrd.type === "password") {
    conformPasswrd.type = "text";
  } else {
    conformPasswrd.type = "password";
  }
}


