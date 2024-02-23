const input = document.getElementById("input");
input.value = "0";
let prev = document.getElementById("prev");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");
const btn18 = document.getElementById("btn18");
const btn19 = document.getElementById("btn19");
const btn20 = document.getElementById("btn20");
const btn21 = document.getElementById("btn21");
const btn22 = document.getElementById("btn22");
const btn23 = document.getElementById("btn23");

const btnArr = [
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19,
  btn20,
  btn21,
  btn22,
  btn23,
];

isBracketOpen = 0;

btn1.addEventListener("click", function () {
  let arr = input.value.split("");
  if (
    arr[input.value.length - 1] == "0" ||
    arr[input.value.length - 1] == "1" ||
    arr[input.value.length - 1] == "2" ||
    arr[input.value.length - 1] == "3" ||
    arr[input.value.length - 1] == "4" ||
    arr[input.value.length - 1] == "5" ||
    arr[input.value.length - 1] == "6" ||
    arr[input.value.length - 1] == "7" ||
    arr[input.value.length - 1] == "8" ||
    arr[input.value.length - 1] == "9"
  ) {
    input.classList.add("color-animation");

    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);

    btn1.classList.add("equal-animation");
    btnArr.disabled = true; // Disable the button
    setTimeout(() => {
      btn1.classList.remove("equal-animation");
      btnArr.disabled = false;
    }, 100);
    arr.push(".");
    input.value = arr.join("");
  } else {
    btn1.classList.add("equal-animation");
    btnArr.disabled = true; // Disable the button
    setTimeout(() => {
      btn1.classList.remove("equal-animation");
      btnArr.disabled = false;
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);

    input.value = input.value;
  }

  console.log(input.value);
  console.log(arr);
});

btn2.addEventListener("click", function () {
  let arr = input.value.split("");
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn2.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn2.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    isBracketOpen++;
    console.log(isBracketOpen);
    input.value = "(";
  } else if (
    arr[input.value.length - 1] == "+" ||
    arr[input.value.length - 1] == "-" ||
    arr[input.value.length - 1] == "(" ||
    arr[input.value.length - 1] == "×" ||
    arr[input.value.length - 1] == "÷"
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn2.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn2.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    isBracketOpen++;
    console.log(isBracketOpen);
    arr.push("(");
    input.value = arr.join("");
  } else {
    btn2.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn2.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  }
  console.log(input.value);
});

btn3.addEventListener("click", function () {
  let arr = input.value.split("");
  console.log(arr);

  if (
    (arr[input.value.length - 1] == "0" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "1" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "2" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "3" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "4" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "5" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "6" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "7" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "8" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == "9" && isBracketOpen !== 0) ||
    (arr[input.value.length - 1] == ")" && isBracketOpen !== 0)
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn3.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn3.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    isBracketOpen--;
    console.log(isBracketOpen);
    arr.push(")");
    input.value = arr.join("");
  } else {
    btn3.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn3.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);

    input.value = input.value;
  }

  console.log(input.value);
  console.log(arr);
});

btn4.addEventListener("click", function () {
  let arr = input.value.split("");

  if (arr.length !== 1) {
    btn4.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn4.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    arr.pop(input.value.length - 1);
    input.value = arr.join("");
    console.log(true);
  } else {
    btn4.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn4.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "0";
    console.log(false);
  }
});

btn5.addEventListener("click", function () {
  let arr = input.value.split("");

  if (input.value == 0) {
    btn5.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn5.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = arr.join("");
    console.log(true);
    prev.innerText = "";
    isBracketOpen = false;
  } else {
    btn5.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn5.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    isBracketOpen = false;
    prev.innerText = "";
    input.value = "0";
    console.log(false);
  }

  console.log(arr);
});

btn6.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn6.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn6.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "0";
  } else if (arr[input.value.length - 1] == ")") {
    btn6.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn6.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn6.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn6.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "0";
  }

  console.log(input.value.length);
});

