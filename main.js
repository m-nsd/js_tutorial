let Phrase = require("m-nsd-palindrome");

function palindromeTester() {
  let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>"はパリンドロームです！`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>"はパリンドロームではありません`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});