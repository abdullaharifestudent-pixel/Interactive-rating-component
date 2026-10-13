const pro1 = document.querySelector(".pro1")
const pro2 = document.querySelector(".pro2")
const pro3 = document.querySelector(".pro3")
const pro4 = document.querySelector(".pro4")
const pro5 = document.querySelector(".pro5")
const prog = document.querySelector("progress-bar")


// buttons
const nextbtnn = document.getElementById("nextt")
const prevbtnn = document.getElementById("prevv")
const d = document.getElementById("d")
const icond = document.getElementById("i")
const icon = document.getElementById("ic")


const prarr = [pro1,pro2,pro3,pro4,pro5]
  let arrIndex = 0;
  let classIndex = 0;

nextbtnn.addEventListener("click" , function () {

  if (arrIndex < prarr.length) {
    prarr[arrIndex].classList.add("active");
    arrIndex++; 
  }

  
  if (classIndex < prarr.length) {
    d.style.marginLeft = `${arrIndex * -105}%`;
    classIndex++
  }

  if (arrIndex > 4) {
    icon.classList.add("ih")
    pro1.style.display = "none"
    pro2.style.display = "none"
    pro3.style.display = "none"
    pro4.style.display = "none"
    pro5.style.display = "none"
    nextbtnn.style.display = "none"
    icond.classList.add("ih")
    
  }

})