btn7.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn7.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn7.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "1";
  } else if (arr[input.value.length - 1] == ")") {
    btn7.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn7.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn7.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn7.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "1";
  }

  console.log(input.value.length);
});

btn8.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn8.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn8.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "2";
  } else if (arr[input.value.length - 1] == ")") {
    btn8.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn8.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn8.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn8.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "2";
  }

  console.log(input.value);
});

btn9.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn9.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn9.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "3";
  } else if (arr[input.value.length - 1] == ")") {
    btn9.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn9.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn9.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn9.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "3";
  }
  console.log(input.value);
});

btn10.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn10.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn10.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "4";
  } else if (arr[input.value.length - 1] == ")") {
    btn10.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn10.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn10.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn10.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "4";
  }
  console.log(input.value);
});

btn11.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn11.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn11.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "5";
  } else if (arr[input.value.length - 1] == ")") {
    btn11.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn11.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn11.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn11.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "5";
  }
  console.log(input.value);
});

btn12.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn12.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn12.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "6";
  } else if (arr[input.value.length - 1] == ")") {
    btn12.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn12.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn12.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn12.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "6";
  }
  console.log(input.value);
});

btn13.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn13.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn13.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "7";
  } else if (arr[input.value.length - 1] == ")") {
    btn13.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn13.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn13.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn13.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "7";
  }
  console.log(input.value);
});

btn14.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn14.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn14.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "8";
  } else if (arr[input.value.length - 1] == ")") {
    btn14.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn14.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn14.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn14.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "8";
  }
  console.log(input.value);
});

btn15.addEventListener("click", function () {
  let arr = input.value.split("");

  console.log(arr);
  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn15.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn15.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "9";
  } else if (arr[input.value.length - 1] == ")") {
    btn15.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn15.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  } else {
    btn15.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn15.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value += "9";
  }
  console.log(input.value);
});

btn16.addEventListener("click", function () {
  let arr = input.value.split("");

  if (
    arr[input.value.length - 1] == "0" ||
    arr[input.value.length - 1] == "1" ||
    arr[input.value.length - 1] == "2" ||
    arr[input.value.length - 1] == "3" ||
    arr[input.value.length - 1] == "4" ||
    arr[input.value.length - 1] == "5" ||
    arr[input.value.length - 1] == "6" ||
    arr[input.value.length - 1] == "7" ||
    arr[input.value.length - 1] == "8" ||
    arr[input.value.length - 1] == "9" ||
    arr[input.value.length - 1] == ")"
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn16.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn16.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    arr.push("+");
    input.value = arr.join("");
  } else {
    btn16.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn16.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  }
  console.log(input.value);
});

btn17.addEventListener("click", function () {
  let arr = input.value.split("");

  if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
    btn17.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn17.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = "-";
  } else if (
    arr[input.value.length - 1] == "0" ||
    arr[input.value.length - 1] == "1" ||
    arr[input.value.length - 1] == "2" ||
    arr[input.value.length - 1] == "3" ||
    arr[input.value.length - 1] == "4" ||
    arr[input.value.length - 1] == "5" ||
    arr[input.value.length - 1] == "6" ||
    arr[input.value.length - 1] == "7" ||
    arr[input.value.length - 1] == "8" ||
    arr[input.value.length - 1] == "9" ||
    arr[input.value.length - 1] == "(" ||
    arr[input.value.length - 1] == ")"
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn17.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn17.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    arr.push("-");
    input.value = arr.join("");
  } else {
    btn17.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn17.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  }
  console.log(input.value);
});

btn18.addEventListener("click", function () {
  let arr = input.value.split("");

  if (
    arr[input.value.length - 1] == "0" ||
    arr[input.value.length - 1] == "1" ||
    arr[input.value.length - 1] == "2" ||
    arr[input.value.length - 1] == "3" ||
    arr[input.value.length - 1] == "4" ||
    arr[input.value.length - 1] == "5" ||
    arr[input.value.length - 1] == "6" ||
    arr[input.value.length - 1] == "7" ||
    arr[input.value.length - 1] == "8" ||
    arr[input.value.length - 1] == "9" ||
    arr[input.value.length - 1] == ")"
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn18.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn18.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    arr.push("×");
    input.value = arr.join("");
  } else {
    btn18.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn18.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  }
  console.log(input.value);
});

