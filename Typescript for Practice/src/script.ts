interface FormInputs {
  celestian: string;
  cryptcode: string;
  commlink: string;
  phoneno: string;
  home: string;
}

interface UserDetails {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
}

const submitBtn = document.querySelector<HTMLButtonElement>(".submit");
const heading = document.querySelector<HTMLHeadingElement>(".heading");
const welcome = document.querySelector<HTMLDivElement>(".welcome-user");
const celestian = document.querySelector<HTMLInputElement>(".celestian");
const cryptcode = document.querySelector<HTMLInputElement>(".cryptcode");
const commlink = document.querySelector<HTMLInputElement>(".commlink");
const phoneno = document.querySelector<HTMLInputElement>(".phoneno");
const address = document.querySelector<HTMLInputElement>(".home");

const userDetails: UserDetails = {};

const validateForm = () => {
  const isValidFirstName = checkFirstName();
  const isValidPassword = checkPassword();
  const isValidEmail = commlink ? checkEmail() : false;
  const isValidPhoneNumber = checkPhoneNumber();
  const isValidLastName = checkLastName();
  const isValidAddress = checkAddress();

  if (
    isValidFirstName &&
    isValidPassword &&
    isValidEmail &&
    isValidPhoneNumber &&
    isValidLastName &&
    isValidAddress
  ) {
    welcome?.classList.toggle("active");

    //@ts-ignore
    userDetails["First Name"] = celestian?.value.trim();
    //@ts-ignore
    userDetails["Last Name"] = celestian?.value.trim().split(" ")[1];
    //@ts-ignore
    userDetails["Email"] = commlink?.value.trim();
    //@ts-ignore
    userDetails["Phone Number"] = phoneno?.value.trim();
    //@ts-ignore
    userDetails["Address"] = address?.value.trim();
  }
};

const checkFirstName = () => {
  const fullName = celestian?.value.trim();
  const firstName = fullName?.split(" ")[0];
  if (!firstName || firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
    return false;
  }
  return true;
};

const checkLastName = () => {
  const fullName = celestian?.value.trim();
  const lastName = fullName?.split(" ")[1];
  if (!lastName) {
    return false;
  }
  return true;
};

const checkPassword = () => {
  const password = cryptcode?.value.trim();
  if (!password || password.length < 6) {
    return false;
  }
  return true;
};

const checkEmail = () => {
  const email = commlink?.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return false;
  }
  return true;
};

const checkPhoneNumber = () => {
  const phoneNumber = phoneno?.value.trim();
  if (
    !phoneNumber ||
    phoneNumber.length !== 10 ||
    !/^\d{10}$/.test(phoneNumber)
  ) {
    return false;
  }
  return true;
};

const checkAddress = () => {
  const userAddress = address?.value;
  if (userAddress === "") {
    return false;
  }
  return true;
};

submitBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  validateForm();
  if (welcome) {
    if (welcome.classList.contains("hidden")) {
      welcome.classList.remove("hidden");
      welcome.classList.add("visible");

      Object.entries(userDetails).forEach(([key, value]) => {
        const detailElement = document.createElement("p");
        detailElement.textContent = `${key}: ${value}`;
        welcome.appendChild(detailElement);
      });
    } else {
      welcome.classList.remove("visible");
      welcome.classList.add("hidden");
      welcome.innerHTML = "";
    }
  }
});
