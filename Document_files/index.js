const letters = document.getElementById("letters");
const text = document.getElementById("text");
letters.className = "container";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
for (let i = 0; i < alphabet.length; i++) {
  const container = document.createElement("button");
  container.innerHTML = alphabet[i];
  container.addEventListener("click", function () {
    const clickedLetter = document.createElement("div");
    clickedLetter.innerHTML = alphabet[i];
    text.appendChild("clickedLetter");
  });
  container.appendChild(container);
}