btn19.addEventListener("click", function () {
  let arr = input.value.split("");
  if (
    arr[input.value.length - 1] == "0" ||
    arr[input.value.length - 1] == "1" ||
    arr[input.value.length - 1] == "2" ||
    arr[input.value.length - 1] == "3" ||
    arr[input.value.length - 1] == "4" ||
    arr[input.value.length - 1] == "5" ||
    arr[input.value.length - 1] == "6" ||
    arr[input.value.length - 1] == "7" ||
    arr[input.value.length - 1] == "8" ||
    arr[input.value.length - 1] == "9" ||
    arr[input.value.length - 1] == ")"
  ) {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn19.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn19.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    arr.push("÷");
    input.value = arr.join("");
  } else {
    btn19.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn19.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = input.value;
  }
  console.log(input.value);
});

btn20.addEventListener("click", function () {
  //   input.value += "=";
  arr = input.value.split("");
  console.log(input.value);
  if (input.value == "" || input.value == " ") {
    btn20.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn20.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = " ";
    prev.innerText = "Write something first!";
  } else if (
    arr[arr.length - 1] == "+" ||
    arr[arr.length - 1] == "-" ||
    arr[arr.length - 1] == "×" ||
    arr[arr.length - 1] == "÷"
  ) {
    btn20.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn20.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    arr.pop();
    input.value = arr.join("");
    prev.innerText = input.value + "=";
  } else {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn20.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn20.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    if (isBracketOpen == 0) {
      input.value = input.value.replaceAll("×", "*");
      input.value = input.value.replaceAll("÷", "/");
      let res = eval(input.value);
      input.value = input.value.replaceAll("*", "×");
      input.value = input.value.replaceAll("/", "÷");
      console.log(res);

      prev.innerText = input.value + "=";
      input.value = "0";
      input.value = res;
      console.log("Brackets are balanced!");
    } else {
      console.log("Brackets are not balanced. Please try again.");
      prev.innerText = "Brackets are not balanced. Please try again.";
    }
  }
});

btn21.addEventListener("click", function () {
  if (input.value == "" || input.value == " ") {
    btn21.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn21.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = " ";
    prev.innerText = "Write something first!";
  } else {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn21.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn21.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);

    if (isBracketOpen == 0) {
      input.value = input.value.replaceAll("×", "*");
      input.value = input.value.replaceAll("÷", "/");
      let res = Math.pow(eval(input.value), 2);
      input.value = input.value.replaceAll("*", "×");
      input.value = input.value.replaceAll("/", "÷");
      console.log(res);
      prev.innerText = "sqr(" + input.value + ")" + "=";
      input.value = "";
      input.value += res;

      prev.innerText = input.value + "=";
      input.value = "0";
      input.value = res;
      console.log("Brackets are balanced!");
    } else {
      console.log("Brackets are not balanced. Please try again.");
      prev.innerText = "Brackets are not balanced. Please try again.";
    }
  }
});

btn22.addEventListener("click", function () {
  if (input.value == "" || input.value == " ") {
    input.value = " ";
    prev.innerText = "Write something first!";
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn22.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true));
    setTimeout(() => {
      btn22.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
  } else {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn22.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn22.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);

    if (isBracketOpen == 0) {
      input.value = input.value.replaceAll("×", "*");
      input.value = input.value.replaceAll("÷", "/");
      let res = Math.sqrt(eval(input.value));
      input.value = input.value.replaceAll("*", "×");
      input.value = input.value.replaceAll("/", "÷");
      console.log(res);
      prev.innerText = "√ (" + input.value + ")" + "=";
      input.value = "";
      input.value += res;

      console.log(input.value);
    } else {
      console.log("Brackets are not balanced. Please try again.");
      prev.innerText = "Brackets are not balanced. Please try again.";
    }
  }
});

