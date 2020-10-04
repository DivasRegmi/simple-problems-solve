
let numbers = [1, 2, 3, 6, 9, 8, 7, 4];
let index = [1, 2, 3, 6, 9, 8, 7, 4];
const btns = document.createElement("div");
btns.id = "btns";
document.body.appendChild(btns);

for (let i = 1; i < 10; i++) {
  const button = document.createElement("button");
  button.id = `btn${i}`;
  button.className = "btn";
  button.innerHTML = i;
  btns.appendChild(button);
}

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
  const last = numbers.pop();
  numbers.unshift(last);

  for (let i = 0; i < numbers.length; i++) {
    const btn = document.getElementById(`btn${index[i]}`);
    btn.innerHTML = numbers[i];
  }
});
