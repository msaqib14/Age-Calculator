let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
const btn = document.querySelector(".button")

btn.addEventListener("click",()=>{

  const birthDate = new Date(userInput.value);
  const currentdate = new Date();
  const newDate = new Date(currentdate- birthDate);

  const y = newDate.getFullYear()-1970;
  const m = newDate.getMonth();
  const d = newDate.getDate()-1;

    result.innerHTML =`You are <span>${y}</span> years, <span> ${m}</span> months and <span>${d}</span> days old.`;
})

