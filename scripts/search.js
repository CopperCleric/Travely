function createDropdown(optionMenuId, selectBtnClass, optionClass, sBtnTextClass) {
  const optionMenu = document.querySelector(`#${optionMenuId}`),
    selectBtn = optionMenu.querySelector(`.${selectBtnClass}`),
    options = optionMenu.querySelectorAll(`.${optionClass}`),
    sBtn_text = optionMenu.querySelector(`.${sBtnTextClass}`);

  //dropdown menu
  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
  });
}

createDropdown("country", "select-btn", "option", "sBtn-text");
createDropdown("rating", "select-btn", "option", "sBtn-text");