btn23.addEventListener("click", function () {
  if (input.value == "" || input.value == " ") {
    btn23.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn23.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    input.value = " ";
    prev.innerText = "Write something first!";
  } else {
    input.classList.add("color-animation");
    setTimeout(() => {
      input.classList.remove("color-animation");
    }, 100);
    btn23.classList.add("equal-animation");
    btnArr.forEach((x) => (x.disabled = true)); // Disable the button
    setTimeout(() => {
      btn23.classList.remove("equal-animation");
      btnArr.forEach((x) => (x.disabled = false));
    }, 100);

    if (isBracketOpen == 0) {
      input.value = input.value.replaceAll("×", "*");
      input.value = input.value.replaceAll("÷", "/");
      let res = 1 / eval(input.value);
      input.value = input.value.replaceAll("*", "×");
      input.value = input.value.replaceAll("/", "÷");
      console.log(res);
      prev.innerText = "1/(" + input.value + ")" + "=";
      input.value = "";
      input.value += res;
    } else {
      console.log("Brackets are not balanced. Please try again.");
      prev.innerText = "Brackets are not balanced. Please try again.";
    }
  }
});

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code == "Digit1") {
    let arr = input.value.split("");
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn7.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn7.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "1";
    } else if (arr[input.value.length - 1] == ")") {
      btn7.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn7.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn7.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn7.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "1";
    }
  } else if (e.key == "0") {
    let arr = input.value.split("");

    console.log(arr);
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn6.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn6.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "0";
    } else if (arr[input.value.length - 1] == ")") {
      btn6.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn6.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn6.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn6.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "0";
    }
  } else if (e.code == "Digit2") {
    let arr = input.value.split("");

    console.log(arr);
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn8.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn8.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "2";
    } else if (arr[input.value.length - 1] == ")") {
      btn8.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn8.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn8.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn8.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "2";
    }
  } else if (e.code == "Digit3") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn9.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn9.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "3";
    } else if (arr[input.value.length - 1] == ")") {
      btn9.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn9.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn9.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn9.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "3";
    }
  } else if (e.code == "Digit4") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn10.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn10.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "4";
    } else if (arr[input.value.length - 1] == ")") {
      btn10.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn10.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn10.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn10.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "4";
    }
  } else if (e.code == "Digit5") {
    let arr = input.value.split("");

    console.log(arr);
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn11.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn11.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "5";
    } else if (arr[input.value.length - 1] == ")") {
      btn11.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn11.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn11.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn11.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "5";
    }
  } else if (e.code == "Digit6") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn12.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn12.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "6";
    } else if (arr[input.value.length - 1] == ")") {
      btn12.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn12.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn12.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn12.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "6";
    }
    console.log(input.value);
  } else if (e.code == "Digit7") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn13.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn13.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "7";
    } else if (arr[input.value.length - 1] == ")") {
      btn13.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn13.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn13.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn13.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "7";
    }
  } else if (e.key == "8") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn14.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn14.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "8";
    } else if (arr[input.value.length - 1] == ")") {
      btn14.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn14.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn14.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn14.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "8";
    }
  } else if (e.key == "9") {
    let arr = input.value.split("");

    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn15.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn15.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "9";
    } else if (arr[input.value.length - 1] == ")") {
      btn15.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn15.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    } else {
      btn15.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn15.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value += "9";
    }
  } else if (e.key == "+") {
    let arr = input.value.split("");
    if (
      arr[input.value.length - 1] == "0" ||
      arr[input.value.length - 1] == "1" ||
      arr[input.value.length - 1] == "2" ||
      arr[input.value.length - 1] == "3" ||
      arr[input.value.length - 1] == "4" ||
      arr[input.value.length - 1] == "5" ||
      arr[input.value.length - 1] == "6" ||
      arr[input.value.length - 1] == "7" ||
      arr[input.value.length - 1] == "8" ||
      arr[input.value.length - 1] == "9" ||
      arr[input.value.length - 1] == ")"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn16.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn16.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      arr.push("+");
      input.value = arr.join("");
    } else {
      btn16.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn16.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.code == "Minus") {
    let arr = input.value.split("");
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn17.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn17.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "-";
    } else if (
      arr[input.value.length - 1] == "0" ||
      arr[input.value.length - 1] == "1" ||
      arr[input.value.length - 1] == "2" ||
      arr[input.value.length - 1] == "3" ||
      arr[input.value.length - 1] == "4" ||
      arr[input.value.length - 1] == "5" ||
      arr[input.value.length - 1] == "6" ||
      arr[input.value.length - 1] == "7" ||
      arr[input.value.length - 1] == "8" ||
      arr[input.value.length - 1] == "9" ||
      arr[input.value.length - 1] == "(" ||
      arr[input.value.length - 1] == ")"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn17.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn17.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      arr.push("-");
      input.value = arr.join("");
    } else {
      btn17.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn17.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.key === "*") {
    let arr = input.value.split("");
    if (
      arr[input.value.length - 1] == "0" ||
      arr[input.value.length - 1] == "1" ||
      arr[input.value.length - 1] == "2" ||
      arr[input.value.length - 1] == "3" ||
      arr[input.value.length - 1] == "4" ||
      arr[input.value.length - 1] == "5" ||
      arr[input.value.length - 1] == "6" ||
      arr[input.value.length - 1] == "7" ||
      arr[input.value.length - 1] == "8" ||
      arr[input.value.length - 1] == "9" ||
      arr[input.value.length - 1] == ")"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn18.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn18.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      arr.push("×");
      input.value = arr.join("");
    } else {
      btn18.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn18.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.code == "Slash") {
    let arr = input.value.split("");
    if (
      arr[input.value.length - 1] == "0" ||
      arr[input.value.length - 1] == "1" ||
      arr[input.value.length - 1] == "2" ||
      arr[input.value.length - 1] == "3" ||
      arr[input.value.length - 1] == "4" ||
      arr[input.value.length - 1] == "5" ||
      arr[input.value.length - 1] == "6" ||
      arr[input.value.length - 1] == "7" ||
      arr[input.value.length - 1] == "8" ||
      arr[input.value.length - 1] == "9" ||
      arr[input.value.length - 1] == ")"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn19.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn19.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      arr.push("÷");
      input.value = arr.join("");
    } else {
      btn19.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn19.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.code == "Enter") {
    arr = input.value.split("");
    console.log(input.value);
    if (input.value == "" || input.value == " ") {
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = " ";
      prev.innerText = "Write something first!";
    } else if (
      arr[arr.length - 1] == "+" ||
      arr[arr.length - 1] == "-" ||
      arr[arr.length - 1] == "×" ||
      arr[arr.length - 1] == "÷"
    ) {
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      arr.pop();
      input.value = arr.join("");
      prev.innerText = input.value + "=";
    } else {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      if (isBracketOpen == 0) {
        input.value = input.value.replaceAll("×", "*");
        input.value = input.value.replaceAll("÷", "/");
        let res = eval(input.value);
        input.value = input.value.replaceAll("*", "×");
        input.value = input.value.replaceAll("/", "÷");
        console.log(res);

        prev.innerText = input.value + "=";
        input.value = "0";
        input.value = res;
        console.log("Brackets are balanced!");
      } else {
        console.log("Brackets are not balanced. Please try again.");
        prev.innerText = "Brackets are not balanced. Please try again.";
      }
    }
  } else if (e.code == "Delete") {
    let arr = input.value.split("");
    if (input.value == 0) {
      btn5.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn5.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = arr.join("");
      console.log(true);
      prev.innerText = "";
      isBracketOpen = false;
    } else {
      btn5.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn5.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      isBracketOpen = false;
      prev.innerText = "";
      input.value = "0";
      console.log(false);
    }
  } else if (e.code == "Backspace") {
    let arr = input.value.split("");
    if (arr.length !== 1) {
      btn4.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn4.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      arr.pop(input.value.length - 1);
      input.value = arr.join("");
      console.log(true);
    } else {
      btn4.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn4.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = "0";
    }
  } else if (e.code == "Period") {
    let arr = input.value.split("");
    if (
      arr[input.value.length - 1] == "0" ||
      arr[input.value.length - 1] == "1" ||
      arr[input.value.length - 1] == "2" ||
      arr[input.value.length - 1] == "3" ||
      arr[input.value.length - 1] == "4" ||
      arr[input.value.length - 1] == "5" ||
      arr[input.value.length - 1] == "6" ||
      arr[input.value.length - 1] == "7" ||
      arr[input.value.length - 1] == "8" ||
      arr[input.value.length - 1] == "9"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn1.classList.add("equal-animation");
      btnArr.disabled = true; // Disable the button
      setTimeout(() => {
        btn1.classList.remove("equal-animation");
        btnArr.disabled = false;
      }, 100);
      arr.push(".");
      input.value = arr.join("");
    } else {
      btn1.classList.add("equal-animation");
      btnArr.disabled = true; // Disable the button
      setTimeout(() => {
        btn1.classList.remove("equal-animation");
        btnArr.disabled = false;
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);

      input.value = input.value;
    }
    console.log(input.value);
    console.log(arr);
  } else if (e.key === "(") {
    let arr = input.value.split("");
    if ((arr.length == 1 && arr[0] == 0) || input.value == Infinity) {
      btn2.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn2.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      isBracketOpen++;
      console.log(isBracketOpen);
      input.value = "(";
    } else if (
      arr[input.value.length - 1] == "+" ||
      arr[input.value.length - 1] == "-" ||
      arr[input.value.length - 1] == "(" ||
      arr[input.value.length - 1] == "×" ||
      arr[input.value.length - 1] == "÷"
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn2.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn2.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      isBracketOpen++;
      console.log(isBracketOpen);
      arr.push("(");
      input.value = arr.join("");
    } else {
      btn2.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn2.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.key === ")") {
    let arr = input.value.split("");
    if (
      (arr[input.value.length - 1] == "0" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "1" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "2" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "3" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "4" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "5" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "6" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "7" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "8" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == "9" && isBracketOpen !== 0) ||
      (arr[input.value.length - 1] == ")" && isBracketOpen !== 0)
    ) {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn3.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn3.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      isBracketOpen--;
      console.log(isBracketOpen);
      arr.push(")");
      input.value = arr.join("");
    } else {
      btn3.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn3.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = input.value;
    }
  } else if (e.key === "=") {
    arr = input.value.split("");
    console.log(input.value);
    if (input.value == "" || input.value == " ") {
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      input.value = " ";
      prev.innerText = "Write something first!";
    } else if (
      arr[arr.length - 1] == "+" ||
      arr[arr.length - 1] == "-" ||
      arr[arr.length - 1] == "×" ||
      arr[arr.length - 1] == "÷"
    ) {
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      arr.pop();
      input.value = arr.join("");
      prev.innerText = input.value + "=";
    } else {
      input.classList.add("color-animation");
      setTimeout(() => {
        input.classList.remove("color-animation");
      }, 100);
      btn20.classList.add("equal-animation");
      btnArr.forEach((x) => (x.disabled = true)); // Disable the button
      setTimeout(() => {
        btn20.classList.remove("equal-animation");
        btnArr.forEach((x) => (x.disabled = false));
      }, 100);
      if (isBracketOpen == 0) {
        input.value = input.value.replaceAll("×", "*");
        input.value = input.value.replaceAll("÷", "/");
        let res = eval(input.value);
        input.value = input.value.replaceAll("*", "×");
        input.value = input.value.replaceAll("/", "÷");
        console.log(res);
        prev.innerText = input.value + "=";
        input.value = "0";
        input.value = res;
        console.log("Brackets are balanced!");
      } else {
        console.log("Brackets are not balanced. Please try again.");
        prev.innerText = "Brackets are not balanced. Please try again.";
      }
    }
  } else {
    input.value = input.value;
  }
});
