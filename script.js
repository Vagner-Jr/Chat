const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // input value
  const input = document.querySelector("#user-message");
  const inputValue = input.value;
  console.log(inputValue);
});
