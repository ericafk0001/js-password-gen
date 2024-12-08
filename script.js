document.addEventListener("DOMContentLoaded", (event) => {
  const characterSlider = document.getElementById("character-slider");
  const sliderValue = document.getElementById("slider-value");

  //settings
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const mixed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const punc = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const numbers = "0123456789";

  characterSlider.addEventListener("input", () => {
    sliderValue.textContent = characterSlider.value;
  });

  function generate() {
    let selectedChars = "";

    if (document.getElementById("letters").checked) {
      selectedChars += letters;
    }
    if (document.getElementById("mixed").checked) {
      selectedChars += mixed;
    }
    if (document.getElementById("punc").checked) {
      selectedChars += punc;
    }
    if (document.getElementById("numbers").checked) {
      selectedChars += numbers;
    }

    const passwordText = document.getElementById("password");
    const passwordLength = characterSlider.value;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars[randomIndex];
    }

    if (passwordLength <= 5) {
      passwordText.style.background = "red";
    } else if (passwordLength > 5 && passwordLength <= 10) {
      passwordText.style.background = "#ed7700";
    } else {
      passwordText.style.background = "#3dbf00";
    }

    document.getElementById("password").textContent = password;
  }

  document.getElementById("refresh").addEventListener("click", generate);

  document.getElementById("copy").addEventListener("click", () => {
    const passwordText = document.getElementById("password").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
      alert("Password copied to clipboard!");
    });
  });

  generate();
});
