let log = document.querySelector(".log");
let sign = document.querySelector(".sign");
let signbg = document.querySelector(".sign-bg");
let loginbg = document.querySelector(".login-bg");
let close_login = document.querySelector(".close-login");
let close_sign = document.querySelector(".close-sign");
let call_forgot_username = document.querySelector(".call-forgot-username");
let close_username = document.querySelector(".close-forgot-username");
let username_bg = document.querySelector(".forgot-username-bg");
let call_forgot_password = document.querySelector(".call-forgot-password");
let close_password = document.querySelector(".close-forgot-password");
let password_bg = document.querySelector(".forgot-password-bg");
let create = document.getElementById("create-account");
log.addEventListener("click", () => {
  loginbg.classList.add("active");
});
close_login.addEventListener("click", () => {
  loginbg.classList.remove("active");
});
sign.addEventListener("click", () => {
  signbg.classList.add("active");
});
close_sign.addEventListener("click", () => {
  signbg.classList.remove("active");
});
create.addEventListener("click", () => {
  signbg.classList.add("active");
});
close_username.addEventListener("click", () => {
  username_bg.classList.remove("active");
});
call_forgot_username.addEventListener("click", () => {
  loginbg.classList.remove("active");
  username_bg.classList.add("active");
});
close_password.addEventListener("click", () => {
  password_bg.classList.remove("active");
});
call_forgot_password.addEventListener("click", () => {
  loginbg.classList.remove("active");
  password_bg.classList.add("active");
});
