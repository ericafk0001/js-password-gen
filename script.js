document.addEventListener("DOMContentLoaded", (event) => {
  //constants
  const characterSlider = document.getElementById("character-slider");
  //settings
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const mixed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const punc = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const numbers = "0123456789";

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

    const passwordLength = characterSlider.value;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars[randomIndex];
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
