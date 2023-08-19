let error = false;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let internationalPhoneRegex = /^\+[1-9]{1}[0-9]{3,14}$/;

document.addEventListener("DOMContentLoaded", function () {
  const musicPlayer = document.getElementById("submissionMusic");
  const submit = document.getElementById("submit");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const num5 = document.getElementById("num5");
  const num6 = document.getElementById("num6");
  setInterval(function () {
    num1.innerHTML = Math.floor(Math.random() * arr.length);
    num2.innerHTML = Math.floor(Math.random() * arr.length);
    num3.innerHTML = Math.floor(Math.random() * arr.length);
    num4.innerHTML = Math.floor(Math.random() * arr.length);
    num5.innerHTML = Math.floor(Math.random() * arr.length);
    num6.innerHTML = Math.floor(Math.random() * arr.length);
  }, 1000);

  submit.addEventListener("click", function () {
    const terms = document.getElementById("ACCEPT T'S & C'S").checked
      ? document.getElementById("ACCEPT T'S & C'S").value
      : false;
    const lotteryName = document.getElementById("lottery_name").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const id = document.getElementById("id_number").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    let isEmailValid = emailRegex.test(email);
    let isPhoneNumberValid = internationalPhoneRegex.test(mobile);

    if (!lotteryName.length) {
      error = true;
      document.getElementById("lottery_name_error").innerHTML =
        "Please enter lottery name";
    }
    if (!name.length) {
      error = true;
      document.getElementById("name_error").innerHTML = "Please enter name";
    }
    if (!surname.length) {
      error = true;
      document.getElementById("surname_error").innerHTML =
        "Please enter surname";
    }
    if (id.length !== 10) {
      error = true;
      document.getElementById("id_number_error").innerHTML =
        "Please enter 10 digit id";
    }
    if (!isEmailValid) {
      error = true;
      document.getElementById("email_error").innerHTML =
        "Please enter valid email address";
    }
    if (isPhoneNumberValid) {
      error = true;
      document.getElementById("mobile_error").innerHTML =
        "Please enter valid 10 digit mobile number";
    }

    let userData = {
      LotteryName: lotteryName,
      Name: name,
      Email: email,
      Phone: mobile,
      ID: id,
      Surname: surname,
      Terms: terms,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    if (!error) document.getElementById("answer").style.display = "block";
    musicPlayer.play();
    document.getElementById("answer").classList.add("show", "slide-in");
    setTimeout(function () {
      document.getElementById("answer").classList.remove("slide-in");
    }, 500);

    // Clear input fields
    clearInputFields();
  });

  function clearInputFields() {
    const inputFields = document.querySelectorAll(
      "input[type='text'], input[type='email'], input[type='tel']"
    );
    inputFields.forEach((input) => (input.value = ""));

    const agreeRadio = document.getElementById("ACCEPT T'S & C'S");
    agreeRadio.checked = false;
  }
});
