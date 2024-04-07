const rollnumber = document.querySelector("#rollNumber");
const button = document.querySelector("#submit-btn");

const certificate_roll = document.querySelector("#roll-number");

setTimeout(() => {
    certificate_roll.addEventListener('click' , ()=>{ 
        certificate_roll.innerText = "4321";
    });
}, 3000);
