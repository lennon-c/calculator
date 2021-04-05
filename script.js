const textarea = document.querySelector(".textarea");

check = function () {
  const textareaValue = textarea.value;
  console.log(textareaValue);
  if (textareaValue == "") {
    alert("Write something");
  } else {
    let ans = textareaValue;
    console.log(ans);
    let newAns = ans.replace(/−|÷|×/gi, function (x) {
      if (x == "−") {
        x = "-";
      }
      if (x == "÷") {
        x = "/";
      } else if (x == "×") {
        x = "*";
      }
      return x;
    });
    console.log(newAns);
    let sol = eval(newAns);
    console.log(sol);
    document.getElementById("textarea").value = "" + sol;
  }
};

backspace = function () {
  const textareaValue = textarea.value;
  textarea.value = textareaValue.substring(0, textareaValue.length - 1);
};
