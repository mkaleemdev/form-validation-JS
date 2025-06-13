let formInput = document.querySelectorAll(".formInput");
let name = document.querySelector("#name");
let mobileNo = document.querySelector("#mobileNo");
let emailId = document.querySelector("#emailId");
let password = document.querySelector("#password");
let conformPasswrd = document.querySelector("#conformPasswrd");
let showSpan = document.querySelector(".showSpan");
let eyeIcon = document.querySelector("#eyeIcon");
let eyeIcon2 = document.querySelector("#eyeIcon2");
let model = document.querySelector(".model");

// ============= error function
const showError = (input, spanId, message) => {
  input.classList.add("error");
  input.classList.remove("success");
  document.querySelector(spanId).innerHTML = message;
};

// ============= success function
const showSuccess = (input, spanId) => {
  input.classList.remove("error");
  input.classList.add("success");
  document.querySelector(spanId).innerHTML = "";
};

// =============== form input validation &&&&&&
const validateName = () => {
  if (name.value.trim() === "") {
    showError(name, "#nameSpan", "Please enter your name*");
    return false;
  } else if (name.value.length < 3 || name.value.length > 25) {
    showError(name, "#nameSpan", "Name must be 3 to 25 characters*");
    return false;
  } else {
    showSuccess(name, "#nameSpan");
    return true;
  }
};

const validateMobile = () => {
  const mobRegex = /^[1-9]\d{9}$/;
  if (mobileNo.value == "") {
    showError(mobileNo, "#mobileSpan", "Please enter Mobile no*");
    return false;
  }
  if (!mobileNo.value.match(mobRegex)) {
    showError(mobileNo, "#mobileSpan", "Please enter valid 10-digit mobile*");
    return false;
  } else {
    showSuccess(mobileNo, "#mobileSpan");
    return true;
  }
};

const validateEmailId = () => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailId.value == "") {
    showError(emailId, "#emailIdSpan", "Please enter email*");
    return false;
  }
  if (!emailId.value.match(validRegex)) {
    showError(emailId, "#emailIdSpan", "Please enter valid email*");
    return false;
  } else {
    showSuccess(emailId, "#emailIdSpan");
    return true;
  }
};

const validatePassword = () => {
  if (password.value.length < 6 || password.value.length > 10) {
    showError(
      password,
      "#passwordSpan",
      "Password must be 6 to 10 characters*"
    );
    return false;
  } else {
    showSuccess(password, "#passwordSpan");
    return true;
  }
};

const validateConfirmPassword = () => {
  if (conformPasswrd.value !== password.value || conformPasswrd.value == "") {
    showError(conformPasswrd, "#conPasswrdSpan", "Passwords do not match*");
    return false;
  } else {
    showSuccess(conformPasswrd, "#conPasswrdSpan");
    return true;
  }
};

// ================== form submit function %%%%%
const formSubmit = () => {
  const isFormValid =
    validateName() &
    validateEmailId() &
    validateMobile() &
    validatePassword() &
    validateConfirmPassword();

  if (isFormValid) {
    // Show success modal
    model.style.display = "block";
    setTimeout(() => {
      model.style.display = "none";
    }, 1500);
    // Reset form
    name.value = "";
    emailId.value = "";
    mobileNo.value = "";
    password.value = "";
    conformPasswrd.value = "";

    [name, emailId, mobileNo, password, conformPasswrd].forEach((input) => {
      input.classList.remove("success");
    });
  }
};

// =================
name.addEventListener("blur", validateName);
emailId.addEventListener("blur", validateEmailId);
mobileNo.addEventListener("blur", validateMobile);
password.addEventListener("blur", validatePassword);
conformPasswrd.addEventListener("blur", validateConfirmPassword);

// passwrd input attribute =====

const changeAtrr = () => {
  eyeIcon.classList.toggle("bi-eye-fill");
  eyeIcon.classList.toggle("bi-eye-slash-fill");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

const changeAtrr2 = () => {
  eyeIcon2.classList.toggle("bi-eye-fill");
  eyeIcon2.classList.toggle("bi-eye-slash-fill");

  if (conformPasswrd.type === "password") {
    conformPasswrd.type = "text";
  } else {
    conformPasswrd.type = "password";
  }
};
