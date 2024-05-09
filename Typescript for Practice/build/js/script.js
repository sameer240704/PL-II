"use strict";
const submitBtn = document.querySelector(".submit");
const heading = document.querySelector(".heading");
const welcome = document.querySelector(".welcome-user");
const celestian = document.querySelector(".celestian");
const cryptcode = document.querySelector(".cryptcode");
const commlink = document.querySelector(".commlink");
const phoneno = document.querySelector(".phoneno");
const address = document.querySelector(".home");
const userDetails = {};
const validateForm = () => {
    const isValidFirstName = checkFirstName();
    const isValidPassword = checkPassword();
    const isValidEmail = commlink ? checkEmail() : false;
    const isValidPhoneNumber = checkPhoneNumber();
    const isValidLastName = checkLastName();
    const isValidAddress = checkAddress();
    if (isValidFirstName &&
        isValidPassword &&
        isValidEmail &&
        isValidPhoneNumber &&
        isValidLastName &&
        isValidAddress) {
        welcome === null || welcome === void 0 ? void 0 : welcome.classList.toggle("active");
        //@ts-ignore
        userDetails["First Name"] = celestian === null || celestian === void 0 ? void 0 : celestian.value.trim();
        //@ts-ignore
        userDetails["Last Name"] = celestian === null || celestian === void 0 ? void 0 : celestian.value.trim().split(" ")[1];
        //@ts-ignore
        userDetails["Email"] = commlink === null || commlink === void 0 ? void 0 : commlink.value.trim();
        //@ts-ignore
        userDetails["Phone Number"] = phoneno === null || phoneno === void 0 ? void 0 : phoneno.value.trim();
        //@ts-ignore
        userDetails["Address"] = address === null || address === void 0 ? void 0 : address.value.trim();
    }
};
const checkFirstName = () => {
    const fullName = celestian === null || celestian === void 0 ? void 0 : celestian.value.trim();
    const firstName = fullName === null || fullName === void 0 ? void 0 : fullName.split(" ")[0];
    if (!firstName || firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
        return false;
    }
    return true;
};
const checkLastName = () => {
    const fullName = celestian === null || celestian === void 0 ? void 0 : celestian.value.trim();
    const lastName = fullName === null || fullName === void 0 ? void 0 : fullName.split(" ")[1];
    if (!lastName) {
        return false;
    }
    return true;
};
const checkPassword = () => {
    const password = cryptcode === null || cryptcode === void 0 ? void 0 : cryptcode.value.trim();
    if (!password || password.length < 6) {
        return false;
    }
    return true;
};
const checkEmail = () => {
    const email = commlink === null || commlink === void 0 ? void 0 : commlink.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        return false;
    }
    return true;
};
const checkPhoneNumber = () => {
    const phoneNumber = phoneno === null || phoneno === void 0 ? void 0 : phoneno.value.trim();
    if (!phoneNumber ||
        phoneNumber.length !== 10 ||
        !/^\d{10}$/.test(phoneNumber)) {
        return false;
    }
    return true;
};
const checkAddress = () => {
    const userAddress = address === null || address === void 0 ? void 0 : address.value;
    if (userAddress === "") {
        return false;
    }
    return true;
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", (event) => {
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
        }
        else {
            welcome.classList.remove("visible");
            welcome.classList.add("hidden");
            welcome.innerHTML = "";
        }
    }
});
