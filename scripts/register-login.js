
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  window.location.href="travel.html";
  window.event.returnValue=false;
  //window.navigate("travel.html");
});

