const submitBtn = document.querySelector(".submit");
const form = document.querySelector("form");
const registrationDetailsDiv = document.getElementById(
  "registrationDetailsDiv"
);
const registrationDetails = document.getElementById("registrationDetails");
const closeButton = document.querySelector(".close");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    showRegistrationDetails();
  }
});

function validateForm() {
  const fullName = form.elements["fullName"].value.trim();
  const email = form.elements["email"].value.trim();
  const phoneNumber = form.elements["phoneNumber"].value.trim();
  const college = form.elements["event"].value.trim();

  console.log(fullName, email, phoneNumber, college);

  if (fullName === "" || email === "" || phoneNumber === "" || college === "") {
    alert("Please fill out all fields.");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  } else if (!isValidPhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^\d{10}$/;
  return phoneNumberPattern.test(phoneNumber);
}

function showRegistrationDetails() {
  const fullName = form.elements["fullName"].value.trim();
  const email = form.elements["email"].value.trim();
  const phoneNumber = form.elements["phoneNumber"].value.trim();
  const college = form.elements["event"].value.trim();

  const registrationInfo = `
    <h2>Registration Details</h2>
    <p><span>Full Name:</span> ${fullName}</p>
    <p><span>Email:</span> ${email}</p>
    <p><span>Phone Number:</span> ${phoneNumber}</p>
    <p><span>College:</span> ${college}</p>
  `;

  registrationDetails.innerHTML = registrationInfo;
  registrationDetailsDiv.style.display = "block";
}

closeButton.addEventListener("click", () => {
  registrationDetailsDiv.style.display = "none";
});
